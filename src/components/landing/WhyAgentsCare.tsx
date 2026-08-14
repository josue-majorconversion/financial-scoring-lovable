import { useState } from "react";
import { BenefitVisual } from "./BenefitVisual";
import { Reveal } from "./Reveal";
import { Cta } from "./Cta";

const primary = [
  {
    title: "Bigger cases",
    body: "See needs a single-product call always misses.",
    visual: "bigger-case" as const,
  },
  {
    title: "Fewer dead calls",
    body: "Spend your day where the money actually is.",
    visual: "no-calls" as const,
  },
  {
    title: "Own the room",
    body: "Walk in already knowing what matters.",
    visual: "crown" as const,
  },
  {
    title: "Clients that stay",
    body: "Understood clients buy more and leave less.",
    visual: "loyalty" as const,
  },
];

const more = [
  { title: "Sharper discovery", body: "Ask the right question first, every time." },
  { title: "Instant credibility", body: "Explain the why behind every recommendation." },
  { title: "Ramp up faster", body: "New agents get a repeatable framework." },
  { title: "No cold openers", body: "Every conversation starts with context." },
];

export function WhyAgentsCare() {
  const [open, setOpen] = useState(false);

  return (
    <section className="border-y border-border/60 bg-surface/40 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-mint">
          Why agents care
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-5xl font-bold uppercase leading-[0.95] sm:text-7xl">
          Sell <span className="text-gradient-mint">smarter.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-center text-base text-muted-foreground sm:text-lg">
          Less guessing. More closing.
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
                  <h3 className="font-display text-xl font-bold uppercase sm:text-2xl">
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
