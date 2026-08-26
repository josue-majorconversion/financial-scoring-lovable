import { useEffect, useState, type FormEvent } from "react";
import lockup from "@/assets/ignyte-lockup.png.asset.json";
import fsLogo from "@/assets/financial-scoring-logo.png.asset.json";

const STORAGE_KEY = "financial_scoring_vip_test_access";

export function resetVipGate() {
  sessionStorage.removeItem(STORAGE_KEY);
  window.location.reload();
}

if (typeof window !== "undefined" && import.meta.env.DEV) {
  (window as unknown as Record<string, unknown>)["resetVipGate"] = resetVipGate;
}

export function VipGate() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [unlocking, setUnlocking] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) !== "true") setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    const block = (e: KeyboardEvent) => {
      if (e.key === "Escape") e.preventDefault();
    };
    window.addEventListener("keydown", block);
    return () => {
      html.style.overflow = prev;
      window.removeEventListener("keydown", block);
    };
  }, [open]);

  useEffect(() => {
    const root = document.getElementById("site-root");
    if (!root) return;
    const active = open && !closing;
    root.style.filter = active ? "blur(12px)" : "";
    root.style.transition = "filter 500ms ease";
    root.setAttribute("aria-hidden", active ? "true" : "false");
    root.style.pointerEvents = active ? "none" : "";
  }, [open, closing]);

  if (!open) return null;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (unlocking) return;
    setUnlocking(true);
    window.setTimeout(() => {
      setClosing(true);
      sessionStorage.setItem(STORAGE_KEY, "true");
      window.setTimeout(() => {
        setOpen(false);
        window.scrollTo({ top: 0, behavior: "auto" });
      }, 500);
    }, 650);
  };

  const field =
    "mt-1.5 h-12 w-full rounded-xl border border-border bg-surface px-4 text-base text-foreground placeholder:text-muted-foreground/60 focus-visible:border-mint focus-visible:outline-none";
  const label =
    "text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Ignyte VIP access"
      className={`fixed inset-0 z-[100] overflow-y-auto px-4 py-8 transition-opacity duration-500 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="mx-auto flex min-h-full w-full max-w-md items-center">
        <div className="card-surface glow-mint w-full rounded-3xl p-5 sm:p-7">
          {/* Logo lockup */}
          <div className="flex items-center justify-center gap-2">
            <img
              src={fsLogo.url}
              alt="Financial Scoring"
              className="h-9 w-auto max-w-[46%] shrink-0 object-contain"
            />
            <span className="shrink-0 font-display text-base text-mint" aria-hidden="true">
              ×
            </span>
            <img
              src={lockup.url}
              alt="Ignyte Sales Conference"
              className="h-11 w-auto max-w-[46%] object-contain"
            />
          </div>

          <p className="mt-6 text-center text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-mint">
            Exclusive Event Access
          </p>
          <h2 className="mt-3 text-center font-display text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
            Welcome FFL
            <span className="block text-cyan">Ignyte VIP Access</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xs text-center text-sm leading-relaxed text-muted-foreground">
            Meet the Financial Scoring technology changing the face of insurance.
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
            <div>
              <label className={label} htmlFor="vip-first">
                First Name
              </label>
              <input id="vip-first" name="firstName" className={field} autoComplete="given-name" />
            </div>
            <div>
              <label className={label} htmlFor="vip-last">
                Last Name
              </label>
              <input id="vip-last" name="lastName" className={field} autoComplete="family-name" />
            </div>
            <div>
              <label className={label} htmlFor="vip-email">
                Email
              </label>
              <input id="vip-email" name="email" className={field} autoComplete="email" />
            </div>
            <div>
              <label className={label} htmlFor="vip-phone">
                Phone Number
              </label>
              <input id="vip-phone" name="phone" className={field} autoComplete="tel" />
            </div>

            <div className="pt-1">
              <label className={label}>I am a</label>
              <div className="mt-2 flex gap-3">
                <label className="flex flex-1 cursor-pointer items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 has-[:checked]:border-mint/60 has-[:checked]:bg-mint/10">
                  <input type="radio" name="type" value="agent" className="h-4 w-4 accent-mint" />
                  <span className="text-sm font-medium text-foreground">Agent</span>
                </label>
                <label className="flex flex-1 cursor-pointer items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 has-[:checked]:border-mint/60 has-[:checked]:bg-mint/10">
                  <input type="radio" name="type" value="agency" className="h-4 accent-mint" />
                  <span className="text-sm font-medium text-foreground">Agency Owner</span>
                </label>
              </div>
            </div>


            <button
              type="submit"
              className="mt-2 min-h-[56px] w-full rounded-full bg-gradient-mint px-6 font-display text-base font-bold uppercase tracking-[0.06em] text-primary-foreground glow-mint transition-all duration-300 hover:brightness-110"
            >
              {unlocking ? "Unlocking…" : "Unlock My 14-Day Free Trial"}
            </button>
          </form>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <span className="whitespace-nowrap">
              <span className="text-mint">✓</span> No credit card needed
            </span>
            <span className="whitespace-nowrap">🔒 Secure</span>
          </div>
        </div>
      </div>
    </div>
  );
}
