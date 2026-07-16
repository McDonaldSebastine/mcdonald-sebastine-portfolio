import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import type { SkillGroup } from "@/data/skills";

export function SkillGroupCard({ group, delay = 0 }: { group: SkillGroup; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Card className="h-full">
        <CardHeader>
          <CardTitle>{group.category}</CardTitle>
          <CardDescription>{group.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {group.items.map((item) => (
            <Badge key={item} variant="secondary">
              {item}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </Reveal>
  );
}
