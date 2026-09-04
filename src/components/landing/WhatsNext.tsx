import { toast } from "sonner";
import { Cta } from "./Cta";

const steps = [
  {
    title: "JOIN THE SKOOL COMMUNITY",
    body: "Get training, examples, and a clear rollout path.",
  },
  {
    title: "LOG IN TO YOUR ACCOUNT",
    body: "You should have received an email from us with your login details to access your agent dashboard and scoring tools.",
  },
  {
    title: "LAUNCH YOUR FIRST OFFER",
    body: "Invite prospects to get their Financial Score or purchase pre-scored leads.",
  },
];

const included = [
  "Access to Financial Scoring 3.0",
  "Access to the Financial Scoring lead marketplace",
  "High-quality leads with a verified Lead Quality Score",
  "Comprehensive financial data for each lead",
  "AI attached to Financial Scoring leads to help surface recommendations",
  "Agent dashboard to manage your Financial Scoring Analyses",
  "Access to prior FSAs with the ability to review and adjust them",
  "Financial Scoring Analyst badge access",
  "Skool community access",
  "Biweekly training",
  "Platform training",
  "Sales and marketing training",
];

export function SkoolButton({
  variant = "primary",
  className = "",
}: {
  variant?: "primary" | "outline";
  className?: string;
}) {
  return (
    <Cta
      variant={variant}
      className={className}
      onClick={() =>
        toast("Skool community link coming soon", {
          description: "The approved community URL will be added before launch.",
        })
      }
    >
      Join the Skool Community
    </Cta>
  );
}

export function WhatsNext() {
  return (
    <section className="relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-28">
      <div className="absolute inset-0 -z-10 grid-glow opacity-60" aria-hidden="true" />
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-mint">
          WHAT TO DO NEXT
        </p>
        <h2 className="mx-auto mt-4 max-w-5xl text-center font-display text-5xl font-bold uppercase leading-[0.95] text-white sm:text-7xl">
          READY TO TRY IT OUT{"\u00a0"}
          <span className="text-[#3B82F6]">FOR FREE...</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          Start free, or lock in event pricing and get full access today.
        </p>

        <ol className="mt-10 grid gap-4 sm:grid-cols-3">
          {steps.map(({ title, body }, i) => (
            <li
              key={title}
              className="flex flex-col items-center rounded-2xl card-surface p-6 text-center"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-mint font-display text-sm font-bold text-[#02090b]">
                {i + 1}
              </span>
              <p className="mt-4 px-3 font-display text-lg font-extrabold uppercase tracking-[0.18em] text-white sm:text-xl">
                {i === 0 ? (
                  <span className="whitespace-nowrap">Join the Skool<br />Community</span>
                ) : (
                  title
                )}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              {i === 0 && (
                <div className="mt-4 w-full">
                  <SkoolButton className="w-full sm:w-auto sm:whitespace-nowrap" />
                </div>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="h-px flex-1 max-w-[140px] bg-gradient-to-r from-transparent to-mint/40" />
          <span className="font-display text-[100px] font-semibold uppercase leading-none tracking-[-0.08em] text-mint">
            OR
          </span>
          <span className="h-px flex-1 max-w-[140px] bg-gradient-to-l from-transparent to-mint/40" />
        </div>

        <div className="mt-10 rounded-2xl border border-mint/50 bg-[#071417]/80 p-6 shadow-[0_0_40px_-20px_rgba(0,199,212,0.35)] sm:p-10">
          <div className="flex flex-col items-center text-center">
            <span className="rounded-full border border-mint/40 bg-mint/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-mint">
              EVENT-ONLY FFL IGNYTE PRICING
            </span>
            <h3 className="mt-4 font-display text-[2.75rem] font-bold uppercase leading-[0.95] text-white sm:text-6xl">
              LOCK IN YOUR DISCOUNTED RATE<br />BEFORE THE EVENT ENDS
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Get full Financial Scoring access at a special event-only rate. This pricing is available here for a limited time and will not be the standard rate after the event.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
            <div className="flex flex-col items-center justify-end">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-5xl font-black text-white sm:text-6xl">$129</span>
                <span className="text-base font-semibold uppercase tracking-wider text-muted-foreground">/ MONTH</span>
              </div>
            </div>
            <div className="hidden h-12 w-px bg-mint/20 sm:block" />
            <div className="flex flex-col items-center justify-end">
              <div className="flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl font-black text-mint sm:text-6xl">$949</span>
                  <span className="text-base font-semibold uppercase tracking-wider text-muted-foreground">/ YEAR</span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-mint">
            THIS PRICE IS AVAILABLE FOR A LIMITED TIME ONLY — DON'T WAIT...
          </p>

          <div className="mt-10">
            <p className="text-center font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">
              WHAT’S INCLUDED
            </p>
            <ul className="mx-auto mt-5 grid max-w-3xl gap-x-6 gap-y-3 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-mint"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3">
            <Cta variant="primary" className="w-full sm:w-auto">
              LOCK IN MY FFL EVENT RATE
            </Cta>
            <p className="text-xs text-muted-foreground">
              Choose monthly or save with annual access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
