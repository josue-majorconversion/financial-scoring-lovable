import { Reveal } from "./Reveal";

const levels = [
  {
    label: "Level 1",
    title: "You know the client's full truth",
    body: "Every need and priority is on the table before you speak.",
  },
  {
    label: "Level 2",
    title: "New agents close sooner",
    body: "They follow the score instead of guessing their way through calls.",
  },
  {
    label: "Level 3",
    title: "Your agents stop quitting",
    body: "Agents who make money and see progress stay on the team.",
  },
  {
    label: "Level 4",
    title: "Your agency keeps growing",
    body: "More producers staying longer means more revenue every year.",
  },
];

export function RippleEffect() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-mint">
          The ripple effect
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-5xl font-bold uppercase leading-[0.95] sm:text-7xl">
          Certainty <span className="text-gradient-mint">compounds.</span>
        </h2>

        <ol className="relative mt-12 space-y-4 pl-6 sm:pl-10">
          <span
            aria-hidden="true"
            className="absolute left-1 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-mint via-mint/40 to-transparent sm:left-3"
          />
          {levels.map((l, i) => (
            <li key={l.title} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[1.35rem] top-8 h-2.5 w-2.5 rounded-full bg-mint shadow-[0_0_0_6px_rgba(0,199,212,0.18)] sm:-left-[2.1rem]"
              />
              <Reveal animation="ripple-slide" delay={i * 120} rootMargin="0px 0px -15% 0px" threshold={0.2}>
                <div className="rounded-2xl card-surface p-6">
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.26em] text-mint">
                    {l.label}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold uppercase sm:text-3xl">
                    {l.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
                </div>
              </Reveal>
            </li>
          ))}

        </ol>

        <p className="mt-12 text-center font-display text-2xl font-bold uppercase leading-snug sm:text-4xl">
          Better agents.{" "}
          <span className="text-gradient-mint">Better agencies.</span>
        </p>
      </div>
    </section>
  );
}
