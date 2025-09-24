'use client'

import * as React from "react"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <div>
      <main>
        <div
          aria-hidden
          className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
          <div className="w-[35rem] h-[80rem] -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-[80rem] -translate-y-87.5 absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        <section className="overflow-hidden bg-background">
          <div className="relative mx-auto max-w-5xl px-6 py-32 lg:py-36">
            <div className="relative z-10 mx-auto max-w-2xl text-center space-y-8">
              <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
                Build Faster, Ship Sooner
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
                A production-ready Next.js starter kit with TypeScript, shadcn/ui, and everything you need to build modern web applications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg">
                  <Link href="/get-started">
                    <span>Get Started</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg">
                  <Link href="/get-started">
                    <span>Learn More</span>
                  </Link>
                </Button>
              </div>

              <div className="pt-12">
                <p className="text-sm font-medium text-muted-foreground mb-8">
                  Complete tech stack included
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 max-w-5xl mx-auto">
                  <Image
                    className="h-10 w-auto opacity-70 hover:opacity-100 transition-all duration-300 dark:invert"
                    src="/icons/nextjs.svg"
                    alt="Next.js"
                    height={40}
                    width={40}
                  />
                  <Image
                    className="h-10 w-auto opacity-70 hover:opacity-100 transition-all duration-300"
                    src="/icons/supabase.png"
                    alt="Supabase"
                    height={40}
                    width={40}
                  />
                  <Image
                    className="h-10 w-auto opacity-70 hover:opacity-100 transition-all duration-300 dark:invert"
                    src="/icons/prisma.svg"
                    alt="Prisma"
                    height={40}
                    width={40}
                  />
                  <Image
                    className="h-10 w-auto opacity-70 hover:opacity-100 transition-all duration-300 block dark:hidden"
                    src="/icons/Tailwindlogo.png"
                    alt="Tailwind CSS"
                    height={40}
                    width={40}
                  />
                  <Image
                    className="h-12 w-auto opacity-70 hover:opacity-100 transition-all duration-300 hidden dark:block brightness-200 contrast-125"
                    src="/icons/tailwind-dark.png"
                    alt="Tailwind CSS"
                    height={48}
                    width={48}
                  />
                  <Image
                    className="h-10 w-auto opacity-70 hover:opacity-100 transition-all duration-300 dark:invert"
                    src="/icons/shadcn.png"
                    alt="shadcn/ui"
                    height={40}
                    width={40}
                  />
                  <Image
                    className="h-10 w-auto opacity-70 hover:opacity-100 transition-all duration-300"
                    src="/icons/stripe.png"
                    alt="Stripe"
                    height={40}
                    width={40}
                  />
                  <Image
                    className="h-10 w-auto opacity-70 hover:opacity-100 transition-all duration-300"
                    src="/icons/postgres.png"
                    alt="PostgreSQL"
                    height={40}
                    width={40}
                  />
                  <Image
                    className="h-10 w-auto opacity-70 hover:opacity-100 transition-all duration-300 block dark:hidden"
                    src="/icons/clerk.png"
                    alt="Clerk"
                    height={40}
                    width={40}
                  />
                  <Image
                    className="h-10 w-auto opacity-70 hover:opacity-100 transition-all duration-300 hidden dark:block"
                    src="/icons/clerk-dark.png"
                    alt="Clerk"
                    height={40}
                    width={40}
                  />
                  <Image
                    className="h-10 w-auto opacity-70 hover:opacity-100 transition-all duration-300 dark:invert"
                    src="/icons/resend-logo.png"
                    alt="Resend"
                    height={40}
                    width={40}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
