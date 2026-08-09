"use client";

import { useRef, useState } from "react";

export function Monogram({ initials, className = "" }: { initials: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -12, y: px * 12 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative aspect-square [perspective:800px] ${className}`}
    >
      {/* Ambient glow */}
      <div className="animate-pulse-glow absolute inset-4 rounded-full" />

      {/* Outer dashed ring, slow spin */}
      <svg
        viewBox="0 0 200 200"
        className="animate-spin-slow absolute inset-0 h-full w-full text-accent/25"
        aria-hidden
      >
        <circle
          cx="100"
          cy="100"
          r="97"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 6"
        />
      </svg>

      {/* Inner ring, slow counter-spin, carries the orbiting dot */}
      <svg
        viewBox="0 0 200 200"
        className="animate-spin-slow-reverse absolute inset-0 h-full w-full text-accent/30"
        aria-hidden
      >
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="20" r="3.5" fill="var(--gold)" />
      </svg>

      {/* Tilting glass sphere */}
      <div
        className="shadow-card absolute inset-0 flex items-center justify-center rounded-full border border-border transition-transform duration-150 ease-out group-hover:shadow-card-hover"
        style={{
          background:
            "radial-gradient(circle at 32% 28%, var(--card) 0%, var(--accent-soft) 70%)",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <span
          className="font-serif-display text-6xl text-accent transition-transform duration-150 ease-out"
          style={{ transform: `translate(${tilt.y * 0.6}px, ${tilt.x * 0.6}px)` }}
        >
          {initials}
        </span>
      </div>
    </div>
  );
}
