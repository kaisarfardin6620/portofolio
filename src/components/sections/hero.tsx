"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const resumeViewUrl =
  "https://drive.google.com/file/d/1Xweygst85ufLx0ES3yOazcFZwUpRYDHP/view?usp=sharing";
const resumeDownloadUrl =
  "https://drive.google.com/uc?export=download&id=1Xweygst85ufLx0ES3yOazcFZwUpRYDHP";

export function Hero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 600], [0, 90]);
  const orbOneY = useTransform(scrollY, [0, 600], [0, -50]);
  const orbTwoY = useTransform(scrollY, [0, 600], [0, 60]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
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

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-sm backdrop-blur-sm"
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
          className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl"
        >
          <span className="gradient-text text-nowrap">Abdullah Kaisar Fardin</span>
        </motion.h1>

        {/* Handle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 font-mono text-sm text-muted-foreground"
        >
          @kaisarfardin6620
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          AI Developer specializing in Generative AI systems and scalable backend
          engineering — from multimodal AI pipelines to Hybrid RAG systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-muted-foreground"
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
          className="flex flex-wrap items-center justify-center gap-4"
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

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20"
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
