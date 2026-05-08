"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Database,
  Server,
  Sparkles,
  Cpu,
  Layers,
  Wrench,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { MagicBorder } from "@/components/motion/magic-border";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Database,
  Server,
  Wrench,
};

const rowIconMap: Record<string, React.ElementType> = {
  Brain: Sparkles,
  Server: Cpu,
  Database: Layers,
  Wrench,
};

const topStrengths = [
  "Hybrid KG-RAG",
  "FastAPI + Django",
  "Redis/Celery Queues",
  "Production LLM Systems",
];

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--primary)/0.08) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)/0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 0.6px, transparent 0.6px), radial-gradient(circle at 80% 60%, white 0.6px, transparent 0.6px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label="// skills"
          title="Tech Stack"
          description="The tools and technologies I work with daily."
        />

        <FadeIn className="mb-8" delay={0.08}>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="mr-1 text-xs font-mono tracking-wider text-muted-foreground uppercase">
              top strengths
            </span>
            {topStrengths.map((strength) => (
              <Badge
                key={strength}
                variant="outline"
                className="rounded-full border-primary/25 bg-background/70 px-3 py-1 font-mono text-[11px] tracking-wide"
              >
                {strength}
              </Badge>
            ))}
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((cat, catIndex) => {
            const Icon = iconMap[cat.icon] ?? Brain;
            const RowIcon = rowIconMap[cat.icon] ?? Sparkles;
            
            // Bento logic: AI (0) spans 2, Backend (1) spans 1, Data (2) spans 1, MLOps (3) spans 2
            const spanClass = 
              catIndex === 0 ? "md:col-span-2" :
              catIndex === 3 ? "md:col-span-2" :
              "md:col-span-1";

            return (
              <FadeIn
                key={cat.category}
                delay={catIndex * 0.15}
                className={spanClass}
              >
                  <MagicBorder className="h-full">
                    <Card className="floating-glass-card group relative h-full overflow-hidden transition-transform duration-300">
                      <div
                        className={`pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-r ${cat.gradient} opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-15`}
                      />

                      <CardContent className="relative flex h-full flex-col p-6">
                        <div className="mb-5 flex items-start gap-3">
                          <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-background/60">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                      <div className="space-y-1">
                        <h3 className="text-[17px] font-semibold tracking-tight">
                          {cat.category}
                        </h3>
                        <p className="text-xs leading-relaxed text-muted-foreground">
                          {cat.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className={`mt-1 grid gap-x-6 gap-y-3.5 ${catIndex === 0 || catIndex === 3 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
                      {cat.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            type: "spring",
                            stiffness: 210,
                            damping: 24,
                            delay: catIndex * 0.12 + skillIndex * 0.06,
                          }}
                          className="group/skill"
                        >
                          <div className="mb-1.5 flex items-center justify-between gap-2">
                            <div className="relative flex min-w-0 items-center gap-1.5">
                              <RowIcon className="h-3.5 w-3.5 shrink-0 text-primary/90" />
                              <span className="truncate text-sm font-mono">{skill.name}</span>
                              {skill.current && (
                                <Badge
                                  variant="secondary"
                                  className="h-5 rounded-full px-2 font-mono text-[10px] tracking-wide"
                                >
                                  currently using
                                </Badge>
                              )}
                              {skill.proof && (
                                <span className="pointer-events-none absolute -top-9 left-0 z-20 hidden rounded-md border border-border/70 bg-background/95 px-2 py-1 text-[10px] text-muted-foreground shadow-md group-hover/skill:block whitespace-nowrap">
                                  {skill.proof}
                                </span>
                              )}
                            </div>

                            <Badge
                              variant="outline"
                              className="h-5 rounded-full border-primary/30 bg-primary/5 px-2 font-mono text-[10px]"
                            >
                              {skill.level}%
                            </Badge>
                          </div>

                          <div className="relative h-1.5 overflow-hidden rounded-full bg-secondary/90">
                            <motion.div
                              className={`h-full rounded-full bg-gradient-to-r ${cat.gradient}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 22,
                                delay: catIndex * 0.15 + skillIndex * 0.08,
                              }}
                            />

                            <motion.div
                              aria-hidden="true"
                              className="pointer-events-none absolute inset-y-0 w-8 -skew-x-12 bg-white/30"
                              initial={{ x: "-140%", opacity: 0 }}
                              whileInView={{ x: "220%", opacity: [0, 0.7, 0] }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1,
                                delay: catIndex * 0.18 + skillIndex * 0.1 + 0.2,
                                ease: "easeOut",
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                </MagicBorder>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
