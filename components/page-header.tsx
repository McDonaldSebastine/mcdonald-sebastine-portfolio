import { Reveal } from "@/components/reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-border/60 bg-secondary/30">
      <div className="container py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.14em] text-primary">
            {eyebrow}
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
