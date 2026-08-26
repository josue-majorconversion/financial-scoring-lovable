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
          eyebrow="Try it for yourself"
          title={
            <span className="block">
              <span className="block">Experience</span>
              <span className="block text-mint">Scoring</span>
            </span>
          }
        />

        <h3 className="mx-auto mt-6 max-w-3xl text-center font-display text-3xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
          See What Your Clients See
        </h3>

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
