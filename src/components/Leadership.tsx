"use client";
import React from 'react';
import { Users, Rocket, Mic } from "lucide-react";
import { motion } from "framer-motion";

export default function Leadership() {

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  const cards = [
    {
      icon: Users,
      title: "AWS Cloud Club IIT Madras",
      role: "CLUB LEAD",
      desc: "ranked among the top 200 worldwide. Managing a 1,000+ member student community and organizing cloud/AI workshops.",
      tag: "Community",
      extra: "IIT Madras",
      span: "span-2",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Rocket,
      title: "Zeex AI",
      role: "TECHNICAL LEAD",
      desc: "Building ML pipelines, deployment workflows, and scalable backend for a student startup.",
      tag: "Startup",
      extra: "Nirmaan",
      span: "",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      icon: Mic,
      title: "Paradox / TechXConf",
      role: "COORDINATOR",
      desc: "Coordinated sponsorships for Paradox (IITM Fest). Crew member at TechXConf 2024 & GDG Cloud Days.",
      tag: "Events",
      extra: "Chennai",
      span: "",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Mic,
      title: "Google Cloud Day",
      role: "SPEAKER",
      desc: "Delivered a keynote on 'Scaling AI Agents on Vertex AI' to an audience of 500+ developers.",
      tag: "Speaking",
      extra: "Chennai",
      span: "span-2",
      image: "https://images.unsplash.com/photo-1475721027767-f421355f0881?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="leadership" className="section container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">/ COMMUNITY & LEADERSHIP</span>
        <h2>Beyond Code</h2>
      </motion.div>

      <div className="bento-grid">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={`block-card ${card.span}`}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            <div className="card-spotlight" />

            {/* Background Image with Overlay */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              zIndex: 0
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: 'linear-gradient(to top, rgba(5,5,5,0.95) 20%, rgba(5,5,5,0.7) 100%)',
                zIndex: 2
              }}></div>
              <img
                src={card.image}
                alt={card.title}
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'grayscale(100%)',
                  transition: 'transform 0.5s ease',
                  opacity: 0.6
                }}
              />
            </div>

            <card.icon size={32} color="#ccff00" style={{ marginBottom: '1rem', position: 'relative', zIndex: 2 }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h3 className="block-title">{card.title}</h3>
              <span style={{ color: '#ccff00', fontSize: '0.9rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>{card.role}</span>
              <p className="block-desc">
                {card.desc}
              </p>
            </div>
            <div className="block-actions" style={{ marginTop: 'auto', position: 'relative', zIndex: 2 }}>
              <span className="tag-pill" style={{ background: 'rgba(0,0,0,0.5)', borderColor: 'rgba(255,255,255,0.2)' }}>{card.tag}</span>
              {card.extra && <span style={{ fontSize: '0.9rem', color: '#aaa', marginLeft: '1rem' }}>{card.extra}</span>}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
