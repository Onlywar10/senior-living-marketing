"use client";

import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { sampleCommunity } from "../content";
import { zh } from "../zh";
import { useLang } from "./language-toggle";
import type { IconName } from "../solutions-content";
import { FeatureIcon } from "./feature-icon";
import { ClickCursor, timed } from "./step-story";
import { useStory } from "./story";

const STEP_MS = 7000;

type Mock = { animate: boolean };

function Words({ text, animate, from = 0.5, span = 2 }: { text: string; animate: boolean; from?: number; span?: number }) {
  const lang = useLang();
  const pieces = lang === "zh" && zh[text] ? [...zh[text]] : text.split(" ").map((word) => `${word} `);
  return (
    <>
      {pieces.map((piece, i) => (
        <span key={`${piece}-${i}`} {...timed(animate, "word-in", from + (i * span) / pieces.length)}>
          {piece}
        </span>
      ))}
    </>
  );
}

function SearchMock({ animate }: Mock) {
  const result = timed(animate, "new-flash", 2);
  return (
    <div>
      <p className="field-mock">memory care near Roseville</p>
      <div style={result.style} className={`mt-2 rounded p-2 ${result.className}`}>
        <p className="data text-[0.8rem] text-ink-soft">wrenhollow.example</p>
        <p className="font-display text-[1.05rem] font-bold leading-tight">{sampleCommunity}: memory care in Roseville</p>
        <p className="leading-snug">Today&apos;s menu, this week&apos;s activities and floor plans. Updated today.</p>
      </div>
    </div>
  );
}

function AiMock({ animate }: Mock) {
  const check = timed(animate, "pop-in", 4.4);
  return (
    <div className="grid gap-2">
      <p className="ml-8 rounded-2xl rounded-br-sm bg-ink px-3 py-1 leading-snug text-on-ink">Which communities near Roseville have memory care?</p>
      <div className="mr-4 rounded-2xl rounded-bl-sm bg-steel px-3 py-1 leading-snug">
        <span className="block text-[0.82rem] font-bold">AI answer</span>
        <Words animate={animate} from={1} span={2.4} text="Wren Hollow offers memory care and posts its activities and menus every week." />
        <span {...timed(animate, "pop-in", 3.5)}>
          <span className="data mt-1 block text-[0.8rem]">Source: wrenhollow.example</span>
        </span>
      </div>
      <p style={check.style} className={`flex items-center gap-1.5 text-[0.9rem] font-bold text-signal-ink ${check.className}`}>
        We check what AI tools say, and flag mistakes.
      </p>
    </div>
  );
}

function ProfileMock({ animate }: Mock) {
  const update = timed(animate, "new-flash", 1.8);
  return (
    <div>
      <p className="font-display text-[1.15rem] font-bold leading-tight">{sampleCommunity}</p>
      <p className="text-[0.9rem] text-ink-soft">Assisted living and memory care</p>
      <div style={update.style} className={`mt-2 flex gap-2.5 rounded border border-rule p-2 ${update.className}`}>
        <span className="relative size-20 shrink-0 overflow-hidden rounded">
          <Image src="/photos/garden-club.jpg" alt="" fill sizes="5rem" className="object-cover" />
        </span>
        <span className="min-w-0 leading-snug">
          <span className="block font-bold">Garden club</span>
          Tuesday at 11:30, in the courtyard
          <span className="block text-[0.85rem] text-ink-soft">Updated today</span>
        </span>
      </div>
      <p {...timed(animate, "pop-in", 3.4)} className={`mt-2 leading-snug ${animate ? "pop-in" : ""}`}>
        <span className="font-bold">Lunch:</span> Chicken salad bowl, tomato soup, lemon cake
      </p>
    </div>
  );
}

