"use client";
import React from 'react';
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const exp = [
  {
    role: "Research Intern",
    company: "RuTAG, IIT Madras",
    time: "May 2025 - Present",
    location: "Chennai, India",
    desc: "Developing AI-Based Food Processing System & Weaving Code Conversion.",
    achievements: [
      "Built CV models for cardamom quality/moisture estimation for smart dryers",
      "Developed image-processing system (React + OpenCV) to convert designs to weaving code",
      "Contributed to a provisional patent filing"
    ],
    technologies: ["Python", "OpenCV", "React", "IoT"]
  },
  {
    role: "AI/ML and Cloud Engineering Intern",
    company: "Runverve",
    time: "Dec 2024 - Apr 2025",
    location: "Remote",
    desc: "Built AI-driven features for Verve Coach and Verve Doc.",
    achievements: [
      "Deployed ML models into production APIs using Flask and FastAPI",
      "Led backend deployment and optimization on AWS (EC2, Lambda, S3)",
      "Ensured scalable, reliable systems for personalized coaching and healthcare"
    ],
    technologies: ["Python", "FastAPI", "AWS", "Flask"]
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
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">/ TIMELINE</span>
        <h2>Experience</h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        {exp.map((e, i) => (
          <motion.div
            key={i}
            className="block-card group experience-card-grid"
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="card-spotlight" />

            {/* Left Column: Time & Location */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h4 style={{
                fontSize: '1.2rem',
                color: 'var(--accent)',
                marginBottom: '0.5rem',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.05em'
              }}>
                {e.company}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={14} /> {e.time}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={14} /> {e.location}
                </div>
              </div>
            </div>

            {/* Right Column: Role & Details */}
            <div className="experience-card-right" style={{ position: 'relative', zIndex: 2, borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {e.role}
              </h3>

              <p className="block-desc" style={{ marginBottom: '1.5rem' }}>{e.desc}</p>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 1.5rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                {e.achievements.map((item, idx) => (
                  <li key={idx} style={{ position: 'relative', paddingLeft: '1.25rem', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    <span style={{ position: 'absolute', left: 0, top: '9px', width: '4px', height: '4px', background: 'var(--accent)', borderRadius: '50%' }}></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {e.technologies.map((tech, idx) => (
                  <span key={idx} style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border-color)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '100px',
                    background: 'rgba(255,255,255,0.02)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
