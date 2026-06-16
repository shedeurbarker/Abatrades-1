import { PiLink, PiCheckCircle, PiPaperPlaneRight, PiChartBar } from "react-icons/pi"
import { SectionHeading } from "@/components/section-heading"
import { ScrollReveal } from "@/components/scroll-reveal"

const steps = [
  {
    num: "01",
    icon: PiLink,
    title: "Pick Your Plan",
    desc: "Choose Exness Free VIP, Vantage Free VIP, or the $100/mo Paid VIP.",
  },
  {
    num: "02",
    icon: PiCheckCircle,
    title: "Get Verified",
    desc: "Share your broker account confirmation to unlock instant VIP access.",
  },
  {
    num: "03",
    icon: PiPaperPlaneRight,
    title: "Join the Group",
    desc: "You're added to the private VIP channel for daily signals and analysis.",
  },
  {
    num: "04",
    icon: PiChartBar,
    title: "Start Trading",
    desc: "Follow the analysis, execute signals, and grow your account every day.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          label="Getting Started"
          title="Up and running in minutes."
          align="center"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <ScrollReveal key={s.num} variant="up" delay={i * 100}>
              <div
                className="relative rounded-xl border border-border bg-surface p-6 transition-colors hover:border-gold/30"
              >
                <span className="absolute right-5 top-5 font-mono text-xs font-semibold text-muted-foreground/50">
                  {s.num}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
