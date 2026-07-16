import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/json-ld";
import { education } from "@/data/credentials";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "How a background in geology and mining engineering became a five-year career in executive assistance and business operations.",
  path: "/about",
});

const crumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

const values = [
  {
    title: "Precision over speed",
    copy: "A fast answer that's wrong creates more work than a considered one. I optimize for getting it right the first time.",
  },
  {
    title: "Systems over heroics",
    copy: "If a problem happens twice, it gets a process. I'd rather build something reusable than solve the same fire repeatedly.",
  },
  {
    title: "Ownership without ego",
    copy: "I take responsibility for outcomes, communicate early when something's off track, and don't need credit to do good work.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={crumbs} />
      <PageHeader
        eyebrow="About"
        title="From geology fieldwork to executive operations"
        description="Structured, evidence-based thinking — first applied to rock formations, now applied to calendars, CRMs, and customer relationships."
      />

      <section className="container py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              I started out training as a geologist and mining engineer at the
              Federal University of Jos — a discipline built entirely on
              careful observation, structured data, and drawing the right
              conclusion from incomplete information. That training turned out
              to be surprisingly good preparation for executive support: both
              fields punish sloppiness and reward the person who notices the
              detail everyone else missed.
            </p>
            <p>
              Over the past five years I&apos;ve applied that mindset to
              running executive calendars, CRM systems, and customer support
              queues — first as an Executive Administrative Assistant for an
              agribusiness distribution company, then in business operations
              and customer support, and most recently as an Executive
              Assistant and Operations Coordinator for a US-based
              organization. In every role, the pattern has been the same:
              find what&apos;s manual and error-prone, and replace it with
              something dependable.
            </p>
            <p>
              Alongside my paid roles, I&apos;ve served as Executive Assistant
              to the Senior Pastor of a 500+ member ministry since 2022 —
              managing schedules, correspondence, and events with the same
              discretion and rigor I bring to any executive desk.
            </p>
            <p>
              I&apos;m based in Abuja, Nigeria, and work comfortably across
              U.S., Canadian, UK, and European business hours with
              remote-first teams.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-display text-lg font-semibold">Education</h3>
              {education.map((ed) => (
                <div key={ed.id} className="mt-3">
                  <p className="font-medium">{ed.degree}</p>
                  <p className="text-sm text-muted-foreground">{ed.school}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary">{ed.location}</Badge>
                    <Badge variant="secondary">{ed.year}</Badge>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-display text-lg font-semibold">Based in</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Abuja, Nigeria — working remote-first across U.S., Canadian,
                UK, and European business hours.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30 py-16 sm:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="How I work"
            title="Three things I bring to every role"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="rounded-2xl border border-border p-6">
                <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
