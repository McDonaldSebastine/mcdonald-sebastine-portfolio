import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { StatGrid } from "@/components/stat-grid";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { ProjectCard } from "@/components/project-card";
import { CertCard } from "@/components/cert-card";
import { Reveal } from "@/components/reveal";
import { ImageSlider } from "@/components/image-slider";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { certifications } from "@/data/credentials";

const sliderImages = [
  { src: "/images/slider/slide-1.jpg", alt: "McDonald Sebastine, professional portrait" },
  { src: "/images/slider/slide-2.jpg", alt: "A globe on a desk, representing cross-timezone remote work" },
  { src: "/images/slider/slide-3.jpg", alt: "Working on a laptop with productivity tools" },
  { src: "/images/slider/slide-4.jpg", alt: "Reviewing project checklists and reporting with a team" },
];

const stats = [
  { value: "5+", label: "Years in EA & Operations roles" },
  { value: "200+", label: "Monthly meetings coordinated" },
  { value: "500+", label: "CRM records managed monthly" },
  { value: "95%", label: "Sustained customer satisfaction" },
];

const featuredProjects = projects.slice(0, 3);
const featuredCerts = certifications.slice(0, 2);

const capabilities = [
  {
    title: "Executive Support",
    copy: "Calendar, inbox, and travel management that gives time back to the people I support.",
  },
  {
    title: "Customer Success",
    copy: "High-volume support and onboarding that keeps satisfaction consistently above target.",
  },
  {
    title: "CRM & Automation",
    copy: "Clean, accurate CRM data and automated workflows that remove repetitive manual work.",
  },
  {
    title: "Process Improvement",
    copy: "Documented SOPs and refined systems that cut manual workload and reduce errors at scale.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="container py-16 sm:py-20">
        <StatGrid stats={stats} />
      </section>

      <section className="container py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="What I do"
            title="Operations and support — one connected skill set"
            description="I've spent five years as the person executives and customers trust to keep things running: calendars that don't collide, CRMs that stay clean, and support queues that stay calm under volume."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.07} className="rounded-2xl border border-border p-6">
                <h3 className="font-display text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Behind the work"
            title="Systems thinking, applied every day"
            description="Whether it's a shared calendar, a CRM dashboard, or a cross-timezone check-in, the same habits show up: clear records, tidy processes, and steady follow-through."
          />
          <ImageSlider images={sliderImages} className="lg:max-w-xl lg:justify-self-end" />
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/30 py-16 sm:py-20">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects that show the work, not just the title"
              description="A sample of the systems, automations, and support operations I've built and run."
            />
            <Button asChild variant="outline">
              <Link href="/projects">
                View all projects
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Recent experience"
            title="Most recent role"
            description={`${experience[0]?.role} at ${experience[0]?.company}`}
          />
          <Button asChild variant="outline">
            <Link href="/experience">
              Full experience
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <Reveal className="mt-10 rounded-2xl border border-border p-8">
          <p className="text-base leading-relaxed text-muted-foreground">
            {experience[0]?.summary}
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {experience[0]?.achievements.map((point) => (
              <li key={point} className="flex gap-2 text-sm text-foreground/90">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="border-t border-border/60 bg-secondary/30 py-16 sm:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Credentials"
            title="Certified, and continuously improving"
            description="Formal training in project management, virtual assistance, and cross-functional leadership."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {featuredCerts.map((cert, i) => (
              <CertCard key={cert.id} cert={cert} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20 sm:py-28">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center rounded-3xl border border-border bg-secondary/40 px-8 py-16 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Looking for an assistant who thinks in systems?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            I&apos;m currently open to remote Executive Assistant, Operations
            Coordinator, and Customer Success roles.
          </p>
          <Magnetic className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </Magnetic>
        </Reveal>
      </section>
    </>
  );
}
