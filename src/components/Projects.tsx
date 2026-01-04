"use client";
import React from 'react';
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();

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
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">/ SELECTED WORKS</span>
        <h2>Engineering Portfolio</h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2.5rem' }}>
        {projects.map((project, idx) => (
          <Link href={`/projects/${project.slug}`} key={idx} style={{ display: 'block' }}>
            <motion.div
              className="block-card group"
              onMouseMove={handleMouseMove}
              style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '450px',
                padding: '0',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="card-spotlight" />


              {/* Image Containter */}
              <div style={{
                height: '220px',
                width: '100%',
                overflow: 'hidden',
                position: 'relative'
              }}>
                {/* Overlay Gradient */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, width: '100%', height: '100%',
                  background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 100%)',
                  zIndex: 2,
                  transition: 'background 0.3s'
                }} className="group-hover:bg-black/40"></div>

                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
                  }}
                  className="project-img"
                />

                {/* Metrics Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  zIndex: 3,
                  padding: '6px 12px',
                  background: 'rgba(5, 5, 5, 0.7)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'var(--accent)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  borderRadius: '100px',
                  display: 'flex', alignItems: 'center', gap: '6px'
                }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 6px var(--accent)' }}></div>
                  {project.metrics}
                </div>

                {/* View Project Button (Visible on Hover) */}
                <div style={{
                  position: 'absolute',
                  top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                  zIndex: 4,
                  opacity: 0,
                  transition: 'opacity 0.3s, transform 0.3s'
                }} className="hover-view-btn">
                  <span style={{
                    background: 'var(--accent)', color: '#000', padding: '10px 20px', borderRadius: '100px', fontWeight: 600, fontSize: '0.9rem'
                  }}>View Case Study</span>
                </div>
              </div>

              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h3 className="block-title" style={{ marginBottom: 0, fontSize: '1.4rem' }}>{project.title}</h3>
                  <motion.div whileHover={{ rotate: 45, color: '#ccff00' }}>
                    <ArrowUpRight size={22} color="var(--text-muted)" />
                  </motion.div>
                </div>

                <p className="block-desc" style={{ marginBottom: '1.5rem', flex: 1, fontSize: '0.95rem' }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-main)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'rgba(255,255,255,0.03)',
                      fontWeight: 500
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow Border Bottom */}
              <div style={{
                height: '3px',
                width: '0%',
                background: 'var(--accent)',
                margin: '0 auto',
                transition: 'width 0.3s ease'
              }} className="hover-line"></div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
