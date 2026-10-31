"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { sampleCommunity } from "../content";

const destinations = [
  { title: "On your website", detail: `Today at ${sampleCommunity}`, status: "Live", image: "/previews/your-website.png", position: "object-left-top" },
  { title: "To 214 families", detail: "By text and email, in their language", status: "Sent", image: "/photos/woman-phone.jpg", position: "object-center" },
  { title: "On large-print paper", detail: "Calendars, menus and flyers", status: "Ready", image: "/photos/woman-pinning-wall.jpg", position: "object-center" },
];

// The story, in seconds. Each line draws in turn and stays lit.
const lineTimes = [
  [0.9, 1.9],
  [2.6, 3.6],
  [4.3, 5.3],
];
const captions = [
  { at: 0, text: "Staff post it once." },
  { at: 0.9, text: "It goes live on your website." },
  { at: 2.6, text: "214 families get it by text and email." },
  { at: 4.3, text: "It's ready to print, in large type." },
  { at: 5.6, text: "Done. Your staff did it once." },
];
const finished = 5.6;
const loop = 9.5;

type Route = { line: string; arrow: string };

function captionAt(t: number) {
  return captions.reduce((found, c, i) => (t >= c.at ? i : found), 0);
}

function litAt(t: number) {
  return lineTimes.filter(([, end]) => t >= end).length;
}

function route(sx: number, sy: number, jx: number, ex: number, dy: number, r: number) {
  const arrow = `M${ex - 11} ${dy - 8}L${ex} ${dy}L${ex - 11} ${dy + 8}`;
  if (Math.abs(dy - sy) < 2 * r) return { line: `M${sx} ${dy}H${ex}`, arrow };
  const dir = dy > sy ? 1 : -1;
  return { line: `M${sx} ${sy}H${jx - r}Q${jx} ${sy} ${jx} ${sy + dir * r}V${dy - dir * r}Q${jx} ${dy} ${jx + r} ${dy}H${ex}`, arrow };
}

function phoneRoute(sy: number, jx: number, ex: number, dy: number, r: number) {
  return { line: `M${jx} ${sy}V${dy - r}Q${jx} ${dy} ${jx + r} ${dy}H${ex}`, arrow: `M${ex - 9} ${dy - 7}L${ex} ${dy}L${ex - 9} ${dy + 7}` };
}

