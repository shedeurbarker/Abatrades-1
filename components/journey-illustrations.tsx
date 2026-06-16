export function BookIllus({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="6" y="10" width="36" height="30" rx="3" />
      <line x1="24" y1="10" x2="24" y2="40" />
      <line x1="12" y1="18" x2="20" y2="18" opacity={0.7} />
      <line x1="12" y1="23" x2="20" y2="23" opacity={0.7} />
      <line x1="28" y1="18" x2="36" y2="18" opacity={0.7} />
      <line x1="28" y1="23" x2="36" y2="23" opacity={0.7} />
      <line x1="12" y1="28" x2="20" y2="28" opacity={0.7} />
      <line x1="28" y1="28" x2="36" y2="28" opacity={0.7} />
      <circle cx="24" cy="34" r="4" fill="currentColor" opacity={0.15} />
    </svg>
  )
}

export function ChartIllus({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="6" y="8" width="36" height="32" rx="3" opacity={0.2} />
      <line x1="10" y1="36" x2="38" y2="36" opacity={0.4} />
      <line x1="10" y1="12" x2="10" y2="36" opacity={0.4} />
      <rect x="14" y="24" width="4" height="10" rx="0.5" opacity={0.6} />
      <line x1="16" y1="18" x2="16" y2="34" opacity={0.8} />
      <rect x="22" y="16" width="4" height="8" rx="0.5" opacity={0.6} />
      <line x1="24" y1="14" x2="24" y2="24" opacity={0.8} />
      <rect x="30" y="22" width="4" height="8" rx="0.5" opacity={0.6} />
      <line x1="32" y1="18" x2="32" y2="30" opacity={0.8} />
      <path d="M10 30 L16 24 L22 18 L32 22 L38 14" strokeWidth={2} opacity={0.5} />
    </svg>
  )
}

export function SignalIllus({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="24" cy="24" r="4" fill="currentColor" />
      <path d="M24 14 C32 14 38 20 38 28" opacity={0.3} />
      <path d="M24 18 C29 18 33 22 33 27" opacity={0.5} />
      <path d="M24 20 C27 20 29 22 29 25" opacity={0.7} />
      <path d="M12 8 L8 12 M8 12 L14 12 M8 12 L8 6" opacity={0.4} />
      <line x1="16" y1="38" x2="32" y2="38" opacity={0.2} />
      <line x1="14" y1="42" x2="34" y2="42" opacity={0.15} />
    </svg>
  )
}

export function TrophyIllus({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 12 L16 22 C16 27 20 30 24 30 C28 30 32 27 32 22 L32 12 Z" />
      <path d="M16 18 C11 18 11 23 16 23" />
      <path d="M32 18 C37 18 37 23 32 23" />
      <path d="M20 34 L22 38 L24 34 L26 38 L28 34" fill="currentColor" opacity={0.4} />
      <line x1="18" y1="34" x2="30" y2="34" />
      <path d="M24 30 L24 34" />
      <path d="M20 38 L16 42 L32 42 L28 38" opacity={0.15} />
    </svg>
  )
}
