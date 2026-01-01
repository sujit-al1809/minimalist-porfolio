
import { Bot, Cpu, Layers, Zap, Globe, Database } from "lucide-react";

export const projects = [
    {
        slug: "finsight-ai",
        title: "FinsightAI",
        description: "Autonomous financial agent swarm powered by Google Gemini & Vertex AI for real-time market analysis.",
        icon: Bot,
        tags: ["Python", "GenAI", "GCP"],
        image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=800&auto=format&fit=crop",
        metrics: "98% accuracy",
        longDescription: "FinsightAI is a cutting-edge autonomous financial agent swarm designed to revolutionize real-time market analysis. Leveraging the power of Google Gemini and Vertex AI, it processes vast amounts of financial data to identify trends, predict market movements, and provide actionable insights with unprecedented speed and accuracy. The system is built on a scalable architecture that allows multiple agents to collaborate, cross-verify information, and evolve their strategies based on market conditions.",
        features: [
            "Real-time market data processing",
            "Multi-agent collaboration swarm",
            "Predictive analytics using Google Gemini",
            "Automated report generation",
            "Sentiment analysis from news sources"
        ],
        techStack: ["Python", "Google Vertex AI", "Google Gemini Pro", "Docker", "FastAPI", "React"]
    },
    {
        slug: "smart-crop",
        title: "Smart Crop",
        description: "IoT system for real-time agricultural analytics with CV on Raspberry Pi monitoring soil and crop health.",
        icon: Cpu,
        tags: ["IoT", "CV", "Python"],
        image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=800&auto=format&fit=crop",
        metrics: "50+ farms",
        longDescription: "Smart Crop is an advanced IoT-based agricultural analytics platform designed to empower farmers with data-driven insights. By deploying disjoint sensors and Computer Vision enabled Raspberry Pi units across the field, the system monitors critical parameters like soil moisture, temperature, and crop health in real-time. The collected data is analyzed to detect early signs of disease, optimize irrigation schedules, and maximize crop yield, ensuring sustainable farming practices.",
        features: [
            "Real-time soil moisture monitoring",
            "Crop disease detection using Computer Vision",
            "Automated irrigation control",
            "Weather forecasting integration",
            "Mobile app for remote monitoring"
        ],
        techStack: ["Raspberry Pi", "OpenCV", "Python", "MQTT", "React Native", "Firebase"]
    },
    {
        slug: "arch-ed-platform",
        title: "Arch-Ed Platform",
        description: "Educational hub for architects with ML-driven course recommendations and 3D modeling tools.",
        icon: Layers,
        tags: ["Full Stack", "Next.js", "ML"],
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
        metrics: "10K+ users",
        longDescription: "Arch-Ed Platform is a comprehensive educational hub tailored for architecture students and professionals. It combines high-quality course content with an ML-driven recommendation engine to suggest personalized learning paths. The platform also features integrated web-based 3D modeling tools, allowing users to practice their design skills directly within the browser, fostering a seamless learn-by-doing environment.",
        features: [
            "ML-driven course recommendations",
            "Interactive 3D modeling workspace",
            "Community portfolio showcase",
            "Live expert mentorship sessions",
            "Gamified learning progress tracking"
        ],
        techStack: ["Next.js", "TypeScript", "Three.js", "TensorFlow.js", "MongoDB", "Auth0"]
    },
    {
        slug: "cloudsync-pro",
        title: "CloudSync Pro",
        description: "Real-time data synchronization platform with edge computing capabilities for distributed systems.",
        icon: Database,
        tags: ["Cloud", "AWS", "Redis"],
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
        metrics: "99.9% uptime",
        longDescription: "CloudSync Pro is a robust real-time data synchronization platform engineered for distributed systems requiring high availability and low latency. It utilizes edge computing nodes to cache and process data closer to the source, significantly reducing bandwidth usage and server load. Built on AWS and Redis, CloudSync Pro ensures seamless data consistency across global deployments, making it ideal for collaborative applications and IoT networks.",
        features: [
            "Real-time bi-directional sync",
            "Edge caching and processing",
            "Conflict resolution strategies",
            "Offline support and sync",
            "Comprehensive analytics dashboard"
        ],
        techStack: ["AWS Lambda", "Redis", "Node.js", "WebSockets", "Terraform", "Vue.js"]
    },
    {
        slug: "neural-search",
        title: "Neural Search",
        description: "Semantic search engine using transformer models for intelligent document retrieval and analysis.",
        icon: Zap,
        tags: ["NLP", "PyTorch", "FastAPI"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
        metrics: "1M+ queries",
        longDescription: "Neural Search represents the next generation of information retrieval, moving beyond keyword matching to understanding the semantic meaning behind queries. Powered by state-of-the-art transformer models (BERT/RoBERTa), it provides highly relevant search results even for complex or ambiguous queries. The engine is capable of ingesting and indexing vast document repositories, making it a powerful tool for enterprise knowledge management and research applications.",
        features: [
            "Semantic vector search",
            "Context-aware query understanding",
            "Automatic document summarization",
            "Multi-language support",
            "Relevance feedback loop"
        ],
        techStack: ["PyTorch", "HuggingFace Transformers", "Qdrant Vector DB", "FastAPI", "React", "Docker"]
    },
    {
        slug: "global-connect",
        title: "Global Connect",
        description: "Multi-language communication platform with real-time translation powered by advanced NLP models.",
        icon: Globe,
        tags: ["WebRTC", "Node.js", "AI"],
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
        metrics: "50+ langs",
        longDescription: "Global Connect breaks down language barriers by offering a seamless real-time communication platform with integrated translation capabilities. Using WebRTC for low-latency video and audio calls, combined with advanced NLP models for on-the-fly translation, it enables users from different linguistic backgrounds to converse naturally. Whether for business meetings or social connection, Global Connect ensures that language is no longer an obstacle.",
        features: [
            "Real-time speech-to-speech translation",
            "High-definition video calling",
            "Live subtitle generation",
            "Chat translation",
            "Meeting transcription and summary"
        ],
        techStack: ["WebRTC", "Socket.io", "Node.js", "OpenAI Whisper", "React", "MongoDB"]
    },
    {
        slug: "deepecho",
        title: "DeepEcho",
        description: "Voice cloning and dubbing tool using RVC architecture for high-fidelity audio synthesis.",
        icon: Zap,
        tags: ["Audio AI", "Python", "RVC"],
        image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=800&auto=format&fit=crop",
        metrics: "44.1kHz",
        longDescription: "DeepEcho allows creators to clone voices and dub content with incredible fidelity using Retrieval-based Voice Conversion (RVC) architecture. It empowers content creators, filmmakers, and game developers to generate high-quality voiceovers and character voices without the need for expensive recording sessions. The tool supports multiple languages and offers fine-grained control over pitch and emotion.",
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
        slug: "safenet",
        title: "SafeNet",
        description: "Intrusion detection system utilizing anomaly detection algorithms to identify network threats.",
        icon: Layers,
        tags: ["Security", "ML", "Network"],
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
        metrics: "95% catch",
        longDescription: "SafeNet is an intelligent Intrusion Detection System (IDS) that leverages machine learning specifically anomaly detection algorithms to safeguard network infrastructures. Unlike traditional signature-based systems, SafeNet learns the normal behavior patterns of the network and can identify novel zero-day attacks and subtle anomalies that would otherwise go unnoticed. It provides real-time alerts and detailed forensic reports to security teams.",
        features: [
            "Traffic anomaly detection",
            "Zero-day threat identification",
            "Real-time alert dashboard",
            "Network traffic visualization",
            "Automated threat mitigation"
        ],
        techStack: ["Python", "Scikit-Learn", "Wireshark (tshark)", "Elasticsearch", "Kibana", "InfluxDB"]
    }
];
