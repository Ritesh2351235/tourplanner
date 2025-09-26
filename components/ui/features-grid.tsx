'use client'

import { TrendingUp, Activity, Zap, MapPin, Bell, Target } from 'lucide-react'

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
              <TrendingUp className="size-4" />
              <h3 className="text-sm font-medium">Tour Growth Path</h3>
            </div>
            <p className="text-sm text-muted-foreground">Visualize artist expansion with peer benchmarks and regional insights.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Activity className="size-4" />
              <h3 className="text-sm font-medium">Live Tour Tracking</h3>
            </div>
            <p className="text-sm text-muted-foreground">Real-time routing, venue capacity, and ticket sales status.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Target className="size-4" />
              <h3 className="text-sm font-medium">Fan Conversion Analytics</h3>
            </div>
            <p className="text-sm text-muted-foreground">Track how streaming audiences become ticket buyers by region.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium">AI-Powered Forecasting</h3>
            </div>
            <p className="text-sm text-muted-foreground">Predict market demand, venue fit, and touring opportunities.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="size-4" />
              <h3 className="text-sm font-medium">Market Intelligence</h3>
            </div>
            <p className="text-sm text-muted-foreground">City-level fan density, venue analysis, and pricing insights.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Bell className="size-4" />
              <h3 className="text-sm font-medium">Smart Alerts</h3>
            </div>
            <p className="text-sm text-muted-foreground">Real-time notifications for sell-outs, opportunities, and market changes.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
