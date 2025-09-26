'use client'

import { Quote } from 'lucide-react'

export function UseCases() {
  const testimonials = [
    {
      role: "Artist Manager",
      quote: "Touringengine revealed our whitespace markets—our next tour sold 25% more tickets.",
      name: "Artist Management"
    },
    {
      role: "Promoter",
      quote: "We never miss demand spikes now. Smart Alerts helped us secure three sell-out shows.",
      name: "Live Event Promotion"
    },
    {
      role: "Venue Owner",
      quote: "The Market Lens shows exactly which artists fit my venue size and local fan base.",
      name: "Venue Operations"
    }
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 space-y-16">
        <div className="relative z-10 mx-auto max-w-xl text-center space-y-4">
          <h2 className="text-foreground text-balance text-3xl font-semibold md:text-4xl">
            See How Industry Professionals Use Touringengine
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background border rounded-lg p-8 space-y-6">
              <Quote className="size-6 text-primary" />

              <blockquote className="text-base text-foreground font-medium leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground">{testimonial.role}</p>
                <p className="text-sm text-muted-foreground">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}