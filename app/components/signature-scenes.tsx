"use client";

import Image from "next/image";
import { sampleCommunity } from "../content";
import type { SolutionId } from "../solutions-content";
import { LiveWebsiteStory } from "./live-website-story";
import { PostFlow } from "./post-flow";
import { useStory } from "./story";

type SceneProps = { step: number };

function Show({ on, children, className = "" }: { on: boolean; children: React.ReactNode; className?: string }) {
  return <div className={`transition-all duration-500 ${on ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"} ${className}`}>{children}</div>;
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-lg bg-paper p-4 text-ink sm:p-5 ${className}`}>{children}</div>;
}

const copy = {
  en: { text: "This week: ice cream social Thursday. Family barbecue Saturday.", rsvp: "RSVP for the barbecue", done: "You're going!" },
  es: { text: "Esta semana: fiesta de helados el jueves. Parrillada familiar el sábado.", rsvp: "Confirmar asistencia", done: "¡Confirmado!" },
};

const tracker = ["Delivered", "Viewed", "1 reply"];

function FamilyScene({ step }: SceneProps) {
  const lang = step >= 3 ? "es" : "en";
  const replied = step >= 5;
  const lit = [step >= 1, step >= 2, replied];
  return (
    <div className="grid items-center gap-6 md:grid-cols-[minmax(0,5fr)_minmax(0,4fr)]">
      <div className="mx-auto w-full max-w-[21rem] rounded-[1.8rem] border-[6px] border-on-ink-soft bg-paper p-3 text-ink">
        <div className="flex items-center justify-between gap-2 border-b border-rule pb-2">
          <p className="font-bold">{sampleCommunity}</p>
          <span className="tag text-ink-soft">{lang === "es" ? "Español" : "English"}</span>
        </div>
        <Show on={step >= 1} className="mt-3">
          <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
            <Image src="/photos/lounge-visit.jpg" alt="" fill sizes="20rem" className="object-cover object-[45%_15%]" />
          </div>
          <p lang={lang} className="rounded-b-lg bg-steel p-3 leading-snug">
            {copy[lang].text}
          </p>
          <p lang={lang} className={`mt-2 rounded px-3 py-2 text-center font-bold transition-colors duration-500 ${step >= 4 ? "bg-ink text-on-ink" : "bg-signal text-on-signal"}`}>
            {step >= 4 ? copy[lang].done : copy[lang].rsvp}
          </p>
        </Show>
      </div>
      <ul className="grid gap-3">
        {tracker.map((label, i) => (
          <li key={label} className={`flex items-center gap-3 rounded-lg p-3 font-display text-[1.2rem] font-bold transition-colors duration-500 sm:text-[1.4rem] ${lit[i] ? "bg-signal text-on-signal" : "bg-ink-rule text-on-ink-soft"}`}>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
              {lit[i] ? <path d="M5 13l4 4L19 7" /> : <path d="M6 12h12" />}
            </svg>
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

const inquiryTrail = ["Tour booked for Thursday", "Confirmation sent to the family", "Sent to your team", "In your sales system"];

function InquiriesScene({ step }: SceneProps) {
  return (
    <div className="grid items-center gap-5 md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
      <Card className="min-h-[21rem]">
        <div className="flex items-center justify-between gap-3 border-b border-rule pb-2">
          <p className="font-bold">{sampleCommunity}</p>
          <span className="data text-[1.25rem] font-bold">{step >= 3 ? "11:44 PM" : "11:42 PM"}</span>
        </div>
        <div className="mt-3 grid gap-2.5">
          <Show on={step >= 0} className="ml-8">
            <p className="rounded-2xl rounded-br-sm bg-ink px-3 py-2 leading-snug text-on-ink">Do you have memory care?</p>
          </Show>
          <Show on={step >= 1} className="mr-6">
            <p className="rounded-2xl rounded-bl-sm bg-steel px-3 py-2 leading-snug">
              <span className="block text-[0.85rem] font-bold">Website assistant (AI)</span>
              Yes, we do. Would you like to come see it? You can book a tour here.
            </p>
          </Show>
          <Show on={step >= 2} className="grid grid-cols-3 gap-1.5 text-center">
            {["Tue", "Thu", "Fri"].map((day) => (
              <span key={day} className={`rounded border-2 border-ink py-1.5 font-bold ${day === "Thu" ? "bg-ink text-on-ink" : ""}`}>
                {day}
              </span>
            ))}
          </Show>
        </div>
      </Card>
      <ul className="grid gap-2.5">
        {inquiryTrail.map((label, i) => {
          const lit = step >= i + 2;
          return (
            <li key={label} className={`flex items-center gap-3 rounded-lg p-3 font-bold leading-snug transition-colors duration-500 sm:text-[1.1rem] ${lit ? "bg-signal text-on-signal" : "bg-ink-rule text-on-ink-soft"}`}>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
                {lit ? <path d="M5 13l4 4L19 7" /> : <path d="M6 12h12" />}
              </svg>
              {label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const stories = {
  family: {
    Scene: FamilyScene,
    label: "A weekly highlights message with a photo reaches a daughter's phone in English, then in Spanish. She taps to RSVP for the family barbecue, and a tracker shows delivered, viewed and one reply.",
    captions: ["This week's highlights go out.", "It reaches a daughter's phone, with a photo.", "She views it.", "Same message, in her language.", "She taps to RSVP for the barbecue.", "You see it landed, and you got a reply."],
  },
  inquiries: {
    Scene: InquiriesScene,
    label: "At 11:42 at night a family asks the website assistant about memory care. It answers and offers a tour link. They book for Thursday, a confirmation goes out, and it reaches the team and the sales system.",
    captions: ["11:42 PM. A family asks about memory care.", "The website assistant answers from your own information.", "They book a tour for Thursday.", "A confirmation goes out.", "Your team gets it.", "It's waiting in your sales system."],
  },
};

export function SignatureScene({ id }: { id: SolutionId }) {
  if (id === "website") return <LiveWebsiteStory />;
  if (id === "post") return <PostFlow receipt />;
  return <StoryScene id={id} />;
}

function StoryScene({ id }: { id: Exclude<SolutionId, "post" | "website"> }) {
  const { Scene, label, captions } = stories[id];
  const { ref, step, playing, toggle } = useStory<HTMLDivElement>(captions.length);
  return (
    <div ref={ref}>
      <p aria-hidden="true" className="mb-5 min-h-[2.2em] font-display text-[1.35rem] font-bold leading-tight tracking-tight text-signal-bright sm:text-[1.7rem]">
        <span key={step} className="status-pop inline-block">
          {captions[step]}
        </span>
      </p>
      <div role="img" aria-label={label}>
        <div aria-hidden="true">
          <Scene step={step} />
        </div>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[0.95rem] text-on-ink-soft">Sample community, for illustration.</p>
        <button type="button" onClick={toggle} className="btn btn-ghost-dark !min-h-11 !px-4 !py-1.5 !text-[0.95rem]">
          {playing ? "Pause animation" : "Play animation"}
        </button>
      </div>
    </div>
  );
}