function PlansMock({ animate }: Mock) {
  const open = timed(animate, "pop-in", 2.6);
  return (
    <div className="grid grid-cols-[8.5rem_minmax(0,1fr)] gap-3">
      <svg viewBox="0 0 120 110" className="w-full text-ink" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M4 4h112v102H4z" />
        <path d="M70 4v46M70 50h46M70 74v32M4 58h40M60 58h10" />
        <text x="30" y="34" fontSize="9" fill="currentColor" stroke="none" textAnchor="middle">Living</text>
        <text x="93" y="30" fontSize="9" fill="currentColor" stroke="none" textAnchor="middle">Bed</text>
        <text x="93" y="92" fontSize="9" fill="currentColor" stroke="none" textAnchor="middle">Bath</text>
        <text x="30" y="86" fontSize="9" fill="currentColor" stroke="none" textAnchor="middle">Kitchen</text>
      </svg>
      <div className="min-w-0">
        <p className="font-display text-[1.1rem] font-bold leading-tight">One-bedroom floor plan</p>
        <p {...timed(animate, "pop-in", 1.2)} className={`mt-1 leading-snug ${animate ? "pop-in" : ""}`}>
          Meals, housekeeping and activities included.
        </p>
        <span style={open.style} className={`tag tag-live mt-2 inline-block ${open.className}`}>
          2 open
        </span>
      </div>
    </div>
  );
}

function ChatMock({ animate }: Mock) {
  return (
    <div className="grid gap-1.5 text-[0.95rem]">
      <p className="ml-10 rounded-2xl rounded-br-sm bg-ink px-3 py-1 leading-snug text-on-ink">Do you have memory care?</p>
      <p {...timed(animate, "pop-in", 1)} className={`mr-5 rounded-2xl rounded-bl-sm bg-steel px-3 py-1 leading-snug ${animate ? "pop-in" : ""}`}>
        Yes, we do. Would you like to come see it? You can book a tour here.
      </p>
      <p {...timed(animate, "pop-in", 2.8)} className={`ml-10 rounded-2xl rounded-br-sm bg-ink px-3 py-1 leading-snug text-on-ink ${animate ? "pop-in" : ""}`}>
        Can Mom bring her cat?
      </p>
      <p {...timed(animate, "pop-in", 3.9)} className={`mr-5 rounded-2xl rounded-bl-sm bg-steel px-3 py-1 leading-snug ${animate ? "pop-in" : ""}`}>
        I don&apos;t know that one, so I won&apos;t guess. Our team can answer here.
      </p>
    </div>
  );
}

