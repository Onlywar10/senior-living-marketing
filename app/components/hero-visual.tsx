"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photos = [
  { src: "/photos/family-tablet.jpg", alt: "A smiling older man holding a tablet at a table, with a younger man and a caregiver leaning in beside him.", position: "object-[55%_center]" },
  { src: "/photos/community-dining.jpg", alt: "A caregiver in a red shirt with a smiling resident in a colorful blouse, in a busy community dining room.", position: "object-[35%_center]" },
  { src: "/photos/daughter-phone.jpg", alt: "A younger woman showing her phone to an older woman on a park bench.", position: "object-center" },
  { src: "/photos/activity-table.jpg", alt: "A caregiver leaning in close with residents around an activity table.", position: "object-center" },
];

const statuses = ["On your website", "Sent to 214 families", "Ready to print"];
const beatsPerPhoto = 4;
const beatMs = 1400;

export function HeroVisual() {
  const [beat, setBeat] = useState(beatsPerPhoto - 1);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPlaying(false);
    }
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setBeat((b) => b + 1), beatMs);
    return () => window.clearInterval(timer);
  }, [playing]);

  const active = Math.floor(beat / beatsPerPhoto) % photos.length;
  const shown = playing ? beat % beatsPerPhoto : statuses.length;

  return (
    <>
      <div className="hero-photo absolute inset-x-0 top-0 overflow-hidden lg:inset-y-0 lg:left-[28%] lg:right-0">
        {photos.map((photo, i) => (
          <div key={photo.src} aria-hidden={i !== active} className={`absolute inset-0 transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}>
            <Image
              src={photo.src}
              alt={i === active ? photo.alt : ""}
              fill
              preload={i === 0}
              loading={i === 0 ? undefined : "eager"}
              sizes="100vw"
              className={`object-cover ${photo.position} ${i === active && playing ? "photo-drift" : ""}`}
            />
          </div>
        ))}
      </div>
      <div aria-hidden="true" className="hero-scrim absolute inset-0" />

      <div aria-hidden="true" className="absolute left-5 top-3 z-10 flex flex-col items-start gap-1 sm:left-10 lg:bottom-32 lg:left-auto lg:right-10 lg:top-auto lg:items-end lg:gap-2">
        <span className="rounded bg-paper/95 px-2 py-0.5 text-[0.8rem] text-ink-soft">Sample post</span>
        {statuses.map((status, i) =>
          i < shown ? (
            <span key={status} className="status-pop inline-flex items-center gap-2 rounded bg-paper px-2.5 py-1 font-display text-[0.85rem] font-bold text-ink shadow-md sm:px-3 sm:py-1.5 sm:text-[1.05rem]">
              <span className="size-2.5 rounded-full bg-signal" />
              {status}
            </span>
          ) : null,
        )}
      </div>

      <button
        type="button"
        onClick={() => setPlaying(!playing)}
        aria-label={playing ? "Pause the photos and messages" : "Play the photos and messages"}
        className="absolute right-4 top-3 z-10 flex size-11 cursor-pointer items-center justify-center rounded bg-ink/85 text-on-ink hover:bg-ink sm:right-10"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="currentColor">
          {playing ? <path d="M7 5h4v14H7zM13 5h4v14h-4z" /> : <path d="M8 5l11 7-11 7z" />}
        </svg>
      </button>

      <div className="absolute bottom-6 right-10 z-10 hidden w-[26rem] grid-cols-4 gap-1.5 lg:grid">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            aria-label={`Show photo ${i + 1} of ${photos.length}`}
            aria-pressed={i === active}
            onClick={() => {
              setBeat(i * beatsPerPhoto + beatsPerPhoto - 1);
              setPlaying(false);
            }}
            className={`relative h-16 cursor-pointer overflow-hidden rounded ${i === active ? "" : "opacity-80 hover:opacity-100"}`}
          >
            <Image src={photo.src} alt="" fill sizes="7rem" className={`object-cover ${photo.position}`} />
            {i === active && <span className="absolute inset-0 rounded ring-[3px] ring-inset ring-signal-bright" />}
          </button>
        ))}
      </div>
    </>
  );
}
