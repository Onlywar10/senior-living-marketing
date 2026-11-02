"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { sampleCommunity } from "../content";
import { AppBar, ClickCursor, StepStory, timed, type Stage } from "./step-story";

const captions = [
  "This week's highlights are ready, with a photo.",
  "Choose who gets it, and send.",
  "It lands on a daughter's phone. No app to download.",
  "Same message, in her language.",
  "She taps to RSVP for the family barbecue.",
  "She's going, and your count goes up.",
  "See who got it, who viewed it and who replied.",
];

const beats = [0, 1, 2, 3, 4, 5, 6, 6];

const highlights = {
  en: "This week: ice cream social Thursday. Family barbecue Saturday.",
  es: "Esta semana: fiesta de helados el jueves. Parrillada familiar el sábado.",
};

const audiences = [
  { name: "All families", count: 214, on: true },
  { name: "Memory care families", count: 62 },
  { name: "Garden club", count: 18 },
];

const languages = [
  { who: "Maria, daughter", language: "Español", her: true },
  { who: "James, son", language: "English" },
  { who: "Mei, daughter", language: "中文" },
];

const deliveries = [
  { who: "Maria, daughter", how: "Text", language: "Español", viewed: true, note: "Replied, RSVP for 2" },
  { who: "James, son", how: "Email", language: "English", viewed: true },
  { who: "Mei, daughter", how: "Text", language: "中文", viewed: false },
];

function Phone({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`w-[15.5rem] shrink-0 rounded-[1.8rem] border-[6px] border-ink bg-paper p-2.5 text-ink shadow-[0_14px_30px_rgb(0_16_48/0.45)] ${className}`}>{children}</div>;
}

