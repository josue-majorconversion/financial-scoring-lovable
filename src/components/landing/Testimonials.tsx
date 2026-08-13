const testimonials = [
  {
    quote:
      "I scored 40 old leads I had written off. Three of them turned into IULs in two weeks.",
    name: "Andre M.",
    role: "Life agent · Texas",
  },
  {
    quote:
      "I stopped pitching and started asking. The copilot tells me what to say and the commissions got bigger.",
    name: "Priya R.",
    role: "Independent broker · Florida",
  },
  {
    quote:
      "Chargebacks used to eat me alive. Scored clients actually stay on the books.",
    name: "Wes D.",
    role: "Agency owner · Ohio",
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-border/60 bg-surface/30 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold sm:text-5xl">
          What agents are <span className="text-gradient-mint">saying</span>
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-border/60 bg-background/50 p-6 transition-colors hover:border-mint/35"
            >
              <span
                aria-hidden="true"
                className="font-display text-4xl leading-none text-mint"
              >
                “
              </span>
              <blockquote className="mt-3 text-base leading-relaxed text-foreground/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto pt-6">
                <p className="font-display font-bold text-mint">{t.name}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
