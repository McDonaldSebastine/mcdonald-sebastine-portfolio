import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
  reverse?: boolean;
}

export function Marquee({ items, className, reverse = false }: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div
      className={cn(
        "group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max shrink-0 gap-3 motion-safe:animate-marquee group-hover:[animation-play-state:paused]",
          reverse && "motion-safe:[animation-direction:reverse]"
        )}
      >
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-3 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-primary/60" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
