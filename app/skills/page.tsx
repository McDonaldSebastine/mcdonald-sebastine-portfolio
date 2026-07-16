import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SkillGroupCard } from "@/components/skill-group-card";
import { JsonLd } from "@/components/json-ld";
import { skillGroups } from "@/data/skills";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Skills",
  description:
    "A breakdown of McDonald Sebastine's skills across executive support, business operations, CRM platforms, and AI productivity tools.",
  path: "/skills",
});

const crumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Skills", path: "/skills" },
]);

export default function SkillsPage() {
  return (
    <>
      <JsonLd data={crumbs} />
      <PageHeader
        eyebrow="Skills"
        title="The toolkit behind the work"
        description="Grouped by the kind of problem each skill solves — from keeping an executive's day organized to keeping a CRM trustworthy."
      />
      <section className="container py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <SkillGroupCard key={group.category} group={group} delay={i * 0.08} />
          ))}
        </div>
      </section>
    </>
  );
}
