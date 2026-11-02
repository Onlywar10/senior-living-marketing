"use client";

import { useEffect, useRef, useState } from "react";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Plays a numbered story when it scrolls into view, holds the end, then replays. The last
// step is the default, so it reads correctly without JavaScript or with reduced motion.
export function useStory<T extends Element>(steps: number, { stepMs = 2800, holdBeats = 2 } = {}) {
  const ref = useRef<T>(null);
  const [tick, setTick] = useState(0);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [inView, setInView] = useState(false);
  const [pinned, setPinned] = useState<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPlaying(false);
    }
    setReady(true);
    const seen = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.4 });
    if (ref.current) seen.observe(ref.current);
    return () => seen.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || !inView) return;
    const timer = window.setInterval(() => setTick((t) => (t + 1) % (steps + holdBeats)), stepMs);
    return () => window.clearInterval(timer);
  }, [playing, inView, steps, stepMs, holdBeats]);

  function toggle() {
    setTick(0);
    setPinned(null);
    setPlaying((value) => !value);
  }

  // Holds on one step, so a reader can stay on it as long as they like.
  function jump(step: number) {
    setPlaying(false);
    setPinned(step);
  }

  return { ref, step: pinned ?? (ready && playing ? Math.min(tick, steps - 1) : steps - 1), playing, running: playing && inView, toggle, jump };
}

// Counts up once on first view. The real value is what renders by default and what
// screen readers get.
export function CountUp({ value, suffix = "", ms = 1100 }: { value: number; suffix?: string; ms?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShown(0);
    let frame = 0;
    const seen = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        seen.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const f = Math.min(1, (now - start) / ms);
          setShown(Math.round(value * (1 - (1 - f) ** 3)));
          if (f < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    if (ref.current) seen.observe(ref.current);
    return () => {
      seen.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, ms]);

  return (
    <span ref={ref} className="[font-variant-numeric:tabular-nums]">
      <span className="sr-only">
        {value}
        {suffix}
      </span>
      <span aria-hidden="true">
        {shown}
        {suffix}
      </span>
    </span>
  );
}
