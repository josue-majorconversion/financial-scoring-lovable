import lockup from "@/assets/ignyte-lockup.png.asset.json";
import { Cta } from "./Cta";
import { ScoreLens } from "./ScoreLens";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-glow" />
      <div className="absolute left-1/2 top-[-10rem] -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-mint/15 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-0 right-[-6rem] -z-10 h-[22rem] w-[22rem] rounded-full bg-cyan/10 blur-[120px]" />

      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col px-5 pb-16 pt-7 sm:px-8">
        <header className="flex items-center justify-between gap-4">
          <img
            src={lockup.url}
            alt="Ignyte Sales Conference"
            className="h-10 w-auto sm:h-12"
          />
          <span className="hidden font-display text-xs font-bold uppercase tracking-[0.28em] text-mint sm:block">
            FinancialScoring
          </span>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center gap-8 py-12 text-center">
          <ScoreLens score={87} className="h-28 w-28 animate-float-slow sm:h-36 sm:w-36" />

          <div className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/5 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-mint">
            We don't sell leads, we replace them
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Your leads are{" "}
            <span className="text-gradient-mint">more valuable</span> than you know
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Financial scoring helps agents uncover more deals, higher commissions, and
            fewer calls — from the leads you already have.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Cta href="#subscribe">Experience Scoring</Cta>
            <Cta href="#how" variant="outline">
              See How It Works
            </Cta>
          </div>

          <a
            href="#subscribe"
            className="font-display text-sm font-semibold text-mint underline decoration-mint/40 underline-offset-4 transition-colors hover:decoration-mint"
          >
            Start My 14-Day Free Trial →
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <span>More deals</span>
          <span className="text-mint">Higher commissions</span>
          <span>Fewer calls</span>
        </div>
      </div>
    </section>
  );
}
