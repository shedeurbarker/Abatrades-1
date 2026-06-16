import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { MarketTicker } from "@/components/market-ticker"
import { Founder } from "@/components/founder"
import { VipPlans } from "@/components/vip-plans"
import { Markets } from "@/components/markets"
import { Mentorship } from "@/components/mentorship"
import { HowItWorks } from "@/components/how-it-works"
import { StackingCards } from "@/components/stacking-cards"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { CtaBanner } from "@/components/cta-banner"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <MarketTicker />
        <Founder />
        <VipPlans />
        <ScrollReveal><Markets /></ScrollReveal>
        <ScrollReveal><Mentorship /></ScrollReveal>
        <ScrollReveal><HowItWorks /></ScrollReveal>
        <StackingCards />
        <ScrollReveal><Testimonials /></ScrollReveal>
        <ScrollReveal><Faq /></ScrollReveal>
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  )
}
