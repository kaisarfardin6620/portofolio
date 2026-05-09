"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechBadge } from "@/components/ui/tech-badge";
import { experiences } from "@/data/experience";
import { MagicBorder } from "@/components/motion/magic-border";

export function Experience() {
  return (
    <section id="experience" className="section-surface py-24 px-6 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="// experience"
          title="Where I've Worked"
          description="From open-source contributions to scaling AI at top companies."
        />

        <div className="relative">
          {/* Timeline line */}
          {/* Luminous Neon Timeline Path */}
          <div className="absolute left-[18px] top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-primary to-transparent opacity-30 blur-[2px] md:left-1/2 md:-translate-x-1/2" />
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-primary to-transparent md:left-1/2 md:-translate-x-px" />


          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className={`relative flex flex-col gap-4 pl-12 md:pl-0 ${
                  i % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[13px] top-6 z-10 flex h-3 w-3 items-center justify-center rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                </div>

                {/* Card */}
                <div className="md:w-[calc(50%-2rem)]">
                  <MagicBorder className="h-full w-full">
                    <Card className="floating-glass-card group relative overflow-hidden transition-transform duration-300">
                      <div
                        className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-r ${
                          i % 2 === 0
                            ? "from-cyan-500/20 to-blue-600/20"
                            : "from-violet-500/20 to-fuchsia-600/20"
                        } opacity-80`}
                      />
                    <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-400/0 via-primary/20 to-violet-400/0 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

                    <CardContent className="relative p-6">
                      <div className="mb-2 flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-primary" />
                        <span className="font-mono text-xs text-primary">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold">{exp.company}</h3>
                      <p className="mb-3 text-sm text-muted-foreground">
                        {exp.role}
                      </p>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <TechBadge key={t}>{t}</TechBadge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  </MagicBorder>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
