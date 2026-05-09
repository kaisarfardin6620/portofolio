"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

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
import { staggerItem } from "@/components/motion/stagger-children";
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
  progress,
  range,
  targetScale,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) {
  const Icon = (iconMap[project.icon] || Code) as React.ComponentType<{ className?: string }>;
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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shineX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const shineY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const scale = useTransform(progress, range, [1, targetScale]);

  const handleMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mouseX.set(x);
    mouseY.set(y);

    const rY = ((x / rect.width) * 2 - 1) * 7;
    const rX = ((y / rect.height) * 2 - 1) * -7;

    rotateX.set(rX);
    rotateY.set(rY);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div className="flex h-full items-center justify-center">
      <motion.div
        variants={staggerItem}
        style={{ 
          scale,
          perspective: 1200,
          transformOrigin: "top"
        }}
        onMouseMove={handleMove}
        onMouseLeave={resetTilt}
        className="w-full"
      >
        <motion.div style={{ rotateX: smoothRotateX, rotateY: smoothRotateY, transformStyle: "preserve-3d" }}>
          <MagicBorder className="h-full w-full">
            <Card className="group relative h-full w-full overflow-hidden border border-white/10 bg-card/98 shadow-2xl backdrop-blur-2xl">

              <div
                className={`absolute inset-x-0 top-0 bg-gradient-to-r ${project.gradient} opacity-80 h-36`}
              />
              <motion.div 
                className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(600px circle at ${shineX}px ${shineY}px, oklch(1 0 0 / 12%), transparent 40%)`,
                }}
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
                        {featured ? "featured case study" : "case study"}
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
        </motion.div>
      </motion.div>
    </div>
  );
}


export function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects" className="section-surface relative overflow-visible px-6 py-24 md:py-32" ref={container}>
      <div className="mx-auto max-w-5xl overflow-visible">
        <SectionHeading
          label="// case studies"
          title="Premium Engineering, Product Outcomes"
          description="Selected projects presented as short case studies with challenge, architecture, and delivery impact."
        />

        <div className="relative mt-12 space-y-12 overflow-visible md:mt-20 md:space-y-20">

          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <div 
                key={project.title} 
                className="sticky top-24 pt-8 md:top-32 md:pt-12"
                style={{
                  zIndex: i + 1,
                }}
              >
                <ProjectCard 
                  project={project} 
                  featured={project.featured} 
                  progress={scrollYProgress} 
                  range={[i / projects.length, 1]} 
                  targetScale={targetScale}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


