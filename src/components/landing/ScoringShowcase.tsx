import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { ScoreLens } from "./ScoreLens";

interface Example {
  name: string;
  detail: string;
  score: number;
  categories: { label: string; value: number }[];
  product: string;
  copilot: string;
  commission: string;
}

const examples: Example[] = [
  {
    name: "Sarah",
    detail: "62 · Fixed income · 2 grandkids",
    score: 74,
    categories: [
      { label: "Cash flow", value: 68 },
      { label: "Tax efficiency", value: 41 },
      { label: "Insurance", value: 22 },
      { label: "Retirement", value: 55 },
    ],
    product: "Final Expense + coverage gap",
    copilot:
      "Sarah has no burial coverage and $9k in liquid savings. Lead with final expense at $68/mo, then revisit her lapsed term policy next quarter.",
    commission: "$1,450",
  },
  {
    name: "Marcus",
    detail: "38 · Business owner · W2 + 1099",
    score: 81,
    categories: [
      { label: "Cash flow", value: 88 },
      { label: "Tax efficiency", value: 34 },
      { label: "Insurance", value: 47 },
      { label: "Retirement", value: 62 },
    ],
    product: "IUL — tax-free income strategy",
    copilot:
      "Marcus is overpaying taxes with zero tax-free bucket. Position an IUL funded at $1,100/mo and frame it as his personal pension, not insurance.",
    commission: "$7,900",
  },
  {
    name: "Denise",
    detail: "59 · Retiring in 3 years · Old 401k",
    score: 69,
    categories: [
      { label: "Cash flow", value: 61 },
      { label: "Tax efficiency", value: 38 },
      { label: "Insurance", value: 58 },
      { label: "Retirement", value: 29 },
    ],
    product: "Annuity — 401k rollover",
    copilot:
      "Denise has $214k sitting in a former employer's 401k fully exposed to market risk. Roll into a FIA with income rider and protect her first 5 years.",
    commission: "$12,300",
  },
];

export function ScoringShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % examples.length), 6500);
    return () => clearInterval(id);
  }, []);

  const ex = examples[active]!;

  return (
    <section id="how" className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
      <div className="absolute left-1/2 top-1/3 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-mint/10 blur-[120px]" />
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
            Ask the right questions.{" "}
            <span className="text-gradient-mint">Let AI do the rest.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Financial scoring asks a few simple questions and your built-in AI copilot
            whispers exactly what your client needs and why.
          </p>
        </div>

        <div key={active} className="mt-12 grid animate-rise-in gap-5 lg:grid-cols-[1fr_1fr]">
          {/* Score card */}
          <div className="rounded-3xl card-surface p-6 sm:p-8">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
              <div className="min-w-0">
                <p className="font-display text-2xl font-bold">
                  {ex.name} — <span className="text-mint">Score {ex.score}</span>
                </p>
                <p className="mt-1 truncate text-sm text-muted-foreground">{ex.detail}</p>
              </div>
              <ScoreLens score={ex.score} className="h-16 w-16 shrink-0" />
            </div>

            <div className="mt-8 space-y-5">
              {ex.categories.map((c, i) => (
                <div key={c.label}>
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="text-foreground/75">{c.label}</span>
                    <span className="font-display font-bold text-mint">{c.value}</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-2">
                    <div
                      className="h-full rounded-full bg-gradient-mint animate-bar-grow"
                      style={{ width: `${c.value}%`, animationDelay: `${i * 90}ms` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-baseline justify-between border-t border-border/60 pt-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Est. commission
              </span>
              <span className="font-display text-3xl font-bold text-gradient-mint">
                {ex.commission}
              </span>
            </div>
          </div>

          {/* AI copilot panel */}
          <div className="flex flex-col rounded-3xl border border-mint/25 bg-surface/60 p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-mint/15">
                <Sparkles className="h-4 w-4 text-mint" />
              </span>
              <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-mint">
                AI Copilot recommendation
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-surface-2 px-4 py-3 text-sm text-foreground/70">
                What should I open with on {ex.name}?
              </div>
              <div className="ml-auto max-w-[92%] rounded-2xl rounded-tr-sm border border-mint/20 bg-mint/10 px-4 py-3 text-sm leading-relaxed">
                {ex.copilot}
              </div>
            </div>

            <div className="mt-auto pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Recommended product
              </p>
              <p className="mt-2 font-display text-xl font-bold text-foreground">
                {ex.product}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {examples.map((e, i) => (
            <button
              key={e.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${e.name}'s score`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-10 bg-gradient-mint" : "w-4 bg-surface-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
