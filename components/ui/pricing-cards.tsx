'use client'

import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Pricing() {
  return (
    <div className="w-full py-24">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-foreground text-balance text-3xl font-semibold md:text-4xl">
            <span className="text-muted-foreground">Choose the perfect plan for</span>
            <br />
            your tour planning needs
          </h2>
        </div>
        <div className="grid text-left grid-cols-1 lg:grid-cols-3 w-full gap-8 max-w-6xl mx-auto pt-6">
          <Card className="w-full rounded-lg p-2">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Artist</CardTitle>
              <CardDescription className="text-sm">
                Perfect for emerging artists
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold">$29</div>
                <div className="text-sm text-muted-foreground">per month</div>
              </div>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Up to 5 cities analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Venue recommendations</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Basic fan insights</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Email support</span>
                </li>
              </ul>

              <Button variant="outline" asChild className="w-full gap-2">
                <Link href="/get-started">
                  Get started <MoveRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="w-full shadow-lg rounded-lg border-2 border-primary/20 p-2 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge variant="default" className="bg-primary text-primary-foreground">Most Popular</Badge>
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Promoter</CardTitle>
              <CardDescription className="text-sm">
                For booking agencies and promoters
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold">$99</div>
                <div className="text-sm text-muted-foreground">per month</div>
              </div>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Unlimited cities analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Advanced venue matching</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Multi-artist management</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Real-time market alerts</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Priority support (24h response)</span>
                </li>
              </ul>

              <Button asChild className="w-full gap-2">
                <Link href="/get-started">
                  Start free trial <MoveRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="w-full rounded-lg p-2">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Enterprise</CardTitle>
              <CardDescription className="text-sm">
                Custom solutions for large organizations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold">Custom</div>
                <div className="text-sm text-muted-foreground">pricing</div>
              </div>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Custom integrations & APIs</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>White-label solutions</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>99.9% uptime SLA guarantee</span>
                </li>
              </ul>

              <Button variant="outline" asChild className="w-full gap-2">
                <Link href="/get-started">
                  Contact sales <PhoneCall className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export { Pricing };