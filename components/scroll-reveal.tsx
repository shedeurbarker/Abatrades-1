"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible")
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

export function ScrollReveal({
  children,
  variant,
  delay,
  className,
  as: Tag = "div",
  ...props
}: {
  children: ReactNode
  variant?: "up" | "left" | "right" | "scale"
  delay?: number
  className?: string
  as?: React.ElementType
} & React.HTMLAttributes<HTMLElement>) {
  const ref = useReveal()

  return (
    <Tag
      ref={ref}
      className={cn("reveal", className)}
      data-variant={variant}
      style={{ "--reveal-delay": `${delay ?? 0}ms` } as React.CSSProperties}
      {...props}
    >
      {children}
    </Tag>
  )
}
