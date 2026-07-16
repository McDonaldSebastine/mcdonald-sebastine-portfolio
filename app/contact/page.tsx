import type { Metadata } from "next";
import { Mail, MapPin, Linkedin, Github, Phone, Clock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with McDonald Sebastine about Executive Assistant, Operations Coordinator, or Customer Success roles.",
  path: "/contact",
});

const crumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

const contactPoints = [
  { icon: Mail, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: siteConfig.location, href: undefined },
  { icon: Clock, label: siteConfig.availability, href: undefined },
  { icon: Linkedin, label: "linkedin.com/in/mcdonaldsebastine", href: siteConfig.links.linkedin },
  { icon: Github, label: "github.com/mcdonaldsebastine", href: siteConfig.links.github },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={crumbs} />
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your next hire"
        description="Whether it's a full-time role, contract work, or a quick question — I read every message and reply within one business day."
      />

      <section className="container py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="space-y-4">
            {contactPoints.map(({ icon: Icon, label, href }) => {
              const content = (
                <span className="flex items-center gap-3 text-sm">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </span>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block w-fit text-foreground/90 transition-colors hover:text-primary"
                >
                  {content}
                </a>
              ) : (
                <div key={label} className="text-foreground/90">
                  {content}
                </div>
              );
            })}
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl border border-border p-6 sm:p-8">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
