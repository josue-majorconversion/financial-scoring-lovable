import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <Logo className="h-10" />
        <p className="text-sm text-muted-foreground">We don’t sell leads. We replace them.</p>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
          <span className="text-muted-foreground">Privacy Policy — coming soon</span>
          <span className="text-muted-foreground">Terms — coming soon</span>
          <span className="text-muted-foreground">Contact — coming soon</span>
        </nav>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Financial Scoring. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
