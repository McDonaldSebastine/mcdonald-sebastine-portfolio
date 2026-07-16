import type { Variants, Transition } from "framer-motion";

/**
 * Central motion tokens. Every animated component should pull from here
 * rather than hand-rolling its own easing/duration values, so the whole
 * site moves with one consistent, tasteful rhythm.
 */

export const easeOut = [0.16, 1, 0.3, 1] as const;
export const easeInOut = [0.65, 0, 0.35, 1] as const;

export const springSnappy: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 30,
};

export const springSoft: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 24,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: easeOut } },
};

export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: "0.5em" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const viewportOnce = { once: true, margin: "-80px" as const };
