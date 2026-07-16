import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
}

/** DRY factory for per-page metadata: sets title, description, canonical, and social tags consistently. */
export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      type: "website",
    },
    twitter: {
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}

interface Crumb {
  name: string;
  path: string;
}

/** Builds a BreadcrumbList JSON-LD object for a given page's crumb trail. */
export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${siteConfig.url}${crumb.path}`,
    })),
  };
}
