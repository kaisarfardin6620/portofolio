"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Eye,
  Code,
  Workflow,
  ImageIcon,
  ArrowUpRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechBadge } from "@/components/ui/tech-badge";
import { StaggerChildren, staggerItem } from "@/components/motion/stagger-children";
import { projects } from "@/data/projects";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/ui/icons";

const iconMap: Record<string, React.ElementType> = {
  MessageSquare,
  Eye,
  Code,
  Workflow,
  Image: ImageIcon,
};

export function Projects() {
  return (
    <section id="projects" className="section-surface py-24 px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// case studies"
          title="Premium Engineering, Product Outcomes"
          description="Selected projects presented as short case studies with challenge, architecture, and delivery impact."
        />

        <StaggerChildren className="space-y-6">
          {projects.map((project) => {
            const Icon = iconMap[project.icon] ?? Code;
            const hasLinks = Boolean(project.links?.live || project.links?.repo);
            return (
              <motion.div key={project.title} variants={staggerItem}>
                <Card className="group relative overflow-hidden border-border/50 bg-card/60 backdrop-blur-xl transition-all duration-300 hover:border-primary/35 hover:shadow-2xl hover:shadow-primary/10">
                  {/* Gradient accent */}
                  <div
                    className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-r ${project.gradient} opacity-80`}
                  />

                  <CardContent className="relative p-6 md:p-7">
                    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="mb-3 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-background/80 shadow-sm">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                            case study
                          </p>
                        </div>
                        <h3 className="text-xl font-semibold leading-tight md:text-2xl">
                          {project.title}
                        </h3>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                          {project.description}
                        </p>
                      </div>

                      {hasLinks && (
                        <div className="flex items-center gap-2">
                          {project.links?.live && (
                            <a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                            >
                              Live
                              <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                            </a>
                          )}
                          {project.links?.repo && (
                            <a
                              href={project.links.repo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
                            >
                              <GithubIcon className="mr-1 h-3.5 w-3.5" />
                              Code
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="rounded-xl border border-border/60 bg-background/55 p-4">
                        <p className="mb-2 font-mono text-[11px] tracking-wider text-primary uppercase">
                          Challenge
                        </p>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {project.challenge}
                        </p>
                      </div>

                      <div className="rounded-xl border border-border/60 bg-background/55 p-4">
                        <p className="mb-2 font-mono text-[11px] tracking-wider text-primary uppercase">
                          Approach
                        </p>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {project.approach}
                        </p>
                      </div>

                      <div className="rounded-xl border border-border/60 bg-background/55 p-4">
                        <p className="mb-2 font-mono text-[11px] tracking-wider text-primary uppercase">
                          Impact
                        </p>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {project.impact}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <TechBadge key={t}>{t}</TechBadge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
