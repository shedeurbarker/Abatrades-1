import Image from "next/image"
import { PiCheckCircle, PiQuotes, PiTrendUp, PiUsers, PiCalendarCheck } from "react-icons/pi"
import { ScrollReveal } from "@/components/scroll-reveal"
import { CountUp } from "@/components/count-up"

const stats = [
  { icon: PiUsers, to: 12000, suffix: "+", label: "Traders mentored" },
  { icon: PiCalendarCheck, to: 8, suffix: " yrs", label: "In the markets" },
  { icon: PiTrendUp, to: 1500, suffix: "+", label: "Signals shared" },
]

export function Founder() {
  return (
    <section id="mentor" className="relative border-t border-border bg-background py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.10]"
        style={{ backgroundImage: "url('/images/bg-rich.jpg')" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 40%, var(--gold) 0%, transparent 50%), radial-gradient(circle at 70% 60%, var(--gold) 0%, transparent 50%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side — edge-to-edge, blending with section */}
          <div className="relative -mx-4 sm:-mx-6 lg:mx-0">
            <div className="founder-image-blend relative overflow-hidden">
              <Image
                src="/images/founder.png"
                alt="Aba, founder and lead mentor at Abatrades"
                width={640}
                height={800}
                className="h-[32rem] w-full object-cover object-top sm:h-[40rem] lg:h-full lg:max-h-[42rem]"
                priority
              />
              {/* Floating credential card */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center gap-3 rounded-2xl border border-border/60 bg-background/70 px-4 py-3 shadow-xl shadow-black/30 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-primary-foreground">
                  <PiCheckCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Aba Mensah</p>
                  <p className="text-xs text-muted-foreground">Founder &amp; Lead Mentor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <ScrollReveal variant="right">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wider text-gold">
              Meet your mentor
            </span>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Learn directly from a trader who&apos;s been where you are
            </h2>

            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                I&apos;m Aba — I started trading with a small account and no roadmap, blowing through it more than once
                before everything clicked. Today I trade Gold, Bitcoin and major FX pairs full-time and guide thousands
                of traders across Africa and beyond.
              </p>
              <p>
                Abatrades is the mentorship I wish I&apos;d had: clear setups, real accountability, and signals you can
                actually follow. No hype, no gambling — just a repeatable process built around risk management.
              </p>
            </div>

            <figure className="mt-8 rounded-2xl border border-border bg-card p-6">
              <PiQuotes className="h-6 w-6 text-gold" aria-hidden="true" />
              <blockquote className="mt-3 text-pretty font-medium text-foreground">
                &ldquo;My goal isn&apos;t to give you a fish — it&apos;s to make you the kind of trader who never goes
                hungry again.&rdquo;
              </blockquote>
            </figure>

            <dl className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card p-4 text-center sm:text-left">
                  <s.icon className="mx-auto h-5 w-5 text-gold sm:mx-0" aria-hidden="true" />
                  <dt className="mt-2 text-xl font-bold text-foreground">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </dt>
                  <dd className="text-xs text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#mentorship"
                className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-light"
              >
                Join the mentorship
              </a>
              <a
                href="#vip"
                className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Start with free signals
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
