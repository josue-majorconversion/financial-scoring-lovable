import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-bold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const sizes = {
  lg: "px-7 py-4 text-base sm:text-lg",
  md: "px-5 py-3 text-sm sm:text-base",
} as const;

const variants = {
  primary:
    "bg-gradient-mint text-primary-foreground glow-mint hover:brightness-110 hover:-translate-y-0.5",
  outline:
    "border border-mint/40 text-mint hover:border-mint hover:bg-mint/10 hover:-translate-y-0.5",
  ghost: "border border-border text-foreground/80 hover:border-mint/40 hover:text-foreground",
} as const;

interface CtaProps {
  children: ReactNode;
  href?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  type?: "button" | "submit";
}

export function Cta({
  children,
  href = "#subscribe",
  variant = "primary",
  size = "lg",
  className = "",
  type,
}: CtaProps) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (type) {
    return (
      <button type={type} className={cls}>
        {children}
      </button>
    );
  }
  return (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}
