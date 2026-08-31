import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <Logo className="h-10" />
        <p className="text-sm text-muted-foreground">
          Financial Scoring results are preliminary, based on user-provided estimates, and are not
          investment advice. This prototype uses fictional data and placeholder CTA destinations.
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Financial Scoring. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
