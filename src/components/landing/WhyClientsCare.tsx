import { useState } from "react";
import { BenefitVisual } from "./BenefitVisual";
import { Reveal } from "./Reveal";
import { Cta } from "./Cta";

const primary = [
  {
    title: "See the whole picture",
    body: "Bring savings, retirement, taxes, and protection into one clear view.",
    visual: "clarity" as const,
  },
  {
    title: "Know What to Fix First",
    body: "See which areas may need attention now - and why.",
    visual: "close-more-deals" as const,
  },
  {
    title: "See if Retirement Is on Track",
    body: "See whether today’s path points toward the retirement they want.",
    visual: "retirement" as const,
  },
  {
    title: "Find the Gaps Before Life Does",
    body: "Spot weak points before a major life change puts the plan to the test.",
    visual: "bad-day" as const,
  },
];

const more = [
  {
    title: "Don't let taxes surprise you",
    body: "See whether your current financial picture is built with tax efficiency in mind.",
    visual: "leaving-money" as const,
  },
  {
    title: 'Stop wondering "Am I okay?"',
    body: "Turn a pile of accounts and policies into one clearer financial picture.",
    visual: "question" as const,
  },
  {
    title: "See what needs attention first",
    body: "Know where the biggest gaps are before trying to fix everything at once.",
    visual: "real-problem" as const,
  },
  {
    title: "Find the hidden gaps",
    body: "See what may be missing across retirement, taxes, risk, and protection.",
    visual: "puzzle" as const,
  },
];

export function WhyClientsCare() {
  const [open, setOpen] = useState(false);

  return (
    <section id="why-clients" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-mint">
          Why Clients care
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-4xl font-bold uppercase leading-[0.95] sm:text-6xl">
          Answers to the questions that matter most.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-center text-base font-bold text-muted-foreground sm:text-lg">
          One Financial Score helps turn a confusing financial picture into a clear place to start.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {primary.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <article className="h-full rounded-3xl card-surface p-5 text-center">
                <BenefitVisual variant={c.visual} />
                <h3 className="mt-5 font-display text-2xl font-bold uppercase leading-none sm:text-3xl">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {open ? (
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {more.map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
              <article className="h-full rounded-3xl card-surface p-5 text-center">
                <BenefitVisual variant={c.visual} />
                <h3 className="mt-5 font-display text-xl font-bold uppercase sm:text-2xl">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </article>
              </Reveal>
            ))}
          </div>
        ) : null}

        <div className="mt-8 flex justify-center">
          <Cta
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => setOpen((v) => !v)}
            ariaLabel={open ? "Show fewer benefits" : "See all benefits"}
          >
            {open ? "Show less" : "See all benefits"}
          </Cta>
        </div>
      </div>
    </section>
  );
}
