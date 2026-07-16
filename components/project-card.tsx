import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
      <span
        className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100"
        aria-hidden="true"
      />
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <Badge variant="outline">{project.category}</Badge>
          <span className="text-xs text-muted-foreground">{project.year}</span>
        </div>
        <CardTitle className="mt-2">{project.title}</CardTitle>
        <CardDescription>{project.summary}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2">
          {project.impact.map((point) => (
            <li key={point} className="flex gap-2 text-sm text-foreground/90">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <Badge key={tool} variant="secondary">
            {tool}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
