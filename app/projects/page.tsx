import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProjectFilter } from "@/components/project-filter";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description:
    "Systems, automations, and support operations built by McDonald Sebastine across operations, customer success, and cloud infrastructure.",
  path: "/projects",
});

const crumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
]);

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={crumbs} />
      <PageHeader
        eyebrow="Projects"
        title="The systems behind the support"
        description="Filter by category to see how the same problem-solving approach shows up across operations, customer success, cloud infrastructure, and documentation."
      />
      <section className="container py-16 sm:py-20">
        <ProjectFilter />
      </section>
    </>
  );
}
