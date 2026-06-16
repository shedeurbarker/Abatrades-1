import {
  PiCurrencyBtc,
  PiCurrencyCircleDollar,
  PiCoins,
  PiCurrencyEur,
  PiCurrencyGbp,
  PiChartLineUp,
} from "react-icons/pi"
import { SectionHeading } from "@/components/section-heading"
import { ScrollReveal } from "@/components/scroll-reveal"

const pairs = [
  { icon: PiCoins, name: "XAU/USD", full: "Gold", accent: true },
  { icon: PiCurrencyBtc, name: "BTC/USD", full: "Bitcoin" },
  { icon: PiCurrencyCircleDollar, name: "XAG/USD", full: "Silver" },
  { icon: PiCurrencyEur, name: "EUR/USD", full: "Euro / Dollar" },
  { icon: PiCurrencyGbp, name: "GBP/USD", full: "Pound / Dollar" },
  { icon: PiChartLineUp, name: "More", full: "Rotational pairs" },
]

export function Markets() {
  return (
    <section id="signals" className="relative border-t border-border">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12]"
        style={{ backgroundImage: "url('/images/bg-buysell.jpg')" }}
      />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          label="Markets Covered"
          title="5+ pairs. Every single morning."
          sub="Structured analysis across these markets before the session opens — bias direction, key levels, and trade setups, every trading day."
          align="center"
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {pairs.map((p, i) => {
            const Icon = p.icon
            return (
              <ScrollReveal key={p.name} variant="up" delay={i * 80}>
              <div
                className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-surface p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors group-hover:bg-gold/15">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-mono text-sm font-bold text-foreground">
                    {p.name}
                  </div>
                  <div className="mt-0.5 text-xs text-muted-foreground">
                    {p.full}
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
