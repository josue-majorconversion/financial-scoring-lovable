import { SkoolButton } from "./WhatsNext";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      <div className="absolute inset-0 -z-10 grid-glow opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 overflow-hidden"
      >
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          className="h-full w-[200%] animate-wave-drift opacity-60"
        >
          <path
            d="M0 96 C 180 40 360 150 540 96 C 720 42 900 150 1080 96 C 1260 42 1350 70 1440 96 L1440 160 L0 160Z"
            fill="rgba(0,199,212,0.16)"
          />
          <path
            d="M0 120 C 200 70 400 168 620 118 C 840 68 1040 160 1240 116 C 1340 94 1400 108 1440 118 L1440 160 L0 160Z"
            fill="rgba(32,240,232,0.10)"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-mint">
          The next era of prospecting
        </p>
        <h2 className="mt-5 font-display text-4xl font-bold uppercase leading-[0.95] sm:text-6xl">
          <span className="block">Stop buying leads.</span>
          <span className="block text-gradient-mint">Start buying certainty.</span>
        </h2>
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">
          See what changes when every conversation begins with a clearer financial picture.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <SkoolButton variant="outline" className="w-full sm:w-auto" />
        </div>

        <p className="mt-14 font-display text-base font-semibold uppercase tracking-[0.28em] text-muted-foreground">
          We Don't Sell Leads
          <br />
          We Replace Them.
        </p>
      </div>
    </section>
  );
}
