"use client"

import { useState } from "react"
import { PiPlus } from "react-icons/pi"
import { SectionHeading } from "@/components/section-heading"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "How do I qualify for the free Exness or Vantage VIP?",
    a: "Open an active trading account with either Exness or Vantage, share your confirmation with us, and we'll verify and add you to the VIP group. No deposit minimum is required beyond having a live account.",
  },
  {
    q: 'What does "unlimited stay" mean?',
    a: "Your VIP membership never expires. No monthly renewals, no minimum deposit. As long as your broker account is active, you stay in the group — permanently.",
  },
  {
    q: "What's included in the morning analysis?",
    a: "Every morning before the session opens you receive a structured breakdown of at least 5 pairs — always including Gold (XAU/USD), Bitcoin (BTC/USD), and Silver (XAG/USD) plus additional forex pairs. Coverage includes bias direction, key levels, and trade setups.",
  },
  {
    q: "Can a complete beginner join the mentorship?",
    a: "Yes. The mentorship is designed to start from absolute zero. The first 3 months of live training go step-by-step from fundamentals through to advanced strategies. The following 9 months of mentorship then support you as you apply everything live.",
  },
  {
    q: "When does the next mentorship cohort start?",
    a: "The next cohort starts July 15th. The investment is $500 for the full 12 months — 3 months training plus 9 months active mentorship. Spots are limited so it's best to secure yours early.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative border-t border-border">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.10]"
        style={{ backgroundImage: "url('/images/bg-phone.jpg')" }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-globe opacity-[0.03]"
      />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          label="Common Questions"
          title="Everything you need to know."
          align="center"
        />

        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <ScrollReveal key={f.q} variant="up" delay={i * 80}>
              <div
                className={cn(
                  "overflow-hidden rounded-xl border bg-surface transition-colors",
                  isOpen ? "border-gold/40" : "border-border",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={cn(
                      "text-sm font-semibold transition-colors",
                      isOpen ? "text-gold" : "text-foreground",
                    )}
                  >
                    {f.q}
                  </span>
                  <PiPlus
                    className={cn(
                      "h-4 w-4 shrink-0 transition-all duration-300",
                      isOpen ? "rotate-45 text-gold" : "text-muted-foreground",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
