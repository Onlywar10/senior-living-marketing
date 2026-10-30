"use client";

import { useEffect, useRef, useState } from "react";
import { BrowserMock, PrintSheet, TranslatedText } from "./mocks";
import { sampleCommunity } from "../content";

const steps = [
  "Approved by your manager",
  "On the website",
  "Sent to 214 families",
  "Ready to print",
];

function Destination({ reached, title, stamp, children }: { reached: boolean; title: string; stamp: string; children: React.ReactNode }) {
  return (
    <figure>
      <figcaption className="mb-2 font-bold">{title}</figcaption>
      <div className={reached ? "panel-live" : "panel-wait"}>{children}</div>
      <div aria-hidden="true" className="mt-3 flex min-h-8 items-start justify-end">
        {reached && <span className="tag tag-live signal-on">{stamp}</span>}
      </div>
    </figure>
  );
}

export function PostOnceDemo() {
  const [step, setStep] = useState(steps.length);
  const [running, setRunning] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  function post() {
    if (running) return;
    timers.current.forEach(clearTimeout);
    setStep(0);
    setRunning(true);
    timers.current = steps.map((_, i) =>
      window.setTimeout(() => {
        setStep(i + 1);
        if (i === steps.length - 1) setRunning(false);
      }, 500 + i * 850),
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,9fr)] lg:gap-10">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-lg bg-paper p-5 lift sm:p-6">
          <p className="font-bold">New post, {sampleCommunity}</p>
          <p className="mt-3 font-display text-2xl font-bold leading-tight">Ice cream social</p>
          <p className="mt-1">Thursday at 2:00, in the garden. Families welcome.</p>
          <button type="button" onClick={post} aria-disabled={running} className={`btn btn-primary mt-5 w-full ${running ? "cursor-wait opacity-70" : ""}`}>
            {running ? "Sending it out…" : step === steps.length ? "Post it, and watch it go" : "Post it"}
          </button>
          <h3 className="mt-6 font-display text-xl font-bold">Where it went</h3>
          <ul className="mt-2 space-y-1.5">
            {steps.map((label, i) => (
              <li key={label} className={`flex items-start gap-2 ${step > i ? "" : "text-ink-soft"}`}>
                <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-1 size-5 shrink-0">
                  <circle cx="10" cy="10" r="9" fill={step > i ? "var(--signal-ink)" : "none"} stroke={step > i ? "var(--signal-ink)" : "var(--ink-soft)"} strokeWidth="1.5" />
                  {step > i && <path d="M5.5 10.5l3 3 6-7" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
                </svg>
                <span className={step > i ? "font-bold" : ""}>{label}</span>
              </li>
            ))}
          </ul>
          <p role="status" className="sr-only">
            {step === 0 ? "Sending it out." : step === steps.length ? "Done. On the website, sent to 214 families, ready to print." : steps[step - 1]}
          </p>
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-2 md:gap-6">
        <p className="text-[0.9rem] text-ink-soft md:col-span-2">Sample screens for a made-up community.</p>
        <div className="md:col-span-2">
          <Destination reached={step >= 2} title="On your website" stamp="On the website">
            <BrowserMock />
          </Destination>
        </div>
        <Destination reached={step >= 3} title="In families' texts, in their language" stamp="Sent to 214">
          <TranslatedText />
        </Destination>
        <Destination reached={step >= 4} title="On large-print paper for residents" stamp="Ready to print">
          <PrintSheet />
        </Destination>
      </div>
    </div>
  );
}
