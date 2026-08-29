import knowYourClientImg from "@/assets/know-your-client.jpg";

export function KnowYourClient() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:gap-14 lg:text-left">
          <h2 className="flex-1 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            Would you close more deals if you knew the client's{" "}
            <span className="text-gradient-mint">exact financial status?</span>
          </h2>

          <div className="w-full flex-1">
            <img
              src={knowYourClientImg}
              alt="Agent viewing a client's financial status through a glowing scoring interface"
              loading="lazy"
              className="w-full rounded-2xl border border-border glow-mint"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
