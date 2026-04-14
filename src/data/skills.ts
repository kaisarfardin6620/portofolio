export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Generative AI & LLMs",
    icon: "Brain",
    skills: [
      { name: "OpenAI GPT-4o/Vision", level: 98 },
      { name: "Hybrid RAG (Vector + KG)", level: 95 },
      { name: "Whisper (STT) / ElevenLabs (TTS)", level: 92 },
      { name: "Agentic Workflows", level: 90 },
      { name: "NLI Hallucination Mitigation", level: 94 },
    ],
  },
  {
    category: "Computer Vision & 3D",
    icon: "Eye",
    skills: [
      { name: "MediaPipe / OpenCV", level: 95 },
      { name: "Trimesh & 3D Analytics", level: 88 },
      { name: "Anisotropic Scaling", level: 85 },
      { name: "Image Inpainting", level: 82 },
      { name: "Visual Grounding", level: 80 },
    ],
  },
  {
    category: "Core Frameworks",
    icon: "Code",
    skills: [
      { name: "Django 5 / DRF", level: 96 },
      { name: "FastAPI (Async)", level: 94 },
      { name: "Celery / Redis", level: 92 },
      { name: "Django Channels (WebSockets)", level: 90 },
    ],
  },
  {
    category: "Data & Infrastructure",
    icon: "Database",
    skills: [
      { name: "Neo4j / Graph Theory", level: 93 },
      { name: "Pinecone / Vector DBs", level: 92 },
      { name: "PostgreSQL / MongoDB", level: 90 },
      { name: "Docker & CI/CD", level: 88 },
      { name: "S3 / Nginx", level: 85 },
    ],
  },
];
