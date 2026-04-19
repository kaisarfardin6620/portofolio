"use client";

import { useMemo, useState } from "react";

type ThemePreset = {
  id: string;
  name: string;
  description: string;
  className: string;
};

const presets: ThemePreset[] = [
  {
    id: "minimal",
    name: "1. Minimal Professional",
    description: "Clean, restrained, and recruiter-friendly.",
    className: "lab-theme-minimal",
  },
  {
    id: "premium-dark",
    name: "2. Premium Dark",
    description: "High-end, subtle glow, premium product feel.",
    className: "lab-theme-premium-dark",
  },
  {
    id: "futuristic-neon",
    name: "3. Futuristic Neon",
    description: "Bold AI identity with vivid accents and glow.",
    className: "lab-theme-futuristic-neon",
  },
  {
    id: "editorial",
    name: "4. Editorial Magazine",
    description: "Big type, elegant hierarchy, story-first layout.",
    className: "lab-theme-editorial",
  },
  {
    id: "case-study",
    name: "5. Product Case Study",
    description: "Outcome-driven layout for clients and hiring teams.",
    className: "lab-theme-case-study",
  },
  {
    id: "bento",
    name: "6. Bento Dashboard",
    description: "Modular blocks and modern product visuals.",
    className: "lab-theme-bento",
  },
  {
    id: "brutalist",
    name: "7. Brutalist",
    description: "Raw, high contrast, unmistakable personality.",
    className: "lab-theme-brutalist",
  },
  {
    id: "warm",
    name: "8. Warm Human",
    description: "Friendly, approachable, human-centered tone.",
    className: "lab-theme-warm",
  },
];

export function DesignLabPreview() {
  const [selectedId, setSelectedId] = useState<string>(presets[0].id);

  const selected = useMemo(
    () => presets.find((preset) => preset.id === selectedId) ?? presets[0],
    [selectedId],
  );

  return (
    <section className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="mb-2 font-mono text-xs uppercase tracking-wider text-primary">
            // design lab
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Portfolio Redesign Preview
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Switch between 8 visual directions. Content stays constant so design differences are
            easy to compare.
          </p>
        </div>

        <div className="mb-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {presets.map((preset) => {
            const isActive = selected.id === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => setSelectedId(preset.id)}
                className={`rounded-xl border px-4 py-3 text-left transition-all ${
                  isActive
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border/60 bg-background/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                <p className="text-sm font-semibold">{preset.name}</p>
                <p className="mt-1 text-xs">{preset.description}</p>
              </button>
            );
          })}
        </div>

        <div className={`lab-canvas ${selected.className}`}>
          <div className="lab-grid-pattern" />

          <div className="lab-panel">
            <p className="lab-eyebrow">AI Developer · Generative Systems · Backend</p>
            <h2 className="lab-title">Abdullah Kaisar Fardin</h2>
            <p className="lab-subtitle">
              Building production-ready AI products with strong engineering fundamentals.
            </p>
            <div className="lab-chip-row">
              <span className="lab-chip">Hybrid RAG</span>
              <span className="lab-chip">Computer Vision</span>
              <span className="lab-chip">Real-time Systems</span>
            </div>
          </div>

          <div className="lab-cards">
            <article className="lab-card">
              <h3>Explainable KG-RAG</h3>
              <p>
                Hybrid retrieval architecture combining vector search and graph traversal with
                validation.
              </p>
            </article>
            <article className="lab-card">
              <h3>Multimodal Coaching</h3>
              <p>
                Text-image-audio assistant with low-latency streams and production monitoring.
              </p>
            </article>
            <article className="lab-card">
              <h3>3D Vision Pipeline</h3>
              <p>
                Automated reconstruction and biometric analysis pipeline with async orchestration.
              </p>
            </article>
          </div>

          <div className="lab-actions">
            <button type="button" className="lab-btn lab-btn-primary">
              Use This Direction
            </button>
            <button type="button" className="lab-btn lab-btn-ghost">
              Compare Next Style
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
