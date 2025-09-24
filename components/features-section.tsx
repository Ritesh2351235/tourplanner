'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowUp, Code2, Plus, Sparkles, Terminal, Layers, Zap } from 'lucide-react'

export default function FeaturesSection() {
  return (
    <section>
      <div className="py-24">
        <div className="mx-auto w-full max-w-4xl px-6">
          <h2 className="text-foreground text-balance text-3xl font-semibold md:text-4xl text-center">
            Next.js starter kit
          </h2>
          <div className="@container mt-12 space-y-12">
            <Card
              variant="soft"
              className="relative overflow-hidden p-0 sm:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1635776062043-223faf322554?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="absolute inset-0 size-full object-cover"
              />
              <div className="relative m-auto max-w-md p-4 sm:p-12">
                <DeveloperToolsIllustration />
              </div>
            </Card>
            <div className="@sm:grid-cols-2 @2xl:grid-cols-3 grid gap-6">
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Modern Stack</h3>
                <p className="text-muted-foreground">Built with Next.js 15, React 19, TypeScript, and the latest web technologies.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Ready Components</h3>
                <p className="text-muted-foreground">Pre-built shadcn/ui components with dark mode support and accessibility.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Developer Experience</h3>
                <p className="text-muted-foreground">Optimized tooling, hot reload, and production-ready configurations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const DeveloperToolsIllustration = () => {
  return (
    <Card
      aria-hidden
      className="relative space-y-4 p-6 bg-background/80 backdrop-blur-sm border-border/60">
      <div className="w-fit">
        <div className="flex items-center gap-2 mb-2">
          <Terminal className="size-3.5 text-foreground" />
          <span className="text-sm font-medium">TourPlanner CLI</span>
        </div>
        <p className="mt-2 line-clamp-2 text-sm">npx create-starterkit-app my-project --template=full</p>
        <ul
          role="list"
          className="text-muted-foreground mt-3 space-y-2 text-sm">
          {[
            { value: '15+', emoji: '⚡', label: 'Built-in Components' },
            { value: '99%', emoji: '🚀', label: 'Performance Score' },
            { value: 'A11y', emoji: '♿', label: 'Accessibility Ready' },
          ].map((stat, index) => (
            <li
              key={index}
              className="-ml-0.5 flex items-center gap-2">
              <span>{stat.emoji}</span>
              <span className="text-foreground font-medium">{stat.value}</span> {stat.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-foreground/5 -mx-3 -mb-3 space-y-3 rounded-lg p-3">
        <div className="text-muted-foreground text-sm flex items-center gap-2">
          <Code2 className="size-3" />
          Quick Actions
        </div>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="size-7 rounded-2xl bg-transparent shadow-none">
              <Plus className="size-3" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-7 rounded-2xl bg-transparent shadow-none">
              <Layers className="size-3" />
            </Button>
          </div>

          <Button
            size="icon"
            className="size-7 rounded-2xl">
            <Zap className="size-3" strokeWidth={3} />
          </Button>
        </div>
      </div>
    </Card>
  )
}
