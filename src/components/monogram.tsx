export function Monogram({ initials, className = "" }: { initials: string; className?: string }) {
  return (
    <div
      className={`relative flex aspect-square items-center justify-center rounded-full border border-border bg-surface ${className}`}
    >
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full text-accent/15"
        aria-hidden
      >
        <circle cx="100" cy="100" r="99" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      <span className="font-serif-display text-6xl text-accent">{initials}</span>
    </div>
  );
}
