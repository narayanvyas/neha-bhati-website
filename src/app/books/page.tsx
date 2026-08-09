import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { books } from "@/lib/data/profile";

export const metadata: Metadata = {
  title: "Books — Neha Bhati",
  description: "Published and forthcoming books authored and co-authored by Neha Bhati.",
};

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Authorship"
        title="Books"
        description="One published volume, with two further titles currently under production."
      />

      <div className="mt-10 space-y-6">
        {books.map((book, i) => (
          <div
            key={i}
            className={`rounded-2xl border p-8 transition-all ${
              book.status === "published"
                ? "shadow-card hover:shadow-card-hover border-border bg-card hover:-translate-y-1"
                : "border-dashed border-border/80"
            }`}
          >
            <p
              className={`text-xs font-medium uppercase tracking-[0.2em] ${
                book.status === "published" ? "text-gold" : "text-muted"
              }`}
            >
              {book.status === "published" ? `Published · ${book.year}` : "Coming Soon"}
            </p>
            <h3 className="mt-2 font-serif-display text-2xl text-foreground">{book.title}</h3>
            <p className="mt-2 text-sm text-muted">{book.role}</p>
            {book.publisher && <p className="mt-1 text-sm text-muted">{book.publisher}</p>}
            {book.description && (
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{book.description}</p>
            )}
            {book.link && (
              <a
                href={book.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-accent hover:underline"
              >
                View on Routledge &rarr;
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
