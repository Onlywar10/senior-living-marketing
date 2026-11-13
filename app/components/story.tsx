"use client";

import { useEffect, useRef, useState } from "react";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Plays a numbered story when it scrolls into view, holds the end, then replays. The last
// step is the default, so it reads correctly without JavaScript or with reduced motion.
//
// Three modes:
// - playing: the story runs.
// - paused: frozen exactly where it was (timer and CSS animations). Resume carries on from that spot.
// - still: one step shown finished, with no animation. Clicking a card does this; Resume plays from that card.
type Mode = "playing" | "paused" | "still";

export function useStory<T extends Element>(steps: number, { stepMs = 2800, holdBeats = 2 } = {}) {
  const ref = useRef<T>(null);
  const [tick, setTick] = useState(0);
  const [mode, setMode] = useState<Mode>("playing");
  const [inView, setInView] = useState(false);
  // In "still": the step shown, and where Resume starts. Null shows the finished story.
  const [still, setStill] = useState<{ show: number; from: number } | null>(null);
  const [restarts, setRestarts] = useState(0);
  // Time already spent on the current step, so a pause doesn't lose its place.
  const spent = useRef(0);

  useEffect(() => {
    if (prefersReducedMotion()) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMode("still");
    }
    const seen = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.4 });
    if (ref.current) seen.observe(ref.current);
    return () => seen.disconnect();
  }, []);

  const running = mode === "playing" && inView;

  useEffect(() => {
    if (!running) return;
    const start = performance.now();
    let fired = false;
    const timer = window.setTimeout(() => {
      fired = true;
      spent.current = 0;
      setTick((t) => (t + 1) % (steps + holdBeats));
    }, Math.max(0, stepMs - spent.current));
    return () => {
      window.clearTimeout(timer);
      if (!fired) spent.current += performance.now() - start;
    };
  }, [running, tick, steps, stepMs, holdBeats, restarts]);

  function restartAt(step: number) {
    spent.current = 0;
    setStill(null);
    setTick(step);
    setRestarts((count) => count + 1);
    setMode("playing");
  }

  function resume() {
    if (mode === "paused") setMode("playing");
    else restartAt(still?.from ?? 0);
  }

  function toggle() {
    if (mode === "playing") setMode("paused");
    else resume();
  }

  // Shows one card, finished and paused. `from` is where Resume picks up (the card's first beat).
  function jump(show: number, from = show) {
    spent.current = 0;
    setStill({ show, from });
    setMode("still");
  }

  const live = mode !== "still";
  const step = live ? Math.min(tick, steps - 1) : (still?.show ?? steps - 1);
  // `live`: the step's animation is on screen (running or frozen). `held`: it's frozen.
  return { ref, step, playing: mode === "playing", live, held: live && !running, running, restarts, toggle, jump };
}

/** Class that freezes every CSS animation inside, so a paused story keeps its exact frame. */
export const HOLD_CLASS = "anim-hold";

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
