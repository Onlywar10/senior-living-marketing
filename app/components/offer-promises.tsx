"use client";

import { useEffect, useRef, useState } from "react";
import { pilotPromises } from "../content";

// Each promise slides in and gets its check as it scrolls into view, like the problem list
// on the home page. Rows start visible, so the list reads correctly without JavaScript or
// with reduced motion.
export function OfferPromises() {
  const rows = useRef<(HTMLLIElement | null)[]>([]);
  const [shown, setShown] = useState<boolean[]>(() => pilotPromises.map(() => true));

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShown(pilotPromises.map(() => false));
    const seen = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = rows.current.indexOf(entry.target as HTMLLIElement);
          setShown((prev) => prev.map((value, i) => value || i === index));
          seen.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    rows.current.forEach((row) => row && seen.observe(row));
    return () => seen.disconnect();
  }, []);

  return (
    <ol className="border-b border-ink">
      {pilotPromises.map((promise, i) => (
        <li
          key={promise.title}
          ref={(el) => {
            rows.current[i] = el;
          }}
          className="grid grid-cols-[2.75rem_1fr] gap-x-4 border-t border-ink py-5 sm:grid-cols-[3.25rem_1fr_auto] sm:items-center sm:gap-x-6"
        >
          <span
            aria-hidden="true"
            className={`flex size-11 items-center justify-center rounded-full transition-all duration-500 ease-out sm:size-[3.25rem] ${shown[i] ? "scale-100 bg-signal text-on-signal" : "scale-75 bg-steel text-ink-soft"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </span>
          <div className={`transition-all duration-700 ease-out ${shown[i] ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}`}>
            <h3 className="font-display text-[1.35rem] font-bold leading-tight sm:text-[1.6rem]">{promise.title}</h3>
            <p className="mt-1 max-w-[44rem] text-[1.05rem] leading-snug sm:text-[1.15rem]">{promise.body}</p>
          </div>
          <span className={`tag text-signal-ink transition-all duration-500 ease-out max-sm:hidden ${shown[i] ? "scale-100 opacity-100" : "scale-75 opacity-0"}`} style={{ transitionDelay: "450ms" }}>
            {promise.stamp}
          </span>
        </li>
      ))}
    </ol>
  );
}
