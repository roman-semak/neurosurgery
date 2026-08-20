import type { Metadata } from "next";

import { HeroSection } from "@/components/home/hero-section";
import { HowWeHelpSection } from "@/components/home/how-we-help-section";
import { TrustSection } from "@/components/home/trust-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { AboutTeaserSection } from "@/components/home/about-teaser-section";
import { GallerySection } from "@/components/home/gallery-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { SITE_DESCRIPTION } from "@/lib/content/site";

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <HowWeHelpSection />
      <HowItWorksSection />
      <AboutTeaserSection />
      <GallerySection />
      <FinalCtaSection />
    </>
  );
}
