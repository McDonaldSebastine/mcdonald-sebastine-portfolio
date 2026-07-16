"use client";

import { motion } from "framer-motion";
import { wordReveal, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  highlightWords?: string[];
}

/**
 * Splits text into words and reveals them with a staggered rise + fade.
 * `highlightWords` lets specific words render in the primary accent color.
 */
export function AnimatedHeading({ text, className, highlightWords = [] }: AnimatedHeadingProps) {
  const words = text.split(" ");

  return (
    <motion.h1
      variants={staggerContainer(0.045)}
      initial="hidden"
      animate="visible"
      className={cn("overflow-hidden", className)}
      aria-label={text}
    >
      {words.map((word, i) => {
        const isHighlighted = highlightWords.some((h) => word.includes(h));
        return (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-1 pr-[0.25em]">
            <motion.span
              variants={wordReveal}
              className={cn("inline-block", isHighlighted && "text-primary")}
              aria-hidden="true"
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </motion.h1>
  );
}
