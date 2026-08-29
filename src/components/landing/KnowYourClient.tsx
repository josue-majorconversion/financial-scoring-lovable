import knowYourClientData from "@/assets/know-your-client-data.png.asset.json";

export function KnowYourClient() {
  return (
    <section className="relative overflow-hidden pt-20 sm:pt-28">
      <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:gap-14 lg:text-left">
          <h2 className="flex-1 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            Would you close more deals if you knew the client's{" "}
            <span className="text-gradient-mint">exact financial status?</span>
          </h2>

          <div className="w-full flex-1">
            <div className="rounded-2xl border border-border bg-[#02090b] p-3 glow-mint sm:p-4">
              <img
                src={knowYourClientData.url}
                alt="Real lead data showing a prospect's profile and saved assets"
                className="w-full rounded-xl"
              />
            </div>
            <p className="mt-4 text-center font-display text-sm font-bold uppercase tracking-wider text-mint sm:text-base">
              Real Lead Data for a potential IUL opportunity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
