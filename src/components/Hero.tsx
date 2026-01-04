"use client";
import React from 'react';
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

// Placeholder photos matching the "rotated photo stack" vibe
const photos = [
  "sujit_laware_2.jpg", // Coding/Tech
  "sujit_al_2.jpg", // Speaking/Conference
  "sujit_al_1.jpg", // Laptop/Coffee
  "sujit_laware_1.png" // Team/Work
];

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.0 + (i * 0.1),
        duration: 0.8,
        ease: "easeOut" as const,
      },
    }),
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: i === 0 ? -6 : i === 1 ? 5 : i === 2 ? -4 : 3,
      transition: {
        delay: 1.4 + (i * 0.15),
        duration: 0.8,
        ease: "backOut" as const
      }
    })
  };

  return (
    <section className="container hero-wrapper">

      {/* LEFT COLUMN: CONTENT */}
      <div className="hero-content">
        {/* Status Pill */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="hero-badge-container"
          style={{ marginBottom: '0rem' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 16px',
            background: 'rgba(204,255,0,0.1)',
            border: '1px solid rgba(204,255,0,0.3)',
            borderRadius: '100px',
            fontSize: '0.9rem',
            color: 'var(--text-main)',
            fontWeight: 500
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              background: 'var(--accent)',
              borderRadius: '50%',
              boxShadow: '0 0 10px rgba(204, 255, 0, 0.6)',
              animation: 'pulse 2s infinite'
            }}></span>
            Available for new projects
          </div>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{
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
          }}
        >
          I built. shipped. scaled fast
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{
            fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
            color: 'var(--text-muted)',
            maxWidth: '100%',
            lineHeight: 1.6,
            marginBottom: '3rem',
            wordWrap: 'break-word'
          }}
        >
          <span style={{ color: 'var(--accent)' }}>Hello, Namaste, Vanakkam, Bonjour!</span>
          <br />
          I&apos;m Sujit, an IITM undergrad student. I&apos;ve worked at Zeex AI, Runverve, handled multiple freelance clients, and I&apos;m currently working on research projects at IITM.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="hero-buttons"
          style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}
        >

          <div className="social-icons" style={{ display: 'flex', gap: '1rem', marginRight: '0.5rem' }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>
              <Github size={24} className="hover:text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>
              <Linkedin size={24} className="hover:text-white" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>
              <Twitter size={24} className="hover:text-white" />
            </a>
          </div>

          <Link href="#projects" className="btn-shiny">
            View Work <ArrowRight size={18} />
          </Link>

          <Link href="#contact" className="text-link-arrow">
            Contact Me <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Ticker Removed as requested */}
      </div>

      {/* RIGHT COLUMN: FANNED GALLERY */}
      <div className="hero-visual">
        <div className="gallery-container">
          {photos.map((src, idx) => (
            <motion.div
              key={idx}
              className="tilted-card"
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={photoVariants}
              whileHover={{
                scale: 1.15,
                rotate: 0,
                y: -10,
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
            >
              <img src={src} alt={`Gallery image ${idx + 1}`} />
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
