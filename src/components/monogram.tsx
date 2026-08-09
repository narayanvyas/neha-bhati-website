"use client";

import { useRef, useState } from "react";
import { palette, hexToRgba } from "@/lib/palette";

const outerRingGradient = `conic-gradient(from 0deg, ${palette.teal}, ${palette.indigo}, ${palette.terracotta}, ${palette.plum}, ${palette.teal})`;
const innerRingGradient = `conic-gradient(from 90deg, ${palette.cobalt}, ${palette.forest}, ${palette.terracotta}, ${palette.cobalt})`;
const ringMask =
  "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))";

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
      <div
        className="animate-pulse-glow absolute inset-4 rounded-full"
        style={{ background: hexToRgba(palette.teal, 0.08) }}
      />

      {/* Outer multi-hue ring, slow spin */}
      <div
        className="animate-spin-slow absolute inset-0 rounded-full opacity-70"
        style={{
          background: outerRingGradient,
          WebkitMask: ringMask,
          mask: ringMask,
        }}
      />

      {/* Inner multi-hue ring, counter-spin, carries the orbiting dot */}
      <div className="animate-spin-slow-reverse absolute inset-3">
        <div
          className="absolute inset-0 rounded-full opacity-60"
          style={{
            background: innerRingGradient,
            WebkitMask: ringMask,
            mask: ringMask,
          }}
        />
        <span
          className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/4 rounded-full shadow-card"
          style={{ background: palette.terracotta }}
        />
      </div>

      {/* Tilting glass sphere */}
      <div
        className="shadow-card absolute inset-0 flex items-center justify-center rounded-full border border-border transition-transform duration-150 ease-out group-hover:shadow-card-hover"
        style={{
          background: `radial-gradient(circle at 32% 28%, var(--card) 0%, ${hexToRgba(palette.teal, 0.12)} 55%, ${hexToRgba(palette.indigo, 0.14)} 100%)`,
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
