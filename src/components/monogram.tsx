export function Monogram({ initials, className = "" }: { initials: string; className?: string }) {
  return (
    <div
      className={`shadow-card relative flex aspect-square items-center justify-center rounded-full border border-border ${className}`}
      style={{
        background: "radial-gradient(circle at 32% 28%, var(--card) 0%, var(--accent-soft) 70%)",
      }}
    >
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full text-accent/20"
        aria-hidden
      >
        <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      <span className="font-serif-display text-6xl text-accent">{initials}</span>
    </div>
  );
}
