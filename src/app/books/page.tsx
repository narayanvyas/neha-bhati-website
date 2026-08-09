import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { books } from "@/lib/data/profile";
import { palette } from "@/lib/palette";

export const metadata: Metadata = {
  title: "Books — Neha Bhati",
  description: "Published and forthcoming books authored and co-authored by Neha Bhati.",
};

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Authorship"
          title="Books"
          description="One published volume, with two further titles currently under production."
        />
      </Reveal>

      <div className="mt-10 space-y-6">
        {books.map((book, i) => (
          <Reveal key={i} delay={i * 80}>
            <div
              className={`flex flex-col gap-6 rounded-2xl border p-8 transition-all sm:flex-row ${
                book.status === "published"
                  ? "shadow-card hover:shadow-card-hover border-border bg-card hover:-translate-y-1"
                  : "border-dashed border-border/80"
              }`}
              style={book.status === "published" ? { borderTopColor: palette.forest, borderTopWidth: 3 } : undefined}
            >
              {book.cover ? (
                <a
                  href={book.link}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 self-start overflow-hidden rounded-lg shadow-card transition-transform hover:scale-[1.03]"
                >
                  <Image
                    src={book.cover}
                    alt={`Cover of ${book.title}`}
                    width={140}
                    height={210}
                    className="h-auto w-[140px]"
                  />
                </a>
              ) : (
                book.status === "forthcoming" && (
                  <div className="flex h-[210px] w-[140px] shrink-0 items-center justify-center self-start rounded-lg border border-dashed border-border/80 bg-surface text-xs text-muted">
                    Cover
                    <br />
                    pending
                  </div>
                )
              )}

              <div>
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
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
