import { MessageSquare, Gauge, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { icon: MessageSquare, title: "Ask", body: "Gather a few simple financial inputs." },
  { icon: Gauge, title: "Score", body: "Organize the client's financial picture." },
  {
    icon: Sparkles,
    title: "Recognize",
    body: "Surface needs and conversation opportunities.",
  },
];

export function WhatItDoes() {
  return (
    <section className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="What Financial Scoring does"
          title="See the financial picture before you recommend the solution."
        />
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
          Financial Scoring is a technology that recognizes patterns across a client's financial
          life and turns them into a clear, actionable score. It helps reveal overlooked risks,
          priorities, and opportunities so agents can ask better questions and have more relevant
          conversations.
        </p>

        <ol className="mt-12 grid gap-4 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <li key={title} className="relative rounded-2xl card-surface p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-mint/10">
                <Icon className="h-5 w-5 text-mint" aria-hidden="true" />
              </span>
              <p className="mt-5 font-display text-sm font-semibold uppercase tracking-[0.2em] text-mint">
                Step {i + 1}
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold uppercase">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-surface/50 p-5 text-center text-sm leading-relaxed text-muted-foreground">
          A credit score looks at borrowing behavior. A financial score helps create a broader view
          of financial health, priorities, and potential gaps.
        </p>
      </div>
    </section>
  );
}
