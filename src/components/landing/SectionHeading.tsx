interface Props {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}

export function SectionHeading({ eyebrow, title, subtitle, align = "center" }: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-mint">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
