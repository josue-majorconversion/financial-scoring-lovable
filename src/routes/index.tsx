import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Hero } from "@/components/landing/Hero";
import { Proof } from "@/components/landing/Proof";
import { Comparison } from "@/components/landing/Comparison";
import { ScoringShowcase } from "@/components/landing/ScoringShowcase";
import { Benefits } from "@/components/landing/Benefits";
import { Movement } from "@/components/landing/Movement";
import { Testimonials } from "@/components/landing/Testimonials";
import { FinalCta } from "@/components/landing/FinalCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FinancialScoring — Your Leads Are More Valuable Than You Know" },
      {
        name: "description",
        content:
          "Financial scoring helps insurance agents uncover more deals, higher commissions, and fewer calls from the leads they already have. We don't sell leads, we replace them.",
      },
      { property: "og:title", content: "FinancialScoring — Score every lead. Make more money." },
      {
        property: "og:description",
        content:
          "AI-powered financial scoring for insurance agents: more deals, higher commissions, fewer calls.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Proof />
      <Comparison />
      <ScoringShowcase />
      <Benefits />
      <Movement />
      <Testimonials />
      <FinalCta />
      <Toaster />
    </main>
  );
}
