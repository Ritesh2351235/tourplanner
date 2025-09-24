"use client";

import { FeaturesGrid } from "@/components/ui/features-grid";
import { Pricing } from "@/components/ui/pricing-cards";
import Testimonials from "@/components/ui/testimonials-columns-1";
import FAQs from "@/components/ui/faqs-component";
import Footer from "@/components/ui/footer";
import { HeroWithMockup } from "@/components/ui/hero-with-mockup";


export default function Home() {

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 left-0 z-50 w-full">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif italic text-foreground">TourPlanner</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroWithMockup
        title={
          <>
            Tour planning made simple<br />
            <span className="font-serif italic">for artists and promoters</span>
          </>
        }
        description="TourPlanner shows you the best cities, venues, and ticket ranges using your fanbase and market insights, so every show is a success"
        primaryCta={{
          text: "Get Started",
          href: "/get-started",
        }}
        mockupImage={{
          alt: "AI Platform Dashboard",
          width: 1248,
          height: 765,
          src: "https://www.launchuicomponents.com/app-light.png"
        }}
      />

      <main className="relative z-10">
        {/* Features Section */}
        <section id="features">
          <FeaturesGrid />
        </section>

        {/* Pricing Section */}
        <section id="pricing">
          <Pricing />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* FAQ Section */}
        <FAQs />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
