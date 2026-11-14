import type { CSSProperties, ReactNode } from "react";
import { sampleCommunity } from "../content";

// Quick graphics for the expandable feature cards on the solution pages. Each one plays once
// when its card opens (the animation classes take a --d delay). Most use real screens from our
// demo site (public/features/demo, captured from seniorLivingDemo, staff area as of Nov 12 with Automations, with the clock pinned to
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

// ---------- Live Website ----------

function CommunityPage() {
  return (
    <DemoScreen
      url={site}
      base={shot("home-day1", 3200)}
      pan={{ to: 960, at: 0.6, dur: 1.8 }}
      swap={{ shot: shot("home-day2", 3200), at: 5.4 }}
      spots={[
        { box: { x: 110, y: 1060, w: 1220, h: 780 }, at: 2.6, until: 5, label: "Today at Alder Bend: what's happening right now", place: "inside", align: "right" },
        { box: { x: 110, y: 1103, w: 516, h: 61 }, at: 6, label: "The next morning, it has moved on by itself" },
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
        { box: { x: 110, y: 293, w: 616, h: 326 }, at: 3, label: "The whole page, in Spanish" },
      ]}
    />
  );
}

function CalendarImport() {
  return (
    <DemoScreen
      url={`${staff}/post`}
      base={shot("imp-white")}
      swap={{ shot: shot("imp-white2", 2231), at: 3 }}
      spots={[
        { box: { x: 280, y: 275, w: 1132, h: 463 }, at: 0.6, until: 2.8, label: "A photo of the whiteboard. Kinlight reads it" },
        { box: { x: 299, y: 290, w: 1094, h: 138 }, at: 3.4, until: 5.2, label: "It proposes the week: new, changed and cancelled" },
        { box: { x: 1168, y: 357, w: 226, h: 72 }, at: 5.4, label: "Your staff check only what's unclear", align: "right" },
      ]}
    />
  );
}

function Stale() {
  return (
    <DemoScreen
      url={`${staff}/website`}
      base={shot("web-fresh")}
      spots={[
        { box: { x: 280, y: 246, w: 1132, h: 399 }, at: 0.6, until: 2.6, label: "Every page, its owner and when it's due" },
        { box: { x: 299, y: 495, w: 1094, h: 66 }, at: 2.8, label: "Due tomorrow: a nudge for its owner" },
      ]}
    />
  );
}

function Studio() {
  return (
    <DemoScreen
      url={`${staff}/menus`}
      base={shot("menus", 1400)}
      pan={{ to: 500, at: 2.8 }}
      spots={[
        { box: { x: 280, y: 188, w: 1132, h: 340 }, at: 0.6, until: 2.6, label: "The kitchen's menus, in one place" },
        { box: { x: 280, y: 803, w: 1132, h: 317 }, at: 4.6, label: "Live today, on the website and everywhere else", place: "above" },
      ]}
    />
  );
}

function Numbers() {
  return (
    <DemoScreen
      url={`${staff}/reports`}
      base={shot("scorecard", 3330)}
      pan={{ to: 2380, at: 0.6, dur: 2 }}
      spots={[
        { box: { x: 280, y: 2687, w: 557, h: 587 }, at: 2.8, until: 4.6, label: "This month next to last month", place: "above" },
        { box: { x: 281, y: 2949, w: 556, h: 42 }, at: 4.8, label: "Website visits, up 18%", place: "above" },
      ]}
    />
  );
}

function Approval() {
  return (
    <DemoScreen
      url={`${staff}/today`}
      base={shot("today", 1800)}
      pan={{ to: 900, at: 0.6, dur: 1.8 }}
      spots={[
        { box: { x: 280, y: 1280, w: 667, h: 388 }, at: 2.6, until: 4.6, label: "A holiday menu, waiting for the executive director", place: "above" },
        { box: { x: 301, y: 1541, w: 132, h: 48 }, at: 4.8, label: "One tap to approve and publish" },
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
        { box: { x: 756, y: 2, w: 184, h: 38 }, at: 0.6, until: 2.6, label: "Text size and high contrast, on every page" },
        { box: { x: 110, y: 304, w: 631, h: 270 }, at: 3.2, label: "Bigger text, in one tap" },
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
        { box: { x: 998, y: 850, w: 150, h: 22 }, at: 2.6, label: "Privacy policy and accessibility statement", place: "above", align: "right" },
      ]}
    />
  );
}

