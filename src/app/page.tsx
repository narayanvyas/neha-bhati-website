import Link from "next/link";
import Image from "next/image";
import { Monogram } from "@/components/monogram";
import { SectionHeading } from "@/components/section-heading";
import { PublicationItem } from "@/components/publication-item";
import { Reveal } from "@/components/reveal";
import { AnimatedStat } from "@/components/animated-stat";
import { profile, researchAreas, scholarMetrics, books } from "@/lib/data/profile";
import { publications, totalPublications } from "@/lib/data/publications";
import { palette, hexToRgba, type PaletteColor } from "@/lib/palette";

const featured = publications.slice(0, 3);
const publishedBook = books.find((b) => b.status === "published");

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background: [
            `radial-gradient(ellipse 55% 45% at 85% -5%, ${hexToRgba(palette.teal, 0.16)} 0%, transparent 60%)`,
            `radial-gradient(ellipse 45% 40% at 15% 15%, ${hexToRgba(palette.terracotta, 0.12)} 0%, transparent 60%)`,
            `radial-gradient(ellipse 40% 45% at 60% 90%, ${hexToRgba(palette.indigo, 0.1)} 0%, transparent 60%)`,
          ].join(", "),
        }}
      >
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
          <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="rule-gold mb-3" />
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                {profile.affiliation}
              </p>
              <h1 className="mt-3 font-serif-display text-5xl leading-[1.08] text-foreground sm:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-4 text-lg text-muted">{profile.headline}</p>
              <p className="mt-6 max-w-xl leading-relaxed text-muted">{profile.bio}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/publications"
                  className="shadow-card rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  View Publications
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <Monogram initials={profile.initials} className="mx-auto w-48 sm:w-56 md:w-full" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-5xl grid-cols-2 px-6 py-10 sm:grid-cols-4">
          {[
            { label: "Publications", value: totalPublications, suffix: "+", color: palette.teal },
            { label: "Citations", value: scholarMetrics.citations, suffix: "+", hint: scholarMetrics.source, color: palette.terracotta },
            { label: "h-index", value: scholarMetrics.hIndex, hint: scholarMetrics.source, color: palette.indigo },
            { label: "Books", value: books.length, color: palette.plum },
          ].map((s, i) => (
            <div key={s.label} className={`px-4 py-2 text-center sm:text-left ${i > 0 ? "border-l border-border/70" : ""}`}>
              <AnimatedStat value={s.value} suffix={s.suffix} label={s.label} hint={s.hint} color={s.color} />
            </div>
          ))}
        </div>
      </section>

      {/* Research areas */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Focus"
            title="Research Areas"
            description="Interdisciplinary work spanning intelligent systems and their real-world applications."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area, i) => {
            const color = palette[area.color as PaletteColor];
            return (
              <Reveal key={area.title} delay={i * 60}>
                <div
                  className="shadow-card hover:shadow-card-hover group h-full overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1"
                  style={{ borderTopColor: color, borderTopWidth: 3 }}
                >
                  <div className="p-6">
                    <div
                      className="mb-4 flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold"
                      style={{ background: hexToRgba(color, 0.14), color }}
                    >
                      {area.title.charAt(0)}
                    </div>
                    <h3 className="font-serif-display text-lg text-foreground">{area.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{area.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Featured publications */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading eyebrow="Selected Work" title="Featured Publications" />
              <Link href="/publications" className="text-sm text-accent hover:underline">
                View all {totalPublications} publications &rarr;
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="shadow-card mt-8 rounded-2xl border border-border bg-card px-6">
              <ul>
                {featured.map((pub) => (
                  <PublicationItem key={pub.doi} pub={pub} />
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Books teaser */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Authorship" title="Books" />
            <Link href="/books" className="text-sm text-accent hover:underline">
              View all books &rarr;
            </Link>
          </div>
        </Reveal>
        {publishedBook && (
          <Reveal delay={100}>
            <div
              className="shadow-card hover:shadow-card-hover mt-8 flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 sm:flex-row"
              style={{ borderTopColor: palette.forest, borderTopWidth: 3 }}
            >
              {publishedBook.cover && (
                <a
                  href={publishedBook.link}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 self-start overflow-hidden rounded-lg shadow-card transition-transform hover:scale-[1.03]"
                >
                  <Image
                    src={publishedBook.cover}
                    alt={`Cover of ${publishedBook.title}`}
                    width={140}
                    height={210}
                    className="h-auto w-[140px]"
                  />
                </a>
              )}
              <div>
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
            </div>
          </Reveal>
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
