import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-sm font-medium uppercase tracking-[0.14em] text-primary">
        404
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        This page took a wrong turn
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
