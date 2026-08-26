import { SectionHeading } from "./SectionHeading";

const ASSESSMENT_URL = "https://getyourfinancialscore.com/assessment/";

export function ExperienceScoring() {
  return (
    <section
      id="experience"
      className="relative border-y border-border/60 bg-surface/40 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience Scoring"
          title={
            <span>
              See what <span className="text-mint">your clients see</span>
            </span>
          }
        />

        <div className="mx-auto mt-6 flex max-w-3xl items-center gap-4">
          <div className="h-px flex-1 bg-mint/40" />
          <h3 className="shrink-0 text-center font-display text-xl font-black uppercase italic leading-[0.95] tracking-tight text-white sm:text-3xl">
            Try it for yourself
          </h3>
          <div className="h-px flex-1 bg-mint/40" />
        </div>

        <div className="mt-10">
          <p className="mb-3 text-center font-display text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-mint">
            Demo Financial Scoring Assessment
          </p>

          <div className="rounded-3xl border border-mint/40 bg-card p-1.5 glow-mint sm:p-3">
            <div className="h-[1250px] w-full overflow-hidden rounded-2xl bg-background sm:h-[1150px]">
              <iframe
                src={ASSESSMENT_URL}
                title="Financial Score Questionnaire"
                loading="lazy"
                className="block h-full w-full rounded-2xl border-0"
                scrolling="no"
              />
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Having trouble viewing the assessment?{" "}
            <a
              href={ASSESSMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-mint underline decoration-mint/40 underline-offset-4 hover:decoration-mint"
            >
              Open it in a new tab.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
