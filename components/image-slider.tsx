"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SlideImage {
  src: string;
  alt: string;
}

interface ImageSliderProps {
  images: SlideImage[];
  className?: string;
  intervalMs?: number;
}

export function ImageSlider({ images, className, intervalMs = 4500 }: ImageSliderProps) {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (paused || shouldReduceMotion || images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [paused, shouldReduceMotion, images.length, intervalMs]);

  if (images.length === 0) return null;
  const current = images[index] ?? images[0]!;

  return (
    <div
      className={cn(
        "group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-secondary/30",
        className
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-label="Photo slideshow"
    >
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true" />

      {images.length > 1 && (
        <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1} of ${images.length}`}
              aria-current={i === index}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80",
                i === index ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/75"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
