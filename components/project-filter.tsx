"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ProjectCard } from "@/components/project-card";
import { projects, projectCategories } from "@/data/projects";

export function ProjectFilter() {
  const [active, setActive] = React.useState<string>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Tabs value={active} onValueChange={setActive}>
      <TabsList aria-label="Filter projects by category">
        <TabsTrigger value="All">All</TabsTrigger>
        {projectCategories.map((cat) => (
          <TabsTrigger key={cat} value={cat}>
            {cat}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value={active} forceMount>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </TabsContent>
    </Tabs>
  );
}
