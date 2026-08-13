import { toast } from "sonner";
import { Users, Mail, Gauge } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Cta } from "./Cta";

const steps = [
  { icon: Users, title: "Join the community" },
  { icon: Mail, title: "Look for the training email" },
  { icon: Gauge, title: "Try Financial Scoring" },
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
    <section className="border-y border-border/60 bg-surface/40 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="What’s next" title="Learn it. Try it. Put it into practice." />

        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
          Join our Skool community to learn more about Financial Scoring, connect with the
          community, and continue the conversation.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
          Then watch your inbox for access to the training, where you’ll be able to explore the
          process and try Financial Scoring for yourself.
        </p>

        <ol className="mt-10 grid gap-4 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title }, i) => (
            <li key={title} className="rounded-2xl card-surface p-5 text-center">
              <span className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-mint/10">
                <Icon className="h-5 w-5 text-mint" aria-hidden="true" />
              </span>
              <p className="mt-4 font-display text-xs font-semibold uppercase tracking-[0.24em] text-mint">
                Step {i + 1}
              </p>
              <p className="mt-1 font-display text-lg font-semibold uppercase">{title}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <SkoolButton className="w-full sm:w-auto" />
          <Cta href="#experience" variant="outline" className="w-full sm:w-auto">
            Experience Scoring Again
          </Cta>
        </div>
      </div>
    </section>
  );
}
