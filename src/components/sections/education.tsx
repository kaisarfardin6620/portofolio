"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/data/education";
import { StaggerChildren, staggerItem } from "@/components/motion/stagger-children";

export function Education() {
  return (
    <section id="education" className="py-32 px-6 bg-secondary/10">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="// education"
          title="Academic Background"
          description="My journey through data science and computer engineering."
        />

        <StaggerChildren className="grid gap-6 md:grid-cols-2">
          {education.map((edu, i) => (
            <motion.div key={`${edu.degree}-${i}`} variants={staggerItem}>
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30">
                <CardContent className="p-6">
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
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
