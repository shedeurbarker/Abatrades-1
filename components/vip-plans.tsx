"use client"

import { useRef, useEffect } from "react"
import { PiCheck, PiInfinity, PiArrowRight } from "react-icons/pi"
import { SectionHeading } from "@/components/section-heading"
import { useReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"

type Plan = {
  broker: string
  brokerDot: string
  name: string
  price: string
  priceNote: string
  free: boolean
  unlimited?: boolean
  featured?: boolean
  features: string[]
  note?: string
  cta: string
}

const plans: Plan[] = [
  {
    broker: "Exness",
    brokerDot: "bg-up",
    name: "Exness Free VIP",
    price: "FREE",
    priceNote: "forever",
    free: true,
    unlimited: true,
    features: [
      "Free daily signals — high-conviction entries",
      "Morning analysis on 5+ pairs daily",
      "Gold (XAU/USD) every day",
      "Bitcoin (BTC/USD) included",
      "Silver (XAG/USD) included",
      "No expiry — stay forever",
    ],
    note: "*Requires an active Exness account",
    cta: "Get Exness VIP Free",
  },
  {
    broker: "Vantage",
    brokerDot: "bg-up",
    name: "Vantage Free VIP",
    price: "FREE",
    priceNote: "forever",
    free: true,
    unlimited: true,
    featured: true,
    features: [
      "Free daily signals — high-conviction entries",
      "Morning analysis on 5+ pairs daily",
      "Gold (XAU/USD) every day",
      "Bitcoin (BTC/USD) included",
      "Silver (XAG/USD) included",
      "No expiry — stay forever",
    ],
    note: "*Requires an active Vantage account",
    cta: "Get Vantage VIP Free",
  },
  {
    broker: "Premium",
    brokerDot: "bg-gold",
    name: "Paid VIP",
    price: "$100",
    priceNote: "/ month",
    free: false,
    features: [
      "All signals & analysis — same top-tier coverage",
      "Morning analysis on 5+ pairs every day",
      "Gold, BTC, Silver and more",
      "Use with any broker",
      "No broker requirement",
      "Priority group access",
    ],
    cta: "Join Paid VIP",
  },
]

const CARD_HEIGHT = 520
const HEADER_OFFSET = 80

export function VipPlans() {
  const headingRef = useReveal()
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="vip" className="relative border-t border-border bg-surface/30">
      <div className="pointer-events-none absolute inset-0 bg-chart opacity-[0.04]" />
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.10]"
        style={{ backgroundImage: "url('/images/bg-money.jpg')" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8 lg:pt-24">
        <div ref={headingRef} className="reveal">
          <SectionHeading
            label="VIP Memberships"
            title="Your edge. Choose your plan."
            sub="Three VIP tiers — two completely free, one premium. Every plan includes daily signals and structured morning analysis."
            align="center"
          />
        </div>
      </div>

      <div
        ref={containerRef}
        className="stack-cards-container relative mx-auto max-w-3xl px-4 sm:px-6"
        style={{ paddingBottom: "8rem" }}
      >
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            className="stack-card"
            style={{
              position: "sticky",
              top: `${HEADER_OFFSET}px`,
              zIndex: i,
              height: `${CARD_HEIGHT}px`,
            }}
          >
            <div
              className={cn(
                "flex h-full w-full flex-col rounded-2xl border p-6 shadow-xl shadow-black/20 sm:p-7",
                i === 0 && "border-border bg-surface-light",
                i === 1 && "border-gold/60 bg-surface",
                i === 2 && "border-border bg-surface-deep",
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  Most Popular
                </span>
              )}

              <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                <span className={cn("h-1.5 w-1.5 rounded-full", plan.brokerDot)} />
                {plan.broker}
              </div>

              <h3 className="mt-4 text-lg font-bold text-foreground">
                {plan.name}
              </h3>

              <div className="mt-2 flex items-baseline gap-1">
                <span
                  className={cn(
                    "font-mono text-4xl font-bold tracking-tight",
                    plan.free ? "text-gold" : "text-foreground",
                  )}
                >
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  {plan.priceNote}
                </span>
              </div>

              {plan.unlimited && (
                <div className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-up/10 px-2.5 py-1 text-[11px] font-semibold text-up">
                  <PiInfinity className="h-3.5 w-3.5" />
                  Unlimited stay
                </div>
              )}

              <div className="my-4 h-px bg-border sm:my-6" />

              <ul className="flex flex-1 flex-col gap-2.5 sm:gap-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm leading-snug text-muted-foreground"
                  >
                    <PiCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {plan.note && (
                <p className="mt-3 text-[11px] text-muted-foreground/70 sm:mt-4">
                  {plan.note}
                </p>
              )}

              <a
                href="#how"
                className={cn(
                  "mt-4 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors sm:mt-6",
                  plan.featured
                    ? "bg-gold text-primary-foreground hover:bg-gold-light"
                    : "border border-border text-foreground hover:border-gold/50 hover:text-gold",
                )}
              >
                {plan.cta}
                <PiArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
