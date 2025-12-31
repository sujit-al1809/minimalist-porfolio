"use client";
import React from 'react';

const exp = [
  {
    role: "Research Intern",
    company: "RuTAG, IIT Madras",
    time: "Current",
    desc: "Developing Smart Heat Pump Dryers with IoT integration."
  },
  {
    role: "AI/ML Intern",
    company: "Runverve",
    time: "2024 - 2025",
    desc: "Deployed personalized coaching AI models."
  }
];

export default function Experience() {

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="experience" className="section container">
      <div className="section-header">
        <span className="section-label">/ TIMELINE</span>
        <h2>Experience</h2>
      </div>

      <div className="bento-grid">
        {exp.map((e, i) => (
          <div key={i} className="block-card span-3" onMouseMove={handleMouseMove} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2rem 3rem' }}>
            <div className="card-spotlight" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', position: 'relative', zIndex: 2 }}>
              <h3 className="block-title" style={{ marginBottom: 0 }}>{e.role} @ <span style={{ color: '#ccff00' }}>{e.company}</span></h3>
              <p className="block-desc">{e.desc}</p>
            </div>
            <div className="tag-pill" style={{ whiteSpace: 'nowrap', position: 'relative', zIndex: 2 }}>{e.time}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
