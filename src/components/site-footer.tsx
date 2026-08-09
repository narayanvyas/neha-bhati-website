import { profile } from "@/lib/data/profile";

const socials = [
  { label: "Google Scholar", href: profile.links.googleScholar },
  { label: "Scopus", href: profile.links.scopus },
  { label: "ResearchGate", href: profile.links.researchGate },
  { label: "LinkedIn", href: profile.links.linkedin },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif-display text-base text-foreground">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.affiliation}</p>
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="mt-1 inline-block text-sm text-muted transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
          )}
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-border px-6 py-4 text-center text-xs text-muted">
        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
