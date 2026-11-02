import { solutions } from "../content";
import { solutionDetails, type SolutionId } from "../solutions-content";
import { FeatureIcon } from "./feature-icon";
import { BookButton, Closing, FaqList, NextStep } from "./sections";
import { SignatureScene } from "./signature-scenes";
import { SolutionTabs } from "./solution-tabs";
import { CountUp } from "./story";

const wrap = "mx-auto max-w-[86rem] px-5 sm:px-10";

export function SolutionPage({ id }: { id: SolutionId }) {
  const solution = solutions.find((item) => item.id === id)!;
  const detail = solutionDetails[id];
  const proofSection = (
    <section aria-labelledby="proof-heading" className="py-16 sm:py-24">
      <div className={wrap}>
        <h2 id="proof-heading" className="display-2 max-w-[24ch]">
          {detail.proofHeading}
        </h2>
        <ul className={`mt-8 grid gap-10 ${detail.proof.length > 1 ? "md:grid-cols-2" : "max-w-[46rem]"}`}>
          {detail.proof.map((stat) => (
            <li key={stat.source}>
              <p className="font-display text-[3.2rem] font-bold leading-none tracking-tight sm:text-[4.2rem]">
                {stat.big ?? (
                  <>
                    {stat.lead}
                    <CountUp value={stat.value!} suffix={stat.suffix} />
                  </>
                )}
              </p>
              <p className="mt-3 text-[1.15rem] leading-snug">{stat.text}</p>
              <p className="mt-2 text-[0.9rem] text-ink-soft">{stat.source}</p>
              {stat.link && <p className="mt-3 border-t border-rule pt-3 font-bold leading-snug">{stat.link}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
  return (
    <>
      <section aria-labelledby="solution-heading" className="on-dark panel overflow-hidden pt-6 sm:pt-8">
        <SolutionTabs />
        {id === "website" ? (
          <div className={`${wrap} pb-12 pt-7`}>
            <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
              <div className="max-w-[52rem]">
                <p className="lede italic text-on-ink-soft">&ldquo;{solution.problem}&rdquo;</p>
                <h1 id="solution-heading" className="display-3 mt-2">
                  {solution.promise}
                </h1>
              </div>
              <BookButton className="!min-h-[3.75rem] w-full !px-8 !text-[1.2rem] sm:w-auto" />
            </div>
            <div className="mt-5">
              <SignatureScene id={id} />
            </div>
          </div>
        ) : (
          <div className={`${wrap} pb-14 pt-10 sm:pb-20 sm:pt-12`}>
            <p className="lede max-w-[46rem] italic text-on-ink-soft">&ldquo;{solution.problem}&rdquo;</p>
            <h1 id="solution-heading" className="display-2 mt-3 max-w-[30ch]">
              {solution.promise}
            </h1>
            <BookButton className="mt-6 !min-h-[3.75rem] w-full !px-8 !text-[1.2rem] sm:w-auto" />
            <h2 className="mt-10 font-display text-[1.6rem] font-bold sm:text-[2rem]">See {solution.title} work.</h2>
            <div className="mt-3">
              <SignatureScene id={id} />
            </div>
          </div>
        )}
      </section>

      {id !== "post" && proofSection}

      <section aria-labelledby="included-heading" className="bg-steel py-16 sm:py-24">
        <div className={wrap}>
          <h2 id="included-heading" className="display-2">
            What&apos;s included.
          </h2>
          <p className="lede mt-3 max-w-[46rem]">We&apos;re building this with our founding communities. Ask us what&apos;s ready today.</p>
          <div className="mt-8 grid gap-10">
            {detail.groups.map((group) => (
              <div key={group.theme}>
                <h3 className="font-display text-[1.5rem] font-bold leading-tight sm:text-[1.75rem]">{group.theme}</h3>
                <ul className="mt-3 grid gap-3 md:grid-cols-2">
                  {group.features.map((feature) => (
                    <li key={feature.name} className="reveal flex gap-3.5 rounded-lg bg-paper p-4">
                      <FeatureIcon name={feature.icon} />
                      <div>
                        <p className="font-display text-[1.2rem] font-bold leading-tight">{feature.name}</p>
                        <p className="mt-1 leading-snug">{feature.benefit}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="scorecard-heading" className="py-12 sm:py-16">
        <div className={wrap}>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <h2 id="scorecard-heading" className="display-3">
              Your monthly scorecard.
            </h2>
            <span className="tag text-ink-soft">Sample numbers</span>
          </div>
          <dl className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {detail.scorecard.map((tile) => (
              <div key={tile.label} className={`flex flex-col-reverse justify-end rounded-lg p-4 ${tile.highlight ? "on-dark bg-ink text-on-ink" : "bg-paper"}`}>
                <dt className="mt-1 leading-snug">
                  <span className="block font-bold">{tile.label}</span>
                  {tile.note && <span className={`block text-[0.9rem] ${tile.highlight ? "text-on-ink-soft" : "text-ink-soft"}`}>{tile.note}</span>}
                </dt>
                <dd className={`font-display text-[2.4rem] font-bold leading-none tracking-tight ${tile.highlight ? "text-signal-bright" : ""}`}>
                  <CountUp value={tile.value} suffix={tile.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {id === "post" && (
        <section aria-labelledby="proof-heading" className="on-dark panel">
          <div className={`${wrap} grid items-center gap-8 py-14 sm:py-20 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]`}>
            <div>
              <h2 id="proof-heading" className="display-2 max-w-[20ch]">
                {detail.proofHeading}
              </h2>
              <p className="lede mt-4 max-w-[40rem] text-on-ink-soft">{detail.proof[0].text}</p>
              <BookButton label="Book a demo" className="mt-6 !min-h-[3.75rem] w-full !px-8 !text-[1.2rem] sm:w-auto" />
              <p className="mt-4 max-w-[40rem] text-[0.9rem] text-on-ink-soft">{detail.proof[0].source}</p>
            </div>
            <p aria-hidden="true" className="font-display text-[5rem] font-bold leading-none tracking-tight text-signal-bright sm:text-[8rem] lg:justify-self-center">
              {detail.proof[0].big}
            </p>
          </div>
        </section>
      )}

      <section aria-labelledby="solution-faq-heading" className="py-16 sm:py-24">
        <div className={wrap}>
          <h2 id="solution-faq-heading" className="display-2">
            Quick answers.
          </h2>
          <div className="mt-8">
            <FaqList items={detail.faqs} />
          </div>
        </div>
      </section>

      <NextStep href={detail.next.href} label={detail.next.label} />
      <Closing />
    </>
  );
}
