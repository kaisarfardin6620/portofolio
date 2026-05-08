"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
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
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { MagicBorder } from "@/components/motion/magic-border";
import { Magnetic } from "@/components/motion/magnetic";


const iconMap: Record<string, React.ElementType> = {
  MessageSquare,
  Eye,
  Code,
  Workflow,
  Image: ImageIcon,
};

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
}) {
  const Icon = iconMap[project.icon] ?? Code;
  const hasLinks = Boolean(
    project.links?.live ||
      project.links?.repo ||
      project.links?.playStore ||
      project.links?.appStore,
  );

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothRotateX = useSpring(rotateX, { stiffness: 220, damping: 22, mass: 0.5 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 220, damping: 22, mass: 0.5 });

  const handleMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rY = ((x / rect.width) * 2 - 1) * 5;
    const rX = ((y / rect.height) * 2 - 1) * -5;

    rotateX.set(rX);
    rotateY.set(rY);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      variants={staggerItem}
      style={{ perspective: 1200 }}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
    >
      <motion.div style={{ rotateX: smoothRotateX, rotateY: smoothRotateY, transformStyle: "preserve-3d" }}>
        {featured ? (
          <MagicBorder className="h-full w-full">
            <Card className="group relative h-full w-full overflow-hidden border-0 bg-transparent">
              <div
                className={`absolute inset-x-0 top-0 bg-gradient-to-r ${project.gradient} opacity-80 h-36`}
              />
              <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-400/0 via-primary/20 to-violet-400/0 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

              <CardContent className="relative p-7 md:p-8">
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-background/80 shadow-sm">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                        featured case study
                      </p>
                    </div>
                    <h3 className="font-semibold leading-tight text-2xl md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground text-base md:text-lg">
                      {project.description}
                    </p>
                  </div>

                  {hasLinks && (
                    <div className="flex flex-wrap items-center gap-2">
                      {project.links?.playStore && (
                        <Magnetic strength={0.4}>
                          <a
                            href={project.links.playStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                          >
                            Play Store
                            <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                          </a>
                        </Magnetic>
                      )}
                      {project.links?.appStore && (
                        <Magnetic strength={0.4}>
                          <a
                            href={project.links.appStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                          >
                            App Store
                            <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                          </a>
                        </Magnetic>
                      )}
                      {project.links?.live && (
                        <Magnetic strength={0.4}>
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                          >
                            Live
                            <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                          </a>
                        </Magnetic>
                      )}
                      {project.links?.repo && (
                        <Magnetic strength={0.4}>
                          <a
                            href={project.links.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
                          >
                            <GithubIcon className="mr-1 h-3.5 w-3.5" />
                            Code
                          </a>
                        </Magnetic>
                      )}
                    </div>
                  )}

                </div>

                <div className="mb-5 grid gap-3 sm:grid-cols-3">
                  {project.impactMetrics.map((metric) => (
                    <div key={metric.label} className="rounded-xl border border-border/60 bg-background/55 p-3.5">
                      <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">{metric.label}</p>
                      <p className="mt-1.5 text-2xl font-semibold leading-none text-primary">
                        <AnimatedCounter value={metric.value} suffix={metric.suffix} duration={1.1} />
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-border/60 bg-background/55 p-4">
                    <p className="mb-2 font-mono text-[11px] tracking-wider text-primary uppercase">Challenge</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{project.challenge}</p>
                  </div>

                  <div className="rounded-xl border border-border/60 bg-background/55 p-4">
                    <p className="mb-2 font-mono text-[11px] tracking-wider text-primary uppercase">Approach</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{project.approach}</p>
                  </div>

                  <div className="rounded-xl border border-border/60 bg-background/55 p-4">
                    <p className="mb-2 font-mono text-[11px] tracking-wider text-primary uppercase">Impact</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{project.impact}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <TechBadge key={t}>{t}</TechBadge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </MagicBorder>
        ) : (
          <MagicBorder className="h-full w-full">
            <Card
              className="group relative h-full overflow-hidden border-0 bg-transparent"
            >
              <div className={`absolute inset-x-0 top-0 bg-gradient-to-r ${project.gradient} opacity-80 h-28`} />
              <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-400/0 via-primary/20 to-violet-400/0 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

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
                    <h3 className="font-semibold leading-tight text-xl md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground text-sm md:text-base">
                      {project.description}
                    </p>
                  </div>

                  {hasLinks && (
                    <div className="flex flex-wrap items-center gap-2">
                      {project.links?.playStore && (
                        <Magnetic strength={0.4}>
                          <a
                            href={project.links.playStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                          >
                            Play Store
                            <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                          </a>
                        </Magnetic>
                      )}
                      {project.links?.appStore && (
                        <Magnetic strength={0.4}>
                          <a
                            href={project.links.appStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                          >
                            App Store
                            <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                          </a>
                        </Magnetic>
                      )}
                      {project.links?.live && (
                        <Magnetic strength={0.4}>
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                          >
                            Live
                            <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                          </a>
                        </Magnetic>
                      )}
                      {project.links?.repo && (
                        <Magnetic strength={0.4}>
                          <a
                            href={project.links.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
                          >
                            <GithubIcon className="mr-1 h-3.5 w-3.5" />
                            Code
                          </a>
                        </Magnetic>
                      )}
                    </div>
                  )}
                </div>

                <div className="mb-5 grid gap-3 sm:grid-cols-3">
                  {project.impactMetrics.map((metric) => (
                    <div key={metric.label} className="rounded-xl border border-border/60 bg-background/55 p-3.5">
                      <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">{metric.label}</p>
                      <p className="mt-1.5 text-2xl font-semibold leading-none text-primary">
                        <AnimatedCounter value={metric.value} suffix={metric.suffix} duration={1.1} />
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-border/60 bg-background/55 p-4">
                    <p className="mb-2 font-mono text-[11px] tracking-wider text-primary uppercase">Challenge</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{project.challenge}</p>
                  </div>

                  <div className="rounded-xl border border-border/60 bg-background/55 p-4">
                    <p className="mb-2 font-mono text-[11px] tracking-wider text-primary uppercase">Approach</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{project.approach}</p>
                  </div>

                  <div className="rounded-xl border border-border/60 bg-background/55 p-4">
                    <p className="mb-2 font-mono text-[11px] tracking-wider text-primary uppercase">Impact</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{project.impact}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <TechBadge key={t}>{t}</TechBadge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </MagicBorder>

        )}
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const featuredProject = projects.find((p) => p.featured) ?? projects[0];
  const otherProjects = projects.filter((p) => p.title !== featuredProject.title);

  return (
    <section id="projects" className="section-surface py-24 px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// case studies"
          title="Premium Engineering, Product Outcomes"
          description="Selected projects presented as short case studies with challenge, architecture, and delivery impact."
        />

        <StaggerChildren className="mb-6">
          <ProjectCard project={featuredProject} featured />
        </StaggerChildren>

        <StaggerChildren className="space-y-6">
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
