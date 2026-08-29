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
              <div className="mb-3 flex items-center gap-2">
                <span className="h-4 w-1 rounded-full bg-mint" />
                <span className="font-display text-[11px] uppercase tracking-[0.25em] text-white sm:text-sm">
                  Average transaction value
                </span>
              </div>
              <svg viewBox="0 0 720 400" className="h-auto w-full" role="img" aria-label="Average transaction value with and without Financial Scoring">
                <defs>
                  <linearGradient id="vsGreenFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0.02" />
                  </linearGradient>
                  <linearGradient id="vsRedFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                {/* green area */}
                <path
                  d="M20 350 L70 200 L130 150 L210 155 L330 120 L440 75 L520 92 L520 350 Z"
                  fill="url(#vsGreenFill)"
                />
                <path
                  d="M20 350 L70 200 L130 150 L210 155 L330 120 L440 75 L520 92"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <circle cx="520" cy="92" r="8" fill="#22c55e" />

                {/* red area */}
                <path
                  d="M20 350 L70 320 L130 310 L210 315 L330 300 L440 310 L520 312 L520 350 Z"
                  fill="url(#vsRedFill)"
                />
                <path
                  d="M20 350 L70 320 L130 310 L210 315 L330 300 L440 310 L520 312"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <circle cx="520" cy="312" r="8" fill="#ef4444" />

                <line x1="20" y1="352" x2="700" y2="352" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />

                {/* labels */}
                <text x="545" y="70" fill="#22c55e" className="font-display" fontSize="15" fontWeight="700" letterSpacing="1">WITH FINANCIAL SCORING</text>
                <text x="545" y="115" fill="#ffffff" className="font-display" fontSize="42" fontWeight="900">UP TO $8,800</text>

                <text x="545" y="290" fill="#ef4444" className="font-display" fontSize="15" fontWeight="700" letterSpacing="1">WITHOUT SCORING</text>
                <text x="545" y="335" fill="#ffffff" className="font-display" fontSize="42" fontWeight="900">$1,200</text>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
