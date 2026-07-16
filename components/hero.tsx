"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { AnimatedHeading } from "@/components/animated-heading";
import { Marquee } from "@/components/marquee";
import { siteConfig } from "@/lib/site";
import { fadeUp, staggerContainer } from "@/lib/motion";

const roles = [
  "Executive Assistant",
  "Operations Coordinator",
  "Customer Success",
  "Project Coordination",
  "CRM Administration",
  "Workflow Automation",
];

function HeroPortrait() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative order-1 mx-auto w-full max-w-xs lg:order-2 lg:max-w-none"
    >
      <div
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-primary/10 blur-2xl"
        aria-hidden="true"
      />
      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border bg-secondary/30 shadow-xl shadow-primary/5"
      >
        <Image
          src="/images/mcdonald-portrait.jpg"
          alt="Portrait of McDonald Sebastine"
          fill
          priority
          sizes="(min-width: 1024px) 420px, 320px"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-background/90 px-4 py-2 text-xs font-medium text-foreground shadow-lg backdrop-blur-md"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        Open to remote roles
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="absolute -top-24 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <motion.div
            variants={staggerContainer(0.09, 0.05)}
            initial="hidden"
            animate="visible"
            className="order-2 max-w-3xl lg:order-1"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-sm text-muted-foreground"
            >
              <MapPin className="h-3.5 w-3.5" />
              Open to remote roles · {siteConfig.location}
            </motion.div>

            <AnimatedHeading
              text="I keep executives, customers, and operations moving forward."
              highlightWords={["moving", "forward."]}
              className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl"
            />

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              {siteConfig.name} is an Executive Assistant and Business
              Operations Professional with 5+ years turning chaotic calendars,
              CRMs, and support queues into systems that just work — for
              executives across the U.S., Canada, UK, and Europe.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
              {roles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-foreground/80"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start a conversation
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Button asChild variant="outline" size="lg">
                  <Link href="/resume">
                    <Sparkles className="h-4 w-4" />
                    View resume
                  </Link>
                </Button>
              </Magnetic>
            </motion.div>
          </motion.div>

          <HeroPortrait />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="border-t border-border/60 py-6"
      >
        <Marquee
          items={[
            "Salesforce",
            "HubSpot",
            "Zendesk",
            "Google Workspace",
            "Microsoft 365",
            "Zapier",
            "Asana",
            "Slack",
          ]}
        />
      </motion.div>
    </section>
  );
}
