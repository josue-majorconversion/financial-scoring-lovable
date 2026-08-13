import { PlayCircle } from "lucide-react";

const resources = [
  {
    title: "AI Has Made Financial Planning Easier",
    href: "https://youtu.be/Y-6Y-xtgz1c?si=YXlbFVtlaiSRc7aI",
  },
  {
    title: "What Is a Financial Score?",
    href: "https://youtu.be/i3mx2XpDHrk?si=j1MgFQCCAg5UMfb9",
  },
  {
    title: "How AI Is Leading Financial Scoring",
    href: "https://www.youtube.com/watch?v=jKyRkF5TgM8",
  },
];

export function LearnMore() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-xs font-semibold uppercase tracking-[0.3em] text-mint">
          Learn more
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {resources.map((r) => (
            <a
              key={r.href}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] items-center gap-3 rounded-2xl border border-border bg-surface/50 px-5 py-4 text-sm font-medium transition-colors hover:border-mint/50"
            >
              <PlayCircle className="h-5 w-5 shrink-0 text-mint" aria-hidden="true" />
              {r.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
