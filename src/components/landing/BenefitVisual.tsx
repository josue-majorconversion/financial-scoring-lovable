import { DollarSign } from "lucide-react";

type Variant = "chart" | "rings" | "shield" | "calls" | "spark" | "handshake" | "money";

const bars = [34, 52, 70, 92];

export function BenefitVisual({ variant, className = "" }: { variant: Variant; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative grid h-28 w-full place-items-center overflow-hidden rounded-2xl border border-border bg-surface-2/60 ${className}`}
    >
      <div className="absolute inset-0 grid-glow opacity-30" />
      {variant === "chart" ? (
        <div className="relative flex h-24 items-end gap-3">
          {bars.map((h, i) => (
            <span
              key={h}
              className="w-7 rounded-t-lg bg-gradient-mint animate-bar-rise"
              style={{ height: `${h}%`, animationDelay: `${i * 140}ms` }}
            />
          ))}
        </div>
      ) : null}

      {variant === "spark" ? (
        <svg viewBox="0 0 200 80" className="relative h-20 w-52">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="var(--mint-soft)" />
            </marker>
          </defs>
          <polyline
            points="4,70 44,54 84,58 124,30 164,34 196,8"
            fill="none"
            stroke="var(--mint-soft)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            markerEnd="url(#arrowhead)"
            className="animate-draw-line-repeat"
          />
          <circle cx="196" cy="8" r="7" fill="var(--mint-soft)" className="animate-pulse-glow" />
        </svg>
      ) : null}

      {variant === "rings" ? (
        <div className="relative grid h-20 w-20 place-items-center">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="absolute h-16 w-16 rounded-full border border-mint/60 animate-ring-out"
              style={{ animationDelay: `${i * 900}ms` }}
            />
          ))}
          <span className="relative h-6 w-6 rounded-full bg-gradient-mint" />
        </div>
      ) : null}

      {variant === "shield" ? (
        <div className="relative flex items-end gap-1.5">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className="h-10 w-2 rounded-full bg-mint/25 animate-bar-rise"
              style={{
                height: `${28 + ((i * 13) % 34)}px`,
                animationDelay: `${i * 110}ms`,
                backgroundColor: i > 2 ? "var(--mint)" : undefined,
              }}
            />
          ))}
        </div>
      ) : null}

      {variant === "calls" ? (
        <div className="relative flex items-center gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={`h-3 w-3 rounded-full ${i < 2 ? "bg-mint" : "bg-border"}`}
              style={i < 2 ? { boxShadow: "0 0 14px var(--mint)" } : undefined}
            />
          ))}
        </div>
      ) : null}

      {variant === "handshake" ? (
        <div className="relative flex items-center gap-3">
          <span className="h-10 w-10 rounded-full border border-mint/50 bg-mint/10" />
          <span className="h-px w-10 bg-gradient-to-r from-mint to-mint-soft" />
          <span className="h-10 w-10 rounded-full bg-gradient-mint animate-pulse-glow" />
        </div>
      ) : null}
    </div>
  );
}
