import {
  MessagesSquare,
  PhoneOff,
  Search,
  TrendingUp,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const cards = [
  {
    icon: MessagesSquare,
    title: "Better conversations",
    body: "Start with context instead of a cold pitch.",
  },
  {
    icon: PhoneOff,
    title: "Fewer wasted calls",
    body: "Focus attention where meaningful needs exist.",
  },
  { icon: Search, title: "Stronger discovery", body: "Ask more relevant questions earlier." },
  {
    icon: TrendingUp,
    title: "Bigger opportunities",
    body: "Recognize needs that a single-product conversation may miss.",
  },
  {
    icon: ShieldCheck,
    title: "Greater confidence",
    body: "Explain why a recommendation deserves attention.",
  },
  {
    icon: HeartHandshake,
    title: "Better client experience",
    body: "Help clients feel understood instead of processed.",
  },
];

export function WhyAgentsCare() {
  return (
    <section className="border-y border-border/60 bg-surface/40 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Why agents care"
          title="Better information changes the entire conversation."
          subtitle="When you understand the client’s financial picture sooner, you can spend less time guessing and more time solving the right problem."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group rounded-2xl card-surface p-6 transition-colors hover:border-mint/50"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-mint/10 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5 text-mint" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold uppercase tracking-[0.04em]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-mint/40 bg-card px-6 py-10 text-center glow-mint">
          <p className="font-display text-xl font-bold uppercase leading-snug sm:text-3xl">
            When a scored prospect reaches you, the conversation can begin with{" "}
            <span className="text-gradient-mint">what matters.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
