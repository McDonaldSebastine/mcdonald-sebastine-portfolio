import type { Metadata } from "next";
import { Download } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { SkillGroupCard } from "@/components/skill-group-card";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/json-ld";
import { experience, leadership } from "@/data/experience";
import { skillGroups } from "@/data/skills";
import { certifications, education } from "@/data/credentials";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Resume",
  description: "Download McDonald Sebastine's resume as a PDF, or browse the same experience, skills, and credentials directly on this page.",
  path: "/resume",
});

const crumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Resume", path: "/resume" },
]);

export default function ResumePage() {
  return (
    <>
      <JsonLd data={crumbs} />
      <PageHeader
        eyebrow="Resume"
        title="Everything in one document"
        description="Download the full PDF, or browse the same information broken out below."
      />

      <section className="container py-12">
        <Reveal className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-secondary/30 p-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-lg font-semibold">McDonald Sebastine — Resume.pdf</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Formatted for both recruiters and ATS systems.
            </p>
          </div>
          <Magnetic>
            <Button asChild size="lg">
              <a href="/resume/mcdonald-sebastine-resume.pdf" download>
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </Magnetic>
        </Reveal>
      </section>

      <section className="container py-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight">Experience</h2>
        <div className="mt-8">
          <ExperienceTimeline items={experience} />
        </div>
      </section>

      <section className="container py-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight">Leadership</h2>
        <div className="mt-8">
          <ExperienceTimeline items={leadership} />
        </div>
      </section>

      <section className="container py-16">
        <h2 className="font-display text-2xl font-semibold tracking-tight">Skills</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <SkillGroupCard key={group.category} group={group} delay={i * 0.06} />
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30 py-16">
        <div className="container grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">Certifications</h2>
            <ul className="mt-6 space-y-4">
              {certifications.map((cert) => (
                <li key={cert.id}>
                  <p className="font-medium">{cert.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} · {cert.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">Education</h2>
            <ul className="mt-6 space-y-4">
              {education.map((ed) => (
                <li key={ed.id}>
                  <p className="font-medium">{ed.degree}</p>
                  <p className="text-sm text-muted-foreground">
                    {ed.school} · {ed.location} · {ed.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
