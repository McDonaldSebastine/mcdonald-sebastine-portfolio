import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { BlogCard } from "@/components/blog-card";
import { JsonLd } from "@/components/json-ld";
import { getAllPostsMeta } from "@/lib/blog";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Notes on executive assistance, customer success, and cloud infrastructure from McDonald Sebastine.",
  path: "/blog",
});

const crumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
]);

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <>
      <JsonLd data={crumbs} />
      <PageHeader
        eyebrow="Blog"
        title="Notes from the work"
        description="Short, practical write-ups on operations, customer success, and the cloud skills I'm building alongside them."
      />
      <section className="container py-16 sm:py-20">
        {posts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <BlogCard key={post.slug} post={post} delay={i * 0.07} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No posts yet — check back soon.</p>
        )}
      </section>
    </>
  );
}
