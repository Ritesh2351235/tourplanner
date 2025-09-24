'use client'

import { MapPin, Building2, TrendingUp, Bell, Users, BarChart3 } from 'lucide-react'

export function FeaturesGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6 space-y-10">
        <div className="relative z-10 mx-auto max-w-xl text-center space-y-4 mb-16">
          <h2 className="text-foreground text-balance text-3xl font-semibold md:text-4xl">
            <span className="text-muted-foreground">Everything you need for</span>
            <br />
            successful tour planning
          </h2>
        </div>

        <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <MapPin className="size-4" />
              <h3 className="text-sm font-medium">Find the right cities</h3>
            </div>
            <p className="text-sm text-muted-foreground">See where your fans are most likely to buy tickets.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Building2 className="size-4" />
              <h3 className="text-sm font-medium">Pick the right venues</h3>
            </div>
            <p className="text-sm text-muted-foreground">Get venue size and ticket price suggestions that match your stage of growth.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="size-4" />
              <h3 className="text-sm font-medium">Track your growth</h3>
            </div>
            <p className="text-sm text-muted-foreground">Visualize your journey — from local gigs to global tours.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Bell className="size-4" />
              <h3 className="text-sm font-medium">Stay updated</h3>
            </div>
            <p className="text-sm text-muted-foreground">Get alerts on new shows, markets, and opportunities.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Users className="size-4" />
              <h3 className="text-sm font-medium">Built for promoters too</h3>
            </div>
            <p className="text-sm text-muted-foreground">Discover rising artists, compare markets, and plan with confidence.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <BarChart3 className="size-4" />
              <h3 className="text-sm font-medium">Market insights</h3>
            </div>
            <p className="text-sm text-muted-foreground">Data-driven recommendations based on fanbase analytics and market trends.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
