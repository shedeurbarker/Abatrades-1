import { PiArrowUp, PiCircle } from "react-icons/pi"

const signals = [
  { pair: "XAU/USD", dir: "BUY", result: "+142 pips" },
  { pair: "BTC/USD", dir: "BUY", result: "+$820" },
  { pair: "XAG/USD", dir: "SELL", result: "+38 pips" },
  { pair: "EUR/USD", dir: "BUY", result: "+55 pips" },
]

// Candlestick mock data: [x, open, close, high, low]
const candles = [
  { o: 60, c: 48, h: 40, l: 66 },
  { o: 48, c: 52, h: 42, l: 58 },
  { o: 52, c: 38, h: 34, l: 56 },
  { o: 38, c: 44, h: 32, l: 50 },
  { o: 44, c: 30, h: 24, l: 48 },
  { o: 30, c: 36, h: 26, l: 42 },
  { o: 36, c: 22, h: 16, l: 40 },
  { o: 22, c: 28, h: 18, l: 34 },
  { o: 28, c: 18, h: 12, l: 32 },
]

export function TerminalPanel() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-gold/5 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/40">
        {/* window bar */}
        <div className="flex items-center justify-between border-b border-border bg-surface-2 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-down/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-up/70" />
          </div>
          <span className="font-mono text-[11px] text-muted-foreground">
            abatrades · live terminal
          </span>
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-up">
            <PiCircle className="h-2 w-2 animate-pulse-dot fill-up text-up" />
            LIVE
          </span>
        </div>

        {/* chart header */}
        <div className="flex items-end justify-between px-4 pt-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
              XAU/USD
              <span className="rounded bg-up/15 px-1.5 py-0.5 text-[10px] font-bold text-up">
                BUY
              </span>
            </div>
            <div className="mt-1 font-mono text-2xl font-bold text-foreground">
              2,341.80
            </div>
          </div>
          <div className="flex items-center gap-1 font-mono text-sm font-medium text-up">
            <PiArrowUp className="h-4 w-4" />
            +0.84%
          </div>
        </div>

        {/* candlestick chart */}
        <div className="px-4 pb-3 pt-4">
          <svg
            viewBox="0 0 300 110"
            className="h-32 w-full"
            preserveAspectRatio="none"
            role="img"
            aria-label="XAU/USD price chart trending upward"
          >
            {[20, 45, 70, 95].map((y) => (
              <line
                key={y}
                x1="0"
                x2="300"
                y1={y}
                y2={y}
                stroke="currentColor"
                className="text-border"
                strokeWidth="1"
              />
            ))}
            {candles.map((c, i) => {
              const x = 24 + i * 31
              const bull = c.c < c.o
              const colorClass = bull ? "text-up" : "text-down"
              const top = Math.min(c.o, c.c)
              const height = Math.abs(c.o - c.c)
              return (
                <g key={i} className={colorClass}>
                  <line
                    x1={x}
                    x2={x}
                    y1={c.h}
                    y2={c.l}
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <rect
                    x={x - 6}
                    y={top}
                    width="12"
                    height={Math.max(height, 2)}
                    fill="currentColor"
                    rx="1"
                  />
                </g>
              )
            })}
          </svg>
        </div>

        {/* signals list */}
        <div className="border-t border-border px-4 py-3">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Today&apos;s Signals
            </span>
            <span className="text-[10px] text-muted-foreground">
              auto-updated
            </span>
          </div>
          {signals.map((s) => (
            <div
              key={s.pair}
              className="flex items-center justify-between border-b border-border py-2 last:border-0"
            >
              <span className="font-mono text-sm font-medium text-foreground">
                {s.pair}
              </span>
              <span
                className={`rounded px-2 py-0.5 text-[10px] font-bold tracking-wide ${
                  s.dir === "BUY"
                    ? "bg-up/15 text-up"
                    : "bg-down/15 text-down"
                }`}
              >
                {s.dir}
              </span>
              <span className="font-mono text-xs font-medium text-up">
                {s.result}
              </span>
            </div>
          ))}
          <p className="mt-2 text-[10px] text-muted-foreground">
            *Illustrative. Past results are not indicative of future
            performance.
          </p>
        </div>
      </div>
    </div>
  )
}
