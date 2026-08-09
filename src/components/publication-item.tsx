import { doiUrl, type Publication } from "@/lib/data/publications";

function formatAuthors(authors: string) {
  return authors
    .split(";")
    .map((a) => a.trim())
    .map((a) => (a === "Bhati N." ? `**${a}**` : a))
    .join(", ");
}

export function PublicationItem({ pub }: { pub: Publication }) {
  const authorParts = formatAuthors(pub.authors).split(/(\*\*.*?\*\*)/g);
  const pages =
    pub.pageStart && pub.pageEnd ? `pp. ${pub.pageStart}–${pub.pageEnd}` : "";
  const isOpenAccess = pub.openAccess.length > 0;

  return (
    <li className="group border-b border-border py-6 first:pt-0 last:border-b-0">
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
        <a
          href={doiUrl(pub.doi)}
          target="_blank"
          rel="noreferrer"
          className="font-serif-display text-lg leading-snug text-foreground transition-colors group-hover:text-accent"
        >
          {pub.title}
        </a>
        <span className="shrink-0 rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
          {pub.documentType}
        </span>
      </div>

      <p className="mt-2 text-sm text-muted">
        {authorParts.map((part, i) =>
          part.startsWith("**") ? (
            <span key={i} className="font-semibold text-foreground">
              {part.replace(/\*\*/g, "")}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </p>

      <p className="mt-1 text-sm italic text-muted">
        {pub.sourceTitle}
        {pub.volume && `, Vol. ${pub.volume}`}
        {pub.issue && `(${pub.issue})`}
        {pages && `, ${pages}`}
        {`, ${pub.year}`}
      </p>

      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted">
        <span>Cited by {pub.citedBy}</span>
        <span aria-hidden>·</span>
        <a href={doiUrl(pub.doi)} target="_blank" rel="noreferrer" className="text-accent hover:underline">
          DOI: {pub.doi}
        </a>
        {isOpenAccess && (
          <>
            <span aria-hidden>·</span>
            <span className="text-gold">Open Access</span>
          </>
        )}
      </div>
    </li>
  );
}
