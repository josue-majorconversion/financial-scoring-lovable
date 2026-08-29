import knowYourClientData from "@/assets/know-your-client-data.png.asset.json";

export function KnowYourClient() {
  return (
    <section className="relative overflow-hidden pt-20 sm:pt-28">
      <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="flex flex-col items-center gap-8 text-center">
          <h2 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            Would you close more deals if you knew the client's{" "}
            <span className="text-gradient-mint">exact financial status?</span>
          </h2>

          <div className="w-full max-w-4xl">
            <div className="rounded-2xl border border-border bg-[#02090b] p-2 glow-mint sm:p-3">
              <img
                src={knowYourClientData.url}
                alt="Real lead data showing a prospect's profile and saved assets"
                className="w-full rounded-xl"
              />
            </div>
            <p className="mt-4 inline-block border-l-2 border-mint/60 pl-3 text-left text-xs italic leading-relaxed text-white/70 sm:text-sm">
              Real FinancialScoring.AI Proprietary Lead Data displaying a potential IUL Sale Opportunity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
