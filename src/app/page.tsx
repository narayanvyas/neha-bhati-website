import Link from "next/link";
import { Monogram } from "@/components/monogram";
import { SectionHeading } from "@/components/section-heading";
import { PublicationItem } from "@/components/publication-item";
import { profile, researchAreas, scholarMetrics, books } from "@/lib/data/profile";
import { publications, totalPublications } from "@/lib/data/publications";

const featured = [...publications].sort((a, b) => b.citedBy - a.citedBy).slice(0, 3);
const publishedBook = books.find((b) => b.status === "published");

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
              {profile.affiliation}
            </p>
            <h1 className="mt-3 font-serif-display text-4xl leading-[1.1] text-foreground sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-lg text-muted">{profile.headline}</p>
            <p className="mt-6 max-w-xl leading-relaxed text-muted">{profile.bio}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/publications"
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                View Publications
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <Monogram initials={profile.initials} className="mx-auto w-48 sm:w-56 md:w-full" />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4">
          {[
            { label: "Publications", value: `${totalPublications}+` },
            { label: "Citations", value: `${scholarMetrics.citations}+`, hint: scholarMetrics.source },
            { label: "h-index", value: `${scholarMetrics.hIndex}`, hint: scholarMetrics.source },
            { label: "Books", value: `${books.length}` },
          ].map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="font-serif-display text-3xl text-foreground">{s.value}</p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
              {s.hint && <p className="text-xs text-muted/70">{s.hint}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Research areas */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading
          eyebrow="Focus"
          title="Research Areas"
          description="Interdisciplinary work spanning intelligent systems and their real-world applications."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
            >
              <h3 className="font-serif-display text-lg text-foreground">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured publications */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Selected Work" title="Featured Publications" />
            <Link href="/publications" className="text-sm text-accent hover:underline">
              View all {totalPublications} publications &rarr;
            </Link>
          </div>
          <ul className="mt-8">
            {featured.map((pub) => (
              <PublicationItem key={pub.doi} pub={pub} />
            ))}
          </ul>
        </div>
      </section>

      {/* Books teaser */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Authorship" title="Books" />
          <Link href="/books" className="text-sm text-accent hover:underline">
            View all books &rarr;
          </Link>
        </div>
        {publishedBook && (
          <div className="mt-8 rounded-2xl border border-border bg-surface p-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Published &middot; {publishedBook.year}
            </p>
            <h3 className="mt-2 font-serif-display text-2xl text-foreground">{publishedBook.title}</h3>
            <p className="mt-2 text-sm text-muted">{publishedBook.role}</p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{publishedBook.description}</p>
            <a
              href={publishedBook.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm text-accent hover:underline"
            >
              View on Routledge &rarr;
            </a>
          </div>
        )}
        <p className="mt-6 text-sm text-muted">
          Two additional books are currently under production.{" "}
          <Link href="/books" className="text-accent hover:underline">
            Learn more
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
