import { TrendingUp, DollarSign, PhoneOff } from "lucide-react";

const indicators = [
  { icon: TrendingUp, label: "Make More Deals", lines: ["Make More", "Deals."] as const },
  { icon: DollarSign, label: "Earn Higher Commissions", lines: ["Earn Higher", "Commissions."] as const },
  { icon: PhoneOff, label: "Make Fewer Calls", lines: ["Make Fewer", "Calls."] as const },
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

      <div className="mx-auto flex min-h-[90svh] max-w-6xl flex-col justify-center px-5 pb-16 pt-12 sm:px-8">
        <div className="flex flex-col items-center gap-7 text-center">
          

          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-mint sm:text-xs">
            THE END OF TRADITIONAL LEAD BUYING
          </p>

          <h1 className="w-full whitespace-nowrap font-display text-7xl font-bold uppercase leading-[0.85] sm:text-8xl lg:text-9xl">
            <span className="block">Leads are</span>
            <span className="block text-[1.7em] text-[#ff3b30]">dead</span>
          </h1>

          <p className="my-6 font-display font-bold uppercase tracking-[0.04em] text-foreground/90 sm:my-8">
            <span className="block text-[1.65rem] sm:text-[2.25rem]">Stop buying leads.</span>
            <span className="block text-[1.95rem] underline decoration-mint underline-offset-4 sm:text-[2.65rem]">Start buying certainty.</span>
          </p>

          <ul className="mt-2 flex w-full max-w-3xl animate-pulse-glow overflow-hidden rounded-2xl border border-border bg-surface/80 shadow-[0_0_40px_rgba(255,255,255,0.12)]">
            {indicators.map(({ icon: Icon, label }, index) => (
              <li
                key={label}
                className="relative flex flex-1 flex-col items-center gap-3 px-2 py-5 text-center"
              >
                {index < indicators.length - 1 && (
                  <div className="absolute right-0 top-1/2 h-12 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/25 to-transparent" />
                )}
                <Icon className="h-9 w-9 text-mint sm:h-12 sm:w-12" aria-hidden="true" />
                <span className="font-display text-[0.72rem] font-bold uppercase leading-tight tracking-[0.04em] sm:text-base">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-display text-7xl font-black uppercase italic leading-[0.85] text-mint sm:mt-12 sm:text-8xl lg:text-9xl">
            Here's How...
          </h2>
        </div>
      </div>
    </section>
  );
}
