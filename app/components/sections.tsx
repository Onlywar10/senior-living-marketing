import Image from "next/image";
import { ApplyForm } from "./apply-form";
import { CatapultLink } from "./catapult-link";
import { HeroVisual } from "./hero-visual";
import { HowSteps } from "./how-steps";
import { PillarCards } from "./pillar-loops";
import { TopLink } from "./top-link";
import { ProblemList } from "./problem-list";
import { RealLifeCompare } from "./real-life";
import { CountUp } from "./story";
import { PostFlow } from "./post-flow";
import { Wordmark } from "./site-header";
import {
  aboutValues,
  bookHref,
  brochureVsLife,
  catapultPoints,
  comparison,
  contact,
  examples,
  faqs,
  heroOffer,
  howSteps,
  pilotAsks,
  pilotOffer,
  pilotPromises,
  proof,
  tabs,
  trustLine,
  trustPoints,
} from "../content";

const wrap = "mx-auto max-w-[86rem] px-5 sm:px-10";

const arrowPaths = {
  e: "M6 24h36M26 8l16 16-16 16",
  ne: "M10 38 38 10M16 10h22v22",
  s: "M24 6v36M8 26l16 16 16-16",
};

export function Arrow({ dir, className = "size-5" }: { dir: keyof typeof arrowPaths; className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className={`shrink-0 ${className}`} fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="square">
      <path d={arrowPaths[dir]} />
    </svg>
  );
}

export function BookButton({ className = "", label = "Book a meeting" }: { className?: string; label?: string }) {
  return (
    <TopLink href={bookHref} className={`btn btn-primary ${className}`}>
      {label}
      <Arrow dir="e" />
    </TopLink>
  );
}

