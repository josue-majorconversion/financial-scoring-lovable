import { TrendingUp, DollarSign, PhoneOff } from "lucide-react";
import { ScoreLens } from "./ScoreLens";

const indicators = [
  { icon: TrendingUp, label: "Make More Deals" },
  { icon: DollarSign, label: "Earn Higher Commissions" },
  { icon: PhoneOff, label: "Make Fewer Calls" },
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

      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8">
        <div className="flex flex-col items-center gap-7 text-center">
          

          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-mint sm:text-xs">
            THE END OF TRADITIONAL LEAD BUYING
          </p>

          <h1 className="max-w-4xl font-display text-6xl font-bold uppercase leading-[0.9] sm:text-8xl lg:text-9xl">
            Leads are{" "}
            <span className="block text-[#ff3b30] sm:inline">dead.</span>
          </h1>

          <p className="font-display text-2xl font-medium uppercase tracking-[0.04em] text-foreground/90 sm:text-3xl">
            STOP BUYING LEADS. START BUYING CERTAINTY.
          </p>

          <ul className="mt-2 grid w-full max-w-3xl grid-cols-3 gap-2 sm:gap-4">
            {indicators.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface/60 px-2 py-5 text-center"
              >
                <Icon className="h-9 w-9 text-mint sm:h-12 sm:w-12" aria-hidden="true" />
                <span className="font-display text-[0.72rem] font-bold uppercase leading-tight tracking-[0.04em] sm:text-base">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