// ---------- Post Once ----------

function OneStep() {
  return (
    <DemoScreen
      url={`${staff}/post`}
      base={shot("post-rest", 2281)}
      pan={{ to: 1381, at: 2.8, dur: 2 }}
      spots={[
        { box: { x: 299, y: 372, w: 620, h: 44 }, at: 0.6, until: 2.6, label: "See it on the website, in the newsletter, in texts and on each week page" },
        { box: { x: 299, y: 1924, w: 846, h: 220 }, at: 5, label: "Then Kinlight does the rest", place: "above" },
      ]}
    />
  );
}

function WhereItWent() {
  return (
    <DemoScreen
      url={`${staff}/post`}
      base={shot("post-added")}
      spots={[
        { box: { x: 280, y: 275, w: 1132, h: 130 }, at: 0.6, until: 2.4, label: "On the calendar, and 12 residents invited" },
        { box: { x: 299, y: 418, w: 1094, h: 220 }, at: 2.6, label: "Everything Kinlight did, in one list" },
      ]}
    />
  );
}

function LargePrint() {
  return (
    <DemoScreen
      url={`${staff}/settings`}
      base={shot("set-print", 1302)}
      pan={{ to: 402, at: 2.8 }}
      spots={[
        { box: { x: 280, y: 244, w: 1132, h: 520 }, at: 0.6, until: 2.6, label: "Calendars, menus and flyers, ready in large print" },
      ]}
    />
  );
}

function PrintStudio() {
  return (
    <DemoScreen
      url={`${staff}/menus`}
      base={shot("imp-menu", 1600)}
      pan={{ to: 520, at: 0.6 }}
      spots={[
        { box: { x: 299, y: 706, w: 539, h: 430 }, at: 2.4, until: 4.2, label: "Drop in the kitchen's PDF", place: "above" },
        { box: { x: 854, y: 706, w: 539, h: 579 }, at: 4.4, label: "Kinlight reads it and asks only what's unclear", place: "above", align: "right" },
      ]}
    />
  );
}

function Library() {
  return (
    <DemoScreen
      url={`${staff}/post`}
      base={shot("post-event", 1810)}
      swap={{ shot: shot("post-template", 1900), at: 2.8 }}
      pan={{ to: 900, at: 3.4 }}
      spots={[
        { box: { x: 311, y: 464, w: 1070, h: 59 }, at: 0.6, until: 2.6, label: "Start from a template, or copy a past event" },
        { box: { x: 299, y: 1299, w: 1094, h: 336 }, at: 5.2, label: "Filled in for you, ready to edit", place: "above" },
      ]}
    />
  );
}

function PhotoPost() {
  return (
    <DemoScreen
      url={`${staff}/today`}
      base={shot("sheet")}
      spots={[
        { box: { x: 840, y: 280, w: 580, h: 100 }, at: 0.6, until: 2.4, label: "Each activity asks for photos", align: "right" },
        { box: { x: 840, y: 451, w: 139, h: 40 }, at: 2.6, label: "Add them from your phone" },
      ]}
    />
  );
}

function WritingHelp() {
  return (
    <DemoScreen
      url={`${staff}/newsletter`}
      base={shot("newsletter", 1300)}
      spots={[
        { box: { x: 280, y: 490, w: 1132, h: 196 }, at: 0.6, until: 2.6, label: "Drafted from the week's events and photos", place: "above" },
        { box: { x: 668, y: 505, w: 116, h: 23 }, at: 2.8, until: 4.4, label: "Marked so your staff know to check it" },
        { box: { x: 281, y: 305, w: 1130, h: 84 }, at: 4.6, label: "Your staff check it, then send" },
      ]}
    />
  );
}

// ---------- Family Connection ----------

function TextAndEmail() {
  return (
    <DemoScreen
      url={`${staff}/post`}
      base={shot("post-texts", 1285)}
      swap={{ shot: shot("post-news", 1134), at: 3.6 }}
      pan={{ to: 234, at: 0.6 }}
      spots={[
        { box: { x: 299, y: 558, w: 400, h: 509 }, at: 1.8, until: 3.4, label: "The texts each resident gets" },
        { box: { x: 299, y: 508, w: 640, h: 437 }, at: 4.2, label: "And the story in the Sunday email", place: "above" },
      ]}
    />
  );
}

