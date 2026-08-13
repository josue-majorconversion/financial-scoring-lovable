import { BadgeCheck } from "lucide-react";
import { Cta } from "./Cta";

export function Movement() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
      <div className="absolute left-1/2 top-10 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-mint/10 blur-[130px] animate-pulse-glow" />
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
          Your clients are being replaced by{" "}
          <span className="text-gradient-mint">certified scoring analysts</span> every
          single day.
        </h2>
        <p className="mt-6 text-base text-muted-foreground sm:text-lg">
          Financial scoring bridges the gap between insurance agent and financial
          professional. You are either becoming one or losing clients to one.
        </p>

        <div className="mt-12 flex justify-center">
          <div className="relative w-64 rounded-3xl card-surface px-6 py-8 glow-mint animate-float-slow">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-mint">
              <BadgeCheck className="h-8 w-8 text-primary-foreground" />
            </span>
            <p className="mt-5 font-display text-xs font-bold uppercase tracking-[0.28em] text-mint">
              Certified
            </p>
            <p className="mt-1 font-display text-xl font-bold leading-tight">
              Scoring Analyst
            </p>
            <p className="mt-4 border-t border-border/60 pt-4 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              FinancialScoring
            </p>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Clients want this. They want to be scored. They want a bigger picture. They want
          someone who asks the right questions.
        </p>

        <div className="mt-10">
          <Cta href="#subscribe">Become a Certified Scoring Analyst</Cta>
        </div>
      </div>
    </section>
  );
}
