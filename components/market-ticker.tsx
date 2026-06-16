import { PiArrowDown, PiArrowUp } from "react-icons/pi"

type Tick = { pair: string; price: string; change: string; up: boolean }

const ticks: Tick[] = [
  { pair: "XAU/USD", price: "2,341.80", change: "+0.84%", up: true },
  { pair: "BTC/USD", price: "67,420.00", change: "+1.20%", up: true },
  { pair: "XAG/USD", price: "29.14", change: "-0.32%", up: false },
  { pair: "EUR/USD", price: "1.0842", change: "+0.15%", up: true },
  { pair: "GBP/USD", price: "1.2714", change: "-0.08%", up: false },
  { pair: "USD/JPY", price: "157.32", change: "+0.22%", up: true },
  { pair: "NAS100", price: "19,840", change: "+0.66%", up: true },
  { pair: "ETH/USD", price: "3,512.40", change: "+0.94%", up: true },
]

function Row() {
  return (
    <div className="flex shrink-0">
      {ticks.map((t, i) => (
        <div
          key={`${t.pair}-${i}`}
          className="flex items-center gap-2.5 border-r border-border px-6 py-3 font-mono text-xs"
        >
          <span className="text-muted-foreground">{t.pair}</span>
          <span className="font-medium text-foreground">{t.price}</span>
          <span
            className={`flex items-center gap-0.5 font-medium ${
              t.up ? "text-up" : "text-down"
            }`}
          >
            {t.up ? (
              <PiArrowUp className="h-3 w-3" />
            ) : (
              <PiArrowDown className="h-3 w-3" />
            )}
            {t.change}
          </span>
        </div>
      ))}
    </div>
  )
}

export function MarketTicker() {
  return (
    <div className="relative overflow-hidden border-y border-border bg-surface">
      <div className="flex w-max animate-ticker">
        <Row />
        <Row />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent" />
    </div>
  )
}
