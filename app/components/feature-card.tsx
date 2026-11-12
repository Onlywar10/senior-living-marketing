"use client";

import { createContext, useContext, useId, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import type { IconName } from "../solutions-content";
import { FeatureIcon } from "./feature-icon";
import { featureVisuals } from "./feature-visuals";

type Feature = { icon: IconName; name: string; benefit: string; visual?: string; caption?: string };

const OpenFeature = createContext<{ open: string | null; setOpen: (name: string | null) => void }>({ open: null, setOpen: () => {} });

// Wraps every feature list on a page so only one feature can be open at a time.
export function FeatureAccordion({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<string | null>(null);
  return <OpenFeature.Provider value={{ open, setOpen }}>{children}</OpenFeature.Provider>;
}

// Grid order: on phones (one column) the open panel sits right under its card; from md
// (two columns) it sits under the pair, so the two cards stay side by side.
const order = (mobile: number, wide: number) => ({ "--o": mobile, "--om": wide }) as CSSProperties;
const ordered = "order-[var(--o)] md:order-[var(--om)]";

// A group of features on a solution page. Features with a visual open a panel with a quick
// graphic and a caption; the graphic mounts on open, so its animation plays each time.
export function FeatureList({ features }: { features: readonly Feature[] }) {
  const { open, setOpen } = useContext(OpenFeature);
  const uid = useId();
  const openIndex = features.findIndex((feature) => feature.name === open);
  const openFeature = openIndex >= 0 ? features[openIndex] : undefined;
  const Visual = openFeature?.visual ? featureVisuals[openFeature.visual] : undefined;
  const panel = useRef<HTMLLIElement>(null);

  // Opening a feature closes one above it, which can pull this one off the top of the screen.
  useLayoutEffect(() => {
    if (!panel.current) return;
    const card = panel.current.parentElement?.children[openIndex] as HTMLElement | undefined;
    const top = (card ?? panel.current).getBoundingClientRect().top;
    if (top < 120) window.scrollBy({ top: top - 140, behavior: "instant" });
  }, [openIndex]);

  return (
    <ul className="mt-3 grid gap-3 md:grid-cols-2">
      {features.map((feature, i) => {
        const summary = (
          <>
            <FeatureIcon name={feature.icon} />
            <span className="block flex-1">
              <span className="block font-display text-[1.2rem] font-bold leading-tight">{feature.name}</span>
              <span className="mt-1 block leading-snug">{feature.benefit}</span>
            </span>
          </>
        );
        const style = order(i * 2, Math.floor(i / 2) * 4 + (i % 2));
        if (!feature.visual) {
          return (
            <li key={feature.name} style={style} className={`reveal flex gap-3.5 rounded-lg bg-paper p-4 ${ordered}`}>
              {summary}
            </li>
          );
        }
        const isOpen = i === openIndex;
        return (
          <li key={feature.name} style={style} className={`reveal rounded-lg bg-paper transition-shadow duration-200 ${ordered} ${isOpen ? "lift outline outline-2 outline-signal" : ""}`}>
            <button type="button" aria-expanded={isOpen} aria-controls={`${uid}-panel`} onClick={() => setOpen(isOpen ? null : feature.name)} className="group flex h-full w-full cursor-pointer gap-3.5 rounded-lg p-4 text-left">
              {summary}
              <span className="flex shrink-0 items-center gap-1.5 self-center font-display text-[0.95rem] font-bold text-signal-ink">
                <span className="max-sm:sr-only">{isOpen ? "Hide" : "See it"}</span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className={`size-6 transition-transform duration-200 ${isOpen ? "rotate-45" : "group-hover:rotate-90"}`}>
                  <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
                </svg>
              </span>
            </button>
          </li>
        );
      })}
      <li
        ref={panel}
        id={`${uid}-panel`}
        hidden={!openFeature}
        style={order(openIndex * 2 + 1, Math.floor(openIndex / 2) * 4 + 2)}
        className={`lift rounded-lg bg-paper p-4 md:col-span-2 ${ordered}`}
      >
        {openFeature && Visual && (
          <figure key={openFeature.name} className="status-pop">
            <div aria-hidden="true">
              <Visual />
            </div>
            <figcaption className="mt-3 max-w-[48rem] text-[1.05rem] leading-snug">{openFeature.caption}</figcaption>
          </figure>
        )}
      </li>
    </ul>
  );
}
