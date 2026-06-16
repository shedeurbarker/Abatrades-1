"use client"

import { BookIllus, ChartIllus, SignalIllus, TrophyIllus } from "@/components/journey-illustrations"
import { useReveal } from "@/components/scroll-reveal"
import { SectionHeading } from "@/components/section-heading"

const steps = [
  {
    illus: BookIllus,
    title: "Learn the Fundamentals",
    desc: "Start with price action, support & resistance, and risk management. No fluff — just what moves the needle.",
    color: "from-gold/10 to-amber-900/10",
    border: "border-gold/30",
  },
  {
    illus: ChartIllus,
    title: "Follow Daily Analysis",
    desc: "Every morning get structured breakdowns of Gold, BTC, Silver and FX pairs with clear bias and key levels.",
    color: "from-gold/10 to-emerald-900/10",
    border: "border-gold/30",
  },
  {
    illus: SignalIllus,
    title: "Execute Real Signals",
    desc: "Trade alongside high-conviction signals in real-time. Build consistency through a repeatable process.",
    color: "from-gold/10 to-blue-900/10",
    border: "border-gold/30",
  },
  {
    illus: TrophyIllus,
    title: "Master the Markets",
    desc: "Graduate from following signals to reading the market yourself. That's the endgame — true independence.",
    color: "from-gold/10 to-purple-900/10",
    border: "border-gold/30",
  },
]

export function StackingCards() {
  const headingRef = useReveal()

  return (
    <section className="relative border-t border-border bg-background">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.10]"
        style={{ backgroundImage: "url('/images/bg-climbing.jpg')" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 50%, var(--gold) 0%, transparent 50%), radial-gradient(circle at 75% 50%, var(--gold) 0%, transparent 50%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div ref={headingRef} className="reveal">
          <SectionHeading
            label="Your Journey"
            title="Four stages to trading mastery."
            sub="Every trader's path looks different, but the milestones are the same. Here's how we'll get you there."
            align="center"
          />
        </div>

        <div className="relative mt-16 space-y-6 md:mt-20">
          <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/20 to-transparent max-md:hidden" />

          {steps.map((step, i) => {
            const top = 100 + i * 32

            return (
              <StepCard
                key={step.title}
                step={step}
                index={i}
                top={top}
                total={steps.length}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function StepCard({
  step,
  index,
  top,
  total,
}: {
  step: (typeof steps)[0]
  index: number
  top: number
  total: number
}) {
  const ref = useReveal<HTMLDivElement>()
  const isLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className="reveal relative flex items-start gap-6 md:gap-12"
      data-variant={isLeft ? "left" : "right"}
      style={{ "--reveal-delay": `${index * 100}ms` } as React.CSSProperties}
    >
      <div
        className={`hidden flex-1 md:block ${isLeft ? "text-right" : "order-last text-left"}`}
      >
        {isLeft && <CardContent step={step} />}
      </div>

      <div className="relative z-10 flex shrink-0 items-center justify-center max-md:hidden">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-background text-sm font-bold text-gold shadow-lg shadow-gold/5">
          {index + 1}
        </span>
      </div>

      <div className={`flex-1 md:hidden`}>
        <CardContent step={step} />
      </div>

      <div
        className={`hidden flex-1 md:block ${isLeft ? "order-first" : ""}`}
      >
        {!isLeft && <CardContent step={step} />}
      </div>
    </div>
  )
}

function CardContent({ step }: { step: (typeof steps)[0] }) {
  const Illus = step.illus
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border ${step.border} bg-gradient-to-br ${step.color} p-5 transition-all duration-500 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/5`}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/5 blur-2xl transition-all duration-500 group-hover:scale-150" />

      <div className="pointer-events-none absolute -bottom-6 -right-6 text-gold opacity-[0.06] transition-all duration-700 group-hover:scale-110 group-hover:opacity-[0.1]">
        <Illus className="h-40 w-40 sm:h-48 sm:w-48" />
      </div>

      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold ring-1 ring-gold/20">
          <Illus className="h-4 w-4" />
        </span>
        <div>
          <h3 className="text-base font-bold text-foreground">{step.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {step.desc}
          </p>
        </div>
      </div>
    </div>
  )
}
