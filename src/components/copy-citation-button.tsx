"use client";

import { useState } from "react";
import type { Publication } from "@/lib/data/publications";

function formatCitation(pub: Publication) {
  const authors = pub.authors.split(";").map((a) => a.trim()).join(", ");
  const pages = pub.pageStart && pub.pageEnd ? `, pp. ${pub.pageStart}-${pub.pageEnd}` : "";
  return `${authors} (${pub.year}). ${pub.title}. ${pub.sourceTitle}${pages}. https://doi.org/${pub.doi}`;
}

export function CopyCitationButton({ pub }: { pub: Publication }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(formatCitation(pub));
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable; no-op
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {copied ? (
        <>
          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" aria-hidden>
            <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" aria-hidden>
            <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M3 10.5V3.5A1 1 0 0 1 4 2.5h7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          Cite
        </>
      )}
    </button>
  );
}
