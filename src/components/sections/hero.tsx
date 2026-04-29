"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, FileText, ShieldCheck, Zap, ChartNoAxesCombined } from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const resumeViewUrl =
  "https://drive.google.com/file/d/1ofq-OZH2lIBNVz7-DupjTKu2UtklS6Lx/view?usp=sharing";
const resumeDownloadUrl =
  "https://drive.google.com/uc?export=download&id=1ofq-OZH2lIBNVz7-DupjTKu2UtklS6Lx";

const cinematicPhrases = [
  "real-time AI products",
  "mission-critical backend systems",
  "high-concurrency LLM platforms",
  "explainable intelligence workflows",
];

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 600], [0, 90]);
  const orbOneY = useTransform(scrollY, [0, 600], [0, -50]);
  const orbTwoY = useTransform(scrollY, [0, 600], [0, 60]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % cinematicPhrases.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-10 pt-24 md:pt-28">
      {/* Background image */}
      <motion.div className="pointer-events-none absolute inset-0" style={{ y: backgroundY }}>
        <Image
          src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80&fit=crop"
          alt=""
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </motion.div>

      {/* Cinematic light layers */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.25], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-18%] top-[-12%] h-[36rem] w-[36rem] rounded-full bg-cyan-400/10 blur-[120px]"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.38, 0.22], scale: [1.04, 1, 1.05] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="absolute right-[-15%] top-[6%] h-[34rem] w-[34rem] rounded-full bg-violet-500/10 blur-[120px]"
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, hsl(var(--primary)/0.20) 0, transparent 40%), radial-gradient(circle at 80% 70%, hsl(var(--primary)/0.15) 0, transparent 42%)",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          style={{ y: orbOneY }}
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]"
        />
        <motion.div
          style={{ y: orbTwoY }}
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="text-left">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/55 px-4 py-1.5 text-xs font-medium tracking-wide backdrop-blur-sm sm:text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Available for new projects
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          <span className="gradient-text">Abdullah Kaisar Fardin</span>
        </motion.h1>

        {/* Handle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-5 font-mono text-xs tracking-wider text-muted-foreground sm:text-sm"
        >
          @kaisarfardin6620
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-3 max-w-3xl text-balance text-xl leading-tight text-foreground sm:text-2xl"
        >
          Designing <span className="text-primary">production-grade AI systems</span> for{" "}
          <motion.span
            key={phraseIndex}
            initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="inline-block bg-gradient-to-r from-cyan-400 via-primary to-violet-400 bg-clip-text font-semibold text-transparent"
          >
            {cinematicPhrases[phraseIndex]}
          </motion.span>
          .
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.33 }}
          className="mb-8 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          I build scalable backend architecture for multimodal AI, Hybrid RAG, and real-time streaming products. Focused on reliability, latency, and measurable product outcomes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-10 flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground sm:gap-3"
        >
          <span className="rounded-full border border-border/50 bg-secondary/40 px-3 py-1 backdrop-blur-sm">
            AI systems
          </span>
          <span className="rounded-full border border-border/50 bg-secondary/40 px-3 py-1 backdrop-blur-sm">
            Backend engineering
          </span>
          <span className="rounded-full border border-border/50 bg-secondary/40 px-3 py-1 backdrop-blur-sm">
            Hybrid RAG
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <a href="#projects" className={cn(buttonVariants({ size: "lg" }), "neon-glow transition-transform duration-200 hover:-translate-y-0.5")}> 
            View Projects
          </a>
          <a
            href={resumeViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline", size: "lg" }) + " transition-transform duration-200 hover:-translate-y-0.5"}
          >
            <FileText className="mr-2 h-4 w-4" />
            View Resume
          </a>
          <a
            href={resumeDownloadUrl}
            className={buttonVariants({ variant: "secondary", size: "lg" }) + " transition-transform duration-200 hover:-translate-y-0.5"}
            download="Abdullah_Kaisar_Fardin_Resume.pdf"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </a>
          <a
            href="#contact"
            className={buttonVariants({ variant: "outline", size: "lg" }) + " transition-transform duration-200 hover:-translate-y-0.5"}
          >
            Get in Touch
          </a>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/kaisarfardin6620"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={buttonVariants({ variant: "ghost", size: "icon" })}
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-kaisar-fardin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={buttonVariants({ variant: "ghost", size: "icon" })}
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:kaisarfardin128@gmail.com"
              aria-label="Email"
              className={buttonVariants({ variant: "ghost", size: "icon" })}
            >
              <MailIcon className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="rounded-2xl border border-border/60 bg-card/55 p-6 backdrop-blur-xl"
        >
          <p className="mb-4 font-mono text-xs tracking-wider text-primary uppercase">
            case-study snapshot
          </p>

          <div className="space-y-3">
            <div className="rounded-xl border border-border/60 bg-background/60 p-4">
              <div className="mb-1 flex items-center gap-2 text-sm font-semibold">
                <Zap className="h-4 w-4 text-primary" />
                Real-time Delivery
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Built streaming AI backends using WebSockets and async workers for low-latency user interactions.
              </p>
            </div>

            <div className="rounded-xl border border-border/60 bg-background/60 p-4">
              <div className="mb-1 flex items-center gap-2 text-sm font-semibold">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Reliability First
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Prioritized resilient architecture, queue-based processing, and robust API safeguards.
              </p>
            </div>

            <div className="rounded-xl border border-border/60 bg-background/60 p-4">
              <div className="mb-1 flex items-center gap-2 text-sm font-semibold">
                <ChartNoAxesCombined className="h-4 w-4 text-primary" />
                Outcome Focus
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Delivered production features with clear impact across retrieval quality, concurrency, and user experience.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-4 flex justify-center lg:col-span-2 lg:mt-8"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-xs text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-foreground"
          >
            <span className="font-mono">scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="h-4 w-4" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
