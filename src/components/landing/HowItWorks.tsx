const steps = [
  {
    num: "01",
    title: "We Offer A Financial Score Assessment",
    note: {
      label: "What is a Financial Score?",
      text: "A preliminary snapshot of where someone stands and which financial areas may need attention, based on their estimates.",
    },
    score: 68,
  },
  {
    num: "02",
    title: "They Complete The Assessment",
    bullets: [
      "Share estimates for income, savings, cash, and retirement balances.",
      "Verify their phone with a one-time passcode.",
      "Receive their score and see what may need attention.",
      "Request to speak with a licensed agent.",
    ],
  },
  {
    num: "03",
    title: "You Receive The Scored Lead",
    bullets: [
      "Verified contact request.",
      "Financial score and inventory.",
      "Issues and recommended areas to explore.",
    ],
  },
  {
    num: "04",
    title: "You Make The Call",
    bullets: [
      "You know their financial status.",
      "You know the issues they can see.",
      "They asked to speak with an agent.",
    ],
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="text-center font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
          How it works
        </h2>


        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex flex-col rounded-2xl border border-border bg-surface/70 p-5 sm:p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-mint/50 bg-mint/10 font-display text-lg font-bold text-mint">
                {step.num}
              </span>

              <h3 className="mt-5 font-display text-xl font-black uppercase leading-tight sm:text-2xl">
                {step.title}
              </h3>

              {step.bullets ? (
                <ul className="mt-4 space-y-3">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {step.note ? (
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-mint">
                    {step.note.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.note.text}
                  </p>
                </div>
              ) : null}

              {step.score ? (
                <div className="mt-6 flex flex-col items-center">
                  <svg viewBox="0 0 120 120" className="h-28 w-28" aria-hidden="true">
                    {/* colored arc segments */}
                    <circle cx="60" cy="60" r="52" fill="none" stroke="#22c55e" strokeWidth="9"
                      strokeDasharray="90 400" strokeDashoffset="326" strokeLinecap="round" />
                    <circle cx="60" cy="60" r="52" fill="none" stroke="#f59e0b" strokeWidth="9"
                      strokeDasharray="90 400" strokeDashoffset="236" strokeLinecap="round" />
                    <circle cx="60" cy="60" r="52" fill="none" stroke="#ef4444" strokeWidth="9"
                      strokeDasharray="140 400" strokeDashoffset="96" strokeLinecap="round" />
                    {/* dark inner disc */}
                    <circle cx="60" cy="60" r="45" fill="#0d3f3d" />
                    {/* needle pointing at green zone */}
                    <g transform="rotate(38 60 60)">
                      <rect x="14" y="55.5" width="16" height="9" rx="4.5" fill="#02090b" stroke="#fff" strokeWidth="2" />
                    </g>
                    {/* score text */}
                    <text x="60" y="64" textAnchor="middle" fill="#fff" fontSize="34" fontWeight="900" fontFamily="Oswald, sans-serif">
                      {step.score}
                    </text>
                    <text x="60" y="82" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="13" fontWeight="700" fontStyle="italic" fontFamily="Oswald, sans-serif">
                      /100
                    </text>
                  </svg>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-white/40">
                    Illustrative score
                  </p>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-mint/30 bg-mint/5 p-5">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint text-xs font-bold text-[#02090b]">
            ✓
          </span>
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">You are not calling blind anymore.</span>{" "}
            You have seen the client's estimated financial picture, you know the issues, and they
            have requested a conversation.
          </p>
        </div>
      </div>
    </section>
  );
}
