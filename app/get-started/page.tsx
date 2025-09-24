"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  Code2,
  Palette,
  Users,
  Github,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Shield,
    title: "Authentication & Security",
    description: "Complete user authentication system with OAuth, magic links, and multi-factor authentication."
  },
  {
    icon: Zap,
    title: "Payment Integration",
    description: "Stripe integration with subscription management, billing, and payment processing."
  },
  {
    icon: Code2,
    title: "Email Management",
    description: "Automated email campaigns, transactional emails, and newsletter management."
  },
  {
    icon: Palette,
    title: "Advanced UI Components",
    description: "Premium component library with advanced animations and interactions."
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Multi-tenant architecture with team invitations and role-based permissions."
  },
  {
    icon: CheckCircle,
    title: "Production Ready",
    description: "Database setup, monitoring, analytics, and deployment configurations included."
  }
];

const pricingPlans = [
  {
    name: "Basic",
    price: "$49",
    description: "Perfect for solo developers",
    features: [
      "5 SaaS templates",
      "Basic authentication",
      "Email integration",
      "Documentation",
      "Community support"
    ]
  },
  {
    name: "Pro",
    price: "$99",
    description: "Best for small teams",
    features: [
      "15+ SaaS templates",
      "Advanced authentication",
      "Payment integration",
      "Team management",
      "Priority support",
      "Regular updates"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "For growing companies",
    features: [
      "All SaaS templates",
      "Custom integrations",
      "White-label options",
      "1-on-1 consultation",
      "Custom development",
      "Lifetime updates"
    ]
  }
];

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