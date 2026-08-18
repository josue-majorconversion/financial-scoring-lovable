import { useState } from "react";
import { BenefitVisual } from "./BenefitVisual";
import { Reveal } from "./Reveal";
import { Cta } from "./Cta";

const primary = [
  {
    title: "Stop leaving money on the table",
    body: "Hidden needs can mean missed opportunities, smaller cases, and commissions you never knew were there.",
    visual: "leaving-money" as const,
  },
  {
    title: "Stop wasting calls on the wrong people",
    body: "Spend less time chasing weak opportunities and more time where real financial needs exist.",
    visual: "no-calls" as const,
  },
  {
    title: "Stop losing client trust",
    body: "A clearer process helps clients understand what you see, why it matters, and what should happen next.",
    visual: "bad-day" as const,
  },
  {
    title: "Stop walking in blind",
    body: "See the client's financial priorities before you start making recommendations.",
    visual: "flying-blind" as const,
  },
];

const more = [
  {
    title: "Stop missing the real problem",
    body: "Ask questions tied to the client's full financial picture instead of guessing what matters most.",
  },
  {
    title: "Don't sound like every other agent",
    body: "Bring a structured scoring process into the conversation instead of another generic product pitch.",
  },
  {
    title: "Stop letting new agents wing it",
    body: "Give newer agents a repeatable process so they know what to ask and what to look for.",
  },
  {
    title: "Stop starting every call from zero",
    body: "Walk into the conversation with more context and a clearer idea of where the needs may be.",
  },
];

export function WhyAgentsCare() {
  const [open, setOpen] = useState(false);

  return (
    <section className="border-y border-border/60 bg-surface/40 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-mint">
          Sell Smarter
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-4xl font-bold uppercase leading-[0.95] sm:text-6xl">
          Why Agents <span className="text-gradient-mint">Care</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-center text-base text-muted-foreground sm:text-lg">
          Every guess can cost you a deal.
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
