import type { ReactNode } from "react";

const base =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full font-display font-semibold uppercase tracking-[0.06em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const sizes = {
  lg: "px-7 py-4 text-base sm:text-lg",
  md: "px-5 py-3 text-sm sm:text-base",
} as const;

const variants = {
  primary:
    "bg-gradient-mint text-primary-foreground glow-mint hover:brightness-110 hover:-translate-y-0.5",
  outline:
    "border border-mint/50 text-mint hover:border-mint hover:bg-mint/10 hover:-translate-y-0.5",
  ghost: "border border-border text-foreground/80 hover:border-mint/50 hover:text-foreground",
} as const;

interface CtaProps {
  children: ReactNode;
  href?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  external?: boolean;
  ariaLabel?: string;
}

export function Cta({
  children,
  href,
  variant = "primary",
  size = "lg",
  className = "",
  type,
  onClick,
  external,
  ariaLabel,
}: CtaProps) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (!href) {
    return (
      <button type={type ?? "button"} onClick={onClick} className={cls} aria-label={ariaLabel}>
        {children}
      </button>
    );
  }
  return (
    <a
      href={href}
      className={cls}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
