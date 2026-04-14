export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "SparkTech Agency",
    role: "Jr AI Developer",
    period: "2025 — Present",
    description:
      "Architected modular monolith backends using Django 5 and FastAPI. Engineered high-concurrency AI pipelines by splitting Celery worker pools. Developed Hybrid KG-RAG systems integrating Neo4j and Pinecone.",
    tech: ["Django 5", "FastAPI", "Neo4j", "Pinecone", "Celery", "Redis"],
  },
  {
    company: "SparkTech Agency",
    role: "Trainee AI Developer",
    period: "May 2025 — Aug 2025",
    description:
      "Developed CV and NLP scripts using MediaPipe and NLP. Streamlined workflows by containerizing Python environments with Docker. Researched LLM context management strategies.",
    tech: ["Python", "MediaPipe", "Docker", "Jupyter", "OpenAI"],
  },
];
