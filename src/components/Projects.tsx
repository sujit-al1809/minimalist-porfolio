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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {projects.map((project, idx) => (
          <Link href={`/projects/${project.slug}`} key={idx} style={{ display: 'block' }}>
            <motion.div
              className="block-card group"
              onMouseMove={handleMouseMove}
              style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '420px',
                padding: '0',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="card-spotlight" />


              {/* Image Containter */}
              <div style={{
                height: '200px',
                width: '100%',
                overflow: 'hidden',
                position: 'relative'
              }}>
                {/* Overlay Gradient */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, width: '100%', height: '100%',
                  background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)',
                  zIndex: 2
                }}></div>

                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  className="project-img"
                />

                {/* Metrics Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  right: '1rem',
                  zIndex: 3,
                  padding: '0.4rem 0.8rem',
                  background: 'rgba(204, 255, 0, 0.9)',
                  color: '#000',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  borderRadius: '4px',
                  textTransform: 'uppercase'
                }}>
                  {project.metrics}
                </div>
              </div>

              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <h3 className="block-title" style={{ marginBottom: 0, fontSize: '1.25rem' }}>{project.title}</h3>
                  <motion.div whileHover={{ rotate: 45, color: '#ccff00' }}>
                    <ArrowUpRight size={20} color="var(--text-muted)" />
                  </motion.div>
                </div>

                <p className="block-desc" style={{ marginBottom: '1.5rem', flex: 1, fontSize: '0.9rem' }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      border: '1px solid var(--border-color)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '100px',
                      background: 'rgba(255,255,255,0.02)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow Border Bottom */}
              <div style={{
                height: '2px',
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
