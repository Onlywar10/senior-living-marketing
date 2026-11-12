import type { CSSProperties, ReactNode } from "react";
import { sampleCommunity } from "../content";

// Quick graphics for the expandable feature cards on the solution pages. Each one plays once
// when its card opens (the animation classes take a --d delay). Most use real screens from our
// demo site (public/features/demo, captured from seniorLivingDemo with the clock pinned to
// Thursday, November 12, 10:20 am); a few ideas that a screen can't show better stay as simple
// drawings. The caption under each says the same thing in words, so the graphic is hidden from
// screen readers. Names, numbers and people are made-up samples.

const at = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;
const others = ["Cedar Point", "Maple Court"];

function Frame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className="flex min-h-[15rem] items-center overflow-hidden rounded-md border border-rule bg-mist p-4 text-[0.9rem] sm:p-5">
      <div className={`relative mx-auto flex w-full max-w-[38rem] ${className}`}>{children}</div>
    </div>
  );
}

function Tick({ className = "" }: { className?: string }) {
  return (
    <span className={`flex size-5 shrink-0 items-center justify-center rounded-full bg-signal text-on-signal ${className}`}>
      <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square">
        <path d="M5 12.5l4.5 4.5L19 7.5" />
      </svg>
    </span>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 48 48" className="size-6 shrink-0 text-ink-soft max-sm:rotate-90" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="square">
      <path d="M6 24h36M26 8l16 16-16 16" />
    </svg>
  );
}

function Sites() {
  return (
    <Frame className="flex-col items-center justify-center gap-3">
      <div className="pop-in w-full max-w-[14rem] rounded-md bg-ink px-3 py-2.5 text-center font-display font-bold text-on-ink">Your organization</div>
      <div className="pop-in h-4 w-0.5 bg-rule" style={at(0.3)} />
      <div className="grid w-full max-w-[28rem] grid-cols-3 gap-2">
        {[sampleCommunity, ...others].map((name, i) => (
          <div key={name} className="pop-in rounded-md border border-rule bg-paper p-2 text-center" style={at(0.5 + i * 0.25)}>
            <span className="mb-1.5 block h-1.5 rounded-full bg-ink" />
            <span className="font-display text-[0.85rem] font-bold leading-tight">{name}</span>
          </div>
        ))}
      </div>
      <span className="tag tag-live pop-in" style={at(1.5)}>
        Moved over for you
      </span>
    </Frame>
  );
}

function Shared() {
  return (
    <Frame className="items-center justify-center gap-4 max-sm:flex-col">
      <div className="pop-in w-full max-w-[12rem] rounded-md border border-rule bg-paper p-3">
        <p className="font-display text-[0.8rem] font-bold text-ink-soft">One update</p>
        <p className="mt-1 font-bold leading-snug">Flu shots this Thursday, in every community.</p>
        <span className="tap-press mt-2 inline-block rounded bg-signal px-2.5 py-1 font-display text-[0.8rem] font-bold text-on-signal" style={at(0.6)}>
          Post
        </span>
      </div>
      <Arrow />
      <ul className="grid w-full max-w-[13rem] gap-2">
        {[sampleCommunity, ...others].map((name, i) => (
          <li key={name} className="new-flash flex items-center justify-between gap-2 rounded-md border border-rule bg-paper px-3 py-2" style={at(1 + i * 0.3)}>
            <span className="font-display font-bold">{name}</span>
            <Tick />
          </li>
        ))}
      </ul>
    </Frame>
  );
}

function Uptime() {
  return (
    <Frame className="flex-col justify-center gap-3">
      <div className="flex items-center justify-between gap-3">
        <p className="font-display font-bold">wrenhollow.example</p>
        <span className="tag tag-live pop-in" style={at(1.2)}>
          Up
        </span>
      </div>
      <div className="flex h-10 items-end gap-[3px]">
        {Array.from({ length: 30 }, (_, i) => (
          <span key={i} className="pop-in h-full flex-1 rounded-sm bg-signal" style={at(i * 0.03)} />
        ))}
      </div>
      <p className="text-ink-soft">The last 30 days</p>
      <div className="pop-in flex items-start gap-2.5 rounded-md border border-dashed border-rule bg-paper p-3" style={at(1.6)}>
        <svg viewBox="0 0 24 24" className="mt-0.5 size-5 shrink-0 text-signal-ink" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4zM10 21h4M12 8v4M12 14h.01" />
        </svg>
        <p className="leading-snug">If it ever goes down, our team is alerted right away.</p>
      </div>
    </Frame>
  );
}

