"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { sampleCommunity } from "../content";
import { zh } from "../zh";
import { useLang } from "./language-toggle";
import { AppBar, ClickCursor, StepStory, timed, type Stage } from "./step-story";

const captions = [
  "Take a photo of your paper calendar and menu.",
  "AI reads every line.",
  "AI writes today's calendar and flags what to check.",
  "Your manager checks it and clicks Approve.",
  "One tap, and it's approved.",
  "It pops onto your website. No web person needed.",
];

// These pick the caption for each beat.
const beats = [0, 1, 2, 2, 3, 4, 5, 5];

const schedule = [
  { time: "10:00", what: "Pottery class", place: "Art room", photo: "/photos/pottery-class.jpg" },
  { time: "11:30", what: "Garden club", place: "Courtyard" },
  { time: "2:00", what: "Ice cream social", place: "Garden", photo: "/photos/ice-cream.jpg", flag: true },
  { time: "6:00", what: "Movie night", place: "Main lounge" },
];

const lunch = "Chicken salad bowl, tomato soup, lemon cake";
const summary = "Pottery this morning, the garden club before lunch, and ice cream in the garden at 2.";

function Thumb({ src, className = "size-11" }: { src?: string; className?: string }) {
  if (!src) return <span className={`flex shrink-0 items-center justify-center rounded border border-dashed border-ink-soft text-center text-[0.7rem] leading-none text-ink-soft ${className}`}>Add photo</span>;
  return (
    <span className={`relative shrink-0 overflow-hidden rounded ${className}`}>
      <Image src={src} alt="" fill sizes="5rem" className="object-cover" />
    </span>
  );
}

function PaperSheet({ reading = false, className = "" }: { reading?: boolean; className?: string }) {
  return (
    <div className={`data bg-paper p-[0.9em] leading-snug text-ink shadow-[0_6px_14px_rgb(0_16_48/0.35)] ${className}`}>
      <p className="border-b-2 border-ink pb-[0.3em] text-center font-bold">Wren Hollow: Thursday</p>
      <ul className="mt-[0.5em] grid gap-[0.3em]">
        {schedule.map((row, i) => (
          <li key={row.what} style={{ transitionDelay: `${i * 550}ms` }} className={`transition-colors duration-300 ${reading ? "bg-signal-bright" : ""}`}>
            {row.time} {row.what}
          </li>
        ))}
      </ul>
      <p style={{ transitionDelay: "2200ms" }} className={`mt-[0.6em] border-t border-ink pt-[0.4em] transition-colors duration-300 ${reading ? "bg-signal-bright" : ""}`}>
        <span className="font-bold">Lunch:</span> {lunch}
      </p>
    </div>
  );
}

function PhotoScreen({ reading, scanning, snapping }: { reading: boolean; scanning: boolean; snapping: boolean }) {
  return (
    <div className="relative flex h-full min-h-[24rem] items-center justify-center gap-8 overflow-hidden rounded-lg px-4 py-4">
      <span className="cork absolute inset-0" />
      <div className="relative hidden w-[17rem] sm:block">
        <span className="absolute -top-2 left-1/2 z-10 size-4 rounded-full bg-signal shadow-[0_2px_3px_rgb(0_16_48/0.5)]" />
        <PaperSheet className="-rotate-2 text-[0.88rem]" />
      </div>
      <div className="relative w-[13.5rem] shrink-0 rounded-[1.8rem] border-[6px] border-ink bg-ink p-1 shadow-[0_14px_30px_rgb(0_16_48/0.45)]">
        <p className="py-1 text-center text-[0.85rem] font-bold text-on-ink">{reading ? "AI is reading your photo" : "Camera"}</p>
        <div className="relative overflow-hidden rounded-md">
          <div className="relative aspect-[4/5]">
            <span className="cork absolute inset-0" />
            <PaperSheet reading={reading} className="absolute inset-x-2.5 top-4 rotate-1 text-[0.68rem]" />
            {scanning && <span className="scan-line absolute inset-x-0 h-1 bg-signal-bright shadow-[0_0_14px_3px_var(--signal-bright)]" />}
            {snapping && <span className="shutter-flash absolute inset-0 bg-paper" />}
          </div>
          {["left-2 top-2 border-l-[3px] border-t-[3px]", "right-2 top-2 border-r-[3px] border-t-[3px]", "bottom-2 left-2 border-b-[3px] border-l-[3px]", "bottom-2 right-2 border-b-[3px] border-r-[3px]"].map((corner) => (
            <span key={corner} className={`absolute size-5 border-on-ink ${corner}`} />
          ))}
        </div>
        <span className={`mx-auto my-2 block size-10 rounded-full border-[3px] border-on-ink transition-colors duration-300 ${reading ? "bg-signal-bright" : "bg-on-ink"} ${snapping ? "tap-press" : ""}`} style={{ "--d": "2.4s" } as CSSProperties} />
      </div>
    </div>
  );
}

