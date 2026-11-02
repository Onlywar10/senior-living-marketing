"use client";

import { useEffect, useRef, useState } from "react";
import { problems } from "../content";

// Each row slides in once as it scrolls into view. Rows start visible, so the list
// reads correctly without JavaScript or with reduced motion.
export function ProblemList() {
  const rows = useRef<(HTMLLIElement | null)[]>([]);
  const [shown, setShown] = useState<boolean[]>(() => problems.map(() => true));

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShown(problems.map(() => false));
    const seen = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = rows.current.indexOf(entry.target as HTMLLIElement);
          setShown((prev) => prev.map((value, i) => value || i === index));
          seen.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -18% 0px" },
    );
    rows.current.forEach((row) => row && seen.observe(row));
    return () => seen.disconnect();
  }, []);

  return (
    <ul className="border-b border-ink">
      {problems.map((problem, i) => (
        <li
          key={problem.stamp}
          ref={(el) => {
            rows.current[i] = el;
          }}
          className="flex items-center justify-between gap-4 border-t border-ink py-2.5 sm:py-3"
        >
          <p
            className={`font-display text-[1.1rem] font-semibold leading-snug tracking-tight transition-all duration-700 ease-out sm:text-[1.25rem] ${shown[i] ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"}`}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            {problem.text}
          </p>
          <span
            className={`tag shrink-0 text-signal-ink transition-all duration-500 ease-out max-sm:hidden ${shown[i] ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
            style={{ transitionDelay: `${i * 70 + 350}ms` }}
          >
            {problem.stamp}
          </span>
        </li>
      ))}
    </ul>
  );
}
