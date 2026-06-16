"use client"

import { useState, useEffect } from "react"
import { PiArrowRight, PiLightning, PiShieldCheck, PiPulse } from "react-icons/pi"
import { TerminalPanel } from "@/components/terminal-panel"
import { ScrollReveal } from "@/components/scroll-reveal"

const taglines = [
  "With an edge.",
  "With confidence.",
  "With precision.",
  "With a plan.",
  "Like a pro.",
]

const stats = [
  { num: "5+", label: "Pairs analyzed daily" },
  { num: "2", label: "Free VIP tiers" },
  { num: "12mo", label: "Structured mentorship" },
  { num: "24/7", label: "Signal access" },
]

export function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setTaglineIndex((prev) => (prev + 1) % taglines.length)
        setFade(true)
      }, 400)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15]"
        style={{ backgroundImage: "url('/images/bg-chart.png')" }}
      />
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:py-24">
        <ScrollReveal variant="up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="flex h-1.5 w-1.5 rounded-full bg-up animate-pulse-dot" />
            Africa&apos;s rising trading community
          </div>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Trade the markets.{" "}
            <span
              className="text-gold transition-opacity duration-400"
              style={{ opacity: fade ? 1 : 0 }}
            >
              {taglines[taglineIndex]}
            </span>
          </h1>

          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Free VIP signals, daily morning analysis on Gold, BTC, Silver and
            more, plus a structured 12-month mentorship that takes you from
            beginner to advanced.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#vip"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-light"
            >
              <PiLightning className="h-4 w-4" />
              Explore VIP Plans
            </a>
            <a
              href="#mentorship"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/40 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              View Mentorship
              <PiArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <PiShieldCheck className="h-4 w-4 text-gold" />
              No expiry on free tiers
            </span>
            <span className="inline-flex items-center gap-1.5">
              <PiPulse className="h-4 w-4 text-gold" />
              Daily morning analysis
            </span>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface px-4 py-4">
                <dt className="font-mono text-2xl font-bold tracking-tight text-foreground">
                  {s.num}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>

        <ScrollReveal variant="right" delay={200}>
          <div className="lg:pl-4">
            <TerminalPanel />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
