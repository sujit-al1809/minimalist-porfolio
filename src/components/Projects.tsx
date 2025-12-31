"use client";
import React from 'react';
import { Bot, Cpu, Layers } from "lucide-react";

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
        {/* Featured Project */}
        <div
          className="block-card span-2"
          onMouseMove={handleMouseMove}
        >
          <div className="card-spotlight" />
          <Bot size={40} color="#ccff00" style={{ marginBottom: '1.5rem', position: 'relative', zIndex: 2 }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 className="block-title">FinsightAI</h3>
            <p className="block-desc" style={{ maxWidth: '500px' }}>
              Autonomous financial agent swarm powered by Google Gemini & Vertex AI.
              Capable of real-time market analysis and personalized investment insights.
            </p>
          </div>

          <div className="block-actions">
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <span className="tag-pill">Python</span>
              <span className="tag-pill">GenAI</span>
              <span className="tag-pill">GCP</span>
            </div>
            <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>View Case Study &rarr;</span>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className="block-card"
          onMouseMove={handleMouseMove}
        >
          <div className="card-spotlight" />
          <Cpu size={32} color="#ccff00" style={{ marginBottom: '1.5rem', position: 'relative', zIndex: 2 }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 className="block-title">Smart Crop</h3>
            <p className="block-desc">
              IoT system for real-time agricultural analytics involving CV on Raspberry Pi.
            </p>
          </div>
          <div className="block-actions" style={{ marginTop: 'auto' }}>
            <span className="tag-pill">IoT & CV</span>
          </div>
        </div>

        {/* Project 3 */}
        <div
          className="block-card"
          onMouseMove={handleMouseMove}
        >
          <div className="card-spotlight" />
          <Layers size={32} color="#ccff00" style={{ marginBottom: '1.5rem', position: 'relative', zIndex: 2 }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 className="block-title">Arch-Ed Platform</h3>
            <p className="block-desc">
              Educational hub for architects with ML-driven course recommendations.
            </p>
          </div>
          <div className="block-actions" style={{ marginTop: 'auto' }}>
            <span className="tag-pill">Full Stack</span>
          </div>
        </div>

      </div>
    </section>
  );
}
