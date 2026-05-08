"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/data/education";
import { StaggerChildren, staggerItem } from "@/components/motion/stagger-children";
import { MagicBorder } from "@/components/motion/magic-border";

export function Education() {
  return (
    <section id="education" className="section-surface py-24 px-6 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="// education"
          title="Academic Background"
          description="My journey through data science and computer engineering."
        />

        <StaggerChildren className="grid gap-6 md:grid-cols-2">
          {education.map((edu, i) => (
            <motion.div key={`${edu.degree}-${i}`} variants={staggerItem} className="h-full w-full">
              <MagicBorder className="h-full w-full">
                <Card className="floating-glass-card group relative h-full overflow-hidden transition-transform duration-300">
                  <div
                    className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-r ${
                      i % 2 === 0
                        ? "from-cyan-500/20 to-blue-600/20"
                        : "from-violet-500/20 to-fuchsia-600/20"
                    } opacity-80`}
                  />
                <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-400/0 via-primary/20 to-violet-400/0 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

                <CardContent className="relative p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-background/50">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="mb-2 flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {edu.period}
                  </div>
                  
                  <h3 className="mb-1 text-xl font-bold">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  
                  {edu.description && (
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {edu.description}
                    </p>
                  )}
                </CardContent>
                </Card>
              </MagicBorder>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
