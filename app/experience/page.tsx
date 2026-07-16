import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { JsonLd } from "@/components/json-ld";
import { experience, leadership } from "@/data/experience";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Experience",
  description:
    "A five-year track record across executive assistance, business operations, and customer success — with measurable outcomes at every role.",
  path: "/experience",
});

const crumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Experience", path: "/experience" },
]);

export default function ExperiencePage() {
  return (
    <>
      <JsonLd data={crumbs} />
      <PageHeader
        eyebrow="Experience"
        title="Where I've made an impact"
        description="Five years across executive assistance, business operations, and customer success — each role measured in outcomes, not hours."
      />
      <section className="container py-16 sm:py-20">
        <ExperienceTimeline items={experience} />
      </section>

      <section className="border-t border-border/60 bg-secondary/30 py-16 sm:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Leadership"
            title="Leadership experience"
            description="Executive-level support in a volunteer capacity, applying the same operational discipline to a 500+ member organization."
          />
          <div className="mt-10">
            <ExperienceTimeline items={leadership} />
          </div>
        </div>
      </section>
    </>
  );
}
