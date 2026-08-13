const traditional = [
  { label: "Average commission", value: "$1,200" },
  { label: "Chargeback rate", value: "30%" },
  { label: "Calls required", value: "More calls" },
  { label: "Persistency", value: "Lower" },
];

const scored = [
  { label: "Average commission", value: "$8,800" },
  { label: "Chargeback rate", value: "8%" },
  { label: "Calls required", value: "Fewer calls" },
  { label: "Persistency", value: "Higher" },
];

export function Comparison() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold sm:text-5xl">
          Same agent. <span className="text-gradient-mint">Different math.</span>
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-border/60 bg-surface/30 p-7 opacity-60">
            <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-muted-foreground">
              Traditional leads
            </p>
            <dl className="mt-7 space-y-5">
              {traditional.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-4 border-b border-border/50 pb-4"
                >
                  <dt className="text-sm text-muted-foreground">{row.label}</dt>
                  <dd className="font-display text-xl font-bold text-foreground/70">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative overflow-hidden rounded-3xl card-surface p-7 glow-mint">
            <div className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-mint/10 to-transparent animate-sweep" />
            <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-mint">
              Scored leads
            </p>
            <dl className="mt-7 space-y-5">
              {scored.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-4 border-b border-mint/15 pb-4"
                >
                  <dt className="text-sm text-foreground/70">{row.label}</dt>
                  <dd className="font-display text-2xl font-bold text-gradient-mint">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <p className="mt-12 text-center font-display text-2xl font-bold tracking-tight sm:text-4xl">
          Do the math.
        </p>
      </div>
    </section>
  );
}
