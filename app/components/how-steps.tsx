"use client";

import { useEffect, useRef, useState } from "react";

// Steps light up as each one reaches the middle of the screen, so the visitor's own
// scrolling drives it. Every step is lit by default.
export function HowSteps({ steps }: { steps: readonly { title: string; body: string }[] }) {
  const items = useRef<(HTMLLIElement | null)[]>([]);
  const [lit, setLit] = useState(steps.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLit(1);
    const seen = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = items.current.indexOf(entry.target as HTMLLIElement);
            setLit((n) => Math.max(n, index + 1));
          }
        }
      },
      { rootMargin: "-35% 0px -35% 0px" },
    );
    items.current.forEach((el) => el && seen.observe(el));
    return () => seen.disconnect();
  }, []);

  return (
    <ol>
      {steps.map((step, i) => {
        const on = i < lit;
        return (
          <li
            key={step.title}
            ref={(el) => {
              items.current[i] = el;
            }}
            className="grid grid-cols-[3.25rem_1fr] gap-4"
          >
            <div className="flex flex-col items-center">
              <span className={`flex size-[3.25rem] shrink-0 items-center justify-center rounded-full font-display text-[1.4rem] font-bold transition-colors duration-500 ${on ? "bg-signal text-on-signal" : "bg-steel text-ink-soft"}`}>{i + 1}</span>
              {i < steps.length - 1 && <span className={`w-1 flex-1 transition-colors duration-500 ${i + 1 < lit ? "bg-signal" : "bg-steel"}`} />}
            </div>
            <div className={`pb-8 pt-1 transition-opacity duration-500 ${on ? "opacity-100" : "opacity-60"}`}>
              <h3 className="font-display text-[1.5rem] font-bold leading-tight sm:text-[1.75rem]">{step.title}</h3>
              <p className="mt-1 max-w-[38rem]">{step.body}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
