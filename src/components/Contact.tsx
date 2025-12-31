"use client";
import React from 'react';
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="contact" className="section container">
      <div
        className="block-card span-3"
        onMouseMove={handleMouseMove}
        style={{ textAlign: 'center', padding: '5rem 2rem', alignItems: 'center', justifyContent: 'center' }}
      >
        <div className="card-spotlight" />
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>Ready to collaborate?</h2>
          <p style={{ color: '#888', maxWidth: '500px', marginBottom: '3rem', fontSize: '1.2rem' }}>
            I'm currently looking for new opportunities in AI Engineering and Full Stack Development.
          </p>

          <a href="mailto:contact@sujit.dev" className="btn-shiny accent">
            <Mail size={20} /> Get in Touch <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
