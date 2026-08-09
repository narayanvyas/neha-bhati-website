export const palette = {
  teal: "#0b6e64",
  indigo: "#4145a8",
  terracotta: "#c1502e",
  plum: "#8e3b70",
  forest: "#3f7a4e",
  cobalt: "#2563a8",
} as const;

export type PaletteColor = keyof typeof palette;

export function hexToRgba(hex: string, alpha: number) {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
