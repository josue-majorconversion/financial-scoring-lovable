interface ScoreLensProps {
  score?: number;
  className?: string;
}

/** Magnifying glass with a score number inside the lens. */
export function ScoreLens({ score = 87, className = "" }: ScoreLensProps) {
  return (
    <div className={`relative inline-grid place-items-center ${className}`}>
      <div className="absolute inset-0 -z-10 rounded-full bg-mint/20 blur-3xl animate-pulse-glow" />
      <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="lensStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--mint)" />
            <stop offset="100%" stopColor="var(--cyan)" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="36"
          fill="color-mix(in oklab, var(--mint) 8%, transparent)"
          stroke="url(#lensStroke)"
          strokeWidth="4"
        />
        <circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          stroke="url(#lensStroke)"
          strokeOpacity="0.25"
          strokeWidth="1.5"
          strokeDasharray="5 8"
        />
        <path
          d="M77 77 L104 104"
          stroke="url(#lensStroke)"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="var(--font-display)"
          fontSize="30"
          fontWeight="700"
          fill="var(--foreground)"
        >
          {score}
        </text>
      </svg>
    </div>
  );
}