function RightFamilies() {
  return (
    <DemoScreen
      url={`${staff}/post`}
      base={shot("announce")}
      swap={{ shot: shot("announce-lantern"), at: 3 }}
      spots={[
        { box: { x: 299, y: 420, w: 1094, h: 145 }, at: 0.6, until: 2.8, label: "Everyone, a floor or a care area" },
        { box: { x: 300, y: 489, w: 191, h: 44 }, at: 3.4, label: "Just Lantern families: 21" },
      ]}
    />
  );
}

function FamilyLanguage() {
  return (
    <DemoScreen
      url={`${staff}/automations`}
      base={shot("auto-preview")}
      swap={{ shot: shot("auto-preview-es"), at: 2.6 }}
      spots={[
        { box: { x: 980, y: 96, w: 205, h: 38 }, at: 0.6, until: 2.4, label: "English, Español or 中文", align: "right" },
        { box: { x: 1060, y: 140, w: 280, h: 280 }, at: 3, label: "The same message, in each person's language", align: "right" },
      ]}
    />
  );
}

function ManagerApproval() {
  return (
    <DemoScreen
      url={`${staff}/settings`}
      base={shot("set-approvals", 1500)}
      spots={[
        { box: { x: 280, y: 244, w: 1132, h: 492 }, at: 0.6, until: 3, label: "Who approves what" },
        { box: { x: 1106, y: 485, w: 272, h: 61 }, at: 3.2, label: "Lantern family requests go to Maribel", align: "right" },
      ]}
    />
  );
}

function Delivery() {
  return (
    <DemoScreen
      url={`${staff}/automations`}
      base={shot("auto-log", 1500)}
      spots={[
        { box: { x: 280, y: 165, w: 1132, h: 180 }, at: 0.6, until: 2.6, label: "This week: 99% delivered" },
        { box: { x: 280, y: 540, w: 1132, h: 330 }, at: 2.8, label: "Every message, who got it and what happened", place: "above" },
      ]}
    />
  );
}

function OwnAddress() {
  return (
    <DemoScreen
      url={`${staff}/post`}
      base={shot("post-news", 1134)}
      pan={{ to: 234, at: 0.6 }}
      spots={[
        { box: { x: 299, y: 508, w: 640, h: 437 }, at: 2, until: 3.8, label: "The Sunday email" },
        { box: { x: 300, y: 509, w: 638, h: 84 }, at: 4, label: "From your community's own address" },
      ]}
    />
  );
}

function Rsvps() {
  return (
    <DemoScreen
      url={`${staff}/reports/families`}
      base={shot("rep-families", 1834)}
      pan={{ to: 934, at: 0.6 }}
      spots={[
        { box: { x: 280, y: 1330, w: 1132, h: 448 }, at: 2.4, until: 4.2, label: "Every family reply Kinlight handled", place: "above" },
        { box: { x: 299, y: 1511, w: 1094, h: 70 }, at: 4.4, label: "A seat for Frank: he's asked first, then it's booked", place: "above" },
      ]}
    />
  );
}

function Attendance() {
  return (
    <DemoScreen
      url={`${staff}/today`}
      base={shot("attend")}
      spots={[
        { box: { x: 840, y: 319, w: 580, h: 40 }, at: 0.6, until: 2.4, label: "Tap names, scan check-in cards or snap the sheet", align: "right" },
        { box: { x: 840, y: 370, w: 580, h: 520 }, at: 2.6, label: "Who came, saved for your reports", place: "inside", align: "right" },
      ]}
    />
  );
}

function Replies() {
  return (
    <DemoScreen
      url={`${staff}/messages`}
      base={shot("comms")}
      spots={[
        { box: { x: 654, y: 165, w: 758, h: 540 }, at: 0.6, until: 2.6, label: "Each family's messages, in one thread", align: "right" },
        { box: { x: 671, y: 241, w: 724, h: 43 }, at: 2.8, label: "Bills and health always go to a person", align: "right" },
      ]}
    />
  );
}

function Suggestions() {
  return (
    <DemoScreen
      url={`${staff}/feedback`}
      base={shot("feedback", 2968)}
      pan={{ to: 1643, at: 0.6, dur: 2 }}
      spots={[
        { box: { x: 280, y: 1734, w: 668, h: 760 }, at: 2.8, until: 4.6, label: "Ideas from residents' paper slips", place: "inside", align: "right" },
        { box: { x: 363, y: 2532, w: 566, h: 69 }, at: 4.8, label: "On the calendar, and the resident was told", place: "above" },
      ]}
    />
  );
}

