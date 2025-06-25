// components/home/LandingPage.tsx
import LandingLayout from "@/components/Home/LandingLayout";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import { Testimonials } from "@/components/Home/Testimonials";
import CTA from "@/components/Home/CTAH";
import { StatsSection } from "./Home/StatsSection";

export default function LandingPage() {
  return (
    <>
      <LandingLayout>
        <Hero />
        <Features />
        <Testimonials />
        <StatsSection />
        <CTA />
      </LandingLayout>
    </>
  );
}
