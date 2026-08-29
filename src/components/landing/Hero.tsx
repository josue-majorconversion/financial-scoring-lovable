import { TrendingUp, DollarSign, PhoneOff } from "lucide-react";

const indicators = [
  { icon: TrendingUp, label: "Make More Deals", lines: ["Make More", "Deals"] as const },
  { icon: DollarSign, label: "Earn Higher Commissions", lines: ["Earn Higher", "Commissions"] as const },
  { icon: PhoneOff, label: "Make Fewer Calls", lines: ["Make Fewer", "Calls"] as const },
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
            Revolutionizing Traditional Lead Buying
          </p>

          <h1 className="w-full whitespace-nowrap font-display text-7xl font-bold uppercase leading-[0.85] sm:text-8xl lg:text-9xl">
            <span className="block text-[1.7em] text-[#ff3b30]">STOP</span>
            <span className="mb-2 mt-5 flex items-center justify-center gap-2 text-[0.55em] sm:mb-3 sm:mt-7 sm:gap-4">
              <span className="h-0.5 w-10 bg-white/80 sm:w-16" />
              Calling
              <span className="h-0.5 w-10 bg-white/80 sm:w-16" />
            </span>
            <span className="relative inline-block text-[1.7em]">
              Blind
              <span
                className="absolute left-0 top-1/2 h-[0.12em] w-full -translate-y-1/2 -rotate-6 bg-[#ff3b30]"
                aria-hidden="true"
              />
            </span>
          </h1>

          <p className="my-6 font-display font-bold uppercase tracking-[0.04em] text-foreground/90 sm:my-8">
            <span className="block text-[1.95rem] underline decoration-mint underline-offset-4 sm:text-[2.65rem]">
              Know the client Before you call
            </span>
          </p>

          <ul className="mt-2 flex w-full max-w-3xl animate-pulse-glow flex-col overflow-hidden rounded-2xl border border-border bg-surface/80 shadow-[0_0_40px_rgba(255,255,255,0.12)] sm:flex-row">
            {indicators.map(({ icon: Icon, label, lines }, index) => (
              <li
                key={label}
                className="relative flex flex-1 flex-row items-center gap-4 px-4 py-4 text-left sm:flex-col sm:gap-3 sm:px-2 sm:py-5 sm:text-center"
              >
                {index < indicators.length - 1 && (
                  <>
                    <div className="absolute bottom-0 left-1/2 hidden h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent sm:block sm:bg-gradient-to-b" />
                    <div className="absolute bottom-0 left-1/2 block h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent sm:hidden" />
                  </>
                )}
                <Icon className="h-9 w-9 shrink-0 text-mint sm:h-12 sm:w-12" aria-hidden="true" />
                <span className="font-display text-base font-bold uppercase leading-tight tracking-[0.04em] sm:text-2xl">
                  <span className="inline sm:block">{lines[0]}</span>{' '}
                  <span className="inline sm:block">{lines[1]}</span>
                </span>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 whitespace-nowrap font-display text-5xl font-black uppercase italic leading-[0.85] text-mint sm:mt-12 sm:text-8xl lg:text-9xl">
            Here's How...
          </h2>
        </div>
      </div>
    </section>
  );
}
