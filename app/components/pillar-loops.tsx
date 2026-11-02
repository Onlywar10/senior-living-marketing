"use client";

import { TopLink } from "./top-link";
import { useEffect, useRef, useState } from "react";
import { sampleCommunity, solutions } from "../content";

const beatMs = 1300;
const finished = -1;

function Show({ on, children, className = "" }: { on: boolean; children: React.ReactNode; className?: string }) {
  return <div className={`transition-all duration-500 ${on ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"} ${className}`}>{children}</div>;
}

// step === finished means "show the end of the story".
function LiveWebsite({ step }: { step: number }) {
  const at = (n: number) => step === finished || step >= n;
  return (
    <div className="h-full p-3">
      <div className="flex items-center justify-between gap-2">
        <p className="font-display font-bold">Today at {sampleCommunity}</p>
        <Show on={at(3)}>
          <span className="tag tag-live">Updated</span>
        </Show>
      </div>
      <p className="mt-2 flex gap-3 border-t border-rule py-1.5">
        <span className="data font-bold">10:00</span>Chair yoga
      </p>
      <Show on={at(1)} className="flex gap-3 border-t border-rule py-1.5">
        <span className="data font-bold">2:00</span>Ice cream social
      </Show>
      <p className="border-t border-rule py-1.5">
        <strong>Dinner:</strong> {at(2) ? "Roast chicken" : "Coming soon"}
      </p>
    </div>
  );
}

const places = ["Website", "Families", "Print"];
const lines = ["M0 50H22V14H50", "M0 50H50", "M0 50H22V86H50"];

function PostOnce({ step }: { step: number }) {
  return (
    <div className="grid h-full grid-cols-[4fr_3fr_4fr] items-center p-3">
      <div className="rounded bg-ink p-2 text-center font-display font-bold leading-tight text-on-ink">One post</div>
      <svg aria-hidden="true" viewBox="0 0 50 100" preserveAspectRatio="none" className="h-24 w-full" fill="none">
        {lines.map((d, i) => {
          const lit = step === finished || step > i;
          return (
            <path key={d} d={d} stroke={lit ? "var(--signal)" : "var(--rule)"} strokeWidth="4" vectorEffect="non-scaling-stroke" className="transition-[stroke] duration-500" />
          );
        })}
      </svg>
      <ul className="grid h-24 content-between">
        {places.map((place, i) => {
          const lit = step === finished || step > i;
          return (
            <li key={place} className={`rounded px-2 py-0.5 text-center text-[0.9rem] font-bold transition-colors duration-500 ${lit ? "bg-signal text-on-signal" : "bg-steel text-ink-soft"}`}>
              {place}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function FamilyText({ step }: { step: number }) {
  const spanish = step === finished || step >= 3;
  return (
    <div className="flex h-full flex-col justify-center p-3">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[0.9rem] font-bold">{sampleCommunity}</p>
        <span className="tag text-ink-soft">{spanish ? "Español" : "English"}</span>
      </div>
      <Show on={step === finished || step >= 1} className="mt-2">
        <p lang={spanish ? "es" : "en"} className="rounded-2xl rounded-bl-sm bg-steel p-3 leading-snug">
          {spanish ? "Esta semana: club de jardinería el martes y fiesta de helados el jueves." : "This week: garden club Tuesday and an ice cream social Thursday."}
        </p>
      </Show>
    </div>
  );
}

const conversion = ["New inquiry", "Sent to your team", "Family books a tour", "Thursday, 1:00 PM: on the calendar"];

function ConversionFlow({ step }: { step: number }) {
  return (
    <ol className="grid h-full content-center gap-1.5 p-3">
      {conversion.map((item, i) => {
        const lit = step === finished || step >= i;
        return (
          <li key={item} className={`flex items-center gap-2 leading-tight transition-opacity duration-500 ${lit ? "opacity-100" : "opacity-30"}`}>
            <span className={`size-3 shrink-0 rounded-full ${lit ? "bg-signal" : "bg-rule"}`} />
            <span className={i === conversion.length - 1 ? "font-bold" : ""}>{item}</span>
          </li>
        );
      })}
    </ol>
  );
}

const loops = {
  website: { Loop: LiveWebsite, length: 6, label: "Today's activities and menu update on a community website." },
  post: { Loop: PostOnce, length: 5, label: "One post reaches the website, families and print." },
  family: { Loop: FamilyText, length: 6, label: "A weekly highlights text arrives on a phone in English, then in Spanish." },
  inquiries: { Loop: ConversionFlow, length: 6, label: "A new inquiry is sent to the team, the family books a tour, and it appears on the calendar." },
};

export function PillarCards() {
  const root = useRef<HTMLDivElement>(null);
  const [tick, setTick] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPlaying(false);
    }
    const seen = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.15 });
    if (root.current) seen.observe(root.current);
    return () => seen.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || !inView) return;
    const timer = window.setInterval(() => setTick((t) => t + 1), beatMs);
    return () => window.clearInterval(timer);
  }, [playing, inView]);

  return (
    <div ref={root}>
      <ul className="mt-8 grid gap-5 md:grid-cols-2">
        {solutions.map((item) => {
          const { Loop, length, label } = loops[item.id as keyof typeof loops];
          const step = playing ? tick % length : finished;
          return (
            <li key={item.id} className="reveal">
              <TopLink href={item.href} className="group lift flex h-full flex-col overflow-hidden rounded-lg bg-paper no-underline">
                <div role="img" aria-label={label} className="h-[11.5rem] overflow-hidden border-b border-rule">
                  <div aria-hidden="true" className="h-full">
                    <Loop step={step} />
                  </div>
                </div>
                <div className="p-5">
                  <span className="block font-display text-[1.45rem] font-bold leading-tight group-hover:text-signal-ink">{item.title}</span>
                  <span className="mt-1 block">{item.promise}</span>
                  <span className="mt-3 inline-flex items-center gap-2 font-display font-bold text-signal-ink">
                    See how
                    <svg aria-hidden="true" viewBox="0 0 48 48" className="size-5" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="square">
                      <path d="M6 24h36M26 8l16 16-16 16" />
                    </svg>
                  </span>
                </div>
              </TopLink>
            </li>
          );
        })}
      </ul>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[0.9rem] text-ink-soft">Sample community, for illustration.</p>
        <button type="button" onClick={() => setPlaying(!playing)} className="btn btn-secondary !min-h-11 !px-4 !py-1.5 !text-[0.95rem]">
          {playing ? "Pause animations" : "Play animations"}
        </button>
      </div>
    </div>
  );
}
