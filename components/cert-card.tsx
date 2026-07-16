import { Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import type { Certification } from "@/data/credentials";

export function CertCard({ cert, delay = 0 }: { cert: Certification; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
        <span
          className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100"
          aria-hidden="true"
        />
        <CardHeader>
          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
            <Award className="h-5 w-5" />
          </div>
          <CardTitle>{cert.name}</CardTitle>
          <p className="text-sm font-medium text-primary">
            {cert.issuer} · {cert.year}
          </p>
          <CardDescription>{cert.description}</CardDescription>
        </CardHeader>
      </Card>
    </Reveal>
  );
}
