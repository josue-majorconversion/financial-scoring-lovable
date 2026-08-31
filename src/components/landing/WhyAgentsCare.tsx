import { BenefitVisual } from "./BenefitVisual";
import { Reveal } from "./Reveal";

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


export function WhyAgentsCare() {
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
      </div>
    </section>
  );
}
