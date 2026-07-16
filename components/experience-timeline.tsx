import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import type { Experience } from "@/data/experience";

export function ExperienceTimeline({ items }: { items: Experience[] }) {
  return (
    <ol className="relative space-y-10 border-l border-border pl-8 sm:pl-10">
      {items.map((job, i) => (
        <Reveal key={job.id} as="li" delay={i * 0.08} className="relative">
          <span
            className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background sm:-left-[calc(2.5rem+5px)]"
            aria-hidden="true"
          />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-display text-xl font-semibold tracking-tight">
              {job.role}
              {job.isVolunteer && (
                <span className="ml-2 align-middle text-xs font-medium text-primary">
                  Volunteer
                </span>
              )}
            </h3>
            {(job.start || job.end) && (
              <span className="text-sm font-medium text-muted-foreground">
                {job.start} {job.start && job.end ? "–" : ""} {job.end}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm font-medium text-primary">
            {job.company} · {job.location}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {job.summary}
          </p>
          <ul className="mt-4 space-y-2">
            {job.achievements.map((point) => (
              <li key={point} className="flex gap-2 text-sm text-foreground/90">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {job.tools.map((tool) => (
              <Badge key={tool} variant="secondary">
                {tool}
              </Badge>
            ))}
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
