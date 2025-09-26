'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQs() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'How does Touringengine help plan my tour?',
      answer: 'Touringengine uses your fanbase data and market insights to recommend the best cities, venues, and ticket pricing strategies. We analyze streaming data, social media presence, and local market conditions to maximize your tour success.',
    },
    {
      id: 'item-2',
      question: 'What data sources does Touringengine use?',
      answer: 'Touringengine integrates with major streaming platforms, social media APIs, venue databases, and local market analytics to provide comprehensive insights for tour planning decisions.',
    },
    {
      id: 'item-3',
      question: 'Can I use Touringengine for multiple artists?',
      answer: 'Absolutely! Touringengine is perfect for booking agencies, promoters, and management companies handling multiple artists. Each artist profile gets personalized recommendations based on their unique fanbase.',
    },
    {
      id: 'item-4',
      question: 'How accurate are the venue recommendations?',
      answer: 'Our venue recommendations are based on real market data, capacity analysis, and historical performance metrics. We constantly update our database to ensure the most accurate and relevant suggestions.',
    },
    {
      id: 'item-5',
      question: 'Do you provide ticket pricing insights?',
      answer: 'Yes! Touringengine analyzes local market conditions, venue capacity, demand patterns, and competitor pricing to suggest optimal ticket price ranges that maximize both attendance and revenue.',
    },
    {
      id: 'item-6',
      question: 'What makes Touringengine different from other tools?',
      answer: 'Touringengine combines fanbase analytics with real-time market data to provide personalized recommendations. Our focus on data-driven decisions helps ensure every show is a success, not just a booking.',
    },
  ]

  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6 space-y-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-foreground text-balance text-3xl font-semibold md:text-4xl">
            <span className="text-muted-foreground">Frequently asked questions about</span>
            <br />
            <span className="font-serif italic">Touringengine</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-base font-medium">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center pt-8">
          <p className="text-muted-foreground mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  )
}