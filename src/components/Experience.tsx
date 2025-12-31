"use client";
import React from 'react';
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";

const exp = [
  {
    role: "Research Intern",
    company: "RuTAG, IIT Madras",
    time: "Current",
    location: "Chennai, India",
    desc: "Developing Smart Heat Pump Dryers with IoT integration.",
    achievements: [
      "Designed ML models for energy optimization reducing power consumption by 30%",
      "Implemented real-time monitoring dashboard using React and WebSockets",
      "Published research paper on thermal efficiency improvements"
    ],
    technologies: ["Python", "IoT", "TensorFlow", "React"]
  },
  {
    role: "AI/ML Intern",
    company: "Runverve",
    time: "2024 - 2025",
    location: "Remote",
    desc: "Deployed personalized coaching AI models.",
    achievements: [
      "Built recommendation engine serving 10K+ users with 95% satisfaction rate",
      "Optimized model inference time by 60% using quantization techniques",
      "Integrated GPT-4 API for natural language coaching interactions"
    ],
    technologies: ["Python", "PyTorch", "FastAPI", "AWS"]
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
          <div key={i} className="block-card span-3" onMouseMove={handleMouseMove} style={{ padding: '2.5rem' }}>
            <div className="card-spotlight" />

            <div style={{ position: 'relative', zIndex: 2 }}>
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 className="block-title" style={{ marginBottom: '0.5rem' }}>
                    {e.role} @ <span style={{ color: '#ccff00' }}>{e.company}</span>
                  </h3>
                  <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Calendar size={14} /> {e.time}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={14} /> {e.location}
                    </span>
                  </div>
                </div>
                <div className="tag-pill" style={{ whiteSpace: 'nowrap' }}>
                  <Briefcase size={14} style={{ marginRight: '0.5rem' }} />
                  {e.time}
                </div>
              </div>

              {/* Description */}
              <p className="block-desc" style={{ marginBottom: '1.5rem' }}>{e.desc}</p>

              {/* Key Achievements */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{
                  fontSize: '0.9rem',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <TrendingUp size={16} /> Key Achievements
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>
                  {e.achievements.map((achievement, idx) => (
                    <li key={idx} style={{
                      paddingLeft: '1.5rem',
                      position: 'relative',
                      fontSize: '0.95rem',
                      color: 'var(--text-main)',
                      lineHeight: 1.6
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: 'var(--accent)',
                        fontWeight: 'bold'
                      }}>→</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Technologies Used
                </h4>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {e.technologies.map((tech, idx) => (
                    <span key={idx} className="tag-pill" style={{ fontSize: '0.85rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
