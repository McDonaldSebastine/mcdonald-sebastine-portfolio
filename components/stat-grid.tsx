import { Reveal } from "@/components/reveal";

interface Stat {
  value: string;
  label: string;
}

export function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
      {stats.map((stat, i) => (
        <Reveal key={stat.label} delay={i * 0.06} className="bg-background p-6 sm:p-8">
          <p className="font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            {stat.value}
          </p>
          <p className="mt-1.5 text-sm text-muted-foreground">{stat.label}</p>
        </Reveal>
      ))}
    </div>
  );
}
