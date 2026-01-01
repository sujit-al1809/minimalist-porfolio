"use client";
import React from 'react';
import { Terminal, Globe, Code, Box, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Core Stack",
    icon: Code,
    items: ["Python", "JavaScript", "TypeScript", "C++", "SQL"]
  },
  {
    title: "AI & ML",
    icon: Cpu,
    items: ["PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "LangChain"]
  },
  {
    title: "Full Stack",
    icon: Globe,
    items: ["Next.js", "React", "Node.js", "FastAPI", "PostgreSQL"]
  },
  {
    title: "DevOps & Cloud",
    icon: Box,
    items: ["Docker", "Kubernetes", "AWS", "GCP", "Git"]
  }
];

export default function About() {

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="about" className="section container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">/ IDENTITY</span>
        <h2>The Developer</h2>
      </motion.div>

      <div className="bento-grid">
        <motion.div
          className="block-card span-2"
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="card-spotlight" />
          <Terminal size={40} color="#ccff00" style={{ marginBottom: '1.5rem', position: 'relative', zIndex: 2 }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 className="block-title">Hybrid Engineer</h3>
            <p className="block-desc" style={{ maxWidth: '600px', fontSize: '1.05rem', lineHeight: '1.7' }}>
              I exist in the grey area between <span style={{ color: 'var(--text-main)', borderBottom: '1px dashed var(--accent)' }}>hardware constraints</span> and <span style={{ color: 'var(--text-main)', borderBottom: '1px dashed var(--accent)' }}>software possibilities</span>.
              <br /><br />
              Pursuing a double degree at <strong>SRM (Electronics)</strong> and <strong>IIT Madras (Data Science)</strong>.
              I don't just write code; I architect systems that bridge the physical and digital worlds.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="block-card"
          onMouseMove={handleMouseMove}
          style={{ padding: 0, overflow: 'hidden', position: 'relative', minHeight: '300px' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="card-spotlight" />

          {/* Map Overlay for Acid Effect */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            background: 'linear-gradient(135deg, rgba(204, 255, 0, 0.1), rgba(0,0,0,0.6))',
            pointerEvents: 'none',
            zIndex: 2,
            mixBlendMode: 'overlay'
          }}></div>

          <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            zIndex: 1
          }}>
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0, height: '100%', width: '100%', filter: 'grayscale(100%) invert(90%) contrast(1.2)' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089943312!2d80.06892495!3d13.0826802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              title="Chennai Location"
            />
          </div>

          <div style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '1.5rem',
            zIndex: 3,
            background: 'rgba(10, 10, 10, 0.85)',
            backdropFilter: 'blur(8px)',
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid rgba(204,255,0,0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)' }}></div>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', letterSpacing: '0.05em' }}>CHENNAI, IN</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="block-card span-3"
          onMouseMove={handleMouseMove}
          style={{ display: 'block' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="card-spotlight" />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 className="block-title" style={{ marginBottom: '2rem' }}>Tech Arsenal</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              {skillCategories.map((cat, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <cat.icon size={18} color="var(--accent)" />
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', margin: 0 }}>{cat.title}</h4>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {cat.items.map(skill => (
                      <span key={skill} style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                        background: 'rgba(255,255,255,0.03)',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '4px',
                        border: '1px solid transparent',
                        transition: 'all 0.2s ease'
                      }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'var(--accent)';
                          e.currentTarget.style.color = 'var(--text-main)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'transparent';
                          e.currentTarget.style.color = 'var(--text-muted)';
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
