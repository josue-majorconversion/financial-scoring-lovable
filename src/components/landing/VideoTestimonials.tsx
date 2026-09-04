import { Play } from "lucide-react";
import testimonialScott from "@/assets/testimonial-scott.mp4.asset.json";

const testimonials = [
  {
    id: "MY SALES ARE MUCH HIGHER BY USING THE SCORING SYSTEM...",
    name: "Scott Zimmerman.",
    videoUrl: testimonialScott.url,
  },
  { id: "Agent Testimonial 02", category: "Greater confidence" },
  { id: "Agent Testimonial 03", category: "Stronger opportunities" },
  { id: "Agent Testimonial 04", category: "Faster closes" },
];

function Card({
  id,
  category,
  name,
  videoUrl,
}: {
  id: string;
  category?: string;
  name?: string;
  videoUrl?: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-3xl card-surface p-4">
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-border bg-surface-2">
        <div className="absolute inset-0 grid-glow opacity-40" aria-hidden="true" />
        {videoUrl ? (
          <video
            src={videoUrl}
            controls
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            aria-label={`${name} testimonial video`}
          />
        ) : (
          <button
            type="button"
            disabled
            aria-label={`${id} — video not yet available`}
            className="absolute inset-0 grid place-items-center"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full border border-mint/50 bg-background/70">
              <Play className="h-6 w-6 text-mint" aria-hidden="true" />
            </span>
          </button>
        )}
      </div>
      <div className="mt-5 flex flex-1 flex-col items-center text-center">
        <div className="flex gap-0.5 text-2xl text-mint" aria-label="5 out of 5 stars">
          {"★★★★★".split("").map((star, i) => (
            <span key={i}>{star}</span>
          ))}
        </div>
        <p className="mt-2 font-display text-xl font-bold uppercase tracking-[0.04em]">“{id}”</p>
        {name ? (
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-mint">{name}</p>
        ) : (
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-mint">{category}</p>
        )}
      </div>
    </article>
  );
}

export function VideoTestimonials() {
  return (
    <section className="border-y border-border/60 bg-surface/40 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-mint">
          HEAR FROM AGENTS LIKE YOU
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-5xl font-bold uppercase leading-[0.95] sm:text-7xl lg:whitespace-nowrap">
          Real agents. <span className="text-gradient-mint">Real results.</span>
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <Card key={t.id} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
