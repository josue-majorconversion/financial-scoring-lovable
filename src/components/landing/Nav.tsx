import { Logo } from "./Logo";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-center gap-4 px-5 py-3 sm:px-8"
      >
        <a href="#top" className="min-w-0 rounded-md" aria-label="Financial Scoring home">
          <Logo className="h-7 sm:h-9" />
        </a>
      </nav>
    </header>
  );
}
