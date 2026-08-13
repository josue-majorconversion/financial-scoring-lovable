import { useState } from "react";
import { toast } from "sonner";
import mark from "@/assets/ignyte-mark.png.asset.json";
import { Cta } from "./Cta";

export function FinalCta() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Enter your email so we can reach out.");
      return;
    }
    toast.success("You're in — we'll reach out shortly. Good luck in the drawing!");
    setName("");
    setEmail("");
  };

  return (
    <section
      id="subscribe"
      className="relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="absolute inset-0 -z-10 grid-glow opacity-70" />
      <div className="mx-auto max-w-2xl text-center">
        <img
          src={mark.url}
          alt="FinancialScoring"
          className="mx-auto h-14 w-auto animate-float-slow"
        />
        <h2 className="mt-8 text-3xl font-bold leading-tight sm:text-5xl">
          Scored clients are{" "}
          <span className="text-gradient-mint">awaiting your call.</span>
        </h2>
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">
          Become a subscriber today and start uncovering the commissions already sitting in
          your leads.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Cta href="#subscribe" className="w-full sm:w-auto">
            Become a Subscriber
          </Cta>
          <Cta href="#subscribe" variant="outline" size="md" className="w-full sm:w-auto">
            Start My 14-Day Free Trial
          </Cta>
        </div>

        <form
          onSubmit={submit}
          className="mt-12 rounded-3xl card-surface p-6 text-left sm:p-8"
        >
          <p className="font-display text-base font-bold">
            Not ready yet? Enter your info and we will reach out.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-full border border-input bg-background/60 px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-mint/60 focus:outline-none"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email address"
              className="w-full rounded-full border border-input bg-background/60 px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-mint/60 focus:outline-none"
            />
          </div>
          <Cta type="submit" size="md" className="mt-4 w-full">
            Enter to Win
          </Cta>
          <p className="mt-4 text-center text-xs text-mint">
            One lucky subscriber wins a full annual subscription. Enter to win.
          </p>
        </form>

        <p className="mt-14 font-display text-sm font-bold uppercase tracking-[0.28em] text-muted-foreground">
          We don't sell leads, we replace them
        </p>
      </div>
    </section>
  );
}
