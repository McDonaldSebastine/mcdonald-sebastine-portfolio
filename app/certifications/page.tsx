import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { CertCard } from "@/components/cert-card";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/json-ld";
import { certifications, education } from "@/data/credentials";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Certifications",
  description:
    "Certifications held by McDonald Sebastine, including PMP, ALX Africa Virtual Assistant, and a leadership credential from Northwestern University.",
  path: "/certifications",
});

const crumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Certifications", path: "/certifications" },
]);

export default function CertificationsPage() {
  return (
    <>
      <JsonLd data={crumbs} />
      <PageHeader
        eyebrow="Certifications"
        title="Formal training behind the work"
        description="Credentials in virtual assistance, project management, and leadership, plus foundational academic training."
      />

      <section className="container py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} delay={i * 0.08} />
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30 py-16 sm:py-20">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.14em] text-primary">
              Education
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Academic foundation
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {education.map((ed, i) => (
              <Reveal key={ed.id} delay={i * 0.08} className="rounded-2xl border border-border p-6">
                <h3 className="font-display text-lg font-semibold">{ed.degree}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{ed.school}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">{ed.location}</Badge>
                  <Badge variant="secondary">{ed.year}</Badge>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
