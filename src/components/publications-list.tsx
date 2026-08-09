"use client";

import { useMemo, useState } from "react";
import { PublicationItem } from "@/components/publication-item";
import type { DocumentType, Publication } from "@/lib/data/publications";

const filters: { label: string; value: DocumentType | "All" }[] = [
  { label: "All", value: "All" },
  { label: "Articles", value: "Article" },
  { label: "Book Chapters", value: "Book chapter" },
  { label: "Conference Papers", value: "Conference paper" },
  { label: "Books", value: "Book" },
];

export function PublicationsList({ publications }: { publications: Publication[] }) {
  const [active, setActive] = useState<DocumentType | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? publications : publications.filter((p) => p.documentType === active)),
    [active, publications]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setActive(f.value)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              active === f.value
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border text-muted hover:border-accent/50 hover:text-accent"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="shadow-card mt-8 rounded-2xl border border-border bg-card px-6">
        <ul>
          {filtered.map((pub) => (
            <PublicationItem key={pub.doi} pub={pub} />
          ))}
        </ul>
        {filtered.length === 0 && (
          <p className="py-8 text-muted">No publications in this category yet.</p>
        )}
      </div>
    </div>
  );
}
