import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { ExperienceScoring } from "@/components/landing/ExperienceScoring";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { WhyClientsCare } from "@/components/landing/WhyClientsCare";
import { WhyAgentsCare } from "@/components/landing/WhyAgentsCare";
import { RippleEffect } from "@/components/landing/RippleEffect";
import { VideoTestimonials } from "@/components/landing/VideoTestimonials";
import { WhatsNext } from "@/components/landing/WhatsNext";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";
import { VipGate } from "@/components/landing/VipGate";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Financial Scoring — Leads Are Dead. Start Buying Certainty." },
      {
        name: "description",
        content:
          "Financial Scoring helps insurance agents recognize needs, priorities, and opportunities before the conversation begins. Try the live assessment.",
      },
      { property: "og:title", content: "Financial Scoring — Leads Are Dead." },
      {
        property: "og:description",
        content:
          "Stop buying leads. Start buying certainty. Experience the live Financial Scoring assessment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <div id="site-root">
      <Nav />
      <main className="min-h-screen bg-background">
        <Hero />
        <ExperienceScoring />
        <DashboardPreview />
        <WhyClientsCare />
        <WhyAgentsCare />
        <RippleEffect />
        <VideoTestimonials />
        <WhatsNext />
        <FinalCta />
        <Footer />
      </main>
      </div>
      <VipGate />
      <Toaster />
    </>
  );
}
