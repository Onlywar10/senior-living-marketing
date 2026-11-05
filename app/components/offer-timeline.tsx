"use client";

import { useEffect, useRef, useState } from "react";

const FINAL = 5;

// The offer's 12 months, told in five beats when it scrolls into view: the three free months
// fill in, the month-3 check appears, then the two outcomes. The finished picture is the
// default, so it reads correctly without JavaScript or with reduced motion.
export function OfferTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(FINAL);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStep(0);
    let timer = 0;
    const seen = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        seen.disconnect();
        timer = window.setInterval(() => {
          setStep((s) => {
            if (s + 1 >= FINAL) window.clearInterval(timer);
            return Math.min(FINAL, s + 1);
          });
        }, 520);
      },
      { threshold: 0.45 },
    );
    if (ref.current) seen.observe(ref.current);
    return () => {
      seen.disconnect();
      window.clearInterval(timer);
    };
  }, []);

  const show = (at: number) => (step >= at ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0");

  return (
    <div ref={ref} className="rounded-lg border border-ink-rule p-5 sm:p-7">
      <p className="font-display text-[1.1rem] font-bold">Your first year with Kinlight</p>
      <div className="mt-5 grid grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-x-3 sm:grid-cols-[minmax(0,3fr)_minmax(0,9fr)] sm:gap-x-3">
        <div>
          <p className="whitespace-nowrap text-[0.85rem] font-bold text-signal-bright sm:text-[0.95rem]">Months 1–3</p>
          <div className="mt-2 grid grid-cols-3 gap-1" aria-hidden="true">
            {[1, 2, 3].map((month) => (
              <span key={month} className={`h-10 rounded-sm transition-colors duration-500 sm:h-12 ${step >= month ? "bg-signal" : "bg-ink-rule"}`} />
            ))}
          </div>
          <p className="mt-3 font-display text-[1.6rem] font-bold leading-none">Free</p>
          <p className="mt-1 text-[0.95rem] leading-snug text-on-ink-soft">Guaranteed. No setup fee.</p>
        </div>
        <div>
          <p className="whitespace-nowrap text-[0.85rem] font-bold text-on-ink-soft sm:text-[0.95rem]">Months 4–12</p>
          <div className="mt-2 grid grid-cols-9 gap-1" aria-hidden="true">
            {Array.from({ length: 9 }, (_, i) => (
              <span key={i} className={`h-10 rounded-sm border-2 border-dashed transition-colors duration-500 sm:h-12 ${step >= FINAL ? "border-on-ink-soft" : "border-ink-rule"}`} />
            ))}
          </div>
          <p className="mt-3 font-display text-[1.6rem] font-bold leading-none">Only if we deliver</p>
          <p className="mt-1 text-[0.95rem] leading-snug text-on-ink-soft">At our normal price.</p>
        </div>
      </div>

      <div className={`mt-6 border-t border-ink-rule pt-5 transition-all duration-500 ease-out ${show(4)}`}>
        <p className="font-display text-[1.25rem] font-bold leading-tight">After month 3: did we keep every promise?</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          <li className={`rounded-md bg-ink-rule/50 p-4 transition-all duration-500 ease-out ${show(FINAL)}`}>
            <span className="tag tag-live">Yes</span>
            <p className="mt-2 leading-snug">You stay on for 9 more months at our normal price.</p>
          </li>
          <li className={`rounded-md bg-ink-rule/50 p-4 transition-all delay-150 duration-500 ease-out ${show(FINAL)}`}>
            <span className="tag">No</span>
            <p className="mt-2 leading-snug">You walk away. You owe nothing.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
