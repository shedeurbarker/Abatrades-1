import {
  PiCalendarCheck,
  PiBookOpen,
  PiTarget,
  PiTrophy,
  PiGraduationCap,
  PiHandshake,
  PiTrendUp,
  PiChatCircleDots,
  PiArrowRight,
} from "react-icons/pi"
import { SectionHeading } from "@/components/section-heading"
import { ScrollReveal } from "@/components/scroll-reveal"

const timeline = [
  {
    icon: PiBookOpen,
    title: "3 Months — Live Online Training",
    desc: "Structured classes from fundamentals to advanced.",
  },
  {
    icon: PiTarget,
    title: "9 Months — Active Mentorship",
    desc: "Guided support as you trade live.",
  },
  {
    icon: PiTrophy,
    title: "All Strategies Included",
    desc: "Everything — nothing held back.",
  },
]

const features = [
  {
    icon: PiGraduationCap,
    title: "3 Months Live Online Classes",
    desc: "Interactive sessions — ask questions, get real answers.",
  },
  {
    icon: PiHandshake,
    title: "9 Months Active Mentorship",
    desc: "Ongoing guidance as you trade live after training.",
  },
  {
    icon: PiTrendUp,
    title: "Beginner to Advanced Structure",
    desc: "Every concept in the right order. No gaps. Built for mastery.",
  },
  {
    icon: PiChatCircleDots,
    title: "Private Mentorship Community",
    desc: "A dedicated group of students growing together.",
  },
]

export function Mentorship() {
  return (
    <section id="mentorship" className="relative border-t border-border bg-surface/30">
      <div
        className="pointer-events-none absolute inset-0 bg-globe opacity-[0.04]"
      />
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          label="12-Month Mentorship"
          title="Beginner to advanced. Properly."
          sub="Not just signals — a full year of education and support designed to permanently change how you trade. 3 months of live training plus 9 months of active mentorship."
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-12">
          {/* pricing card */}
          <ScrollReveal variant="left">
            <div className="relative overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-b from-gold/[0.08] to-surface p-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
              <PiCalendarCheck className="h-4 w-4" />
              Starts July 15th
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Next cohort · Limited spots
            </p>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-mono text-5xl font-bold tracking-tight text-gold">
                $500
              </span>
              <span className="text-sm text-muted-foreground">one-time</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Full 12-month program
            </p>

            <div className="mt-7 space-y-0">
              {timeline.map((t, i) => {
                const Icon = t.icon
                return (
                  <div key={t.title} className="relative flex gap-4 pb-6 last:pb-0">
                    {i < timeline.length - 1 && (
                      <span className="absolute left-[15px] top-9 h-[calc(100%-1rem)] w-px bg-border" />
                    )}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        {t.title}
                      </div>
                      <div className="mt-0.5 text-xs text-muted-foreground">
                        {t.desc}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <a
              href="#faq"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-light"
            >
              Secure My Spot — $500
              <PiArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              July 15th cohort · Limited seats
            </p>
          </div>
          </ScrollReveal>

          {/* feature list */}
          <ScrollReveal variant="right"><div className="grid gap-4 sm:grid-cols-2 lg:content-start">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div
                  key={f.title}
                  className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-gold/30"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {f.desc}
                  </p>
                </div>
              )
            })}
          </div></ScrollReveal>
        </div>
      </div>
    </section>
  )
}
