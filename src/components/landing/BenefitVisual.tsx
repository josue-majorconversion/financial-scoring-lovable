import {
  DollarSign,
  ArrowDown,
  PuzzleIcon,
  HelpCircle,
  Eye,
  EyeOff,
  Lightbulb,
  Flag,
  ShieldAlert,
  PhoneOff,
  Crown,
  HeartHandshake,
} from "lucide-react";

type Variant =
  | "chart"
  | "bigger-case"
  | "puzzle"
  | "question"
  | "clarity"
  | "no-calls"
  | "crown"
  | "loyalty"
  | "money"
  | "leaving-money"
  | "flying-blind"
  | "out-of-dark"
  | "retirement"
  | "bad-day"
  | "taxes"
  | "am-i-okay"
  | "attention"
  | "hidden-gaps";

const bars = [34, 52, 70, 92];

function IconFrame({
  children,
  pulse = true,
}: {
  children: React.ReactNode;
  pulse?: boolean;
}) {
  return (
    <div className="relative grid h-28 w-28 place-items-center rounded-2xl border border-mint/30 bg-mint/5">
      <span className={pulse ? "text-mint animate-pulse-glow" : "text-mint animate-float-slow"}>
        {children}
      </span>
    </div>
  );
}

export function BenefitVisual({ variant, className = "" }: { variant: Variant; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative grid h-36 w-full place-items-center ${className}`}
    >

      {variant === "chart" ? (
        <div className="relative flex h-24 items-end gap-3">
          {bars.map((h, i) => (
            <span
              key={h}
              className="w-7 rounded-t-lg bg-gradient-mint animate-bar-rise"
              style={{ height: `${h}%`, animationDelay: `${i * 140}ms` }}
            />
          ))}
        </div>
      ) : null}

      {/* Bigger cases — bars rising inside a square frame */}
      {variant === "bigger-case" ? (
        <div className="relative grid h-28 w-28 place-items-center rounded-2xl border border-mint/30 bg-mint/5">
          <div className="flex h-20 items-end gap-2">
            {[40, 65, 100].map((h, i) => (
              <span
                key={h}
                className="w-5 rounded-t-md bg-gradient-mint animate-bar-rise"
                style={{ height: `${h}%`, animationDelay: `${i * 180}ms` }}
              />
            ))}
          </div>
        </div>
      ) : null}


      {variant === "money" ? (
        <IconFrame>
          <DollarSign size={64} strokeWidth={2.5} />
        </IconFrame>
      ) : null}

      {/* See what's missing — a grid with one missing piece */}
      {variant === "puzzle" ? (
        <div className="relative grid h-28 w-28 place-items-center rounded-2xl border border-mint/30 bg-mint/5">
          <div className="grid grid-cols-2 gap-1.5">
            {[0, 1, 2, 3].map((i) =>
              i === 3 ? (
                <span
                  key={i}
                  className="grid h-9 w-9 place-items-center rounded-md border-2 border-dashed border-mint animate-pulse-glow"
                >
                  <PuzzleIcon className="h-5 w-5 text-mint" strokeWidth={2.5} />
                </span>
              ) : (
                <span key={i} className="h-9 w-9 rounded-md bg-mint/25" />
              ),
            )}
          </div>
        </div>
      ) : null}

      {/* Skip the guesswork — question mark that resolves */}
      {variant === "question" ? (
        <IconFrame>
          <HelpCircle size={64} strokeWidth={2.5} />
        </IconFrame>
      ) : null}

      {/* Close with clarity — an eye / focus */}
      {variant === "clarity" ? (
        <div className="relative grid h-28 w-28 place-items-center rounded-2xl border border-mint/30 bg-mint/5">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="absolute h-20 w-20 rounded-full border border-mint/50 animate-ring-out"
              style={{ animationDelay: `${i * 1100}ms` }}
            />
          ))}
          <Eye className="relative text-mint" size={60} strokeWidth={2.2} />
        </div>
      ) : null}

      {/* Fewer dead calls — phone off with dropped call bars */}
      {variant === "no-calls" ? (
        <IconFrame pulse={false}>
          <PhoneOff size={60} strokeWidth={2.4} />
        </IconFrame>
      ) : null}

      {/* Own the room — crown */}
      {variant === "crown" ? (
        <IconFrame>
          <Crown size={62} strokeWidth={2.3} />
        </IconFrame>
      ) : null}

      {/* Clients that stay — handshake / heart */}
      {variant === "loyalty" ? (
        <IconFrame pulse={false}>
          <HeartHandshake size={62} strokeWidth={2.2} />
        </IconFrame>
      ) : null}

      {/* Stop flying blind — slashed eye */}
      {variant === "flying-blind" ? (
        <IconFrame>
          <EyeOff size={62} strokeWidth={2.3} />
        </IconFrame>
      ) : null}

      {/* Get out of the dark — lightbulb */}
      {variant === "out-of-dark" ? (
        <IconFrame>
          <Lightbulb size={62} strokeWidth={2.3} />
        </IconFrame>
      ) : null}

      {/* Don't guess about retirement — finish flag */}
      {variant === "retirement" ? (
        <IconFrame>
          <Flag size={62} strokeWidth={2.3} />
        </IconFrame>
      ) : null}

      {/* Know what a bad day could expose — cracked shield */}
      {variant === "bad-day" ? (
        <IconFrame>
          <ShieldAlert size={62} strokeWidth={2.3} />
        </IconFrame>
      ) : null}
    </div>
  );
}
