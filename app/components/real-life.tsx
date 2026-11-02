"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { sampleCommunity } from "../content";

const today = [
  ["10:00", "Chair yoga, Sun Room"],
  ["11:30", "Garden club, courtyard"],
  ["2:00", "Ice cream social, garden"],
  ["6:00", "Movie night, the lounge"],
];

const menu = [
  ["Today", "Roast chicken, green beans, lemon cake"],
  ["Friday", "Baked salmon, rice pilaf, berry crisp"],
  ["Saturday", "Pot roast, mashed potatoes, apple pie"],
];

const photos = [
  { src: "/photos/card-game.jpg", caption: "Today: card game", position: "object-center" },
  { src: "/photos/garden-club.jpg", caption: "Yesterday: garden club", position: "object-center" },
  { src: "/photos/family-hug.jpg", caption: "Sunday: family visit", position: "object-center" },
  { src: "/photos/caregiver-resident.jpg", caption: "Monday: afternoon chat", position: "object-center" },
];

const notes = [
  ["Thank you for the garden club photos. Dad looks so happy!", "Maria, daughter"],
  ["Two of us are coming Thursday. Save us some ice cream.", "James, son"],
];

const brochureClaims = ["Compassionate care", "Beautiful grounds", "Engaging activities", "Chef-prepared dining"];

function Before() {
  return (
    <div className="flex h-full flex-col bg-mist text-ink-soft">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 border-b border-rule px-4 py-2.5 sm:px-6">
        <span className="font-display text-[1.1rem] font-bold">{sampleCommunity}</span>
        <span className="text-[0.95rem]">About</span>
        <span className="text-[0.95rem]">Care</span>
        <span className="text-[0.95rem]">Contact</span>
      </div>
      <div className="grid min-h-0 flex-1 grid-rows-[auto_minmax(0,1fr)] sm:grid-cols-2 sm:grid-rows-1">
        <div className="flex min-h-0 flex-col gap-3 p-4 sm:p-6">
          <p className="font-display text-[1.9rem] font-bold leading-tight text-ink sm:text-[2.5rem]">A tradition of caring.</p>
          <p className="text-ink">Gracious living in a warm, welcoming setting. Call us to learn more.</p>
          <ul className="grid gap-1.5">
            {brochureClaims.map((claim) => (
              <li key={claim} className="border-t border-rule pt-1.5">
                {claim}
              </li>
            ))}
          </ul>
          <p className="italic">&ldquo;A wonderful place.&rdquo; A family member</p>
          <div className="mt-auto grid gap-1 border-t border-rule pt-2.5 text-[0.95rem]">
            <span>Activity calendar: September (PDF)</span>
            <span>Dining menu: last updated 2021</span>
            <span className="mt-1 w-fit rounded border border-ink-soft px-3 py-1.5 font-bold">Call for pricing</span>
          </div>
        </div>
        <div className="relative min-h-[11rem]">
          <Image src="/photos/plants-couple.jpg" alt="" fill sizes="(min-width: 640px) 45vw, 100vw" className="object-cover opacity-50 grayscale" />
        </div>
      </div>
    </div>
  );
}