function Check() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function SendScreen({ animate, clicking }: { animate: boolean; clicking: boolean }) {
  const reveal = animate && !clicking;
  return (
    <div className="flex h-full min-h-[24rem] flex-col rounded-lg bg-paper text-ink">
      <AppBar>
        <span className="tag shrink-0 text-signal-ink">Ready to send</span>
      </AppBar>
      <div className="grid flex-1 gap-4 p-3.5 sm:grid-cols-[minmax(0,1fr)_15rem]">
        <div className="min-w-0 self-start overflow-hidden rounded border border-rule">
          <div className="relative aspect-[5/2]">
            <Image src="/photos/ice-cream.jpg" alt="" fill sizes="(min-width: 1024px) 28vw, 90vw" className="object-cover object-[center_35%]" />
          </div>
          <div className="p-3">
            <p className="font-display text-[1.2rem] font-bold leading-tight">This week at {sampleCommunity}</p>
            <p className="mt-1 leading-snug">{highlights.en}</p>
            <p className="mt-2 flex items-center gap-1.5 text-[0.85rem] font-bold text-ink-soft">
              <Check />
              Approved by Marcus, Executive Director
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[0.85rem] font-bold text-ink-soft">Who gets it</p>
          <ul className="grid gap-1.5">
            {audiences.map((group, i) => {
              const motion = timed(reveal, "pop-in", 0.8 + i * 0.5);
              return (
                <li key={group.name} style={motion.style} className={`flex items-center justify-between gap-2 rounded border px-2.5 py-1.5 ${group.on ? "border-2 border-ink font-bold" : "border-rule"} ${motion.className}`}>
                  <span className="leading-tight">{group.name}</span>
                  <span className="data shrink-0">{group.count}</span>
                </li>
              );
            })}
          </ul>
          <p {...timed(reveal, "pop-in", 2.4)} className={`text-[0.9rem] leading-snug text-ink-soft ${reveal ? "pop-in" : ""}`}>
            By text and email, in each family&apos;s language.
          </p>
          <div className="relative mt-auto">
            <span style={clicking ? ({ "--d": "2.7s" } as React.CSSProperties) : undefined} className={`block rounded bg-signal px-3 py-2 text-center font-bold text-on-signal ${clicking ? "tap-press" : ""}`}>
              Send to 214 families
            </span>
            {clicking && (
              <>
                <span style={{ "--d": "3s" } as React.CSSProperties} className="pop-in absolute inset-0 flex items-center justify-center rounded bg-ink font-bold text-on-ink">
                  Sent to 214 families
                </span>
                <ClickCursor className="left-1/2 top-3" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function LanguageScreen({ animate, spanish, arriving }: { animate: boolean; spanish: boolean; arriving: boolean }) {
  const message = spanish ? highlights.es : highlights.en;
  return (
    <div className="relative flex h-full min-h-[24rem] items-center justify-center gap-5 overflow-hidden rounded-lg px-4 py-3 sm:justify-start sm:px-6">
      <Image src="/photos/woman-texting.jpg" alt="" fill sizes="(min-width: 1024px) 60vw, 95vw" className="object-cover object-[center_39%]" />
      <Phone className="relative">
        <div className="flex items-center justify-between gap-2 border-b border-rule pb-1.5">
          <p className="font-bold">{sampleCommunity}</p>
          <span key={spanish ? "es" : "en"} className={`tag !px-2 ${spanish ? "tag-live status-pop" : "text-ink-soft"}`}>
            {spanish ? "Español" : "English"}
          </span>
        </div>
        <div {...timed(arriving, "pop-in", 0.9)} className={`mt-2 overflow-hidden rounded-lg bg-steel ${arriving ? "pop-in" : ""}`}>
          <div className="relative aspect-[5/3]">
            <Image src="/photos/ice-cream.jpg" alt="" fill sizes="15rem" className="object-cover object-[center_35%]" />
          </div>
          <p key={message} lang={spanish ? "es" : undefined} {...timed(animate && spanish, "pop-in", 0.5)} className={`p-2.5 leading-snug ${animate && spanish ? "pop-in" : ""}`}>
            {message}
          </p>
        </div>
        <p className="mt-2 text-center text-[0.85rem] text-ink-soft">Text message, today at 9:30 AM</p>
      </Phone>
      <div className="relative ml-auto hidden w-[13.5rem] self-end rounded-lg bg-paper p-3 text-ink shadow-[0_8px_20px_rgb(0_16_48/0.35)] sm:block">
        <p className="font-bold">Each family&apos;s language</p>
        <ul className="mt-1.5 divide-y divide-rule">
          {languages.map((row, i) => {
            const motion = timed(animate && spanish, "new-flash", 0.9 + i * 0.4);
            return (
              <li key={row.who} style={motion.style} className={`flex items-center justify-between gap-2 rounded-sm px-1 py-1 ${motion.className}`}>
                <span className="leading-tight">{row.who}</span>
                <span data-no-translate="" className="shrink-0 font-bold">
                  {row.language}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function RsvpScreen({ going, tapping }: { going: boolean; tapping: boolean }) {
  return (
    <div className="flex h-full min-h-[24rem] items-center justify-center gap-6 rounded-lg bg-steel px-4 py-3 sm:justify-start sm:px-6">
      <Phone>
        <div className="relative aspect-[5/3] overflow-hidden rounded-lg">
          <Image src="/photos/family-barbecue.jpg" alt="" fill sizes="15rem" className="object-cover object-[35%_center]" />
        </div>
        <div lang="es">
          <p className="mt-2 font-display text-[1.15rem] font-bold leading-tight">Parrillada familiar</p>
          <p className="leading-snug">Sábado a las 12, en el patio</p>
          <p className="mt-2 text-[0.85rem] font-bold text-ink-soft">¿Cuántos vienen?</p>
          <p className="mt-0.5 flex items-center justify-between rounded border border-rule px-3 py-1 font-bold">
            <span>−</span>
            <span className="data">2</span>
            <span>+</span>
          </p>
          <div className="relative mt-2">
            {going ? (
              <p className="status-pop rounded bg-ink px-3 py-2 text-center font-bold text-on-ink">¡Confirmado! Nos vemos el sábado.</p>
            ) : (
              <>
                <span style={tapping ? ({ "--d": "2.7s" } as React.CSSProperties) : undefined} className={`block rounded bg-signal px-3 py-2 text-center font-bold text-on-signal ${tapping ? "tap-press" : ""}`}>
                  Confirmar asistencia
                </span>
                {tapping && <ClickCursor className="left-1/2 top-3" />}
              </>
            )}
          </div>
        </div>
      </Phone>
      <div className="hidden min-w-0 flex-1 rounded-lg bg-paper p-4 text-ink sm:block">
        <p className="font-bold">Family barbecue RSVPs</p>
        <p key={going ? "after" : "before"} className={`font-display text-[3.5rem] font-bold leading-none tracking-tight ${going ? "status-pop text-signal-ink" : ""}`}>
          {going ? 39 : 37}
        </p>
        <p className="mt-1 leading-snug text-ink-soft">Saturday at 12, Courtyard</p>
        {going && (
          <p style={{ "--d": "0.5s" } as React.CSSProperties} className="new-flash mt-3 rounded border border-rule p-2 font-bold leading-snug">
            Maria, daughter: 2 coming
          </p>
        )}
        <p className="mt-3 leading-snug">Families RSVP from a link in the text or email.</p>
      </div>
    </div>
  );
}

function TrackScreen({ animate }: { animate: boolean }) {
  const tiles = [
    { label: "Delivered", value: 214 },
    { label: "Viewed", value: 142 },
    { label: "Reply", value: 1 },
    { label: "RSVPs", value: 39 },
  ];
  return (
    <div className="flex h-full min-h-[24rem] flex-col rounded-lg bg-paper text-ink">
      <AppBar>
        <span className="tag shrink-0 tag-live">Sent to 214 families</span>
      </AppBar>
      <div className="flex-1 p-3.5">
        <p className="font-display text-[1.2rem] font-bold leading-tight">This week at {sampleCommunity}</p>
        <dl className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {tiles.map((tile, i) => {
            const motion = timed(animate, "new-flash", 0.8 + i * 0.5);
            return (
              <div key={tile.label} style={motion.style} className={`flex flex-col-reverse rounded border border-rule p-2 ${motion.className}`}>
                <dt className="text-[0.9rem] font-bold leading-tight">{tile.label}</dt>
                <dd className="font-display text-[1.8rem] font-bold leading-none tracking-tight">{tile.value}</dd>
              </div>
            );
          })}
        </dl>
        <ul className="mt-2 divide-y divide-rule">
          {deliveries.map((row, i) => {
            const motion = timed(animate, "pop-in", 2.9 + i * 0.4);
            return (
              <li key={row.who} style={motion.style} className={`flex flex-wrap items-center gap-x-3 gap-y-0.5 py-1 ${motion.className}`}>
                <span className="min-w-[8.5rem] font-bold leading-tight">{row.who}</span>
                <span className="hidden text-ink-soft sm:inline">{row.how}</span>
                <span data-no-translate="" className="hidden text-ink-soft sm:inline">
                  {row.language}
                </span>
                <span className="ml-auto flex items-center gap-1 text-[0.9rem] font-bold">
                  <Check />
                  {row.note ?? (row.viewed ? "Viewed" : "Delivered")}
                </span>
              </li>
            );
          })}
        </ul>
        <div {...timed(animate, "new-flash", 4.3)} className={`mt-2 rounded bg-mist p-2.5 ${animate ? "new-flash" : ""}`}>
          <p className="leading-snug">
            <span className="font-bold">Maria, daughter:</span> Thank you! We&apos;ll see you Saturday.
          </p>
          <p className="text-[0.85rem] text-ink-soft">Reply sent to Dana, Activities</p>
        </div>
      </div>
    </div>
  );
}

const stages: Stage[] = [
  {
    label: "Send",
    from: 0,
    to: 1,
    alt: "Staff preview this week's highlights with a photo, choose all 214 families, and send it by text and email.",
    screen: ({ step, animate }) => <SendScreen animate={animate} clicking={animate && step === 1} />,
  },
  {
    label: "Her language",
    from: 2,
    to: 3,
    alt: "The message arrives on a daughter's phone in English, then switches to Spanish. A list shows each family getting their own language.",
    screen: ({ step, current, animate, playing }) => <LanguageScreen animate={animate} arriving={animate && step === 2} spanish={current ? step === 3 || !playing : step > 3} />,
  },
  {
    label: "RSVP",
    from: 4,
    to: 5,
    alt: "She taps to RSVP for two people to the family barbecue. The community's RSVP count goes from 37 to 39.",
    screen: ({ step, current, animate, playing }) => <RsvpScreen going={current ? step === 5 || !playing : step > 5} tapping={animate && step === 4} />,
  },
  {
    label: "Tracking",
    from: 6,
    to: 7,
    alt: "A tracking screen shows 214 delivered, 142 viewed, 1 reply and 39 RSVPs, with the daughter's reply sent to the right person.",
    screen: ({ animate }) => <TrackScreen animate={animate} />,
  },
];

export function FamilyStory() {
  return <StepStory stages={stages} captions={captions} beats={beats} />;
}
