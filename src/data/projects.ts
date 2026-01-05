
import { Bot, Cpu, Layers, Zap, Globe, Database } from "lucide-react";

export const projects = [
    {
        slug: "architecture-academics-platform",
        title: "Architecture Academics Platform",
        description: "Cloud-native educational hub for architects with ML-driven course recommendations.",
        icon: Layers,
        tags: ["Next.js", "FastAPI", "AWS", "Docker"],
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
        metrics: "Scalable Full-Stack",
        longDescription: "Designed and deployed a cloud-native, scalable full-stack platform for architecture students and professionals. It supports courses, jobs, competitions, workshops, and discussion forums. Architected RESTful backend services and implemented a modular system design to ensure scalability, maintainability, and efficient content management.",
        features: [
            "ML-driven course recommendations",
            "Interactive 3D modeling workspace via web",
            "Job and competition portal",
            "Discussion forums",
            "Scalable microservices architecture"
        ],
        techStack: ["Next.js", "FastAPI", "AWS (S3, Lambda, RDS)", "Docker", "PostgreSQL", "Redis"]
    },
    {
        slug: "finsight-ai",
        title: "FinsightAI",
        description: "Autonomous financial agent swarm powered by Google Gemini & Vertex AI.",
        icon: Bot,
        tags: ["GenAI", "Google ADK", "Vertex AI"],
        image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=800&auto=format&fit=crop",
        metrics: "Global Hackathon Finalist",
        longDescription: "Developed FinsightAI, a modular multi-agent financial assistant using Google ADK and Gemini LLMs to deliver personalized financial insights from real-time FI MCP data. Selected for the final round of the world’s largest Agentic AI Hackathon 2025 by Google.",
        features: [
            "Real-time market data processing",
            "Multi-agent collaboration swarm",
            "Predictive analytics using Google Gemini",
            "Automated report generation",
            "Sentiment analysis from news sources"
        ],
        techStack: ["Python", "Google Vertex AI", "Google Gemini Pro", "Google ADK", "Flask", "Vue.js"]
    },
    {
        slug: "ml-fitness-tracker",
        title: "ML Fitness Tracker",
        description: "ML system using sensor data to detect exercises and count repetitions.",
        icon: Zap,
        tags: ["Machine Learning", "IoT", "FastAPI"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
        metrics: "95% Accuracy",
        longDescription: "Built an ML-based fitness tracking system using sensor data (accelerometers, gyroscopes) to accurately detect movements and count repetitions during free-weight exercises. Developed a web dashboard for real-time performance analytics and feedback.",
        features: [
            "Movement detection using accelerometer data",
            "Repetition counting algorithm",
            "Real-time analytics dashboard",
            "Exercise form correction feedback",
            "Historical progress tracking"
        ],
        techStack: ["Python", "Scikit-Learn", "Sensor Data Processing", "FastAPI", "React", "WebSockets"]
    },
    {
        slug: "pharmacy-automation",
        title: "Pharmacy Automation",
        description: "OCR + LLM system for digitizing prescriptions and AI medicine recommendations.",
        icon: Database,
        tags: ["OCR", "LLMs", "Vector DB"],
        image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=800&auto=format&fit=crop",
        metrics: "Automated Digitization",
        longDescription: "Built an OCR + LLM-based automation system for digitizing handwritten prescriptions and an AI-driven medicine recommendation engine using vector search for safe generic alternatives. Includes a smart inventory dashboard with real-time tracking and agentic AI SQL insights.",
        features: [
            "Handwritten prescription digitization (OCR)",
            "AI medicine recommendation engine",
            "Generic alternative finder",
            "Smart inventory dashboard",
            "Agentic SQL insights"
        ],
        techStack: ["Python", "OCR (Tesseract/Vision)", "LLMs", "Vector Databases (Pinecone/Qdrant)", "FastAPI", "SQL"]
    },
    {
        slug: "deepecho",
        title: "DeepEcho",
        description: "Voice cloning and dubbing tool using RVC architecture for high-fidelity audio synthesis.",
        icon: Zap,
        tags: ["Audio AI", "Python", "RVC"],
        image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=800&auto=format&fit=crop",
        metrics: "44.1kHz",
        longDescription: "DeepEcho allows creators to clone voices and dub content with incredible fidelity using Retrieval-based Voice Conversion (RVC) architecture. It empowers content creators, filmmakers, and game developers to generate high-quality voiceovers and character voices without the need for expensive recording sessions.",
        features: [
            "High-fidelity voice cloning",
            "Real-time voice conversion",
            "Multi-speaker support",
            "Audio denoising and enhancement",
            "API for integration"
        ],
        techStack: ["Python", "PyTorch", "RVC", "FastAPI", "FFmpeg", "React"]
    },
    {
        slug: "neural-search",
        title: "Neural Search",
        description: "Semantic search engine using transformer models for intelligent document retrieval.",
        icon: Zap,
        tags: ["NLP", "PyTorch", "FastAPI"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
        metrics: "1M+ queries",
        longDescription: "Neural Search represents the next generation of information retrieval, moving beyond keyword matching to understanding the semantic meaning behind queries. Powered by state-of-the-art transformer models (BERT/RoBERTa), it provides highly relevant search results even for complex or ambiguous queries.",
        features: [
            "Semantic vector search",
            "Context-aware query understanding",
            "Automatic document summarization",
            "Multi-language support",
            "Relevance feedback loop"
        ],
        techStack: ["PyTorch", "HuggingFace Transformers", "Qdrant Vector DB", "FastAPI", "React", "Docker"]
    }
];
