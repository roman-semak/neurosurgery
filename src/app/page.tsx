import type { Metadata } from "next";

import { HeroSection } from "@/components/home/hero-section";
import { HowWeHelpSection } from "@/components/home/how-we-help-section";
import { TrustSection } from "@/components/home/trust-section";
import { AboutTeaserSection } from "@/components/home/about-teaser-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { SITE_DESCRIPTION } from "@/lib/content/site";

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowWeHelpSection />
      <TrustSection />
      <AboutTeaserSection />
      <TestimonialsSection />
    </>
  );
}
