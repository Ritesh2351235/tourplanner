import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Mockup } from "@/components/ui/mockup"
import { Glow } from "@/components/ui/glow"
import { WaitlistForm } from "@/components/ui/waitlist-form"
import Image from 'next/image'


interface HeroWithMockupProps {
  title: string | React.ReactNode
  description: string
  showWaitlist?: boolean
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  mockupImage: {
    src: string
    alt: string
    width: number
    height: number
  }
  className?: string
}

export function HeroWithMockup({
  title,
  description,
  showWaitlist = false,
  primaryCta = {
    text: "Get Started",
    href: "/get-started",
  },
  secondaryCta,
  mockupImage,
  className,
}: HeroWithMockupProps) {
  return (
    <section
      className={cn(
        "relative bg-background text-foreground",
        "py-12 px-4 md:py-24 lg:py-32",
        "overflow-hidden",
        className,
      )}
    >
      <div className="relative mx-auto max-w-[1280px] flex flex-col gap-8 lg:gap-24">
        <div className="relative z-10 flex flex-col items-center gap-4 pt-20 md:pt-16 text-center lg:gap-12 lg:pt-8">
          {/* Heading */}
          <h1
            className={cn(
              "inline-block animate-appear",
              "bg-gradient-to-b from-foreground via-foreground/90 to-muted-foreground",
              "bg-clip-text text-transparent",
              "text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl",
              "leading-tight text-center",
              "drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]",
              "px-4",
            )}
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className={cn(
              "max-w-[550px] animate-appear opacity-0 [animation-delay:150ms]",
              "text-base sm:text-lg md:text-xl",
              "text-muted-foreground text-center",
              "font-medium",
              "leading-relaxed px-4",
            )}
          >
            {description}
          </p>

          {/* CTA */}
          <div
            className="relative z-10 flex justify-center 
            animate-appear opacity-0 [animation-delay:300ms]"
          >
            {showWaitlist ? (
              <WaitlistForm className="w-full max-w-md" />
            ) : (
              <div className="flex gap-4">
                <Button
                  asChild
                  size="lg"
                  className={cn(
                    "bg-black text-white",
                    "px-8 py-3 text-base font-medium",
                    "rounded-md",
                  )}
                >
                  <a href={primaryCta.href}>{primaryCta.text}</a>
                </Button>
                {secondaryCta && (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className={cn(
                      "px-8 py-3 text-base font-medium",
                      "rounded-md",
                    )}
                  >
                    <a href={secondaryCta.href}>{secondaryCta.text}</a>
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Mockup */}
          <div className="relative w-full max-w-4xl mx-auto pt-16 md:pt-12 px-4 sm:px-6 lg:px-8">
            <Mockup
              className={cn(
                "animate-appear opacity-0 [animation-delay:700ms]",
                "shadow-[0_0_50px_-12px_rgba(0,0,0,0.3)] dark:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)]",
                "border-brand/10 dark:border-brand/5",
              )}
            >
              <Image
                src={mockupImage.src}
                alt={mockupImage.alt}
                width={mockupImage.width}
                height={mockupImage.height}
                className="w-full h-auto"
                priority
              />
            </Mockup>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Glow
          variant="above"
          className="animate-appear-zoom opacity-0 [animation-delay:1000ms]"
        />
      </div>
    </section>
  )
}