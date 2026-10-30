"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { sampleCommunity } from "../content";

const destinations = [
  { title: "On your website", detail: `Today at ${sampleCommunity}`, status: "Live", image: "/previews/your-website.png", position: "object-left-top", line: "M0 150H40V50H100" },
  { title: "To 214 families", detail: "By text and email, in their language", status: "Sent", image: "/photos/woman-phone.jpg", position: "object-center", line: "M0 150H100" },
  { title: "On large-print paper", detail: "Calendars, menus and flyers", status: "Ready", image: "/photos/woman-pinning-wall.jpg", position: "object-center", line: "M0 150H40V250H100" },
];

const stepSeconds = 0.5;

function delay(i: number) {
  return { "--d": `${i * stepSeconds}s` } as React.CSSProperties;
}

export function PostFlow() {
  const root = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(true);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPlaying(false);
    }
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 });
    if (root.current) observer.observe(root.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={root} className={playing && inView ? "is-flowing" : ""}>
      <div className="grid lg:grid-cols-[minmax(0,4fr)_minmax(0,2fr)_minmax(0,6fr)]">
        <div className="self-center overflow-hidden rounded-lg bg-paper text-ink">
          <div className="relative aspect-[16/9]">
            <Image src="/photos/community-dining.jpg" alt="A caregiver with a smiling resident in a busy community dining room." fill sizes="(min-width: 1024px) 30vw, 95vw" className="object-cover object-[35%_center]" />
          </div>
          <div className="p-4">
            <p className="text-[0.95rem] text-ink-soft">One post, from your staff</p>
            <p className="mt-1 font-display text-[1.5rem] font-bold leading-tight tracking-tight">Ice cream social</p>
            <p className="mt-1">Thursday at 2, in the garden</p>
          </div>
        </div>

        <svg aria-hidden="true" viewBox="0 0 100 300" preserveAspectRatio="none" className="hidden h-full w-full lg:block" fill="none">
          {destinations.map((d) => (
            <path key={d.line} d={d.line} stroke="var(--ink-rule)" strokeWidth="3" vectorEffect="non-scaling-stroke" />
          ))}
          {destinations.map((d, i) => (
            <path key={d.line} d={d.line} pathLength={100} className="flow-line" style={delay(i)} stroke="var(--signal-bright)" strokeWidth="5" strokeLinecap="square" vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
        <svg aria-hidden="true" viewBox="0 0 10 40" className="mx-auto h-12 w-6 lg:hidden" fill="none">
          <path d="M5 0V40" stroke="var(--ink-rule)" strokeWidth="2" />
          <path d="M5 0V40" pathLength={100} className="flow-line" style={delay(0)} stroke="var(--signal-bright)" strokeWidth="3" />
        </svg>

        <ul className="grid gap-3 lg:grid-rows-3">
          {destinations.map((d, i) => (
            <li key={d.title} className="flow-dest grid grid-cols-[6.5rem_minmax(0,1fr)_auto] items-center gap-x-3 overflow-hidden rounded-lg bg-paper pr-3 text-ink sm:grid-cols-[9rem_minmax(0,1fr)_auto] sm:gap-x-4 sm:pr-5" style={delay(i)}>
              <span className="relative block h-full min-h-[5.5rem] self-stretch bg-steel sm:min-h-[6.5rem]">
                <Image src={d.image} alt="" fill sizes="10rem" className={`object-cover ${d.position}`} />
              </span>
              <span className="py-2">
                <span className="block font-display text-[1.05rem] font-bold leading-tight tracking-tight sm:text-[1.3rem]">{d.title}</span>
                <span className="mt-0.5 block text-[0.9rem] leading-snug text-ink-soft sm:text-[0.95rem]">{d.detail}</span>
              </span>
              <span className="tag tag-live flow-status" style={delay(i)}>
                {d.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[0.95rem] text-on-ink-soft">Sample community, for illustration.</p>
        <button type="button" onClick={() => setPlaying(!playing)} className="btn btn-ghost-dark !min-h-11 !px-4 !py-1.5 !text-[0.95rem]">
          {playing ? "Pause animation" : "Play animation"}
        </button>
      </div>
    </div>
  );
}