// ---------- Real screens from the demo site ----------

type Shot = { src: string; w: number; h: number };
type Box = { x: number; y: number; w: number; h: number };
type Spot = { box: Box; at: number; until?: number; label: string; place?: "above" | "below" | "inside"; align?: "left" | "right" };

// Every capture is 1440 wide; the frame shows a 1440 x 900 window onto it.
const VIEW_H = 900;
const shot = (name: string, h = VIEW_H): Shot => ({ src: `/features/demo/${name}.webp`, w: 1440, h });
const pct = (v: number, of: number) => `${(v / of) * 100}%`;

function DemoScreen({ url, base, swap, pan, spots }: { url: string; base: Shot; swap?: { shot: Shot; at: number }; pan?: { to: number; at: number; dur?: number }; spots: Spot[] }) {
  const { w: W, h: H } = base;
  const panStyle = pan ? ({ "--to": `-${pct(pan.to, H)}`, "--d": `${pan.at}s`, "--dur": `${pan.dur ?? 1.6}s` } as CSSProperties) : undefined;
  return (
    <div className="mx-auto max-w-[56rem] overflow-hidden rounded-md border border-rule bg-paper shadow-[0_14px_30px_-20px_rgb(0_16_48/0.7)]">
      <div className="flex items-center gap-1.5 border-b border-rule bg-steel px-2.5 py-1.5">
        <span className="size-2 rounded-full bg-rule" />
        <span className="size-2 rounded-full bg-rule" />
        <span className="size-2 rounded-full bg-rule" />
        <span className="ml-2 truncate rounded bg-paper px-2 py-0.5 text-[0.75rem] text-ink-soft">{url}</span>
        <span className="tag ml-auto !px-1.5 !py-0.5 !text-[0.7rem] text-ink-soft">Demo site</span>
      </div>
      <div className="relative overflow-hidden bg-paper" style={{ aspectRatio: `${W} / ${VIEW_H}` }}>
        <div className={`absolute inset-x-0 top-0 ${pan ? "shot-pan" : ""}`} style={panStyle}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={base.src} width={W} height={H} alt="" className="block h-auto w-full" />
          {swap && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={swap.shot.src} width={swap.shot.w} height={swap.shot.h} alt="" className="shot-in absolute left-0 top-0 h-auto w-full" style={at(swap.at)} />
          )}
          {spots.map((spot) => {
            const b = { x: spot.box.x - 10, y: spot.box.y - 10, w: spot.box.w + 20, h: spot.box.h + 20 };
            const place = spot.place ?? "below";
            const where = place === "above" ? "bottom-full mb-2" : place === "below" ? "top-full mt-2" : "top-2";
            const side = spot.align === "right" ? (place === "inside" ? "right-2" : "right-0") : place === "inside" ? "left-2" : "left-0";
            return (
              <div
                key={spot.label}
                className="spot absolute rounded-md border-[3px] border-signal shadow-[0_0_0_9999px_rgb(0_16_48/0.42)]"
                style={{ left: pct(b.x, W), top: pct(b.y, H), width: pct(b.w, W), height: pct(b.h, H), "--d": `${spot.at}s`, "--o": `${spot.until ?? 999}s` } as CSSProperties}
              >
                <span className={`absolute ${where} ${side} w-max max-w-[15rem] rounded bg-ink px-2.5 py-1 font-display text-[0.8rem] font-bold leading-snug text-on-ink sm:text-[0.9rem]`}>{spot.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const site = "wrenhaven.example/alder-bend";
const staff = "wrenhaven.example/staff";

function CommunityPage() {
  return (
    <DemoScreen
      url={site}
      base={shot("home-day1", 2388)}
      pan={{ to: 1000, at: 0.6, dur: 1.8 }}
      swap={{ shot: shot("home-day2", 2434), at: 5.4 }}
      spots={[
        { box: { x: 110, y: 1059, w: 1220, h: 815 }, at: 2.6, until: 5, label: "Today at Alder Bend: what's on right now", place: "inside", align: "right" },
        { box: { x: 110, y: 1100, w: 640, h: 66 }, at: 6, label: "The next morning, it has moved on by itself" },
      ]}
    />
  );
}

function Translated() {
  return (
    <DemoScreen
      url={site}
      base={shot("top-en")}
      swap={{ shot: shot("top-es"), at: 2.6 }}
      spots={[
        { box: { x: 1091, y: 2, w: 239, h: 38 }, at: 0.6, until: 2.4, label: "One tap for Español or 中文", align: "right" },
        { box: { x: 110, y: 250, w: 631, h: 584 }, at: 3, label: "The whole page, in Spanish", place: "inside" },
      ]}
    />
  );
}

function CalendarImport() {
  return (
    <DemoScreen
      url={`${site}/calendar`}
      base={shot("calendar", 1300)}
      pan={{ to: 400, at: 0.6 }}
      spots={[{ box: { x: 812, y: 870, w: 167, h: 420 }, at: 2.4, label: "Today, marked for families", place: "above" }]}
    />
  );
}

function Stale() {
  return (
    <DemoScreen
      url={`${staff}/today`}
      base={shot("today-ev", 3114)}
      pan={{ to: 2214, at: 0.6, dur: 2.2 }}
      spots={[{ box: { x: 280, y: 2848, w: 640, h: 210 }, at: 3, label: "A nudge for the page's owner", place: "above" }]}
    />
  );
}

function Numbers() {
  return (
    <DemoScreen
      url={`${staff}/reports`}
      base={shot("reports", 2578)}
      pan={{ to: 1700, at: 0.6, dur: 2 }}
      spots={[
        { box: { x: 280, y: 1943, w: 557, h: 579 }, at: 2.8, until: 4.6, label: "This month next to last month", place: "above" },
        { box: { x: 281, y: 2205, w: 555, h: 42 }, at: 4.8, label: "Website visits, up 18%", place: "above" },
      ]}
    />
  );
}

function Studio() {
  return (
    <DemoScreen
      url={`${staff}/calendar/menus`}
      base={shot("menus", 1300)}
      pan={{ to: 380, at: 0.6 }}
      spots={[
        { box: { x: 907, y: 446, w: 504, h: 232 }, at: 2.4, until: 4.2, label: "One publish: website, family digest and print", align: "right" },
        { box: { x: 906, y: 697, w: 506, h: 481 }, at: 4.4, label: "The printed menu card, filled in for you", place: "above", align: "right" },
      ]}
    />
  );
}

function Approval() {
  return (
    <DemoScreen
      url={`${staff}/today`}
      base={shot("today")}
      spots={[
        { box: { x: 280, y: 275, w: 640, h: 335 }, at: 0.6, until: 2.6, label: "Waiting for the executive director" },
        { box: { x: 299, y: 545, w: 132, h: 48 }, at: 2.8, label: "One tap to approve and publish" },
      ]}
    />
  );
}

function Access() {
  return (
    <DemoScreen
      url={site}
      base={shot("top-en")}
      swap={{ shot: shot("top-large"), at: 2.8 }}
      spots={[
        { box: { x: 756, y: 2, w: 328, h: 38 }, at: 0.6, until: 2.6, label: "Text size and high contrast, on every page" },
        { box: { x: 110, y: 295, w: 631, h: 553 }, at: 3.2, label: "Bigger text, in one tap", place: "inside" },
      ]}
    />
  );
}

function Compliance() {
  return (
    <DemoScreen
      url={site}
      base={shot("footer")}
      spots={[
        { box: { x: 110, y: 853, w: 176, h: 16 }, at: 0.6, until: 2.4, label: "Your license number", place: "above" },
        { box: { x: 998, y: 850, w: 148, h: 22 }, at: 2.6, label: "Privacy policy and accessibility statement", place: "above", align: "right" },
      ]}
    />
  );
}

// ---------- Post Once ----------

function OneStep() {
  return (
    <DemoScreen
      url={`${staff}/post`}
      base={shot("post-event", 1693)}
      pan={{ to: 793, at: 0.6 }}
      spots={[
        { box: { x: 299, y: 1232, w: 505, h: 150 }, at: 2.4, until: 4.4, label: "Website, family text, Sunday email and print", place: "above" },
        { box: { x: 841, y: 1061, w: 571, h: 577 }, at: 4.6, label: "Each one, in the right form", place: "above", align: "right" },
      ]}
    />
  );
}

function WhereItWent() {
  return (
    <DemoScreen
      url={`${staff}/post`}
      base={shot("went")}
      spots={[
        { box: { x: 299, y: 203, w: 1094, h: 63 }, at: 0.6, until: 2.4, label: "Posted, in one step" },
        { box: { x: 299, y: 284, w: 1094, h: 271 }, at: 2.6, label: "Where it went: 186 families, 140 residents and print" },
      ]}
    />
  );
}

function LargePrint() {
  return (
    <DemoScreen
      url={`${staff}/settings`}
      base={shot("settings", 2332)}
      pan={{ to: 560, at: 0.6 }}
      spots={[{ box: { x: 855, y: 708, w: 557, h: 672 }, at: 2.4, label: "Calendars, menus and flyers, ready in large print", place: "above", align: "right" }]}
    />
  );
}

function PrintStudio() {
  return (
    <DemoScreen
      url={`${staff}/post`}
      base={shot("post-flyer", 1693)}
      pan={{ to: 793, at: 0.6 }}
      spots={[
        { box: { x: 299, y: 962, w: 505, h: 141 }, at: 2.4, until: 4.2, label: "Drop in a flyer or PDF", place: "above" },
        { box: { x: 1134, y: 1061, w: 278, h: 577 }, at: 4.4, label: "The printed copy, in your brand", place: "above", align: "right" },
      ]}
    />
  );
}

function Library() {
  return (
    <DemoScreen
      url={`${staff}/post`}
      base={shot("post-event", 1693)}
      swap={{ shot: shot("post-template", 1693), at: 2.8 }}
      spots={[
        { box: { x: 299, y: 382, w: 505, h: 67 }, at: 0.6, until: 2.6, label: "Start from a template" },
        { box: { x: 299, y: 833, w: 505, h: 113 }, at: 3.2, label: "Filled in for you, ready to edit", place: "above" },
      ]}
    />
  );
}

function PhotoPost() {
  return (
    <DemoScreen
      url={`${staff}/post`}
      base={shot("post-photo", 1635)}
      spots={[
        { box: { x: 299, y: 465, w: 505, h: 120 }, at: 0.6, until: 2.4, label: "Take a photo, or pick one" },
        { box: { x: 299, y: 685, w: 505, h: 113 }, at: 2.6, until: 4.4, label: "Add a sentence", place: "above" },
        { box: { x: 841, y: 213, w: 571, h: 489 }, at: 4.6, label: "Ready for the website and families", align: "right" },
      ]}
    />
  );
}

function WritingHelp() {
  return (
    <Frame className="items-center gap-3 max-sm:flex-col sm:gap-4">
      <div className="w-full max-w-[13rem] shrink-0 rounded-md border border-rule bg-paper p-3 shadow-[0_8px_18px_-14px_rgb(0_16_48/0.6)]">
        <div className="aspect-[4/3] rounded bg-[linear-gradient(135deg,#f0a35b,#b5562a_60%,#3b2a24)]" />
        <p className="mt-2 font-bold leading-snug">&ldquo;Pumpkin carving in the Courtyard&rdquo;</p>
        <p className="text-[0.8rem] text-ink-soft">A photo and a line from your phone</p>
      </div>
      <Arrow />
      <div className="pop-in w-full rounded-md border border-rule bg-paper p-3 shadow-[0_8px_18px_-14px_rgb(0_16_48/0.6)]" style={at(0.8)}>
        <span className="tag !text-[0.75rem]">Draft</span>
        <p className="mt-2 font-display font-bold">Pumpkin carving in the Courtyard</p>
        <p className="new-flash mt-1 leading-snug text-ink-soft" style={at(1.4)}>
          Our residents brought their best ideas to the Courtyard for pumpkin carving this afternoon. Vote for your favorite in the Lobby on Friday!
        </p>
        <p className="pop-in mt-3 flex items-center gap-2 font-bold" style={at(2.6)}>
          <Tick /> Your staff check it, then post
        </p>
      </div>
    </Frame>
  );
}

// ---------- Family Connection ----------

function TextAndEmail() {
  return (
    <DemoScreen
      url={`${staff}/post`}
      base={shot("post-event", 1693)}
      pan={{ to: 300, at: 0.6 }}
      spots={[
        { box: { x: 841, y: 446, w: 278, h: 601 }, at: 2.4, until: 4.2, label: "A text to each family", place: "above" },
        { box: { x: 841, y: 1061, w: 278, h: 577 }, at: 4.4, label: "And the Sunday email", place: "above" },
      ]}
    />
  );
}

function RightFamilies() {
  return (
    <DemoScreen
      url={`${staff}/post`}
      base={shot("post-event", 1693)}
      swap={{ shot: shot("post-event-lantern", 1693), at: 3.4 }}
      pan={{ to: 600, at: 0.6 }}
      spots={[{ box: { x: 299, y: 1119, w: 505, h: 97 }, at: 2.4, label: "Everyone, or just Lantern families", place: "above" }]}
    />
  );
}

function FamilyLanguage() {
  return (
    <DemoScreen
      url={`${staff}/post`}
      base={shot("post-event", 1693)}
      swap={{ shot: shot("post-event-es", 1693), at: 3.8 }}
      pan={{ to: 300, at: 0.6 }}
      spots={[
        { box: { x: 1020, y: 455, w: 87, h: 38 }, at: 2.2, until: 3.6, label: "The same text, in Spanish", align: "right" },
        { box: { x: 841, y: 446, w: 278, h: 601 }, at: 4.2, label: "Each family, in their own language", place: "above" },
      ]}
    />
  );
}

function ManagerApproval() {
  return (
    <DemoScreen
      url={`${staff}/settings`}
      base={shot("settings", 2332)}
      spots={[
        { box: { x: 855, y: 188, w: 557, h: 502 }, at: 0.6, until: 3, label: "Who approves what", align: "right" },
        { box: { x: 1000, y: 637, w: 298, h: 34 }, at: 3.2, label: "Emergencies skip approval", align: "right" },
      ]}
    />
  );
}

function Delivery() {
  return (
    <DemoScreen
      url={`${staff}/reports`}
      base={shot("reports", 2578)}
      pan={{ to: 400, at: 0.6 }}
      spots={[{ box: { x: 281, y: 727, w: 741, h: 59 }, at: 2.4, label: "98.6% delivered, in 6 languages" }]}
    />
  );
}

function OwnAddress() {
  return (
    <DemoScreen
      url={`${staff}/post`}
      base={shot("post-event", 1693)}
      pan={{ to: 793, at: 0.6 }}
      spots={[
        { box: { x: 841, y: 1061, w: 278, h: 577 }, at: 2.4, until: 4.2, label: "The Sunday email", place: "above" },
        { box: { x: 886, y: 1222, w: 190, h: 13 }, at: 4.4, label: "From your community's own address", place: "above" },
      ]}
    />
  );
}

function Rsvps() {
  return (
    <DemoScreen
      url={`${staff}/today`}
      base={shot("today-ev", 3114)}
      pan={{ to: 400, at: 0.6, dur: 1.4 }}
      spots={[{ box: { x: 280, y: 749, w: 640, h: 281 }, at: 2.2, label: "An RSVP for 3, from a text", place: "above" }]}
    />
  );
}

function Attendance() {
  return (
    <DemoScreen
      url={`${staff}/today`}
      base={shot("attend1")}
      swap={{ shot: shot("attend2"), at: 2.6 }}
      spots={[
        { box: { x: 980, y: 96, w: 440, h: 452 }, at: 0.6, until: 2.4, label: "Tap names at the door", align: "right" },
        { box: { x: 980, y: 516, w: 72, h: 23 }, at: 3.4, label: "7 present, saved" },
      ]}
    />
  );
}

function Replies() {
  return (
    <DemoScreen
      url={`${staff}/today`}
      base={shot("today-ev", 3114)}
      spots={[
        { box: { x: 280, y: 168, w: 1132, h: 48 }, at: 0.6, until: 2.4, label: "181 of 186 families reached this week" },
        { box: { x: 280, y: 275, w: 640, h: 462 }, at: 2.6, label: "A reply, translated, for the right person" },
      ]}
    />
  );
}

function Suggestions() {
  return (
    <DemoScreen
      url={`${staff}/calendar`}
      base={shot("calendar-staff", 1842)}
      spots={[
        { box: { x: 1112, y: 251, w: 300, h: 630 }, at: 0.6, until: 2.8, label: "Ideas from paper slips and QR codes", place: "above", align: "right" },
        { box: { x: 1131, y: 417, w: 262, h: 59 }, at: 3, label: "Made it onto the calendar", align: "right" },
      ]}
    />
  );
}

function Surveys() {
  return (
    <DemoScreen
      url={`${staff}/reports/surveys`}
      base={shot("surveys", 1486)}
      pan={{ to: 586, at: 3 }}
      spots={[
        { box: { x: 280, y: 374, w: 743, h: 526 }, at: 0.6, until: 2.8, label: "The family survey, before and now", place: "above" },
        { box: { x: 280, y: 918, w: 557, h: 429 }, at: 4.8, label: "A two-minute staff pulse each month", place: "above" },
      ]}
    />
  );
}

// ---------- More Tours ----------

function FloorPlans() {
  return (
    <DemoScreen
      url={`${site}/floor-plans`}
      base={shot("floor", 2700)}
      pan={{ to: 1800, at: 0.6, dur: 2 }}
      spots={[
        { box: { x: 110, y: 2007, w: 389, h: 652 }, at: 2.8, until: 4.6, label: "Each plan, and what's open now", place: "above" },
        { box: { x: 132, y: 2548, w: 187, h: 44 }, at: 4.8, label: "Get an alert when it opens", place: "above" },
      ]}
    />
  );
}

function Waitlist() {
  return (
    <DemoScreen
      url={`${staff}/prospects`}
      base={shot("prospects", 2377)}
      pan={{ to: 1180, at: 0.6 }}
      spots={[
        { box: { x: 693, y: 1433, w: 125, h: 34 }, at: 2.4, until: 4.2, label: "Your team marks one open", align: "right" },
        { box: { x: 855, y: 1326, w: 557, h: 790 }, at: 4.4, label: "The waitlist hears first, with a tour link", place: "above", align: "right" },
      ]}
    />
  );
}

function InquiryForm() {
  return (
    <DemoScreen
      url={`${site}/tour`}
      base={shot("tour", 2700)}
      pan={{ to: 1750, at: 0.6, dur: 2 }}
      spots={[{ box: { x: 110, y: 1915, w: 832, h: 673 }, at: 2.8, label: "Families tell you who it's for and what they need", place: "above" }]}
    />
  );
}

function Assistant() {
  return (
    <DemoScreen
      url={`${site}/floor-plans`}
      base={shot("chat1")}
      swap={{ shot: shot("chat2"), at: 3.6 }}
      spots={[
        { box: { x: 1010, y: 152, w: 410, h: 660 }, at: 0.6, until: 3.4, label: "Answers from your own website", place: "inside", align: "right" },
        { box: { x: 1020, y: 520, w: 380, h: 135 }, at: 4.2, label: "Doesn't know? It says so, and gives your number", place: "above", align: "right" },
      ]}
    />
  );
}

function SalesSystem() {
  return (
    <DemoScreen
      url={`${staff}/prospects`}
      base={shot("prospects", 2377)}
      spots={[
        { box: { x: 280, y: 250, w: 462, h: 420 }, at: 0.6, until: 2.6, label: "Every inquiry, and where it came from" },
        { box: { x: 742, y: 247, w: 280, h: 640 }, at: 2.8, label: "An instant reply, day or night", place: "above", align: "right" },
      ]}
    />
  );
}

function TourBooking() {
  return (
    <DemoScreen
      url={`${site}/tour`}
      base={shot("tour", 2700)}
      pan={{ to: 800, at: 0.6 }}
      spots={[
        { box: { x: 110, y: 1004, w: 832, h: 235 }, at: 2.4, until: 4.2, label: "Families pick a day", place: "above" },
        { box: { x: 110, y: 1257, w: 832, h: 328 }, at: 4.4, label: "And a time that's open" },
      ]}
    />
  );
}

function TourConfirm() {
  return (
    <DemoScreen
      url={`${site}/tour`}
      base={shot("tourdone", 1400)}
      pan={{ to: 500, at: 0.6 }}
      spots={[{ box: { x: 110, y: 765, w: 812, h: 470 }, at: 2.4, label: "Booked, with a confirmation by email and text", place: "above" }]}
    />
  );
}

function Search() {
  return (
    <DemoScreen
      url={`${staff}/reports/search`}
      base={shot("search", 1593)}
      spots={[
        { box: { x: 280, y: 251, w: 1132, h: 124 }, at: 0.6, until: 2.4, label: "How families find you on Google" },
        { box: { x: 280, y: 393, w: 557, h: 430 }, at: 2.6, label: "Your place for each search", place: "above" },
      ]}
    />
  );
}

function AiChecks() {
  return (
    <DemoScreen
      url={`${staff}/reports/search`}
      base={shot("search", 1593)}
      pan={{ to: 693, at: 2.8 }}
      spots={[
        { box: { x: 855, y: 393, w: 557, h: 430 }, at: 0.6, until: 2.6, label: "What AI tools say when families ask", place: "above", align: "right" },
        { box: { x: 280, y: 841, w: 1132, h: 696 }, at: 4.6, label: "What we found, and fixed", place: "above" },
      ]}
    />
  );
}

function BusinessProfile() {
  return (
    <DemoScreen
      url={`${staff}/post`}
      base={shot("post-public", 1952)}
      pan={{ to: 1052, at: 2.6 }}
      spots={[
        { box: { x: 299, y: 485, w: 505, h: 38 }, at: 0.6, until: 2.4, label: "A public event" },
        { box: { x: 841, y: 1655, w: 278, h: 241 }, at: 4.4, label: "Also posted to your Google Business Profile", place: "above" },
      ]}
    />
  );
}

export const featureVisuals: Record<string, () => ReactNode> = {
  sites: Sites,
  "community-page": CommunityPage,
  shared: Shared,
  translated: Translated,
  "calendar-import": CalendarImport,
  stale: Stale,
  studio: Studio,
  numbers: Numbers,
  approval: Approval,
  access: Access,
  compliance: Compliance,
  uptime: Uptime,
  send: OneStep,
  went: WhereItWent,
  "large-print": LargePrint,
  "print-studio": PrintStudio,
  library: Library,
  "photo-post": PhotoPost,
  "writing-help": WritingHelp,
  messages: TextAndEmail,
  audience: RightFamilies,
  "family-language": FamilyLanguage,
  "manager-approval": ManagerApproval,
  delivery: Delivery,
  "own-address": OwnAddress,
  rsvps: Rsvps,
  attendance: Attendance,
  replies: Replies,
  suggestions: Suggestions,
  surveys: Surveys,
  "floor-plans": FloorPlans,
  waitlist: Waitlist,
  "inquiry-form": InquiryForm,
  assistant: Assistant,
  "sales-system": SalesSystem,
  "tour-booking": TourBooking,
  "tour-confirm": TourConfirm,
  search: Search,
  "ai-checks": AiChecks,
  "business-profile": BusinessProfile,
};
