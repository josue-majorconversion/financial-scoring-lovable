import knowYourClientData from "@/assets/know-your-client-data.png.asset.json";

export function KnowYourClient() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-24">
      <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <p className="mb-[50px] w-full font-display text-4xl font-black uppercase leading-[1.05] text-mint sm:text-6xl lg:text-8xl">
              <span className="block w-full">Let Me Ask</span>
              <span className="block w-full"><span className="underline decoration-mint underline-offset-4">YOU</span> a question...</span>
            </p>

            <h2 className="w-full font-display text-[clamp(1.6rem,8.4vw,2.75rem)] font-black uppercase leading-[1] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block w-full mb-[30px]">If you could just</span>
              <span className="block w-full text-gradient-mint mb-[30px]">See The Leads Finances…</span>
              <span className="block w-full mb-[30px]">Would you <span className="text-gradient-mint">close more deals</span>?…</span>
              <span className="block w-full"><span className="text-gradient-mint">Bigger Deals</span> Even?</span>
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

