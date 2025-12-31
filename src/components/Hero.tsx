"use client";
import React from 'react';
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

// Placeholder photos matching the "rotated photo stack" vibe
const photos = [
  "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1000&auto=format&fit=crop", // Coding/Tech
  "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=1000&auto=format&fit=crop", // Speaking/Conference
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop", // Team/Work
  "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1000&auto=format&fit=crop"  // Laptop/Coffee
];

export default function Hero() {
  return (
    <section className="container hero-wrapper">

      {/* LEFT COLUMN: CONTENT */}
      <div className="hero-content">
        {/* Status Pill */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 16px',
            background: 'rgba(128,128,128,0.1)',
            border: '1px solid var(--border-color)',
            borderRadius: '100px',
            fontSize: '0.9rem',
            color: 'var(--text-muted)'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              background: 'var(--accent)',
              borderRadius: '50%',
              boxShadow: '0 0 10px rgba(204, 255, 0, 0.4)'
            }}></span>
            Available for new projects
          </div>
        </div>

        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(3rem, 7vw, 5.5rem)',
          fontWeight: 600,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          color: 'var(--text-main)',
          marginBottom: '1rem',
          maxWidth: '900px'
        }}>
          I built. shipped. scaled fast <br />
        </h1>

        <p style={{
          fontSize: '1.15rem',
          color: 'var(--text-muted)',
          maxWidth: '580px',
          lineHeight: 1.6,
          marginBottom: '3rem'
        }}>
          I'm Sujit, a multidisciplinary engineer specializing in
          High-Performance Web Apps, Edge Computing, and Cloud Infrastructure.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href="#projects" className="btn-shiny">
            View Work <ArrowRight size={18} />
          </Link>

          <Link href="#contact" className="text-link-arrow">
            Contact Me <ArrowRight size={16} />
          </Link>
        </div>

        {/* WORK DONE / TESTIMONIAL TICKER */}
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', width: '100%' }}>
          <div style={{
            display: 'flex',
            gap: '3rem',
            alignItems: 'center',
            overflow: 'scroll',
            scrollbarWidth: 'none',
            whiteSpace: 'nowrap',
            opacity: 0.9
          }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Star size={14} fill="currentColor" color="var(--accent)" /> 10+ Projects Delivered
            </span>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <img src="https://avatar.vercel.sh/leerob" style={{ width: '24px', height: '24px', borderRadius: '50%' }} alt="" /> Trusted by Startups
            </span>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Star size={14} fill="currentColor" color="var(--accent)" /> 5-Star Client Reviews
            </span>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <img src="https://avatar.vercel.sh/rauchg" style={{ width: '24px', height: '24px', borderRadius: '50%' }} alt="" /> Full Stack Excellence
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: FANNED GALLERY */}
      <div className="hero-visual">
        <div className="gallery-container">
          {photos.map((src, idx) => (
            <div key={idx} className="tilted-card">
              <img src={src} alt={`Gallery image ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
