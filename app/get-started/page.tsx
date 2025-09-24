"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";


export default function GetStarted() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="fixed top-0 z-50 w-full pt-4">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="flex items-center justify-between bg-background/95 backdrop-blur border rounded-full px-6 py-3 shadow-sm supports-[backdrop-filter]:bg-background/60">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-lg font-serif italic">TourPlanner</Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2">
              <ModeToggle />
              <Button size="sm" asChild className="rounded-full">
                <Link href="/">
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            Free Starter Pack
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            This is just a free starter pack with landing page
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            To explore more, visit our main page where you could get all the SaaS templates
            with authentication, payment integration, and email management at affordable prices.
          </p>

          <div className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-12">
            Build Faster, Ship Sooner
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground">
            © 2024 TourPlanner. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}