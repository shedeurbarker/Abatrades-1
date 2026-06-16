"use client"

import { useEffect, useState } from "react"
import { PiList, PiX, PiTrendUp } from "react-icons/pi"
import { cn } from "@/lib/utils"

const links = [
  { label: "Mentor", href: "#mentor" },
  { label: "VIP Plans", href: "#vip" },
  { label: "Markets", href: "#signals" },
  { label: "Mentorship", href: "#mentorship" },
  { label: "How It Works", href: "#how" },
  { label: "FAQ", href: "#faq" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-out",
        scrolled ? "px-3 pt-3 sm:px-4 sm:pt-4" : "px-0 pt-0",
      )}
    >
      <div
        className={cn(
          "mx-auto flex items-center justify-between transition-all duration-300 ease-out",
          scrolled
            ? "h-14 max-w-5xl rounded-full border border-border/80 bg-background/80 px-3 pl-4 shadow-lg shadow-black/30 backdrop-blur-xl sm:px-4 sm:pl-6"
            : "h-16 max-w-7xl rounded-none border border-transparent border-b-border/60 bg-background/40 px-4 backdrop-blur-sm sm:px-6 lg:px-8",
        )}
      >
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gold text-primary-foreground">
            <PiTrendUp className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground">
            ABA<span className="text-gold">TRADES</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#vip"
            className="rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Sign In
          </a>
          <a
            href="#vip"
            className="rounded-md bg-gold px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-light"
          >
            Join Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <PiX className="h-5 w-5" /> : <PiList className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-3 mt-2 rounded-2xl border border-border bg-background/95 px-4 py-4 shadow-lg shadow-black/30 backdrop-blur-xl sm:mx-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#vip"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-gold px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Join Now
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
