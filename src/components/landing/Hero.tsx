import { UserCheck, PhoneOff, TrendingUp } from "lucide-react";
import { Cta } from "./Cta";
import { ScoreLens } from "./ScoreLens";

const indicators = [
  { icon: UserCheck, label: "Scored prospects" },
  { icon: PhoneOff, label: "Fewer calls" },
  { icon: TrendingUp, label: "Bigger opportunities" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-glow" />
      <div className="absolute left-1/2 top-[-12rem] -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-mint/15 blur-[130px] animate-pulse-glow" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-24 -z-10 h-px bg-gradient-to-r from-transparent via-mint/60 to-transparent animate-scan-down"
      />

      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-20 pt-28 sm:px-8">
        <div className="flex flex-col items-center gap-7 text-center">
          <ScoreLens score={87} className="h-24 w-24 animate-float-slow sm:h-32 sm:w-32" />

          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-mint sm:text-xs">
            The end of traditional lead buying
          </p>

          <h1 className="max-w-4xl font-display text-6xl font-bold uppercase leading-[0.92] sm:text-8xl lg:text-9xl">
            Leads are <span className="text-gradient-mint">dead.</span>
          </h1>

          <p className="font-display text-xl font-medium uppercase tracking-[0.04em] text-foreground/90 sm:text-3xl">
            Stop buying leads. Start buying certainty.
          </p>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Financial Scoring helps agents recognize the needs, opportunities, and financial
            priorities hidden inside every prospect — before the conversation begins.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Cta href="#experience">Experience Scoring</Cta>
            <Cta href="#why-clients" variant="outline">
              See Why It Matters
            </Cta>
          </div>

          <ul className="mt-4 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {indicators.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center justify-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-3 text-sm font-medium text-foreground/90"
              >
                <Icon className="h-4 w-4 text-mint" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>

          <p className="mt-4 font-display text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Scan. Score. See the difference.
          </p>
        </div>
      </div>
    </section>
  );
}
