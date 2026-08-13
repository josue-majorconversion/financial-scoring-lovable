import mark from "@/assets/ignyte-mark.png.asset.json";

export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <span className="inline-flex items-center gap-3">
      <img src={mark.url} alt="" aria-hidden="true" className={`${className} w-auto`} />
      <span className="font-display text-sm font-semibold uppercase leading-none tracking-[0.12em] text-foreground sm:text-lg sm:tracking-[0.16em]">
        Financial<span className="text-mint">Scoring</span>
      </span>
    </span>
  );
}