function InquiryMock({ animate }: Mock) {
  const trail = ["From your website", "Sent to your sales system"];
  return (
    <div>
      <p className="field-mock">Looking for: memory care for my mom</p>
      <p {...timed(animate, "tap-press", 1.6)} className={`mt-2 rounded bg-signal px-3 py-1.5 text-center font-bold text-on-signal ${animate ? "tap-press" : ""}`}>
        Ask about living here
      </p>
      <ul className="mt-2 grid gap-1">
        {trail.map((step, i) => {
          const motion = timed(animate, "new-flash", 2.4 + i * 1);
          return (
            <li key={step} style={motion.style} className={`rounded border border-rule px-2.5 py-1 font-bold leading-tight ${motion.className}`}>
              {step}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function BookingMock({ animate }: Mock) {
  const done = timed(animate, "pop-in", 3.6);
  return (
    <div>
      <p className="font-bold">Pick a time for your tour</p>
      <div className="relative mt-2 grid grid-cols-3 gap-1.5 text-center">
        {["Tue", "Thu", "Fri"].map((day) => (
          <span key={day} className={`rounded border-2 border-ink py-2 font-bold ${day === "Thu" ? "bg-ink text-on-ink" : ""}`}>
            {day}
          </span>
        ))}
        {animate && <ClickCursor className="left-1/2 top-2" />}
      </div>
      <p style={done.style} className={`mt-3 rounded bg-signal p-2 font-bold leading-snug text-on-signal ${done.className}`}>
        Tour booked for Thursday
      </p>
      <p {...timed(animate, "pop-in", 4.3)} className={`mt-1.5 leading-snug ${animate ? "pop-in" : ""}`}>
        Families who ask get a confirmation.
      </p>
    </div>
  );
}

function AlertMock({ animate }: Mock) {
  const message = timed(animate, "new-flash", 2.6);
  const status = timed(animate, "pop-in", 1.4);
  return (
    <div>
      <div className="flex items-center justify-between gap-2 rounded border border-rule p-2">
        <span className="font-bold leading-tight">One-bedroom floor plan</span>
        <span style={status.style} className={`tag tag-live shrink-0 ${status.className}`}>
          Open
        </span>
      </div>
      <p {...timed(animate, "pop-in", 2)} className={`mt-1.5 text-[0.9rem] font-bold text-ink-soft ${animate ? "pop-in" : ""}`}>
        Sent to the waitlist
      </p>
      <div style={message.style} className={`mt-1 rounded-lg bg-steel p-2.5 leading-snug ${message.className}`}>
        A one-bedroom just opened at {sampleCommunity}.
        <span className="mt-1.5 block w-fit rounded bg-ink px-3 py-1 font-bold text-on-ink">Book a tour</span>
      </div>
    </div>
  );
}

const spokes: { title: string; tag?: string; icon: IconName; caption: string; Mock: (props: Mock) => ReactNode }[] = [
  { title: "Show up on Google", tag: "SEO", icon: "search", caption: "Your site is built so families find you when they search.", Mock: SearchMock },
  { title: "Show up in AI answers", tag: "GEO", icon: "spark", caption: "Your facts stay easy for ChatGPT and Google's AI to read.", Mock: AiMock },
  { title: "Your Google Business Profile", icon: "globe", caption: "Kept current with your events and menus.", Mock: ProfileMock },
  { title: "Floor plans and what's open", icon: "home", caption: "Families see what's included and what's open, kept up to date.", Mock: PlansMock },
  { title: "Instant answers", icon: "chat", caption: "An AI chat answers from your own content, day or night.", Mock: ChatMock },
  { title: "Inquiries to your team", tag: "Conversion", icon: "mail", caption: "Every inquiry goes to your sales system or email, marked with where it came from.", Mock: InquiryMock },
  { title: "Tour booking", tag: "Conversion", icon: "calendar", caption: "Families pick a time, day or night.", Mock: BookingMock },
  { title: "Apartment alerts", icon: "alert", caption: "When your team marks an apartment open, the waitlist gets a message with a tour link.", Mock: AlertMock },
];

// Clockwise from the top, on an 800 by 660 stage. The diagonal spokes sit wide of the center
// screen, so they stay on the ring without covering it.
const ringX = [0, 264, 312, 264, 0, -264, -312, -264];

function spokeEnd(i: number) {
  const x = ringX[i];
  const y = 285 * Math.sqrt(1 - (x / 312) ** 2) * (i > 2 && i < 6 ? 1 : -1);
  return { x: 400 + x, y: 330 + y };
}

export function ToursStory() {
  const { ref, step, playing, running, restarts, toggle, jump } = useStory<HTMLDivElement>(spokes.length, { stepMs: STEP_MS, holdBeats: 0 });
  const active = spokes[step];

  return (
    <div ref={ref} className="min-w-0">
      <div className="xl:relative xl:aspect-[800/660]">
        <svg aria-hidden="true" viewBox="0 0 800 660" className="absolute inset-0 hidden size-full xl:block" fill="none">
          <ellipse cx="400" cy="330" rx="312" ry="285" stroke="var(--ink-rule)" strokeWidth="2" strokeDasharray="3 7" />
          {spokes.map((spoke, i) => {
            const end = spokeEnd(i);
            const path = `M400 330L${end.x} ${end.y}`;
            return (
              <g key={spoke.title}>
                <path d={path} stroke="var(--ink-rule)" strokeWidth="3" />
                {(i <= step || !playing) && (
                  <path
                    key={i === step && playing ? `running-${restarts}` : "full"}
                    d={path}
                    pathLength={1}
                    stroke="var(--signal-bright)"
                    strokeWidth="3"
                    strokeDasharray="1"
                    className={i === step && playing ? "spoke-fill" : ""}
                    style={{ animationDuration: `${STEP_MS}ms`, animationPlayState: running ? "running" : "paused" }}
                  />
                )}
              </g>
            );
          })}
        </svg>

        <div className="relative z-10 flex h-[27rem] flex-col overflow-hidden rounded-xl bg-paper text-ink shadow-[0_16px_40px_rgb(0_0_0/0.4)] xl:absolute xl:left-1/2 xl:top-1/2 xl:h-[25rem] xl:w-[47%] xl:-translate-x-1/2 xl:-translate-y-1/2">
          <div className="flex items-center gap-2 bg-steel px-3 py-1.5">
            <span aria-hidden="true" className="flex gap-1">
              {[0, 1, 2].map((dot) => (
                <span key={dot} className="size-2 rounded-full bg-ink-soft" />
              ))}
            </span>
            <span className="truncate text-[0.9rem] font-bold">Your website, on Kinlight</span>
          </div>
          <span aria-hidden="true" className="block h-1.5 shrink-0 bg-steel">
            <span
              key={playing ? `running-${step}-${restarts}` : "full"}
              style={{ animationDuration: `${STEP_MS}ms`, animationPlayState: running ? "running" : "paused" }}
              className={`block h-full bg-signal ${playing ? "progress-fill" : ""}`}
            />
          </span>
          <div className="min-h-0 flex-1 px-3.5 pb-3 pt-2.5">
            <div key={`${step}-${restarts}`} className={playing ? "status-pop" : ""}>
              <p className="font-display text-[1.15rem] font-bold leading-tight">{active.title}</p>
              <p className="mb-2 mt-0.5 text-[0.95rem] leading-snug text-ink-soft">{active.caption}</p>
              <div aria-hidden="true">
                <active.Mock animate={playing} />
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 xl:contents">
          {spokes.map((spoke, i) => {
            const end = spokeEnd(i);
            const current = i === step;
            return (
              <li key={spoke.title} className="z-10 xl:absolute xl:left-[var(--spoke-x)] xl:top-[var(--spoke-y)] xl:w-[18.5%] xl:-translate-x-1/2 xl:-translate-y-1/2" style={{ "--spoke-x": `${end.x / 8}%`, "--spoke-y": `${end.y / 6.6}%` } as CSSProperties}>
                <button
                  type="button"
                  onClick={() => jump(i)}
                  aria-current={current ? "step" : undefined}
                  className={`flex min-h-14 w-full items-center gap-2 rounded-lg p-1.5 text-left leading-tight transition-[background-color,transform] duration-300 ${current ? "scale-105 bg-signal text-on-signal shadow-[0_8px_18px_rgb(0_0_0/0.4)]" : "bg-paper text-ink hover:bg-steel"}`}
                >
                  <FeatureIcon name={spoke.icon} className="size-7" />
                  <span className="min-w-0">
                    <span className="block font-display text-[0.92rem] font-bold">{spoke.title}</span>
                    {spoke.tag && <span className="data block text-[0.72rem]">{spoke.tag}</span>}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <p className="mt-3 text-[0.95rem] text-on-ink-soft xl:absolute xl:bottom-0 xl:left-0 xl:mt-0 xl:w-[20%] xl:leading-tight">Sample community, for illustration.</p>
        <button type="button" onClick={toggle} className="btn btn-ghost-dark mt-2 !min-h-11 !px-4 !py-1.5 !text-[0.95rem] xl:absolute xl:bottom-0 xl:right-0 xl:mt-0">
          {playing ? "Pause animation" : "Play animation"}
        </button>
      </div>
    </div>
  );
}
