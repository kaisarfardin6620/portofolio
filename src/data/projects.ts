export interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  icon: string;
}

export const projects: Project[] = [
  {
    title: "Explainable Hybrid KG-RAG",
    description:
      "A Hybrid RAG system combining vector search (Pinecone) and knowledge graph traversal (Neo4j) with NLI-based validation to reduce hallucinations.",
    tech: ["FastAPI", "Neo4j", "Pinecone", "LLMs", "NLI"],
    gradient: "from-cyan-500/20 to-blue-600/20",
    icon: "Workflow",
  },
  {
    title: "3D Head Scanner Backend",
    description:
      "Multimodal AI pipeline for 3D head reconstruction and biometric analysis using Django, Celery, and geometric landmark estimation.",
    tech: ["Django", "Celery", "Redis", "NumPy", "Trimesh"],
    gradient: "from-purple-500/20 to-pink-600/20",
    icon: "Eye",
  },
  {
    title: "Wingman AI Coach",
    description:
      "Real-time multimodal assistant (Text/Image/Audio) using OpenAI Vision/Whisper and Django Channels for live interaction.",
    tech: ["Django", "Channels", "Redis", "OpenAI", "WebSockets"],
    gradient: "from-green-500/20 to-emerald-600/20",
    icon: "MessageSquare",
  },
  {
    title: "FaceBuilder Platform",
    description:
      "Facial analysis engine computing symmetry and metrics via MediaPipe, featuring real-time feedback and async processing.",
    tech: ["OpenCV", "MediaPipe", "Django", "Redis", "Celery"],
    gradient: "from-orange-500/20 to-red-600/20",
    icon: "Eye",
  },
  {
    title: "MagicTale AI",
    description:
      "End-to-end storytelling pipeline integrating GPT-4o, DALL-E, and ElevenLabs for text, image, and voice synthesis.",
    tech: ["GPT-4o", "DALL-E", "ElevenLabs", "Django", "Celery"],
    gradient: "from-pink-500/20 to-violet-600/20",
    icon: "Image",
  },
  {
    title: "Rai Multimodal Platform",
    description:
      "High-concurrency AI backend supporting text, image, and audio with real-time response streaming and robust security.",
    tech: ["Django", "Channels", "Redis", "Celery", "WebSockets"],
    gradient: "from-blue-500/20 to-indigo-600/20",
    icon: "Workflow",
  },
  {
    title: "Reho AI Finance",
    description:
      "Financial analysis microservice providing real-time insights and risk modeling from transaction data using FastAPI and LLMs.",
    tech: ["FastAPI", "MongoDB", "Redis", "LLMs"],
    gradient: "from-emerald-500/20 to-teal-600/20",
    icon: "Code",
  },
];
