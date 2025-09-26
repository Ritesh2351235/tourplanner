'use client'

import { Music, Users, TrendingUp, Target, MapPin, Bell, BarChart3 } from 'lucide-react'

export function CoreProductValue() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 space-y-16">
        <div className="relative z-10 mx-auto max-w-xl text-center space-y-4">
          <h2 className="text-foreground text-balance text-3xl font-semibold md:text-4xl">
            Core Product Value
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* For Artists */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Music className="size-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">For Artists</h3>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <TrendingUp className="size-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Map your growth path:</p>
                    <p className="text-sm text-muted-foreground">Visualize past tours, ticket sales, venue performance, and expansion trends.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Users className="size-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Understand your progress:</p>
                    <p className="text-sm text-muted-foreground">Alongside peers at a similar career stage and identify new opportunities for growth.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <BarChart3 className="size-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Track market power:</p>
                    <p className="text-sm text-muted-foreground">In real time and plan your next touring step with confidence.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Target className="size-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Turn followers into ticket buyers:</p>
                    <p className="text-sm text-muted-foreground">Understand fan conversion and discover new high-potential regions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* For Promoters & Venues */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Users className="size-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">For Promoters & Venues</h3>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="size-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Instant market analysis:</p>
                    <p className="text-sm text-muted-foreground">See real-time market dynamics, venue fit, and demand signals for every region.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <TrendingUp className="size-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Evaluate artist growth potential:</p>
                    <p className="text-sm text-muted-foreground">Before committing; make investment decisions with robust data.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Bell className="size-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Receive live alerts:</p>
                    <p className="text-sm text-muted-foreground">On sell-outs, new shows, and emerging ticket demand—never miss an opportunity.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <BarChart3 className="size-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Use comparative benchmarks:</p>
                    <p className="text-sm text-muted-foreground">To choose the right projects and venues, powered by peer analytics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}