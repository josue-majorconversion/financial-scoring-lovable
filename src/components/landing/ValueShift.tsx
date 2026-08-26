import comparisonImage from "@/assets/lead-value-comparison.png";

export function ValueShift() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:gap-14 lg:text-left">
          <h2 className="flex-1 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            Financial scoring is{" "}
            <span className="text-gradient-mint">changing how agents</span> buy
            and close leads.
          </h2>
          <div className="w-full max-w-xl flex-1">
            <img
              src={comparisonImage}
              alt="Unscored lead worth $1,200 per transaction versus a fully scored lead worth $8,800 with Financial Scoring"
              loading="lazy"
              width={1024}
              height={800}
              className="w-full rounded-2xl border border-border glow-mint"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
