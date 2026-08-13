import { Cta } from "./Cta";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/85 px-4 py-3 backdrop-blur-xl sm:hidden">
      <Cta href="#experience" size="md" className="w-full">
        Experience Scoring
      </Cta>
    </div>
  );
}
