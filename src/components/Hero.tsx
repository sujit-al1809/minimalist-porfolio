"use client";
import React from 'react';
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

// Placeholder photos matching the "rotated photo stack" vibe
const photos = [
  "sujit_laware_2.jpg", // Coding/Tech
  "sujit_al_2.jpg", // Speaking/Conference
  "sujit_al_1.jpg", // Laptop/Coffee
  "sujit_laware_1.png" // Team/Work
];

export default function Hero() {
  return (
    <section className="container hero-wrapper">

      {/* LEFT COLUMN: CONTENT */}
      <div className="hero-content">
        {/* Status Pill */}
        <div className="hero-badge-container" style={{ marginBottom: '0rem' }}>
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
          fontSize: 'clamp(1.75rem, 6vw, 5.5rem)',
          fontWeight: 600,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          color: 'var(--text-main)',
          marginBottom: '1rem',
          maxWidth: '100%',
          wordWrap: 'break-word',
          overflowWrap: 'break-word'
        }}>
          I built. shipped. scaled fast
        </h1>

        <p style={{
          fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
          color: 'var(--text-muted)',
          maxWidth: '100%',
          lineHeight: 1.6,
          marginBottom: '3rem',
          wordWrap: 'break-word'
        }}>
          I'm Sujit, a multidisciplinary engineer specializing in
          High-Performance Web Apps, Edge Computing, and Cloud Infrastructure.
        </p>

        <div className="hero-buttons" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href="#projects" className="btn-shiny">
            View Work <ArrowRight size={18} />
          </Link>

          <Link href="#contact" className="text-link-arrow">
            Contact Me <ArrowRight size={16} />
          </Link>
        </div>

        {/* Ticker Removed as requested */}
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
