"use client";

import Image from "next/image";
import { Fragment, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { sampleCommunity } from "../content";
import { useStory } from "./story";

// Each step runs 7 seconds, as two 3.5-second beats.
const BEAT_MS = 3500;
const STACK_BELOW = 900;
const GAP = 12;
const BAR = 14;
const EASE = "duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]";

export type StepState = { step: number; current: boolean; animate: boolean; playing: boolean };

export type Stage = {
  label: string;
  from: number;
  to: number;
  alt: string;
  screen: (state: StepState) => ReactNode;
};

// Staggers a step's own animation. With animate off, everything simply shows its finished state.
export function timed(animate: boolean, className: string, delay: number) {
  if (!animate) return { className: "" };
  return { className, style: { "--d": `${delay}s` } as CSSProperties };
}

export function AppBar({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-rule px-4 py-2">
      <div className="flex min-w-0 items-center gap-2">
        <Image src="/brand/kinlight-icon.png" alt="" width={24} height={24} className="size-6 shrink-0" />
        <p className="truncate font-bold">{sampleCommunity} posts</p>
      </div>
      {children}
    </div>
  );
}

export function ClickCursor({ className = "left-1/2 top-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`cursor-move absolute size-8 drop-shadow-[0_2px_3px_rgb(0_16_48/0.5)] ${className}`}>
      <path d="M5 2l14 11h-7l4 8-3 1.5-4-8-4 5z" fill="var(--ink)" stroke="var(--paper)" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function enlargedWidth(width: number) {
  return width < STACK_BELOW ? width : Math.round(width * 0.6);
}

// Fixed so a longer caption can never change the height of the row.
function headerHeight(width: number) {
  if (width >= STACK_BELOW) return 58;
  return width < 600 ? 72 : 52;
}

// All the steps at once, with the current one enlarged. It loops for as long as it's in view.
export function StepStory({ stages, captions, beats }: { stages: Stage[]; captions: string[]; beats: number[] }) {
  const { ref, step, playing, running, restarts, toggle, jump } = useStory<HTMLDivElement>(beats.length, { stepMs: BEAT_MS, holdBeats: 0 });
  const beat = beats[step];
  const row = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ width: number; height: number } | null>(null);

  // Every screen is laid out at the enlarged width and shrunk with a transform, so the small
  // ones are true miniatures. The height is the tallest screen at that width.
  useLayoutEffect(() => {
    const el = row.current;
    if (!el) return;
    let lastWidth = 0;
    const measure = (force = false) => {
      const width = el.clientWidth;
      if (!width || (width === lastWidth && !force)) return;
      lastWidth = width;
      const big = enlargedWidth(width);
      const screens = [...el.querySelectorAll<HTMLElement>("[data-screen]")];
      screens.forEach((screen) => {
        screen.style.width = `${big}px`;
        screen.style.height = "auto";
      });
      const height = Math.max(...screens.map((screen) => screen.offsetHeight));
      screens.forEach((screen) => {
        screen.style.height = `${height}px`;
      });
      setSize({ width, height });
    };
    measure();
    const resized = new ResizeObserver(() => measure());
    resized.observe(el);
    document.fonts?.ready.then(() => measure(true));
    return () => resized.disconnect();
  }, []);

  const stacked = size ? size.width < STACK_BELOW : true;
  const big = size ? enlargedWidth(size.width) : 0;
  const small = size ? (stacked ? (size.width - GAP * 2) / 3 : (size.width - big - GAP * 3) / 3) : 0;
  const header = size ? headerHeight(size.width) : 0;
  const rowHeight = size ? header + BAR + size.height + (stacked ? GAP + 44 + BAR + (size.height * small) / big : 0) : undefined;

  return (
    <div ref={ref}>
      <div ref={row} className={`flex items-start ${stacked ? "flex-wrap content-start" : ""}`} style={{ gap: GAP, height: rowHeight }}>
        {stages.map((stage, i) => {
          const current = step >= stage.from && step <= stage.to;
          const animate = current && playing;
          const scale = current ? 1 : small / big;
          return (
            <div
              key={stage.label}
              style={size ? { width: current ? big : small, order: stacked && current ? -1 : 0 } : undefined}
              className={`min-w-0 shrink-0 ${stacked ? "" : `transition-[width] ${EASE}`} ${!size ? (current ? "w-full" : "hidden") : ""}`}
            >
              <button
                type="button"
                onClick={() => jump(stage.from)}
                aria-current={current ? "step" : undefined}
                style={size ? { height: current || !stacked ? header : 44 } : undefined}
                className={`flex w-full items-center gap-2 overflow-hidden pb-2 text-left font-display font-bold leading-tight ${current ? "text-signal-bright" : "text-on-ink-soft hover:text-on-ink"}`}
              >
                <span className={`flex size-7 shrink-0 items-center justify-center rounded-full text-[0.95rem] ${current ? "bg-signal text-on-signal" : "border border-on-ink-soft"}`}>{i + 1}</span>
                {current ? (
                  <span key={beat} style={size && !stacked ? { width: big - 36, flexShrink: 0 } : undefined} className="status-pop text-[1.2rem] tracking-tight sm:text-[1.5rem]">
                    <span className="sr-only">{stage.label}: </span>
                    {captions[beat]}
                  </span>
                ) : (
                  <span className="text-[0.95rem] sm:text-[1.05rem]">{stage.label}</span>
                )}
              </button>
              <span aria-hidden="true" className="mb-2 block h-1.5 overflow-hidden rounded-full bg-ink-rule">
                {(current || step > stage.to) && (
                  <span
                    key={animate ? `running-${restarts}` : "full"}
                    style={{ animationDuration: `${BEAT_MS * 2}ms`, animationPlayState: running ? "running" : "paused" }}
                    className={`block h-full rounded-full bg-signal-bright ${animate ? "progress-fill" : ""}`}
                  />
                )}
              </span>
              <div
                role={current ? "img" : undefined}
                aria-label={current ? stage.alt : undefined}
                aria-hidden={current ? undefined : true}
                onClick={current ? undefined : () => jump(stage.from)}
                style={size ? { height: size.height * scale } : undefined}
                className={`relative overflow-hidden rounded-lg ${stacked ? "" : `transition-[height] ${EASE}`} ${current ? "" : "cursor-pointer"}`}
              >
                <div
                  data-screen=""
                  style={size ? { width: big, height: size.height, transform: `scale(${scale})` } : undefined}
                  className={size ? `absolute left-0 top-0 origin-top-left ${stacked ? "" : `transition-transform ${EASE}`}` : ""}
                >
                  <Fragment key={current ? restarts : 0}>{stage.screen({ step, current, animate, playing })}</Fragment>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[0.95rem] text-on-ink-soft">Sample community, for illustration.</p>
        <button type="button" onClick={toggle} className="btn btn-ghost-dark !min-h-11 !px-4 !py-1.5 !text-[0.95rem]">
          {playing ? "Pause animation" : "Play animation"}
        </button>
      </div>
    </div>
  );
}
