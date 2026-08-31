import { useState } from "react";
import { BenefitVisual } from "./BenefitVisual";
import { Reveal } from "./Reveal";
import { Cta } from "./Cta";

const primary = [
  {
    title: "Close More Deals",
    body: "Know which prospects have real financial needs before you pick up the phone.",
    visual: "close-more-deals" as const,
  },
  {
    title: "Earn More Per Deal",
    body: "Spot bigger opportunities and write larger cases with the same lead list.",
    visual: "earn-more-per-deal" as const,
  },
  {
    title: "Make Fewer Calls",
    body: "Stop chasing cold leads. Focus on the ones already showing buying signals.",
    visual: "make-fewer-calls" as const,
  },
  {
    title: "Help Clients More",
    body: "Bring clarity to the conversation so clients understand and act with confidence.",
    visual: "help-clients-more" as const,
  },
];

const more = [
  {
    title: "Stop Missing the Real Problem",
    body: "Ask questions tied to the client's full financial picture instead of guessing what matters most.",
    visual: "real-problem" as const,
  },
  {
    title: "Don't Sound Like Every Other Agent",
    body: "Bring a structured scoring process into the conversation instead of another generic product pitch.",
    visual: "stand-out" as const,
  },
  {
    title: "Stop Letting New Agents Wing It",
    body: "Give newer agents a repeatable process so they know what to ask and what to look for.",
    visual: "new-agents" as const,
  },
  {
    title: "Stop Starting Every Call From Zero",
    body: "Walk into the conversation with more context and a clearer idea of where the needs may be.",
    visual: "call-context" as const,
  },
];

export function WhyAgentsCare() {
  const [open, setOpen] = useState(false);

  return (
    <section className="border-y border-border/60 bg-surface/40 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-mint">
          Why You Should Care
        </p>
        <h2 className="mx-auto mt-4 w-full text-center font-display text-5xl font-bold uppercase leading-[0.95] sm:text-7xl lg:text-8xl">
          Larger Deals, <span className="block text-mint">More Often.</span>
        </h2>

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
