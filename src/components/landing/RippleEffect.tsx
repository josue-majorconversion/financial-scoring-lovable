import { SectionHeading } from "./SectionHeading";

const levels = [
  {
    label: "Level 1",
    title: "Better client insight",
    body: "Agents see clearer needs and enter conversations with more context.",
  },
  {
    label: "Level 2",
    title: "Faster agent development",
    body: "New agents can follow a repeatable discovery framework and learn what to look for sooner.",
  },
  {
    label: "Level 3",
    title: "Stronger retention",
    body: "Agents who gain confidence, build skill, and experience progress have more reasons to stay engaged.",
  },
  {
    label: "Level 4",
    title: "A healthier agency",
    body: "Better retention and faster development can reduce the pressure of roll-up debt and help leaders build a larger, more durable organization.",
  },
];

export function RippleEffect() {
  return (
    <section className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="The ripple effect"
          title="Certainty compounds."
          subtitle="Financial Scoring doesn’t only change individual appointments. It can improve how agents learn, stay, produce, and build."
        />

        <ol className="relative mt-12 space-y-4 pl-6 sm:pl-10">
          <span
            aria-hidden="true"
            className="absolute left-1 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-mint via-mint/40 to-transparent sm:left-3"
          />
          {levels.map((l, i) => (
            <li
              key={l.title}
              className="relative rounded-2xl card-surface p-6"
              style={{ marginLeft: `${i * 4}%` }}
            >
              <span
                aria-hidden="true"
                className="absolute -left-[1.35rem] top-8 h-2.5 w-2.5 rounded-full bg-mint shadow-[0_0_0_6px_rgba(0,199,212,0.18)] sm:-left-[2.1rem]"
              />
              <p className="font-display text-xs font-semibold uppercase tracking-[0.26em] text-mint">
                {l.label}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold uppercase sm:text-2xl">
                {l.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-12 text-center font-display text-xl font-bold uppercase leading-snug sm:text-3xl">
          Better questions create better agents.{" "}
          <span className="text-gradient-mint">Better agents build better agencies.</span>
        </p>
      </div>
    </section>
  );
}
