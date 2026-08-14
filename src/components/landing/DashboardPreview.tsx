import { Play } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function DashboardPreview() {
  return (
    <section id="dashboard" className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
      <div className="absolute inset-0 -z-10 grid-glow opacity-50" aria-hidden="true" />
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Inside the platform"
          title="Your dashboard preview"
          subtitle="A quick look at scores, insights, and next steps — all in one place."
        />

        <div className="mt-10 rounded-3xl border border-mint/40 bg-card p-1.5 glow-mint sm:p-3">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-surface-2">
            <div className="absolute inset-0 grid-glow opacity-40" aria-hidden="true" />
            <button
              type="button"
              disabled
              aria-label="Dashboard walkthrough video — coming soon"
              className="absolute inset-0 grid place-items-center"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full border border-mint/50 bg-background/70">
                <Play className="h-6 w-6 text-mint" aria-hidden="true" />
              </span>
            </button>
            <span className="absolute left-3 top-3 rounded-full border border-border bg-background/80 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Dashboard walkthrough
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
