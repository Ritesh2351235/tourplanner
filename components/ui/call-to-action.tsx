'use client'

import { WaitlistForm } from "@/components/ui/waitlist-form"

export function CallToAction() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6 space-y-12">
        <div className="relative z-10 mx-auto max-w-2xl text-center space-y-8">
          <h2 className="text-foreground text-balance text-3xl font-semibold md:text-4xl">
            Ready to unlock your full touring potential?
          </h2>
          
          <div className="flex justify-center">
            <WaitlistForm className="w-full max-w-md" />
          </div>

          <div className="pt-8 border-t">
            <p className="text-lg text-muted-foreground font-medium text-center">
              Transform your data into new audiences, bigger markets, and global impact for every stage.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}