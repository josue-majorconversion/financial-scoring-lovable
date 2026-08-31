import { toast } from "sonner";
import { Cta } from "./Cta";

const steps = [
  {
    title: "Join the Skool Community",
    body: "Get training, examples, and a clear rollout path.",
  },
  {
    title: "LOG IN TO YOUR ACCOUNT",
    body: "You should have received an email from us already with your login details to access your agent dashboard and scoring tools.",
  },
  {
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
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-mint">
          WHAT TO DO NEXT
        </p>
        <h2 className="mx-auto mt-4 max-w-5xl text-center font-display text-5xl font-bold uppercase leading-[0.95] sm:text-7xl">
          READY TO TRY IT OUT{" "}
          <span className="text-mint">FOR FREE...</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          Get access, share the free service, and let the score give your next conversation a
          better place to start.
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
              <p className="mt-4 font-display text-lg font-extrabold uppercase tracking-[0.18em] text-white sm:text-xl">
                {title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center">
          <SkoolButton className="w-full sm:w-auto" />
        </div>

      </div>
    </section>
  );
}