export function PostFlow() {
  const root = useRef<HTMLDivElement>(null);
  const source = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLLIElement | null)[]>([]);
  const lines = useRef<(SVGPathElement | null)[]>([]);
  const heads = useRef<(SVGCircleElement | null)[]>([]);
  const time = useRef(finished);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [routes, setRoutes] = useState<Route[]>([]);
  const [playing, setPlaying] = useState(true);
  const [inView, setInView] = useState(false);
  const [caption, setCaption] = useState(captions.length - 1);
  const [lit, setLit] = useState(destinations.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPlaying(false);
    }
    const seen = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) time.current = 0;
        setInView(entry.isIntersecting);
      },
      { threshold: 0.35 },
    );
    if (root.current) seen.observe(root.current);
    return () => seen.disconnect();
  }, []);

  useEffect(() => {
    function measure() {
      const box = root.current?.getBoundingClientRect();
      const from = source.current?.getBoundingClientRect();
      if (!box || !from) return;
      const wide = window.matchMedia("(min-width: 64rem)").matches;
      setSize({ w: box.width, h: box.height });
      setRoutes(
        cards.current.map((card) => {
          const to = card!.getBoundingClientRect();
          const dy = to.top + to.height / 2 - box.top;
          const ex = to.left - box.left - 4;
          if (!wide) return phoneRoute(from.bottom - box.top, 9, ex, dy, 8);
          const sx = from.right - box.left;
          return route(sx, from.top + from.height / 2 - box.top, sx + (to.left - from.right) / 2, ex, dy, 14);
        }),
      );
    }
    measure();
    const watch = new ResizeObserver(measure);
    if (root.current) watch.observe(root.current);
    return () => watch.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    let last = performance.now();
    function draw(now: number) {
      const running = playing && inView;
      if (running) time.current = (time.current + (now - last) / 1000) % loop;
      last = now;
      const t = playing ? time.current : finished;
      lineTimes.forEach(([start, end], i) => {
        const path = lines.current[i];
        const head = heads.current[i];
        if (!path || !head) return;
        const length = path.getTotalLength();
        const f = Math.min(1, Math.max(0, (t - start) / (end - start)));
        const eased = 1 - (1 - f) ** 3;
        path.style.strokeDasharray = `${length} ${length}`;
        path.style.strokeDashoffset = `${length * (1 - eased)}`;
        const moving = f > 0 && f < 1;
        head.style.opacity = moving ? "1" : "0";
        if (moving) {
          const point = path.getPointAtLength(length * eased);
          head.setAttribute("cx", `${point.x}`);
          head.setAttribute("cy", `${point.y}`);
        }
      });
      setCaption(captionAt(t));
      setLit(litAt(t));
      frame = requestAnimationFrame(draw);
    }
    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [playing, inView, routes]);

  const posted = caption > 0 || !playing;

  return (
    <div>
      <p aria-hidden="true" className="mb-6 min-h-[2.2em] font-display text-[1.35rem] font-bold leading-tight tracking-tight text-signal-bright sm:text-[1.7rem]">
        <span key={caption} className="status-pop inline-block">
          {captions[caption].text}
        </span>
      </p>
      <div ref={root} className="relative grid gap-y-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,2fr)_minmax(0,6fr)]">
        <svg aria-hidden="true" width={size.w} height={size.h} viewBox={`0 0 ${size.w || 1} ${size.h || 1}`} className="pointer-events-none absolute inset-0 z-0" fill="none">
          {routes.map((r) => (
            <path key={r.line} d={r.line} stroke="var(--ink-rule)" strokeWidth="2.5" strokeDasharray="2 7" strokeLinecap="round" />
          ))}
          {routes.map((r, i) => (
            <path
              key={r.line}
              ref={(el) => {
                lines.current[i] = el;
              }}
              d={r.line}
              stroke="var(--signal-bright)"
              strokeWidth="5"
              strokeLinejoin="round"
            />
          ))}
          {routes.map((r, i) => (
            <path key={r.arrow} d={r.arrow} stroke="var(--signal-bright)" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter" className={`transition-opacity duration-200 ${i < lit ? "opacity-100" : "opacity-0"}`} />
          ))}
          {routes.map((r, i) => (
            <circle
              key={r.line}
              ref={(el) => {
                heads.current[i] = el;
              }}
              r="9"
              fill="var(--paper)"
              stroke="var(--signal)"
              strokeWidth="4"
              style={{ opacity: 0 }}
            />
          ))}
        </svg>

        <div ref={source} className={`relative z-10 self-center overflow-hidden rounded-lg bg-paper text-ink transition-shadow duration-300 ${caption === 0 && playing ? "shadow-[0_0_0_4px_var(--signal-bright)]" : ""}`}>
          <div className="relative aspect-[16/9]">
            <Image src="/photos/community-dining.jpg" alt="A caregiver with a smiling resident in a busy community dining room." fill sizes="(min-width: 1024px) 30vw, 95vw" className="object-cover object-[35%_center]" />
          </div>
          <div className="flex items-start justify-between gap-3 p-4">
            <div>
              <p className="text-[0.95rem] text-ink-soft">One post, from your staff</p>
              <p className="mt-1 font-display text-[1.5rem] font-bold leading-tight tracking-tight">Ice cream social</p>
              <p className="mt-1">Thursday at 2, in the garden</p>
            </div>
            <span className={`tag transition-colors duration-300 ${posted ? "tag-live" : "text-ink-soft"}`}>{posted ? "Posted" : "Posting"}</span>
          </div>
        </div>

        <div className="hidden lg:block" />

        <ul className="relative z-10 grid gap-3 pl-7 lg:grid-rows-3 lg:pl-0">
          {destinations.map((d, i) => {
            const arrived = i < lit;
            return (
              <li
                key={d.title}
                ref={(el) => {
                  cards.current[i] = el;
                }}
                className={`grid grid-cols-[5.5rem_minmax(0,1fr)_auto] items-center gap-x-3 overflow-hidden rounded-lg bg-paper pr-3 text-ink transition-all duration-300 sm:grid-cols-[9rem_minmax(0,1fr)_auto] sm:gap-x-4 sm:pr-5 ${arrived ? "opacity-100 shadow-[0_0_0_3px_var(--signal-bright)]" : "opacity-50"}`}
              >
                <span className="relative block h-full min-h-[5.5rem] self-stretch bg-steel sm:min-h-[6.5rem]">
                  <Image src={d.image} alt="" fill sizes="10rem" className={`object-cover ${d.position}`} />
                </span>
                <span className="py-2">
                  <span className="block font-display text-[1.05rem] font-bold leading-tight tracking-tight sm:text-[1.3rem]">{d.title}</span>
                  <span className="mt-0.5 block text-[0.9rem] leading-snug text-ink-soft sm:text-[0.95rem]">{d.detail}</span>
                </span>
                {arrived ? (
                  <span key="done" className="tag tag-live status-pop">
                    {d.status}
                  </span>
                ) : (
                  <span key="wait" className="tag text-ink-soft">
                    Waiting
                  </span>
                )}
              </li>
            );
          })}
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
