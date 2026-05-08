"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { MagicBorder } from "@/components/motion/magic-border";

const stats = [
  { label: "Projects Shipped", value: 30, suffix: "+" },
  { label: "Years Experience", value: 1, suffix: "+" },
  { label: "Models Trained", value: 100, suffix: "+" },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// about"
          title="Building AI That Ships"
          description="Not just research — production systems that scale."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image + Terminal */}
          <FadeIn direction="left">
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl border border-border/50 neon-glow transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1607706189992-eae578626c86?w=600&h=600&fit=crop&crop=center"
                  alt="Aaabad Touk"
                  width={600}
                  height={600}
                  className="w-full aspect-square object-cover"
                  priority
                />
              </div>

              {/* Terminal block */}
              <MagicBorder>
                <Card className="floating-glass-card group relative overflow-hidden transition-transform duration-300">
                  <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 opacity-80" />
                  <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-400/0 via-primary/20 to-violet-400/0 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

                  <CardContent className="relative p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500/70" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                      <div className="h-3 w-3 rounded-full bg-green-500/70" />
                      <span className="ml-2 font-mono text-xs text-muted-foreground">
                        terminal
                      </span>
                    </div>
                    <pre className="font-mono text-xs leading-relaxed text-muted-foreground">
                      <code>
                        {`$ whoami
> fardin_kaisar

$ cat skills.txt
> django, fastapi, neo4j,
> rag, genai, computer_vision

$ echo $STATUS
> building intelligent systems`}
                      </code>
                    </pre>
                  </CardContent>
                </Card>
              </MagicBorder>
            </div>
          </FadeIn>

          {/* Bio + Stats */}
          <FadeIn direction="right" delay={0.2}>
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m Abdullah Kaisar Fardin, an AI Developer specializing in
                  Generative AI systems and scalable backend engineering. I build
                  end-to-end multimodal AI pipelines — from LLMs and computer
                  vision to production-grade ML infrastructure.
                </p>
                <p>
                  I focus on designing high-concurrency architectures using Django,
                  FastAPI, Redis, and WebSockets. My work involves building Hybrid
                  RAG systems, real-time AI applications, and 3D biometric analysis
                  backends.
                </p>
                <p>
                  Proven ability to turn complex research into scalable, real-world
                  products. I believe in engineering AI systems that are not just
                  intelligent, but also robust, secure, and production-ready.
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Card className="floating-glass-card group relative overflow-hidden transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/15">
                      <div
                        className={`absolute inset-x-0 top-0 h-16 bg-gradient-to-r ${
                          i % 2 === 0
                            ? "from-cyan-500/20 to-blue-600/20"
                            : "from-violet-500/20 to-fuchsia-600/20"
                        } opacity-80`}
                      />
                      <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-400/0 via-primary/20 to-violet-400/0 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

                      <CardContent className="relative p-4 text-center">
                        <p className="text-2xl font-bold gradient-text">
                          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                        </p>
                        <p className="mt-1 text-xs font-mono text-muted-foreground">
                          {stat.label}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
