import { useState } from "react";
import { BenefitVisual } from "./BenefitVisual";
import { Reveal } from "./Reveal";
import { Cta } from "./Cta";

const primary = [
  {
    title: "Make more money",
    body: "One clearer picture. Bigger, more relevant cases.",
    visual: "money" as const,
  },
  {
    title: "See what's missing",
    body: "Overlooked gaps become impossible to ignore.",
    visual: "spark" as const,
  },
  {
    title: "Skip the guesswork",
    body: "Questions guided by real priorities, not scripts.",
    visual: "rings" as const,
  },
  {
    title: "Close with clarity",
    body: "Clients understand the why — and act on it.",
    visual: "shield" as const,
  },
];

const more = [
  { title: "No more product pitch", body: "Start with the picture, not the policy." },
  { title: "Faster decisions", body: "A clear next step is easier to say yes to." },
  { title: "Real relevance", body: "Recommendations that match the life in front of you." },
  { title: "Trust from minute one", body: "Clients feel understood, not processed." },
];

export function WhyClientsCare() {
  const [open, setOpen] = useState(false);

  return (
    <section id="why-clients" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-mint">
          Why clients care
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-5xl font-bold uppercase leading-[0.95] sm:text-7xl">
          They want <span className="text-gradient-mint">answers.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-center text-base text-muted-foreground sm:text-lg">
          Not another pitch.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {primary.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <article className="h-full rounded-3xl card-surface p-5">
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
                <article className="h-full rounded-3xl card-surface p-5">
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
