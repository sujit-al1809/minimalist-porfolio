"use client";
import React from 'react';
import { Users, Rocket, Mic } from "lucide-react";

export default function Leadership() {

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="leadership" className="section container">
      <div className="section-header">
        <span className="section-label">/ COMMUNITY & LEADERSHIP</span>
        <h2>Beyond Code</h2>
      </div>

      <div className="bento-grid">
        <div
          className="block-card span-2"
          onMouseMove={handleMouseMove}
        >
          <div className="card-spotlight" />
          <Rocket size={32} color="#ccff00" style={{ marginBottom: '1rem', position: 'relative', zIndex: 2 }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 className="block-title">Zeex AI</h3>
            <span style={{ color: '#ccff00', fontSize: '0.9rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>TECH LEAD / AI & CLOUD</span>
            <p className="block-desc">
              Led the technical team for a student startup backed by Nirmaan.
              Pre-incubated at IIT Madras. Architected the cloud infrastructure.
            </p>
          </div>
          <div className="block-actions">
            <span className="tag-pill">Startup</span>
            <span style={{ fontSize: '0.9rem', color: '#666' }}>APR 2025</span>
          </div>
        </div>

        <div
          className="block-card"
          onMouseMove={handleMouseMove}
        >
          <div className="card-spotlight" />
          <Users size={32} color="#ccff00" style={{ marginBottom: '1rem', position: 'relative', zIndex: 2 }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 className="block-title">Cloud Club</h3>
            <span style={{ color: '#ccff00', fontSize: '0.9rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>PRESIDENT / AWS IITM</span>
            <p className="block-desc">
              Spearheaded a community of 1,000+ members. Organized hackathons & workshops.
            </p>
          </div>
          <div className="block-actions" style={{ marginTop: 'auto', position: 'relative', zIndex: 2 }}>
            <span className="tag-pill">Community</span>
          </div>
        </div>

        <div
          className="block-card"
          onMouseMove={handleMouseMove}
        >
          <div className="card-spotlight" />
          <Mic size={32} color="#ccff00" style={{ marginBottom: '1rem', position: 'relative', zIndex: 2 }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 className="block-title">Paradox</h3>
            <span style={{ color: '#ccff00', fontSize: '0.9rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>COORDINATOR</span>
            <p className="block-desc">
              Managed sponsorships and logistics for IIT Madras's annual fest.
              Active GDG Chennai contributor.
            </p>
          </div>
          <div className="block-actions" style={{ marginTop: 'auto', position: 'relative', zIndex: 2 }}>
            <span className="tag-pill">Volunteer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
