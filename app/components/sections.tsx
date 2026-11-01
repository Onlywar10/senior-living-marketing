import Image from "next/image";
import Link from "next/link";
import { ApplyForm } from "./apply-form";
import { CatapultLink } from "./catapult-link";
import { HeroVisual } from "./hero-visual";
import { BrowserMock, FamilyThread, TourPicker } from "./mocks";
import { PostFlow } from "./post-flow";
import { PostOnceDemo } from "./post-once-demo";
import { SolutionTabs } from "./solution-tabs";
import { Wordmark } from "./site-header";
import {
  aboutValues,
  bookHref,
  catapultPoints,
  comparison,
  contact,
  examples,
  faqs,
  heroOffer,
  pilotAsks,
  pilotOffer,
  pilotPromises,
  problems,
  proof,
  sampleCommunity,
  solutionDetails,
  solutions,
  tabs,
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

function BookButton({ className = "" }: { className?: string }) {
  return (
    <Link href={bookHref} className={`btn btn-primary ${className}`}>
      Book a meeting
      <Arrow dir="e" />
    </Link>
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
    <Link href="/offer" className="group sticky top-0 z-50 flex h-[2.6rem] items-center justify-center gap-x-4 whitespace-nowrap bg-signal px-4 text-on-signal no-underline">
      <span className="font-display text-[1.05rem] font-bold tracking-tight sm:text-[1.2rem]">Only 5 spots available</span>
      <span className="inline-flex items-center gap-1.5 font-display font-bold underline underline-offset-4">
        <span className="hidden sm:inline">See the offer</span>
        <span className="sr-only sm:hidden">See the offer</span>
        <Arrow dir="e" className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
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

export function Problem() {
  return (
    <section aria-labelledby="problem-heading" className="py-16 sm:py-24">
      <div className={wrap}>
        <h2 id="problem-heading" className="display-2 max-w-[20ch]">
          Sound familiar?
        </h2>
        <ul className="mt-10 border-b border-ink">
          {problems.map((problem) => (
            <li key={problem.stamp} className="reveal grid items-center gap-x-8 gap-y-3 border-t border-ink py-5 md:grid-cols-[1fr_auto]">
              <p className="max-w-[48rem] font-display text-[1.3rem] font-semibold leading-tight tracking-tight sm:text-[1.6rem]">{problem.text}</p>
              <span className="tag justify-self-start text-ink-soft md:justify-self-end">{problem.stamp}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Proof() {
  return (
    <section aria-label="What the research says" className="bg-steel py-12 sm:py-14">
      <ul className={`${wrap} grid gap-8 md:grid-cols-3 md:gap-10`}>
        {proof.map((item) => (
          <li key={item.source} className="reveal">
            <p className="text-[1.1rem] leading-snug">
              <strong className="font-display font-bold">{item.stat}</strong> {item.rest}
            </p>
            <p className="mt-2 text-[0.9rem] text-ink-soft">{item.source}</p>
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

export function Overview() {
  return (
    <section aria-labelledby="overview-heading" className="py-16 sm:py-24">
      <div className={`${wrap} grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14`}>
        <Photo
          src="/photos/mother-daughter-garden.jpg"
          alt="An older woman in a cream cardigan laughing with her grown daughter on a garden bench."
          className="aspect-[4/3] lg:aspect-[4/5]"
          sizes="(min-width: 1024px) 40vw, 95vw"
        />
        <div>
          <h2 id="overview-heading" className="display-2 max-w-[18ch]">
            What you get.
          </h2>
          <ul className="mt-8 border-b border-rule">
            {solutions.map((item) => (
              <li key={item.title} className="reveal border-t border-rule">
                <Link href={item.href} className="flex items-center justify-between gap-4 py-4 no-underline hover:text-signal-ink">
                  <span>
                    <span className="block font-display text-[1.35rem] font-bold leading-tight">{item.title}</span>
                    <span className="mt-1 block">{item.body}</span>
                  </span>
                  <Arrow dir="e" className="size-6" />
                </Link>
              </li>
            ))}
          </ul>
          <BookButton className="mt-8" />
        </div>
      </div>
    </section>
  );
}

export function SolutionsHead() {
  return (
    <header className="on-dark panel pt-10 sm:pt-14">
      <div className={`${wrap} pb-8`}>
        <h1 className="display-2">Solutions</h1>
        <p className="lede mt-4 max-w-[44rem] text-on-ink-soft">Four tools. Pick one to see exactly what it does.</p>
      </div>
      <SolutionTabs />
    </header>
  );
}

function SolutionVisual({ id }: { id: keyof typeof solutionDetails }) {
  if (id === "website") {
    return (
      <figure>
        <div className="lift rounded-lg">
          <BrowserMock large highlight={false} />
        </div>
        <figcaption className="mt-3 text-[0.9rem] text-ink-soft">{sampleCommunity} is a made-up community, for illustration.</figcaption>
      </figure>
    );
  }
  if (id === "family") {
    return (
      <figure className="relative lg:pb-6">
        <Photo src="/photos/caregiver-resident.jpg" alt="A caregiver in a yellow cardigan holding the hand of an older man in a wicker chair." className="aspect-[4/3] w-full lg:w-[78%]" sizes="(min-width: 1024px) 38vw, 95vw" />
        <div className="relative z-10 mx-auto -mt-10 w-[15.5rem] lg:absolute lg:bottom-0 lg:right-0 lg:mt-0">
          <FamilyThread />
        </div>
        <figcaption className="mt-3 text-center text-[0.9rem] text-ink-soft lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:text-left">Sample messages.</figcaption>
      </figure>
    );
  }
  if (id === "conversion") {
    return (
      <figure>
        <div className="lift rounded-lg">
          <TourPicker />
        </div>
        <figcaption className="mt-3 text-[0.9rem] text-ink-soft">Sample screen for a made-up community.</figcaption>
      </figure>
    );
  }
  return (
    <Photo src="/photos/activity-table.jpg" alt="A caregiver leaning in close with residents around an activity table." className="aspect-[4/3]" sizes="(min-width: 1024px) 45vw, 95vw" />
  );
}

export function SolutionDetail({ id }: { id: keyof typeof solutionDetails }) {
  const detail = solutionDetails[id];
  const coming = "coming" in detail ? detail.coming : null;
  return (
    <>
      <section aria-labelledby="solution-heading" className="py-14 sm:py-20">
        <div className={wrap}>
          <h2 id="solution-heading" className="display-2">
            {detail.title}
          </h2>
          <p className="lede mt-4 max-w-[42rem]">{detail.purpose}</p>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h3 className="font-display text-[1.5rem] font-bold">How it works</h3>
              <ol className="mt-4 border-b border-rule">
                {detail.steps.map((step, i) => (
                  <li key={step.title} className="reveal grid grid-cols-[2.5rem_1fr] gap-2 border-t border-rule py-4">
                    <span className="flex size-8 items-center justify-center rounded bg-ink font-display font-bold text-on-ink">{i + 1}</span>
                    <span>
                      <span className="block font-display text-[1.2rem] font-bold leading-tight">{step.title}</span>
                      <span className="mt-1 block">{step.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <SolutionVisual id={id} />
          </div>
        </div>
      </section>
      {id === "post" && (
        <section aria-label="Try it" className="bg-steel py-14 sm:py-20">
          <div className={wrap}>
            <h3 className="display-3">Press the button and watch one post go out.</h3>
            <div className="mt-8">
              <PostOnceDemo />
            </div>
          </div>
        </section>
      )}
      <section aria-labelledby="included-heading" className={`py-14 sm:py-20 ${id === "post" ? "" : "bg-steel"}`}>
        <div className={wrap}>
          <h3 id="included-heading" className="display-3">
            What&apos;s included
          </h3>
          <ul className="mt-6 grid gap-x-10 md:grid-cols-2">
            {detail.included.map((item) => (
              <li key={item} className="reveal grid grid-cols-[1.75rem_1fr] gap-2 border-t border-rule py-3.5">
                <Arrow dir="e" className="mt-1 size-5 text-ink-soft" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {coming && (
            <div className="mt-12">
              <h3 className="flex flex-wrap items-center gap-3 font-display text-[1.45rem] font-bold">
                On the way
                <span className="tag text-ink-soft">Coming</span>
              </h3>
              <ul className="mt-4 list-disc space-y-2.5 pl-5 marker:text-ink-soft">
                {coming.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
      <NextStep href={detail.next.href} label={detail.next.label} />
    </>
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

export function Questions() {
  return (
    <>
      <PageHead id="questions-heading" title="Questions" />
      <section aria-label="Frequently asked questions" className="py-14 sm:py-20">
        <div className={wrap}>
          <div className="max-w-[60rem] border-b border-ink">
            {faqs.map((faq) => (
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
                    <Link href={example.href} className={card}>
                      {inner}
                    </Link>
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
      <Link href={href} className="flex items-center justify-between gap-4 border-y border-ink py-5 font-display text-[1.3rem] font-bold tracking-tight no-underline hover:text-signal-ink sm:text-[1.7rem]">
        {label}
        <Arrow dir="e" className="size-8" />
      </Link>
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
        <Photo src="/photos/activity-table.jpg" alt="A caregiver leaning in close with residents around an activity table." className="aspect-[3/2]" sizes="(min-width: 1024px) 34vw, 95vw" />
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
                <Link href={tab.href} className="inline-block py-1.5 underline-offset-4 hover:underline">
                  {tab.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="flex flex-wrap gap-x-5">
          <li>
            <Link href="/privacy" className="underline">
              Privacy
            </Link>
          </li>
          <li>
            <Link href="/accessibility" className="underline">
              Accessibility statement
            </Link>
          </li>
          <li>© 2026</li>
        </ul>
      </div>
    </footer>
  );
}
