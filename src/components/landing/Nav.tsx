import { Logo } from "./Logo";

export function Nav() {
  return (
    <header className="relative z-50 border-b border-border/60 bg-background">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-center gap-4 px-5 py-3 sm:px-8"
      >
        <a href="#top" className="min-w-0 rounded-md" aria-label="Financial Scoring home">
          <Logo className="h-10 sm:h-12" />
        </a>
      </nav>
    </header>
  );
}