function DraftScreen({ animate }: { animate: boolean }) {
  const lang = useLang();
  const pieces = lang === "zh" ? [...zh[summary]] : summary.split(" ").map((word) => `${word} `);
  return (
    <div className="flex h-full min-h-[24rem] flex-col rounded-lg bg-paper text-ink">
      <AppBar>
        <span className="grid shrink-0 justify-items-end">
          {animate && (
            <span {...timed(true, "fade-away", 5.6)} className="tag fade-away text-signal-ink [grid-area:1/1]">
              AI is writing
            </span>
          )}
          <span {...timed(animate, "pop-in", 5.7)} className={`tag text-ink-soft [grid-area:1/1] ${animate ? "pop-in" : ""}`}>
            Draft ready
          </span>
        </span>
      </AppBar>
      <div className="grid flex-1 gap-4 p-3.5 sm:grid-cols-[9.5rem_minmax(0,1fr)]">
        <div className="hidden sm:block">
          <p className="text-[0.85rem] font-bold text-ink-soft">From your photo</p>
          <div className="relative mt-1.5 overflow-hidden rounded p-2">
            <span className="cork absolute inset-0" />
            <PaperSheet className="relative rotate-1 text-[0.55rem]" />
          </div>
          <p className="mt-2 text-[0.85rem] leading-snug text-ink-soft">AI found 4 activities and 1 menu.</p>
        </div>
        <div className="min-w-0">
          <p className="field-mock min-h-[2.6rem] font-display text-[1.15rem] font-bold">
            <span {...timed(animate, "pop-in", 1)}>Today at {sampleCommunity}</span>
          </p>
          <p className="mt-2 text-[0.85rem] font-bold text-ink-soft">AI wrote this for you</p>
          <p className="field-mock min-h-[3.9rem] leading-snug">
            {pieces.map((piece, i) => (
              <span key={`${piece}-${i}`} {...timed(animate, "word-in", 0.9 + (i * 2.3) / pieces.length)}>
                {piece}
              </span>
            ))}
          </p>
          <ul className="mt-2 grid gap-1.5 xl:grid-cols-2">
            {schedule.map((row, i) => {
              const motion = timed(animate, "pop-in", 3.4 + i * 0.5);
              return (
                <li key={row.what} style={motion.style} className={`flex items-center gap-2 rounded border p-1.5 ${row.flag ? "border-signal-ink bg-mist" : "border-rule"} ${motion.className}`}>
                  <Thumb src={row.photo} className="size-9" />
                  <span className="data w-11 shrink-0 text-[0.9rem] font-bold">{row.time}</span>
                  <span className="min-w-0 flex-1 leading-tight">
                    {row.what}
                    {row.flag && <span className="block text-[0.82rem] font-bold text-signal-ink">Check this time</span>}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-rule px-4 py-2">
        <p className="text-[0.85rem] leading-snug text-ink-soft">Nothing goes live until someone approves it.</p>
        <span {...timed(animate, "pop-in", 5.7)}>
          <span className="inline-block rounded bg-ink px-3 py-1.5 font-bold text-on-ink">Send for approval</span>
        </span>
      </div>
    </div>
  );
}

function ApprovalScreen({ approved, clicking }: { approved: boolean; clicking: boolean }) {
  return (
    <div className="flex h-full min-h-[24rem] flex-col rounded-lg bg-paper text-ink">
      <AppBar>
        <span className={`tag shrink-0 ${approved ? "tag-live status-pop" : "text-signal-ink"}`}>{approved ? "Approved" : "Needs approval"}</span>
      </AppBar>
      <div className="grid flex-1 gap-4 p-3.5 sm:grid-cols-[minmax(0,1fr)_14rem]">
        <div className="min-w-0 self-start rounded border border-rule p-3">
          <p className="font-display text-[1.2rem] font-bold leading-tight">Today at {sampleCommunity}</p>
          <p className="mt-1 leading-snug">{summary}</p>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            <Thumb src="/photos/pottery-class.jpg" className="aspect-[3/1] w-full" />
            <Thumb src="/photos/ice-cream.jpg" className="aspect-[3/1] w-full" />
          </div>
          <ul className="mt-1.5 hidden gap-x-4 sm:grid sm:grid-cols-2">
            {schedule.map((row) => (
              <li key={row.what} className="flex gap-2 border-b border-rule py-1">
                <span className="data w-12 shrink-0 font-bold">{row.time}</span>
                {row.what}
              </li>
            ))}
          </ul>
          <p className="mt-2 leading-snug">
            <span className="font-bold">Lunch:</span> {lunch}
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <dl className="grid gap-2 leading-snug">
            <div>
              <dt className="text-[0.85rem] font-bold text-ink-soft">Sent by</dt>
              <dd>Dana, Activities, 9:12 AM</dd>
            </div>
            <div className="hidden sm:block">
              <dt className="text-[0.85rem] font-bold text-ink-soft">Goes to</dt>
              <dd>The {sampleCommunity} website</dd>
            </div>
            <div className="hidden sm:block">
              <dt className="text-[0.85rem] font-bold text-ink-soft">Checked</dt>
              <dd>Dana confirmed the 2:00 time</dd>
            </div>
          </dl>
          <div className="relative mt-auto grid gap-1.5">
            {approved ? (
              <p className="status-pop rounded bg-signal p-2.5 font-bold leading-snug text-on-signal">Approved by Marcus, Executive Director, 9:14 AM</p>
            ) : (
              <>
                <span style={clicking ? ({ "--d": "2.7s" } as CSSProperties) : undefined} className={`rounded bg-signal px-3 py-2 text-center font-bold text-on-signal ${clicking ? "tap-press" : ""}`}>
                  Approve
                </span>
                <span className="rounded border-2 border-ink px-3 py-1.5 text-center font-bold">Ask for a change</span>
                {clicking && <ClickCursor />}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function LiveScreen({ animate }: { animate: boolean }) {
  return (
    <div className="flex h-full min-h-[24rem] flex-col overflow-hidden rounded-lg bg-paper text-ink">
      <div className="flex items-center gap-2.5 bg-steel px-3 py-1.5">
        <span className="flex gap-1">
          {[0, 1, 2].map((dot) => (
            <span key={dot} className="size-2.5 rounded-full bg-ink-soft" />
          ))}
        </span>
        <span className="data min-w-0 flex-1 truncate rounded bg-paper px-2.5 py-0.5 text-[0.85rem]">wrenhollow.example/today</span>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-rule px-4 py-1.5">
        <p className="font-display text-[1.15rem] font-bold">{sampleCommunity}</p>
        <div className="flex items-center gap-3 text-[0.9rem]">
          <span className="hidden sm:inline">Life here</span>
          <span className="hidden sm:inline">Dining</span>
          <span className="hidden sm:inline">Apartments</span>
          <span className="rounded bg-ink px-2.5 py-1 font-bold text-on-ink">Book a tour</span>
        </div>
      </div>
      <div className="flex-1 p-3.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="font-display text-[1.4rem] font-bold leading-tight">Today at {sampleCommunity}</p>
          <span className="grid justify-items-end">
            {animate && (
              <span {...timed(true, "fade-away", 4.9)} className="tag fade-away text-ink-soft [grid-area:1/1]">
                Last updated in September
              </span>
            )}
            <span {...timed(animate, "pop-in", 5)} className={`tag tag-live [grid-area:1/1] ${animate ? "pop-in" : ""}`}>
              Updated today, 9:14 AM
            </span>
          </span>
        </div>
        <p {...timed(animate, "pop-in", 1)} className={`mt-1 leading-snug ${animate ? "pop-in" : ""}`}>
          {summary}
        </p>
        <div className="mt-2 grid gap-4 sm:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <ul className="grid content-start divide-y divide-rule">
            {schedule.map((row, i) => {
              const motion = timed(animate, "new-flash", 1.6 + i * 0.55);
              return (
                <li key={row.what} style={motion.style} className={`flex items-center gap-2.5 rounded-sm py-1 ${motion.className}`}>
                  {row.photo ? <Thumb src={row.photo} className="size-10" /> : <span className="size-10 shrink-0" />}
                  <span className="data w-12 shrink-0 font-bold">{row.time}</span>
                  <span className="min-w-0 leading-tight">
                    <span className="block font-bold">{row.what}</span>
                    <span className="block text-[0.85rem] text-ink-soft">{row.place}</span>
                  </span>
                </li>
              );
            })}
          </ul>
          <div {...timed(animate, "new-flash", 3.9)} className={`self-start overflow-hidden rounded bg-mist ${animate ? "new-flash" : ""}`}>
            <div className="relative aspect-[3/1] sm:aspect-[2/1]">
              <Image src="/photos/chicken-bowl.jpg" alt="" fill sizes="(min-width: 1024px) 18vw, 90vw" className="object-cover object-[center_45%]" />
            </div>
            <div className="p-2">
              <p className="font-bold">Today&apos;s lunch</p>
              <p className="leading-snug">{lunch}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const stages: Stage[] = [
  {
    label: "Photo",
    from: 0,
    to: 1,
    alt: "A phone camera frames a paper activity calendar and lunch menu pinned to a cork board. AI reads each line.",
    screen: ({ step, current, animate, playing }) => <PhotoScreen reading={current && (step === 1 || !playing)} scanning={animate && step === 1} snapping={animate && step === 0} />,
  },
  {
    label: "AI draft",
    from: 2,
    to: 3,
    alt: "A draft post written by AI from the photo, listing four activities with one time flagged for staff to check.",
    screen: ({ animate }) => <DraftScreen animate={animate} />,
  },
  {
    label: "Approval",
    from: 4,
    to: 5,
    alt: "The post waits for a manager's approval, with Approve and Ask for a change buttons, then shows as approved.",
    screen: ({ step, current, animate, playing }) => <ApprovalScreen approved={current ? !playing || step === 5 : step > 5} clicking={animate && step === 4} />,
  },
  {
    label: "Live",
    from: 6,
    to: 7,
    alt: "The post is live on the community's website, with today's activities and lunch, marked updated today.",
    screen: ({ animate }) => <LiveScreen animate={animate} />,
  },
];

export function LiveWebsiteStory() {
  return <StepStory stages={stages} captions={captions} beats={beats} />;
}
