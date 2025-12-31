"use client";
import React from 'react';
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="container" style={{
      minHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: '64px' /* Offset for fixed navbar */
    }}>

      {/* Status Pill */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '8px 16px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '100px',
          fontSize: '0.9rem',
          color: '#e5e5e5'
        }}>
          <span style={{
            width: '8px',
            height: '8px',
            background: '#ccff00',
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
        color: '#fff',
        marginBottom: '2rem',
        maxWidth: '900px'
      }}>
        Building intelligent <br />
        systems for the web.
      </h1>

      <p style={{
        fontSize: '1.25rem',
        color: '#888',
        maxWidth: '580px',
        lineHeight: 1.6,
        marginBottom: '3rem'
      }}>
        I'm Sujit, a multidisciplinary engineer specializing in
        High-Performance Web Apps, Edge Computing, and Cloud Infrastructure.
      </p>

      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link href="#projects" style={{
          background: '#fff',
          color: '#000',
          padding: '1rem 2rem',
          borderRadius: '100px',
          fontWeight: 600,
          fontSize: '1rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'transform 0.2s'
        }}>
          View Work <ArrowRight size={18} />
        </Link>

        <Link href="#contact" style={{
          color: '#fff',
          padding: '1rem 2rem',
          fontSize: '1rem',
          fontWeight: 500,
        }}>
          Contact Me
        </Link>
      </div>
    </section>
  );
}
