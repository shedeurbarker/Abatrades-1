import { cn } from "@/lib/utils"

export function SectionHeading({
  label,
  title,
  sub,
  align = "left",
  className,
}: {
  label: string
  title: string
  sub?: string
  align?: "left" | "center"
  className?: string
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold",
        )}
      >
        <span className="h-px w-5 bg-gold" />
        {label}
      </div>
      <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {sub && (
        <p
          className={cn(
            "mt-4 text-pretty leading-relaxed text-muted-foreground",
            align === "center" && "mx-auto",
          )}
        >
          {sub}
        </p>
      )}
    </div>
  )
}
