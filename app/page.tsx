"use client";

import { FeaturesGrid } from "@/components/ui/features-grid";
import { CallToAction } from "@/components/ui/call-to-action";
import { TouringengineTimeline } from "@/components/ui/touring-engine-timeline";
import Testimonials from "@/components/ui/testimonials-columns-1";
import FAQs from "@/components/ui/faqs-component";
import Footer from "@/components/ui/footer";
import { HeroWithMockup } from "@/components/ui/hero-with-mockup";


export default function Home() {

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 left-0 z-50 w-full">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-serif italic text-foreground">Touringengine</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroWithMockup
        title={
          <>
            Transform live touring with real-time intelligence<br />
            <span className="font-serif italic">for artists and promoters</span>
          </>
        }
        description="Turn fragmented touring data into actionable insights. Unlock new audiences, grow global markets, and discover a world of limitless possibilities for live music."
        showWaitlist={true}
        mockupImage={{
          alt: "AI Platform Dashboard",
          width: 1248,
          height: 765,
          src: "https://www.launchuicomponents.com/app-light.png"
        }}
      />

      <main className="relative z-10">
        {/* Timeline Section */}
        <section id="timeline">
          <TouringengineTimeline />
        </section>

        {/* Features Section */}
        <section id="features">
          <FeaturesGrid />
        </section>

        {/* Call to Action Section */}
        <section id="call-to-action">
          <CallToAction />
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
