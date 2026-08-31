import knowYourClientData from "@/assets/know-your-client-data.png.asset.json";

export function KnowYourClient() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-24">
      <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <p className="mb-2 whitespace-nowrap font-display text-xl font-black uppercase leading-none text-mint sm:text-4xl lg:text-5xl">
              Let me ask you a question...
            </p>

            <h2 className="font-display text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Could you close more leads and better help them if you just knew{" "}
              <span className="text-gradient-mint">their finances?</span>
            </h2>
          </div>

          <div className="w-full max-w-4xl">
            <div className="rounded-2xl border border-border bg-[#02090b] p-2 glow-mint sm:p-3">
              <img
                src={knowYourClientData.url}
                alt="Real lead data showing a prospect's profile and saved assets"
                className="w-full rounded-xl"
              />
            </div>
            <p className="mt-4 text-center text-xs italic leading-relaxed text-white/70 sm:text-sm">
              Real FinancialScoring.AI Proprietary Lead Data displaying a potential IUL Sale Opportunity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

