export function ValueShift() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:gap-14 lg:text-left">
          <h2 className="flex-1 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            Financial scoring is{" "}
            <span className="italic">changing</span> how agents{" "}
            <span className="text-gradient-mint">buy and close leads.</span>
          </h2>
          <div className="w-full max-w-xl flex-1">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-surface p-6 glow-mint">
              <div className="absolute inset-x-0 top-0 h-full w-full">
                <svg
                  viewBox="0 0 300 400"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="redGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ef4444" />
                      <stop offset="100%" stopColor="#b91c1c" />
                    </linearGradient>
                    <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#20f0e8" />
                      <stop offset="100%" stopColor="#00c7d4" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  <rect x="70" y="220" width="160" height="140" rx="12" fill="url(#redGrad)" />
                  <rect x="70" y="40" width="160" height="180" rx="12" fill="url(#greenGrad)" filter="url(#glow)" />
                  <line x1="60" y1="40" x2="50" y2="40" stroke="#20f0e8" strokeWidth="2" />
                  <line x1="60" y1="220" x2="50" y2="220" stroke="#ef4444" strokeWidth="2" />
                  <line x1="50" y1="40" x2="50" y2="360" stroke="rgba(32, 240, 232, 0.25)" strokeWidth="2" />
                </svg>
              </div>
              <div className="relative z-10 flex h-full flex-col justify-between py-4 text-center font-display font-black uppercase leading-none tracking-tight">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-4xl text-white sm:text-5xl">$8,800</span>
                  <span className="text-sm text-white/90 sm:text-base">per transaction</span>
                  <span className="text-sm text-white/90 sm:text-base">with Financial Scoring</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-4xl text-white sm:text-5xl">$1,200</span>
                  <span className="text-sm text-white/90 sm:text-base">per transaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
