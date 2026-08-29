export function ValueShift() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:gap-14 lg:text-left">
          <h2 className="flex-1 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            Financial scoring is changing how agents{" "}
            <span className="text-gradient-mint">buy and close leads.</span>
          </h2>

          <div className="w-full flex-1">
            <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-[#02090b] p-4 sm:p-6 glow-mint">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-4 w-1 rounded-full bg-mint" />
                <span className="font-display text-[11px] uppercase tracking-[0.25em] text-white/90 sm:text-xs">
                  Average transaction value
                </span>
              </div>

              {/* chart */}
              <svg
                viewBox="0 0 400 220"
                className="h-auto w-full"
                role="img"
                aria-label="Average transaction value with and without Financial Scoring"
              >
                <defs>
                  <linearGradient id="vsGreenFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="vsRedFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="vsGreenLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#16a34a" />
                    <stop offset="100%" stopColor="#4ade80" />
                  </linearGradient>
                </defs>

                {/* grid */}
                {[40, 85, 130, 175].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="400"
                    y2={y}
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="1"
                  />
                ))}

                {/* green */}
                <path
                  d="M0 185 C60 175 70 120 120 108 C170 96 190 96 230 78 C280 56 320 44 400 28 L400 200 L0 200 Z"
                  fill="url(#vsGreenFill)"
                />
                <path
                  d="M0 185 C60 175 70 120 120 108 C170 96 190 96 230 78 C280 56 320 44 400 28"
                  fill="none"
                  stroke="url(#vsGreenLine)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="396" cy="29" r="6" fill="#4ade80" />
                <circle cx="396" cy="29" r="12" fill="#4ade80" opacity="0.2" />

                {/* red */}
                <path
                  d="M0 190 C80 186 140 184 200 182 C270 180 330 179 400 178 L400 200 L0 200 Z"
                  fill="url(#vsRedFill)"
                />
                <path
                  d="M0 190 C80 186 140 184 200 182 C270 180 330 179 400 178"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="396" cy="178" r="5" fill="#ef4444" />

                <line x1="0" y1="200" x2="400" y2="200" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />
              </svg>

              {/* readouts */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-[#22c55e]/30 bg-[#22c55e]/10 p-3 text-left">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#4ade80]" />
                    <span className="font-display text-[10px] uppercase tracking-widest text-[#4ade80]">
                      With scoring
                    </span>
                  </div>
                  <div className="mt-1 font-display text-2xl font-black leading-none text-white sm:text-3xl">
                    $8,800
                  </div>
                  <div className="mt-1 text-[11px] text-white/60">per transaction</div>
                </div>

                <div className="rounded-xl border border-[#ef4444]/30 bg-[#ef4444]/10 p-3 text-left">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#ef4444]" />
                    <span className="font-display text-[10px] uppercase tracking-widest text-[#ef4444]">
                      Without scoring
                    </span>
                  </div>
                  <div className="mt-1 font-display text-2xl font-black leading-none text-white sm:text-3xl">
                    $1,200
                  </div>
                  <div className="mt-1 text-[11px] text-white/60">per transaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
