import { Check, X, AlertTriangle, AlertCircle } from "lucide-react";

type MarkType = "yes" | "no" | "warn";

const rows: { label: string; hint?: string; traditional: MarkType; scored: MarkType }[] = [
  { label: "Name and contact details", traditional: "yes", scored: "yes" },
  { label: "Phone verified by one-time passcode", traditional: "warn", scored: "yes" },
  {
    label: "Financial inventory before the call",
    hint: "Income, savings, cash, and retirement estimates",
    traditional: "no",
    scored: "yes",
  },
  { label: "Needs and financial gaps already surfaced", traditional: "no", scored: "yes" },
  { label: "Prospect has seen why help may be needed", traditional: "no", scored: "yes" },
  
  { label: "Recommended areas to explore first", traditional: "no", scored: "yes" },
];


function Mark({ type }: { type: MarkType }) {
  if (type === "yes")
    return (
      <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#22c55e]">
        <Check className="h-4 w-4 text-[#02090b]" strokeWidth={3} />
      </span>
    );
  if (type === "warn")
    return (
      <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-amber-400/20">
        <AlertTriangle className="h-4 w-4 text-amber-400" />
      </span>
    );
  return (
    <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#ef4444]">
      <X className="h-4 w-4 text-white" strokeWidth={3} />
    </span>
  );
}

export function LeadComparison() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <h2 className="font-display text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl">
            How We <span className="text-gradient-mint">Compare</span>
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            A traditional lead tells you who to call. A scored lead helps tell you why they raised
            their hand, what may need attention, and where the conversation should begin.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface/70">
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-border px-4 py-4 sm:px-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
              What you get
            </span>
            <span className="w-20 text-center font-display text-[10px] font-bold uppercase leading-tight tracking-[0.15em] text-[#ef4444] sm:w-28">
              Traditional lead
            </span>
            <span className="w-20 text-center font-display text-[10px] font-bold uppercase leading-tight tracking-[0.15em] text-mint sm:w-28">
              Scored lead
            </span>
          </div>

          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-border/60 px-4 py-4 last:border-b-0 sm:px-6"
            >
              <div className="text-left">
                <p className="text-sm font-semibold leading-snug">{row.label}</p>
                {row.hint ? (
                  <p className="mt-1 text-xs text-muted-foreground">{row.hint}</p>
                ) : null}
              </div>
              <div className="w-20 sm:w-28">
                <Mark type={row.traditional} />
              </div>
              <div className="w-20 sm:w-28">
                <Mark type={row.scored} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-400/20 bg-amber-400/10 p-4">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
          <p className="text-xs leading-relaxed text-white/70">
            Traditional lead verification varies by provider. Financial Scoring leads are phone-verified
            with a one-time passcode.
          </p>
        </div>
      </div>
    </section>
  );
}
