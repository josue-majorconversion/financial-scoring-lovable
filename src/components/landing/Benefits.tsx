import {
  PhoneOff,
  Handshake,
  TrendingUp,
  Search,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

const benefits = [
  { icon: PhoneOff, label: "Make fewer calls" },
  { icon: Handshake, label: "Make more deals" },
  { icon: TrendingUp, label: "Higher commissions" },
  { icon: Search, label: "Find hidden money" },
  { icon: ShieldCheck, label: "Improve persistency" },
  { icon: HeartHandshake, label: "Serve clients better" },
];

export function Benefits() {
  return (
    <section className="border-y border-border/60 bg-surface/30 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold sm:text-5xl">
          Less work. <span className="text-gradient-mint">More money.</span>
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group rounded-2xl border border-border/60 bg-background/40 p-6 transition-colors hover:border-mint/40"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-mint/10 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5 text-mint" />
              </span>
              <p className="mt-5 font-display text-base font-bold leading-snug sm:text-lg">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