function Surveys() {
  return (
    <DemoScreen
      url={`${staff}/surveys`}
      base={shot("sv-list", 1688)}
      swap={{ shot: shot("sv-reports", 2217), at: 3.2 }}
      spots={[
        { box: { x: 280, y: 369, w: 1132, h: 615 }, at: 0.6, until: 3, label: "Your own surveys, each with its reply rate", place: "inside", align: "right" },
        { box: { x: 280, y: 515, w: 743, h: 547 }, at: 3.6, label: "Results by question, and how they changed", place: "above" },
      ]}
    />
  );
}

// ---------- Every Inquiry Answered ----------

function FloorPlans() {
  return (
    <DemoScreen
      url={`${site}/floor-plans`}
      base={shot("floor", 3200)}
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
      base={shot("prospects", 1783)}
      pan={{ to: 883, at: 0.6 }}
      spots={[
        { box: { x: 299, y: 1436, w: 705, h: 28 }, at: 2.4, until: 4.2, label: "Your team marks one open" },
        { box: { x: 299, y: 1470, w: 705, h: 110 }, at: 4.4, label: "The waitlist hears first, with a tour link" },
      ]}
    />
  );
}

function InquiryForm() {
  return (
    <DemoScreen
      url={`${site}/tour`}
      base={shot("tour", 3200)}
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
        { box: { x: 1020, y: 330, w: 380, h: 170 }, at: 4.2, label: "Doesn't know? It says so, and gives your number", place: "above", align: "right" },
      ]}
    />
  );
}

function FrontDesk() {
  return (
    <DemoScreen
      url={`${staff}/communications`}
      base={shot("comms")}
      spots={[
        { box: { x: 281, y: 166, w: 358, h: 228 }, at: 0.6, until: 2.6, label: "Inquiries arrive like any conversation" },
        { box: { x: 671, y: 406, w: 724, h: 186 }, at: 2.8, label: "Your front desk replies by text or email", place: "above", align: "right" },
      ]}
    />
  );
}

function TourBooking() {
  return (
    <DemoScreen
      url={`${site}/tour`}
      base={shot("tour", 3200)}
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
      base={shot("tourdone", 2378)}
      pan={{ to: 600, at: 0.6 }}
      spots={[{ box: { x: 110, y: 765, w: 812, h: 940 }, at: 2.4, label: "Booked, with a confirmation by email and text", place: "inside", align: "right" }]}
    />
  );
}

function Search() {
  return (
    <DemoScreen
      url={`${staff}/reports/search`}
      base={shot("rep-search", 1552)}
      spots={[
        { box: { x: 280, y: 229, w: 1132, h: 105 }, at: 0.6, until: 2.4, label: "How families find you on Google" },
        { box: { x: 280, y: 352, w: 557, h: 430 }, at: 2.6, label: "Your place for each search", place: "above" },
      ]}
    />
  );
}

function AiChecks() {
  return (
    <DemoScreen
      url={`${staff}/reports/search`}
      base={shot("rep-search", 1552)}
      pan={{ to: 652, at: 2.8 }}
      spots={[
        { box: { x: 855, y: 352, w: 557, h: 430 }, at: 0.6, until: 2.6, label: "What AI tools say when families ask", place: "above", align: "right" },
        { box: { x: 280, y: 800, w: 1132, h: 696 }, at: 4.6, label: "What we found, and fixed", place: "above" },
      ]}
    />
  );
}

function BusinessProfile() {
  return (
    <DemoScreen
      url={`${staff}/post`}
      base={shot("post-public", 2344)}
      pan={{ to: 1444, at: 2.6, dur: 2 }}
      spots={[
        { box: { x: 299, y: 636, w: 265, h: 40 }, at: 0.6, until: 2.4, label: "A public event" },
        { box: { x: 311, y: 2001, w: 822, h: 196 }, at: 4.8, label: "Also on your Google Business Profile, in Search and Maps", place: "above" },
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
  "front-desk": FrontDesk,
  "tour-booking": TourBooking,
  "tour-confirm": TourConfirm,
  search: Search,
  "ai-checks": AiChecks,
  "business-profile": BusinessProfile,
};