function Photo({ src, alt, className, position = "object-center", sizes }: { src: string; alt: string; className: string; position?: string; sizes: string }) {
  return (
    <div className={`relative overflow-hidden rounded-md ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className={`object-cover ${position}`} />
    </div>
  );
}

function PageHead({ title, lede, id }: { title: string; lede?: string; id: string }) {
  return (
    <header className="on-dark panel py-12 sm:py-16">
      <div className={wrap}>
        <h1 id={id} className="display-2 max-w-[24ch]">
          {title}
        </h1>
        {lede && <p className="lede mt-5 max-w-[44rem] text-on-ink-soft">{lede}</p>}
      </div>
    </header>
  );
}

export function SpotsBanner() {
  return (
    <TopLink href="/offer" className="group sticky top-0 z-50 flex h-[2.6rem] items-center justify-center gap-x-4 whitespace-nowrap bg-signal px-4 text-on-signal no-underline">
      <span className="font-display text-[1.05rem] font-bold tracking-tight sm:text-[1.2rem]">Only 5 spots available</span>
      <span className="inline-flex items-center gap-1.5 font-display font-bold underline underline-offset-4">
        <span className="hidden sm:inline">See the offer</span>
        <span className="sr-only sm:hidden">See the offer</span>
        <Arrow dir="e" className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </TopLink>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="on-dark relative isolate flex min-h-[calc(100svh-6.75rem)] flex-col justify-end overflow-hidden bg-ink text-on-ink lg:min-h-[calc(100svh-7.5rem)] lg:justify-center">
      <HeroVisual />
      <div className={`${wrap} hero-copy pointer-events-none relative z-10 w-full pb-6 lg:py-10`}>
        <div className="pointer-events-auto max-w-[37rem]">
          <h1 id="hero-heading" className="display-1">
            Your website, finally as alive as your community.
          </h1>
          <p className="lede mt-3 max-sm:text-[1.05rem] sm:mt-5">Be one of our founding communities: a website that shows what life is really like there, not a brochure. Ensure families stay engaged and no question is left unanswered.</p>
          <div className="mt-4 sm:mt-6">
            <HeroOffer />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroOffer() {
  return (
    <div>
      <ul className="space-y-1 sm:space-y-2">
        {heroOffer.map((line) => (
          <li key={line} className="grid grid-cols-[1.5rem_1fr] gap-1.5 text-[1rem] font-bold leading-snug sm:text-[1.1rem]">
            <Arrow dir="e" className="mt-1 size-4 text-signal-bright" />
            {line}
          </li>
        ))}
      </ul>
      <BookButton className="mt-3 !min-h-[3.75rem] w-full !px-8 !text-[1.25rem] sm:mt-5 sm:w-auto" />
      <p className="mt-3 text-[0.95rem] text-on-ink">
        From{" "}
        <strong className="text-on-ink">
          <CatapultLink />
        </strong>
        , trusted for more than 25 years.
      </p>
    </div>
  );
}

export function TrustStrip() {
  return (
    <section aria-label="About Catapult" className="border-b border-rule bg-paper py-8">
      <div className={wrap}>
        <p className="font-display text-[1.2rem] font-bold leading-tight sm:text-[1.4rem]">
          From <CatapultLink />: {trustLine}
        </p>
        <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <li key={point.rest} className="leading-snug">
              <span className="block font-display text-[2rem] font-bold leading-none tracking-tight sm:text-[2.5rem]">{"value" in point && point.value ? <CountUp value={point.value} suffix={point.suffix} /> : point.lead}</span>{" "}
              <span className="mt-0.5 block">{point.rest}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <section aria-labelledby="problem-heading" className="py-12 sm:py-16">
      <div className={`${wrap} grid gap-x-14 gap-y-6 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]`}>
        <div>
          <h2 id="problem-heading" className="display-2">
            Sound familiar?
          </h2>
          <p className="lede mt-3">It doesn&apos;t have to work this way.</p>
          <TopLink href="/solutions/live-website" className="mt-3 inline-flex min-h-11 items-center gap-2 font-display font-bold underline underline-offset-4">
            See the way out
            <Arrow dir="e" />
          </TopLink>
        </div>
        <ProblemList />
      </div>
    </section>
  );
}

export function Proof() {
  return (
    <section aria-label="What the research says" className="bg-steel py-12 sm:py-16">
      <ul className={`${wrap} grid gap-10 md:grid-cols-3`}>
        {proof.map((item) => (
          <li key={item.source} className="reveal">
            <p className="font-display text-[3rem] font-bold leading-none tracking-tight sm:text-[3.5rem]">
              {"lead" in item && item.lead}
              <CountUp value={item.value} suffix={item.suffix} />
            </p>
            <p className="mt-2 text-[1.1rem] leading-snug">{item.rest}</p>
            <p className="mt-2 text-[0.9rem] text-ink-soft">{item.source}</p>
            <p className="mt-3 border-t border-rule pt-3 font-bold leading-snug">{item.link}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PostRoutes() {
  return (
    <section aria-labelledby="routes-heading" className="on-dark panel overflow-hidden py-14 sm:py-20">
      <div className={wrap}>
        <h2 id="routes-heading" className="display-2">
          One post. Three places. Done.
        </h2>
        <p className="lede mt-4 max-w-[40rem] text-on-ink-soft">Your staff stop doing the same job three times.</p>
        <div className="mt-10">
          <PostFlow />
        </div>
      </div>
    </section>
  );
}

export function RealLife() {
  return (
    <section aria-labelledby="real-life-heading" className="py-16 sm:py-24">
      <div className={wrap}>
        <h2 id="real-life-heading" className="display-2">
          Real life, not a brochure.
        </h2>
        <p className="lede mt-4 mb-6 max-w-[46rem]">Most senior living websites are sales brochures. They could describe anywhere. Yours can show what life is really like, today. Drag to see the same community both ways.</p>
        <RealLifeCompare />
        <h3 className="display-3 mt-14">What a family actually finds.</h3>
        <div className="mt-6 hidden grid-cols-[minmax(0,2fr)_minmax(0,4fr)_minmax(0,6fr)] gap-x-6 pb-2 font-display font-bold md:grid" aria-hidden="true">
          <span />
          <span className="text-ink-soft">A brochure website</span>
          <span>Your community on Kinlight</span>
        </div>
        <dl className="mt-4 border-b border-ink md:mt-0">
          {brochureVsLife.map((row) => (
            <div key={row.topic} className="reveal grid gap-x-6 gap-y-1 border-t border-ink py-3.5 md:grid-cols-[minmax(0,2fr)_minmax(0,4fr)_minmax(0,6fr)]">
              <dt className="font-display text-[1.2rem] font-bold leading-tight">{row.topic}</dt>
              <dd className="text-ink-soft">
                <span className="font-bold md:sr-only">A brochure website: </span>
                {row.brochure}
              </dd>
              <dd className="font-bold">
                <span className="md:sr-only">On Kinlight: </span>
                {row.life}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Overview() {
  return (
    <section aria-labelledby="overview-heading" className="bg-steel py-16 sm:py-24">
      <div className={wrap}>
        <h2 id="overview-heading" className="display-2">
          What you get.
        </h2>
        <PillarCards />
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="py-16 sm:py-24">
      <div className={`${wrap} grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]`}>
        <div className="lg:sticky lg:top-40 lg:self-start">
          <h2 id="how-heading" className="display-2 max-w-[14ch]">
            How it works.
          </h2>
          <p className="lede mt-4">Four steps. We do the heavy lifting.</p>
        </div>
        <HowSteps steps={howSteps} />
      </div>
    </section>
  );
}

export function FoundingOffer() {
  return (
    <section aria-labelledby="founding-heading" className="on-dark panel py-16 sm:py-24">
      <div className={wrap}>
        <h2 id="founding-heading" className="display-2">
          Only 5 spots available.
        </h2>
        <p className="lede mt-4 max-w-[44rem] text-on-ink-soft">For California senior living organizations. The pilot starts in March 2027.</p>
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-14">
          <div>
            <h3 className="font-display text-[1.75rem] font-bold sm:text-[2.1rem]">What you get</h3>
            <dl className="mt-4 border-b border-ink-rule">
              {pilotOffer.map((item) => (
                <div key={item.title} className="reveal border-t border-ink-rule py-3.5">
                  <dt className="font-display text-[1.4rem] font-bold leading-tight sm:text-[1.6rem]">{item.title}</dt>
                  <dd className="mt-1 text-[1.1rem] leading-snug text-on-ink-soft sm:text-[1.2rem]">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h3 className="font-display text-[1.75rem] font-bold sm:text-[2.1rem]">What we ask in return</h3>
            <ul className="mt-4 border-b border-ink-rule">
              {pilotAsks.map((ask) => (
                <li key={ask} className="border-t border-ink-rule py-3.5 text-[1.2rem] leading-snug sm:text-[1.4rem]">
                  {ask}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col xl:flex-row">
              <BookButton />
              <TopLink href="/offer" className="btn btn-ghost-dark">
                See the full offer
              </TopLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="max-w-[60rem] border-b border-ink">
      {items.map((faq) => (
        <details key={faq.q} className="border-t border-ink">
          <summary className="flex min-h-14 items-center justify-between gap-4 py-4 font-display text-[1.2rem] font-bold leading-tight sm:text-[1.35rem]">
            {faq.q}
            <svg aria-hidden="true" viewBox="0 0 24 24" className="chevron size-6 shrink-0">
              <path d="M5 9l7 7 7-7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
            </svg>
          </summary>
          <p className="max-w-[46rem] pb-5">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}

export function HomeFaq() {
  return (
    <section aria-labelledby="home-faq-heading" className="py-16 sm:py-24">
      <div className={wrap}>
        <h2 id="home-faq-heading" className="display-2">
          Quick answers.
        </h2>
        <div className="mt-8">
          <FaqList items={faqs} />
        </div>
      </div>
    </section>
  );
}

export function Difference() {
  return (
    <>
      <PageHead id="difference-heading" title="Agencies build websites. Apps reach families. Kinlight does both." />
      <section aria-label="How Kinlight compares" className="py-14 sm:py-20">
        <div className={`${wrap} grid gap-6 lg:grid-cols-3 lg:grid-rows-[auto_repeat(4,auto)] lg:gap-x-0 lg:gap-y-0`}>
          {comparison.columns.map((column) => (
            <div
              key={column.name}
              className={`lg:row-span-5 lg:grid lg:grid-rows-subgrid ${column.highlight ? "on-dark z-10 order-first rounded-lg bg-ink p-6 text-on-ink lg:order-none lg:-my-5 lg:px-7 lg:py-5" : "border-t border-ink lg:px-6"}`}
            >
              <h2 className={`py-3 font-display text-[1.5rem] font-bold leading-tight ${column.highlight ? "text-on-ink" : ""}`}>{column.name}</h2>
              {column.cells.map((cell, i) => (
                <div key={comparison.rows[i]} className={`border-t py-3.5 ${column.highlight ? "border-ink-rule" : "border-rule"}`}>
                  <p className={`text-[0.9rem] ${column.highlight ? "text-on-ink-soft" : "text-ink-soft"}`}>{comparison.rows[i]}</p>
                  <p className={column.highlight ? "font-bold" : ""}>{cell}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function Catapult() {
  return (
    <section aria-labelledby="catapult-heading" className="on-dark panel">
      <div className={`${wrap} grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16`}>
        <div>
          <h2 id="catapult-heading" className="display-2 max-w-[20ch]">
            <CatapultLink /> has built and run websites since 2000.
          </h2>
          <p className="lede mt-6 max-w-[42rem] text-on-ink-soft">
            <CatapultLink /> is a California company in Roseville. It hosts hundreds of websites. Some customers run more than 50 sites from one dashboard.
          </p>
          <p className="mt-5 max-w-[42rem] font-bold">Now we&apos;re adapting that proven system for senior living.</p>
        </div>
        <ul className="border-y border-ink-rule">
          {catapultPoints.map((point) => (
            <li key={point} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-2 border-b border-ink-rule py-4 font-bold last:border-b-0">
              <Arrow dir="e" className="mt-0.5 size-6 text-on-ink-soft" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Pilot() {
  return (
    <>
      <PageHead id="pilot-heading" title="The Founding Offer" lede="Only up to 5 California organizations get this. The pilot starts in March 2027." />
      <section aria-label="The offer" className="py-14 sm:py-20">
        <div className={`${wrap} grid items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-14`}>
          <div>
            <dl>
              {pilotOffer.map((item) => (
                <div key={item.title} className="reveal border-t border-ink py-4">
                  <dt className="font-display text-[1.35rem] font-bold leading-tight">{item.title}</dt>
                  <dd className="mt-1">{item.body}</dd>
                </div>
              ))}
            </dl>
            <h2 className="mt-8 font-display text-[1.6rem] font-bold">Our promises</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {pilotPromises.map((promise) => (
                <div key={promise.title} className="rounded-md bg-paper p-5">
                  <h3 className="font-display text-[1.25rem] font-bold">{promise.title}</h3>
                  <p className="mt-1.5">{promise.body}</p>
                </div>
              ))}
            </div>
            <h2 className="mt-10 font-display text-[1.6rem] font-bold">What we need from you</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-ink-soft">
              {pilotAsks.map((ask) => (
                <li key={ask}>{ask}</li>
              ))}
            </ul>
          </div>
          <div id="book" className="lift overflow-hidden rounded-lg bg-paper">
            <ApplyForm />
          </div>
        </div>
      </section>
    </>
  );
}

export function About() {
  return (
    <>
      <PageHead id="about-heading" title="About Us" lede="We help senior living communities keep their website current and their families close." />
      <section aria-labelledby="why-built-heading" className="py-14 sm:py-20">
        <div className={`${wrap} grid items-center gap-10 lg:grid-cols-2 lg:gap-14`}>
          <div>
            <h2 id="why-built-heading" className="display-2 max-w-[16ch]">
              Why we built Kinlight.
            </h2>
            <p className="lede mt-5">Every week, a community produces real news: activities, meals, events, photos.</p>
            <p className="mt-4">Almost none of it reaches the website. Families call the front desk to ask what&apos;s happening. Staff build the same calendar over and over.</p>
            <p className="mt-4 font-bold">So we built one place to post it, once, for everyone who wants to see it.</p>
          </div>
          <Photo src="/photos/mother-daughter-garden.jpg" alt="An older woman in a cream cardigan laughing with her grown daughter on a garden bench." className="aspect-[4/3]" sizes="(min-width: 1024px) 45vw, 95vw" />
        </div>
      </section>
      <section aria-labelledby="who-heading" className="on-dark panel py-14 sm:py-20">
        <div className={`${wrap} grid gap-8 lg:grid-cols-2 lg:gap-14`}>
          <h2 id="who-heading" className="display-2 max-w-[16ch]">
            Who we are.
          </h2>
          <div>
            <p className="lede">
              Kinlight is a new product from <CatapultLink />, a California company in Roseville.
            </p>
            <p className="mt-4">
              <CatapultLink /> has built and run websites since 2000, and it hosts hundreds of them today. Right now, Kinlight works with assisted living and memory care operators in California.
            </p>
            <p className="mt-6">
              <strong>{contact.name}</strong> leads Kinlight as {contact.role}.
            </p>
          </div>
        </div>
      </section>
      <section aria-labelledby="values-heading" className="py-14 sm:py-20">
        <div className={wrap}>
          <h2 id="values-heading" className="display-2">
            What we stand for.
          </h2>
          <dl className="mt-8 grid gap-x-10 border-b border-rule md:grid-cols-2">
            {aboutValues.map((value) => (
              <div key={value.title} className="reveal border-t border-rule py-5">
                <dt className="font-display text-[1.35rem] font-bold leading-tight">{value.title}</dt>
                <dd className="mt-1">{value.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}

export function Examples() {
  return (
    <>
      <PageHead id="examples-heading" title="Wanna see what your website could look like?" lede="Here's how all three parts will look. These are concepts, not live customer sites." />
      <section aria-label="Previews" className="py-14 sm:py-20">
        <div className={wrap}>
          <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {examples.map((example) => {
              const inner = (
                <>
                  <span className="relative block aspect-[16/10] overflow-hidden border-b border-rule bg-steel">
                    <Image src={example.image} alt={example.alt} fill sizes="(min-width: 1280px) 30vw, (min-width: 768px) 46vw, 95vw" className="object-cover object-top" />
                  </span>
                  <span className="flex flex-1 flex-col p-5 sm:p-6">
                    <span className="font-display text-[1.5rem] font-bold leading-tight tracking-tight">{example.title}</span>
                    <span className="mt-2 flex-1">{example.body}</span>
                    <span className="mt-5 flex items-center gap-2 font-display font-bold text-signal-ink">
                      {example.cta}
                      <Arrow dir={example.external ? "ne" : "e"} />
                    </span>
                    {example.external && <span className="sr-only"> (opens in a new tab)</span>}
                  </span>
                </>
              );
              const card = "lift flex h-full flex-col overflow-hidden rounded-lg bg-paper no-underline transition-transform duration-200 hover:-translate-y-1";
              return (
                <li key={example.title} className="reveal">
                  {example.external ? (
                    <a href={example.href} target="_blank" rel="noopener noreferrer" className={card}>
                      {inner}
                    </a>
                  ) : (
                    <TopLink href={example.href} className={card}>
                      {inner}
                    </TopLink>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="mt-5 text-[0.9rem] text-ink-soft">Previews use sample names, numbers and photos.</p>
        </div>
      </section>
    </>
  );
}

export function NextStep({ href, label }: { href: string; label: string }) {
  return (
    <nav aria-label="Next page" className={`${wrap} py-8`}>
      <TopLink href={href} className="flex items-center justify-between gap-4 border-y border-ink py-5 font-display text-[1.3rem] font-bold tracking-tight no-underline hover:text-signal-ink sm:text-[1.7rem]">
        {label}
        <Arrow dir="e" className="size-8" />
      </TopLink>
    </nav>
  );
}

export function Closing() {
  return (
    <section aria-labelledby="closing-heading" className="on-dark panel">
      <div className={`${wrap} grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]`}>
        <div>
          <h2 id="closing-heading" className="display-2 max-w-[18ch]">
            Want this for your community?
          </h2>
          <p className="lede mt-5 text-on-ink-soft">Book an 18-minute meeting. We&apos;ll show you the site and see if the offer fits.</p>
          <BookButton className="mt-7 !min-h-[3.75rem] w-full !px-8 !text-[1.25rem] sm:w-auto" />
          <address className="mt-8 not-italic">
            <strong>{contact.name}</strong>, {contact.role}, <CatapultLink />
            <br />
            {contact.email} · {contact.phone}
          </address>
        </div>
        <Photo src="/photos/chair-exercise.jpg" alt="Older adults in a bright room, arms raised during a seated exercise class." className="aspect-[3/2]" sizes="(min-width: 1024px) 34vw, 95vw" />
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-6 border-t border-rule py-7">
      <div className={`${wrap} flex flex-wrap items-center justify-between gap-x-8 gap-y-3`}>
        <Wordmark />
        <p>
          Kinlight is a product of <CatapultLink />.
        </p>
        <nav aria-label="Footer" className="w-full">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 font-display font-semibold">
            {tabs.map((tab) => (
              <li key={tab.href}>
                <TopLink href={tab.href} className="inline-block py-1.5 underline-offset-4 hover:underline">
                  {tab.label}
                </TopLink>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="flex flex-wrap gap-x-5">
          <li>
            <TopLink href="/privacy" className="underline">
              Privacy
            </TopLink>
          </li>
          <li>
            <TopLink href="/accessibility" className="underline">
              Accessibility statement
            </TopLink>
          </li>
          <li>© 2026</li>
        </ul>
      </div>
    </footer>
  );
}
