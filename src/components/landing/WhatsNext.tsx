import { toast } from "sonner";
import { Users, CircleUser, Share2 } from "lucide-react";
import { Cta } from "./Cta";

const steps = [
  {
    icon: Users,
    title: "Join the Community",
    body: "Get training, examples, and a clear rollout path.",
  },
  {
    icon: CircleUser,
    title: "Open Your Account",
    body: "Access your agent dashboard and scoring tools.",
  },
  {
    icon: Share2,
    title: "Share the Free Offer",
    body: "Invite prospects to get their Financial Score.",
  },
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
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-mint">
          What&rsquo;s next
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-5xl font-bold uppercase leading-[0.95] sm:text-7xl">
          Launch your first{" "}
          <span className="text-gradient-mint">Financial Scoring offer.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          Get access, share the free service, and let the score give your next conversation a
          better place to start.
        </p>

        <ol className="mt-10 grid gap-4 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <li
              key={title}
              className="flex items-center gap-4 rounded-2xl card-surface p-5 sm:flex-col sm:text-center"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-mint/10">
                <Icon className="h-7 w-7 text-mint" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-mint">
                  {String(i + 1).padStart(2, "0")} — {title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center">
          <SkoolButton className="w-full sm:w-auto" />
        </div>

        <p className="mt-12 text-center font-display text-2xl font-bold uppercase leading-snug sm:text-4xl">
          The next era of{" "}
          <span className="text-gradient-mint">prospecting.</span>
        </p>
      </div>
    </section>
  );
}