function After() {
  return (
    <div className="flex h-full flex-col bg-paper text-ink">
      <div className="flex items-center justify-between gap-3 border-b border-ink px-4 py-2 sm:px-6">
        <span className="font-display text-[1.1rem] font-bold">{sampleCommunity}</span>
        <span className="rounded bg-signal px-3 py-1.5 text-[0.9rem] font-bold text-on-signal">Book a tour</span>
      </div>
      <div className="grid min-h-0 flex-1 content-start gap-4 overflow-hidden p-4 sm:grid-cols-2 sm:gap-x-8 sm:p-6">
        <div className="flex min-h-0 flex-col gap-3">
          <div>
            <p className="font-display text-[1.25rem] font-bold">Recent photos</p>
            <ul className="mt-1.5 grid grid-cols-2 gap-2">
              {photos.map((photo) => (
                <li key={photo.src}>
                  <div className="relative aspect-[3/2] overflow-hidden rounded">
                    <Image src={photo.src} alt="" fill sizes="(min-width: 640px) 20vw, 45vw" className={`object-cover ${photo.position}`} />
                  </div>
                  <p className="mt-0.5 text-[0.9rem] leading-tight">{photo.caption}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded bg-steel p-3">
            <p className="flex flex-wrap items-center gap-2 font-bold">
              One-bedroom floor plan <span className="tag tag-live">2 open</span>
            </p>
            <p className="mt-0.5 text-[0.95rem] leading-snug">Meals, housekeeping and activities included.</p>
          </div>
        </div>
        <div className="flex min-h-0 flex-col gap-3">
          <div>
            <p className="flex items-center justify-between gap-2 font-display text-[1.25rem] font-bold leading-tight">
              Today at {sampleCommunity} <span className="tag tag-live">Live</span>
            </p>
            <ul className="mt-1 divide-y divide-rule">
              {today.map(([time, what]) => (
                <li key={what} className="flex gap-3 py-1">
                  <span className="data w-12 shrink-0 font-bold">{time}</span>
                  {what}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-[1.25rem] font-bold">This week&apos;s menu</p>
            <ul className="mt-1 divide-y divide-rule">
              {menu.map(([day, meal]) => (
                <li key={day} className="grid grid-cols-[4.5rem_1fr] gap-2 py-1 leading-snug">
                  <span className="font-bold">{day}</span>
                  {meal}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-[1.25rem] font-bold">From families</p>
            <ul className="mt-1 grid gap-1.5">
              {notes.map(([text, who]) => (
                <li key={who} className="rounded-lg bg-mist px-3 py-1.5 leading-snug">
                  {text} <span className="text-[0.9rem] font-bold">{who}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RealLifeCompare() {
  const root = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const touched = useRef(false);

  // The first time it's seen, sweep across the whole page, then settle in the middle.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const ease = (f: number) => 1 - (1 - f) ** 3;
    const seen = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        seen.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          if (touched.current) return;
          const t = now - start;
          if (t < 1700) {
            setPos(Math.round(100 - 92 * ease(t / 1700)));
          } else if (t < 2700) {
            setPos(Math.round(8 + 42 * ease((t - 1700) / 1000)));
          } else {
            setPos(50);
            return;
          }
          frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.2 },
    );
    if (root.current) seen.observe(root.current);
    return () => {
      seen.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  function move(next: number) {
    touched.current = true;
    setPos(next);
  }

  return (
    <figure>
      <div role="group" aria-label="Show this side" className="mb-3 flex flex-wrap items-center gap-2">
        {[
          { label: "The brochure", value: 100, on: pos === 100 },
          { label: "Real life", value: 0, on: pos === 0 },
        ].map((option) => (
          <button key={option.label} type="button" aria-pressed={option.on} onClick={() => move(option.value)} className={`btn !min-h-11 !py-1.5 ${option.on ? "btn-primary" : "btn-secondary"}`}>
            {option.label}
          </button>
        ))}
      </div>
      <div ref={root} className="lift relative h-[70rem] overflow-hidden rounded-lg sm:h-[42rem] lg:h-[38rem]">
        <div className="absolute inset-0">
          <Before />
        </div>
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
          <After />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-signal" style={{ left: `${pos}%` }}>
          <span className="absolute top-[30%] flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-signal text-on-signal shadow-md sm:top-[43%]" style={{ left: pos < 4 ? "1.4rem" : pos > 96 ? "-1.1rem" : "50%" }}>
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
              <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />
            </svg>
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => move(Number(e.target.value))}
          aria-label="Drag to compare a brochure website with the same community showing real life"
          className="compare-range absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-3 text-[0.9rem] text-ink-soft">{sampleCommunity}, its people and their notes are made up, for illustration. Photos are placeholders.</figcaption>
    </figure>
  );
}
