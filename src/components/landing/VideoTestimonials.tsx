import { useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const placeholders = [
  { id: "Agent Testimonial 01", category: "Better discovery" },
  { id: "Agent Testimonial 02", category: "Greater confidence" },
  { id: "Agent Testimonial 03", category: "Stronger opportunities" },
];

function Card({ id, category }: { id: string; category: string }) {
  return (
    <article className="flex h-full flex-col rounded-3xl card-surface p-4">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-surface-2">
        <div className="absolute inset-0 grid-glow opacity-40" aria-hidden="true" />
        <button
          type="button"
          disabled
          aria-label={`${id} — video placeholder, not yet available`}
          className="absolute inset-0 grid place-items-center"
        >
          <span className="grid h-16 w-16 place-items-center rounded-full border border-mint/50 bg-background/70">
            <Play className="h-6 w-6 text-mint" aria-hidden="true" />
          </span>
        </button>
        <span className="absolute left-3 top-3 rounded-full border border-border bg-background/80 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Placeholder
        </span>
      </div>
      <div className="mt-5 flex flex-1 flex-col">
        <p className="font-display text-lg font-semibold uppercase tracking-[0.06em]">{id}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-mint">{category}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Replace with approved video, thumbnail, name, role, and quote. Captions or transcript to
          be supplied with the final asset.
        </p>
      </div>
    </article>
  );
}

export function VideoTestimonials() {
  const [index, setIndex] = useState(0);
  const go = (d: number) =>
    setIndex((i) => (i + d + placeholders.length) % placeholders.length);

  return (
    <section className="border-y border-border/60 bg-surface/40 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Hear it from the agents"
          title="What changes when agents start scoring?"
        />

        <div className="mt-12 hidden gap-5 md:grid md:grid-cols-3">
          {placeholders.map((p) => (
            <Card key={p.id} {...p} />
          ))}
        </div>

        <div className="mt-12 md:hidden">
          <Card {...placeholders[index]!} />
          <div className="mt-5 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-border text-mint"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Testimonial pagination">
              {placeholders.map((p, i) => (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={p.id}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full ${i === index ? "bg-mint" : "bg-border"}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-border text-mint"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
