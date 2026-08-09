import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { PublicationsList } from "@/components/publications-list";
import { publications, totalPublications, totalCitations } from "@/lib/data/publications";

export const metadata: Metadata = {
  title: "Publications — Neha Bhati",
  description: "Peer-reviewed articles, book chapters, and conference papers by Neha Bhati.",
};

export default function PublicationsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Scopus-indexed"
        title="Publications"
        description={`${totalPublications} publications with ${totalCitations}+ citations on Scopus, spanning artificial intelligence, remote sensing, IoT, and healthcare analytics.`}
      />
      <div className="mt-10">
        <PublicationsList publications={publications} />
      </div>
    </div>
  );
}
