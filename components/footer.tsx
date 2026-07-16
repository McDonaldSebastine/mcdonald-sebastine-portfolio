import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="container flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Link href="/" className="font-display text-lg font-semibold tracking-tight">
            McDonald<span className="text-primary">.</span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Executive support and customer success, run with the precision of
            someone who also builds the systems behind the scenes.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/30"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/30"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Send an email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/30"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-1">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="text-sm text-muted-foreground">
          <p>{siteConfig.location}</p>
          <p className="mt-1">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>

      <div className="container border-t border-border/60 py-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
