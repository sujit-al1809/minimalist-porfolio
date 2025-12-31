"use client";
import React from 'react';
import { Terminal, Globe, Code, Cloud, Server, Database, Box } from "lucide-react";

export default function About() {

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  const skills = [
    { name: "Python", icon: <Terminal size={14} /> },
    { name: "C++", icon: <Code size={14} /> },
    { name: "PyTorch", icon: <Box size={14} /> },
    { name: "Next.js", icon: <Globe size={14} /> },
    { name: "Docker", icon: <ContainerIcon size={14} /> },
    { name: "AWS", icon: <Cloud size={14} /> },
    { name: "Kubernetes", icon: <Server size={14} /> }
  ];

  return (
    <section id="about" className="section container">
      <div className="section-header">
        <span className="section-label">/ IDENTITY</span>
        <h2>The Developer</h2>
      </div>

      <div className="bento-grid">
        <div className="block-card span-2" onMouseMove={handleMouseMove}>
          <div className="card-spotlight" />
          <Code size={40} color="#ccff00" style={{ marginBottom: '1.5rem', position: 'relative', zIndex: 2 }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 className="block-title">Hybrid Engineer</h3>
            <p className="block-desc" style={{ maxWidth: '600px' }}>
              I exist in the grey area between hardware constraints and software possibilities.
              Pursuing a double degree at <strong>SRM (Electronics)</strong> and <strong>IIT Madras (Data Science)</strong>.
              I don't just write code; I architect systems.
            </p>
          </div>
        </div>

        <div className="block-card" onMouseMove={handleMouseMove}>
          <div className="card-spotlight" />
          <Globe size={32} color="#ccff00" style={{ marginBottom: '1.5rem', position: 'relative', zIndex: 2 }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 className="block-title">Location</h3>
            <p className="block-desc">Based in Chennai, India.</p>
            <p className="block-desc" style={{ marginTop: '0.25rem' }}>Open to remote work.</p>
          </div>
        </div>

        <div className="block-card span-3" onMouseMove={handleMouseMove}>
          <div className="card-spotlight" />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 className="block-title" style={{ marginBottom: '1.5rem' }}>Core Stack</h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {skills.map(s => (
                <span key={s.name} className="skill-pill">
                  {s.icon} {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple Box icon wrapper since Lucide might not have Container
function ContainerIcon({ size }: { size: number }) {
  return <Box size={size} />;
}
