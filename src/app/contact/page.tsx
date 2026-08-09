import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/data/profile";

export const metadata: Metadata = {
  title: "Contact — Neha Bhati",
  description: "Get in touch with Neha Bhati for research collaboration and inquiries.",
};

const links = [
  { label: "Google Scholar", href: profile.links.googleScholar, note: "Full publication & citation record" },
  { label: "Scopus Author Profile", href: profile.links.scopus, note: "Verified author ID " + profile.scopusAuthorId },
  { label: "ResearchGate", href: profile.links.researchGate, note: "Research updates & collaboration" },
  { label: "LinkedIn", href: profile.links.linkedin, note: "Professional profile" },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Let's connect"
          title="Contact"
          description="For research collaboration, speaking invitations, or questions about published work, reach out through any of the channels below."
        />
      </Reveal>

      {profile.email && (
        <Reveal delay={80}>
          <a
            href={`mailto:${profile.email}`}
            className="shadow-card hover:shadow-card-hover group mt-10 flex flex-col rounded-2xl border border-accent/30 bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Email</span>
            <span className="mt-1 font-serif-display text-xl text-foreground group-hover:text-accent">
              {profile.email}
            </span>
          </a>
        </Reveal>
      )}

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {links.map((link, i) => (
          <Reveal key={link.label} delay={140 + i * 60}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="shadow-card hover:shadow-card-hover group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/40"
            >
              <span className="font-serif-display text-lg text-foreground group-hover:text-accent">
                {link.label}
              </span>
              <span className="mt-1 text-sm text-muted">{link.note}</span>
            </a>
          </Reveal>
        ))}
      </div>

      <p className="mt-10 text-sm text-muted">
        {profile.affiliation} &middot; {profile.location}
      </p>
    </div>
  );
}
