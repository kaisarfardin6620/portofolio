"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, Cpu, Database, Globe, Layers, Zap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const nodes = [
  { id: "ai", icon: Brain, label: "AI Orchestrator", color: "text-cyan-400", x: -180, y: -100 },
  { id: "stream", icon: Zap, label: "Real-time Stream", color: "text-amber-400", x: 180, y: -100 },
  { id: "db", icon: Database, label: "Vector DB", color: "text-violet-400", x: -180, y: 100 },
  { id: "api", icon: Globe, label: "Edge API", color: "text-emerald-400", x: 180, y: 100 },
];

export function Architecture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.7, 0.9], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[120vh] py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="// architectural depth"
          title="The AI Backend Stack"
          description="A visual breakdown of my production-grade architecture for real-time multimodal systems."
        />

        <motion.div 
          style={{ scale, opacity }}
          className="relative mt-24 flex h-[500px] items-center justify-center"
        >
          {/* Central Core */}
          <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-primary/50 bg-background/80 shadow-[0_0_50px_-12px_rgba(var(--primary),0.5)] backdrop-blur-xl">
            <Cpu className="h-10 w-10 text-primary" />
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-primary/10 blur-xl" />
          </div>

          {/* Exploding Nodes */}
          {nodes.map((node, i) => {
            const nodeX = useTransform(scrollYProgress, [0.3, 0.6], [0, node.x]);
            const nodeY = useTransform(scrollYProgress, [0.3, 0.6], [0, node.y]);
            const nodeOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

            return (
              <motion.div
                key={node.id}
                style={{ x: nodeX, y: nodeY, opacity: nodeOpacity }}
                className="absolute flex flex-col items-center gap-3"
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md ${node.color} shadow-xl`}>
                  {(() => {
                    const IconComponent = node.icon as React.ComponentType<any>;
                    return <IconComponent className="h-8 w-8" />;
                  })()}
                </div>



                <span className="font-mono text-xs font-medium tracking-tight text-muted-foreground">
                  {node.label}
                </span>
                
                {/* Connection Line */}
                <svg className="absolute -z-10 h-full w-full overflow-visible pointer-events-none">
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2={node.x > 0 ? "0%" : "100%"}
                    y2={node.y > 0 ? "0%" : "100%"}
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className="text-primary/20"
                    initial={{ pathLength: 0 }}
                    style={{ pathLength: nodeOpacity }}
                  />
                </svg>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
