import { PiLightning, PiArrowRight } from "react-icons/pi"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden border-y border-gold/20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.05]"
        style={{ backgroundImage: "url('/images/bg-chart.png')" }}
      />
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" />

      <ScrollReveal className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          <span className="h-px w-5 bg-gold" />
          Start Today
          <span className="h-px w-5 bg-gold" />
        </div>
        <h2 className="mx-auto mt-4 max-w-xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Your next trade should be your best one yet.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
          Join the Abatrades community — free VIP plans, daily signals, and a
          mentorship that builds real traders.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#vip"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-light"
          >
            <PiLightning className="h-4 w-4" />
            Join Free VIP Now
          </a>
          <a
            href="#mentorship"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/40 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
          >
            View Mentorship
            <PiArrowRight className="h-4 w-4" />
          </a>
        </div>
      </ScrollReveal>
    </section>
  )
}
