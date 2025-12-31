"use client";
import React from 'react';
import { Bot, Cpu, Layers, ArrowRight, Zap, Globe, Database } from "lucide-react";

const projects = [
  {
    title: "FinsightAI",
    description: "Autonomous financial agent swarm powered by Google Gemini & Vertex AI for real-time market analysis.",
    icon: Bot,
    tags: ["Python", "GenAI", "GCP"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    metrics: "98% accuracy"
  },
  {
    title: "Smart Crop",
    description: "IoT system for real-time agricultural analytics with CV on Raspberry Pi monitoring soil and crop health.",
    icon: Cpu,
    tags: ["IoT", "CV", "Python"],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
    metrics: "50+ farms"
  },
  {
    title: "Arch-Ed Platform",
    description: "Educational hub for architects with ML-driven course recommendations and 3D modeling tools.",
    icon: Layers,
    tags: ["Full Stack", "Next.js", "ML"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    metrics: "10K+ users"
  },
  {
    title: "CloudSync Pro",
    description: "Real-time data synchronization platform with edge computing capabilities for distributed systems.",
    icon: Database,
    tags: ["Cloud", "AWS", "Redis"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    metrics: "99.9% uptime"
  },
  {
    title: "Neural Search",
    description: "Semantic search engine using transformer models for intelligent document retrieval and analysis.",
    icon: Zap,
    tags: ["NLP", "PyTorch", "FastAPI"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop",
    metrics: "1M+ queries/day"
  },
  {
    title: "Global Connect",
    description: "Multi-language communication platform with real-time translation powered by advanced NLP models.",
    icon: Globe,
    tags: ["WebRTC", "Node.js", "AI"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    metrics: "50+ languages"
  }
];

export default function Projects() {

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="projects" className="section container">
      <div className="section-header">
        <span className="section-label">/ SELECTED WORKS</span>
        <h2>Engineering Portfolio</h2>
      </div>

      <div className="bento-grid">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="block-card"
            onMouseMove={handleMouseMove}
            style={{ display: 'flex', flexDirection: 'column', minHeight: '400px' }}
          >
            <div className="card-spotlight" />

            {/* Project Image */}
            <div style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              height: '180px',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '1.5rem',
              border: '1px solid var(--border-color)'
            }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>

            <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <project.icon size={28} color="#ccff00" />
                <h3 className="block-title" style={{ marginBottom: 0 }}>{project.title}</h3>
              </div>

              <p className="block-desc" style={{ marginBottom: '1rem', flex: 1 }}>
                {project.description}
              </p>

              {/* Project Metrics */}
              <div style={{
                marginBottom: '1.5rem',
                padding: '0.6rem 1rem',
                background: 'rgba(204,255,0,0.1)',
                border: '1px solid rgba(204,255,0,0.3)',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 500,
                color: 'var(--accent)',
                display: 'inline-block',
                alignSelf: 'flex-start'
              }}>
                {project.metrics}
              </div>

              {/* Tags and Link */}
              <div className="block-actions" style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag-pill">{tag}</span>
                  ))}
                </div>
                <span className="text-link-arrow" style={{ marginTop: '1rem', display: 'inline-flex' }}>
                  View Details <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
