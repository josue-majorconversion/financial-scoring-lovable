import { Check, Minus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const without = [
  "Fragmented financial information",
  "Product-first conversations",
  "Important gaps can go unnoticed",
  "Advice may feel generic",
  "Clients struggle to see the full picture",
  "Decisions are easier to delay",
];

const withScoring = [
  "One clearer financial picture",
  "Questions guided by actual priorities",
  "Overlooked needs become visible",
  "Recommendations feel more relevant",
  "Clients understand the “why”",
  "A clearer next step emerges",
];

const outcomes = ["Clarity", "Confidence", "Context", "Better questions", "A visible next step"];

export function WhyClientsCare() {
  return (
    <section id="why-clients" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Why clients care"
          title="Clients don’t want another product pitch. They want a clearer picture."
          subtitle="Financial Scoring changes the conversation from “What can I sell?” to “What does this person actually need?”"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-border/50 bg-surface/40 p-6 opacity-80">
            <h3 className="font-display text-lg font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Without a financial score
            </h3>
            <ul className="mt-5 space-y-3">
              {without.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <Minus className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-mint/40 bg-card p-6 glow-mint">
            <h3 className="font-display text-lg font-semibold uppercase tracking-[0.14em] text-mint">
              With Financial Scoring
            </h3>
            <ul className="mt-5 space-y-3">
              {withScoring.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {outcomes.map((o) => (
            <li
              key={o}
              className="rounded-full border border-border bg-surface/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/85"
            >
              {o}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-12 max-w-3xl text-center font-display text-xl font-semibold leading-snug sm:text-3xl">
          Clients want to understand the bigger picture—
          <span className="text-gradient-mint">not just hear about another product.</span>
        </p>
      </div>
    </section>
  );
}
