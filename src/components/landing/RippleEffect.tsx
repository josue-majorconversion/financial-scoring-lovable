import { ClipboardCheck, Target, Users, TrendingUp } from "lucide-react";

const levels = [
  {
    label: "01",
    icon: ClipboardCheck,
    title: "Repeatable Sales Process",
    body: "Give every agent a clear process to use with scored leads.",
  },
  {
    label: "02",
    icon: Target,
    title: "Faster Agent Ramp-Up",
    body: "Help new agents know where to start and what to discuss.",
  },
  {
    label: "03",
    icon: Users,
    title: "Higher Agent Retention",
    body: "Agents who see progress have more reason to stay.",
  },
  {
    label: "04",
    icon: TrendingUp,
    title: "Scale the Agency Faster",
    body: "Spend less time replacing producers and more time growing the team.",
  },
];

export function RippleEffect() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-mint">
          Experience scoring
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-5xl font-bold uppercase leading-[0.95] sm:text-7xl">
          A repeatable process to{" "}
          <span className="text-gradient-mint">scale the agency.</span>
        </h2>

        <ol className="relative mt-16 space-y-12 pl-6 sm:mt-20 sm:space-y-20 sm:pl-10">
          <span
            aria-hidden="true"
            className="absolute left-1 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-mint via-mint/40 to-transparent sm:left-3"
          />
          {levels.map((l) => (
            <li key={l.title} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[1.35rem] top-8 h-2.5 w-2.5 rounded-full bg-mint shadow-[0_0_0_6px_rgba(0,199,212,0.18)] sm:-left-[2.1rem]"
              />
              <div className="rounded-2xl card-surface p-6">
                <div className="flex items-center gap-4">
                  <div className="relative grid h-20 w-20 shrink-0 place-items-center rounded-2xl border border-mint/30 bg-mint/5 sm:h-24 sm:w-24">
                    <l.icon size={40} strokeWidth={2} className="text-mint sm:h-11 sm:w-11" />
                  </div>
                  <h3 className="font-display text-[1.4rem] font-bold uppercase leading-tight sm:text-[1.9rem]">
                    {l.label} — {l.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
              </div>
            </li>
          ))}

        </ol>

        <p className="mt-12 text-center font-display text-2xl font-bold uppercase leading-snug sm:text-4xl">
          Train faster.{" "}
          <span className="text-gradient-mint">Retain more. Scale sooner.</span>
        </p>
      </div>
    </section>
  );
}
