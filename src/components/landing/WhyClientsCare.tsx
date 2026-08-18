import { useState } from "react";
import { BenefitVisual } from "./BenefitVisual";
import { Reveal } from "./Reveal";
import { Cta } from "./Cta";

const primary = [
  {
    title: "Stop flying blind",
    body: "See where you really stand before making another financial move.",
    visual: "flying-blind" as const,
  },
  {
    title: "Get out of the dark",
    body: "Understand your score, your gaps, and the reason behind the next step.",
    visual: "out-of-dark" as const,
  },
  {
    title: "Don't guess about retirement",
    body: "See whether what you're doing today is actually moving you toward the finish line.",
    visual: "retirement" as const,
  },
  {
    title: "Know what a bad day could expose",
    body: "See where protection gaps could leave your financial plan vulnerable.",
    visual: "bad-day" as const,
  },
];

const more = [
  {
    title: "Don't let taxes surprise you",
    body: "See whether your current financial picture is built with tax efficiency in mind.",
  },
  {
    title: 'Stop wondering "Am I okay?"',
    body: "Turn a pile of accounts and policies into one clearer financial picture.",
  },
  {
    title: "See what needs attention first",
    body: "Know where the biggest gaps are before trying to fix everything at once.",
  },
  {
    title: "Find the hidden gaps",
    body: "See what may be missing across retirement, taxes, risk, and protection.",
  },
];

export function WhyClientsCare() {
  const [open, setOpen] = useState(false);

  return (
    <section id="why-clients" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-mint">
          They want Answers
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-4xl font-bold uppercase leading-[0.95] sm:text-6xl">
          Why Clients <span className="text-gradient-mint">Care</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-center text-base font-bold text-muted-foreground sm:text-lg">
          Know before it's too late.
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
