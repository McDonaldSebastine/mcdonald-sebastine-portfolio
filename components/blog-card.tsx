import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { formatDate } from "@/lib/utils";
import type { PostMeta } from "@/lib/blog";

export function BlogCard({ post, delay = 0 }: { post: PostMeta; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/blog/${post.slug}`}
        className="group block h-full rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>{post.readingTime}</span>
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
          {post.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
          Read post
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </Reveal>
  );
}
