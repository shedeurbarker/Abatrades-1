import { PiStar, PiTrophy } from "react-icons/pi"
import { SectionHeading } from "@/components/section-heading"

const testimonials = [
  {
    text: "The morning analysis alone changed how I see the market. I used to be confused by every candle. Now I know exactly what I'm looking for before I open my charts.",
    name: "Kofi A.",
    title: "Exness VIP · Ghana",
    achievement: "First profitable month",
    initials: "KA",
  },
  {
    text: "I've been in other signal groups but the quality here is different. Gold and BTC analysis every morning, clear entries, and it actually works.",
    name: "Amina B.",
    title: "Vantage VIP · Nigeria",
    achievement: "Consistent green months",
    initials: "AB",
  },
  {
    text: "The mentorship is exactly what I needed. Real education from beginner all the way through. Not just signals — actual knowledge. Worth every dollar.",
    name: "Samuel K.",
    title: "Mentorship Student",
    achievement: "Trading independently",
    initials: "SK",
  },
]

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="flex w-[360px] shrink-0 flex-col rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-gold/25">
      <div className="flex gap-0.5 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <PiStar key={i} className="h-4 w-4 fill-gold" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
        &ldquo;{t.text}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-mono text-xs font-bold text-gold">
          {t.initials}
        </span>
        <div>
          <div className="text-sm font-semibold text-foreground">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.title}</div>
        </div>
      </figcaption>
      <div className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-up/10 px-2.5 py-1 text-[11px] font-medium text-up">
        <PiTrophy className="h-3.5 w-3.5" />
        {t.achievement}
      </div>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section className="relative border-t border-border bg-surface/30">
      <div className="pointer-events-none absolute inset-0 bg-chart opacity-[0.08]" />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          label="Community Results"
          title="Real traders. Real growth."
          align="center"
        />

        <div
          className="relative mt-12 overflow-hidden before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-20 before:bg-gradient-to-r before:from-surface/30 before:to-transparent after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-20 after:bg-gradient-to-l after:from-surface/30 after:to-transparent"
        >
          <div className="flex animate-testimonial-scroll gap-6 px-4">
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
