"use client";

import { useState } from "react";
import { sampleCommunity } from "../content";

export function BrowserMock({ highlight = true, large = false }: { highlight?: boolean; large?: boolean }) {
  return (
    <div className="overflow-hidden rounded-lg border-2 border-ink bg-paper text-ink">
      <div className="flex items-center gap-2 border-b-2 border-ink bg-mist px-3 py-2">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-ink/30" />
          <span className="size-2.5 rounded-full bg-ink/30" />
          <span className="size-2.5 rounded-full bg-ink/30" />
        </span>
        <span className="min-w-0 truncate rounded bg-paper px-2 py-0.5 text-sm">wrenhollow.example</span>
      </div>
      <div className={large ? "p-5 sm:p-8" : "p-4"}>
        <p className={`font-display font-bold leading-tight ${large ? "text-[1.7rem] sm:text-[2.1rem]" : "text-xl"}`}>
          Today at {sampleCommunity}
        </p>
        <div className={`mt-3 grid gap-5 ${large ? "sm:grid-cols-[3fr_2fr]" : ""}`}>
          <ul className="divide-y divide-rule">
            <Row time="10:00" what="Chair yoga, Sun Room" />
            <Row time="2:00" what="Ice cream social, garden" fresh={highlight} />
            {large && <Row time="4:00" what="Piano hour, the lounge" />}
          </ul>
          {large ? (
            <div className="rounded bg-mist p-4">
              <p className="font-bold">Dinner tonight</p>
              <p>Roast chicken, green beans, lemon cake</p>
              <p className="mt-1 text-sm">Or: mushroom risotto</p>
            </div>
          ) : (
            <p className="-mt-3 text-sm">
              <span className="font-bold">Dinner:</span> Roast chicken, lemon cake
            </p>
          )}
        </div>
        {large && (
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-rule pt-4">
            <span className="rounded bg-ink px-4 py-2 font-bold text-on-ink">Book a tour</span>
            <span className="text-sm">Licensed RCFE #000000000 (sample)</span>
          </div>
        )}
      </div>
    </div>
  );
}

function Row({ time, what, fresh }: { time: string; what: string; fresh?: boolean }) {
  return (
    <li className="flex items-baseline gap-3 py-2">
      <span className="data w-14 shrink-0 font-bold">{time}</span>
      <span className="min-w-0">
        {what}
        {fresh && <span className="ml-2 rounded bg-signal text-on-signal px-1.5 py-0.5 text-sm font-bold">New</span>}
      </span>
    </li>
  );
}

const translations = [
  { lang: "en", label: "English", text: "Ice cream social Thursday at 2 in the garden. Families welcome! RSVP: wrenhollow.example/social" },
  { lang: "es", label: "Español", text: "Fiesta de helados el jueves a las 2 en el jardín. ¡Las familias son bienvenidas! Confirme aquí: wrenhollow.example/social" },
  { lang: "tl", label: "Tagalog", text: "Ice cream social sa Huwebes, 2 p.m., sa hardin. Welcome ang mga pamilya! Mag-RSVP: wrenhollow.example/social" },
];

export function PhoneFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="mx-auto w-full max-w-[17rem] rounded-[2rem] border-[6px] border-ink bg-ink">
      <div className="rounded-[1.55rem] bg-paper px-3 pb-4 pt-3 text-ink">
        <p className="border-b border-rule pb-2 text-center text-sm font-bold">{label}</p>
        {children}
      </div>
    </div>
  );
}

export function TranslatedText() {
  const [lang, setLang] = useState("en");
  const current = translations.find((t) => t.lang === lang) ?? translations[0];

  return (
    <div>
      <PhoneFrame label={sampleCommunity}>
        <p lang={current.lang} className="mt-3 rounded-2xl rounded-bl-sm bg-mist p-3 leading-snug">
          {current.text}
        </p>
      </PhoneFrame>
      <div role="group" aria-label="Show this text in another language" className="mt-3 flex flex-wrap justify-center gap-1.5">
        {translations.map((t) => (
          <button
            key={t.lang}
            type="button"
            lang={t.lang}
            aria-pressed={t.lang === lang}
            onClick={() => setLang(t.lang)}
            className={`min-h-11 cursor-pointer rounded border-2 border-ink px-3 text-sm font-bold ${t.lang === lang ? "bg-ink text-on-ink" : "bg-paper"}`}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function FamilyThread() {
  return (
    <PhoneFrame label={sampleCommunity}>
      <div className="mt-3 space-y-2 leading-snug">
        <p className="mr-5 rounded-2xl rounded-bl-sm bg-mist p-3">This week: the garden club planted tomatoes, and Thursday is the ice cream social. See the photos and menu: wrenhollow.example/week</p>
        <p className="mr-5 rounded-2xl rounded-bl-sm bg-mist p-3 font-bold underline">RSVP for Thursday</p>
        <p className="ml-8 rounded-2xl rounded-br-sm bg-ink p-3 text-on-ink">Thank you for the photos! Two of us are coming.</p>
      </div>
    </PhoneFrame>
  );
}

const printWeek = [
  ["MON", "Bingo", "10 AM"],
  ["TUE", "Garden club", "11 AM"],
  ["THU", "Ice cream social", "2 PM"],
  ["FRI", "Movie night", "6 PM"],
];

export function PrintSheet() {
  return (
    <div className="border-2 border-ink bg-paper p-4 text-ink">
      <p className="font-display text-xl font-bold leading-tight">This week at {sampleCommunity}</p>
      <ul className="mt-2">
        {printWeek.map(([day, what, time]) => (
          <li key={day} className="grid grid-cols-[3rem_1fr] gap-x-1 border-t-2 border-ink py-1.5 text-lg font-bold leading-tight">
            <span>{day}</span>
            <span>
              {what}
              <span className="block font-normal">{time}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TourPicker() {
  const days = [
    ["Tue", "12"],
    ["Wed", "13"],
    ["Thu", "14"],
    ["Fri", "15"],
  ];
  return (
    <div className="rounded-lg border-2 border-ink bg-paper p-5 text-ink sm:p-6">
      <p className="font-display text-2xl font-bold leading-tight">Book a tour of {sampleCommunity}</p>
      <div className="mt-4 grid grid-cols-4 gap-2">
        {days.map(([d, n]) => (
          <div key={n} className={`rounded border-2 border-ink py-2 text-center ${n === "14" ? "bg-ink text-on-ink" : ""}`}>
            <span className="block text-sm">{d}</span>
            <span className="data block text-xl font-bold">{n}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <div className="rounded border-2 border-ink py-2 text-center font-bold">10:30 AM</div>
        <div className="rounded border-2 border-ink bg-signal text-on-signal py-2 text-center font-bold">1:00 PM</div>
      </div>
      <p className="mt-4 rounded bg-mist p-3">
        <span className="font-bold">You&apos;re booked.</span> Thursday at 1:00 PM. We&apos;ve let the team know.
      </p>
    </div>
  );
}
