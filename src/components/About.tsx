"use client";
import React from 'react';
import { Terminal, Globe, Code, Box } from "lucide-react";

/* 
  Using simpleicons.org for official logos. 
  slugs are generally lowercase name. 
  Some checks: 
  - c -> c 
  - c++ -> cplusplus
  - next.js -> nextdotjs
  - scikit -> scikitlearn
  - pytorch -> pytorch
  - nodejs -> nodedotjs
  - vue js -> vuedotjs
  - amazonwebservices -> amazonwebservices ? aws -> aws
  - googlecloud -> googlecloud
*/

const skillCategories = [
  {
    title: "Languages",
    items: [
      { name: "Python", slug: "python" },
      { name: "C", slug: "c" },
      { name: "JavaScript", slug: "javascript" },
      { name: "SQL", slug: "mysql" }, // Using generic or MySQL
      { name: "Bash", slug: "gnubash" },
      { name: "Java", slug: "openjdk" } // or java
    ]
  },
  {
    title: "Frameworks",
    items: [
      { name: "Scikit", slug: "scikitlearn" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "Django", slug: "django" },
      { name: "Flask", slug: "flask" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "React", slug: "react" },
      { name: "Vue.js", slug: "vuedotjs" }
    ]
  },
  {
    title: "Tools",
    items: [
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "Docker", slug: "docker" },
      { name: "Git", slug: "git" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MySQL", slug: "mysql" },
      { name: "SQLite", slug: "sqlite" },
      { name: "GitHub Actions", slug: "githubactions" },
      { name: "Jenkins", slug: "jenkins" },
      { name: "GitLab", slug: "gitlab" }
    ]
  },
  {
    title: "Platforms",
    items: [
      { name: "Linux", slug: "linux" },
      { name: "AWS", slug: "amazonaws" },
      { name: "GCP", slug: "googlecloud" },
      { name: "Arduino", slug: "arduino" },
      { name: "Raspberry Pi", slug: "raspberrypi" },
      { name: "Streamlit", slug: "streamlit" },
      { name: "Hugging Face", slug: "huggingface" }
    ]
  }
];

// Soft skills don't have official tech logos usually, we'll use text or generic icons
const softSkills = ["Leadership", "Event Management", "Writing", "Public Speaking", "Time Management"];

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
      <div className="section-header">
        <span className="section-label">/ IDENTITY</span>
        <h2>The Developer</h2>
      </div>

      <div className="bento-grid">
        <div className="block-card span-2" onMouseMove={handleMouseMove}>
          <div className="card-spotlight" />
          <Code size={40} color="#ccff00" style={{ marginBottom: '1.5rem', position: 'relative', zIndex: 2 }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 className="block-title">Hybrid Engineer</h3>
            <p className="block-desc" style={{ maxWidth: '600px' }}>
              I exist in the grey area between hardware constraints and software possibilities.
              Pursuing a double degree at <strong>SRM (Electronics)</strong> and <strong>IIT Madras (Data Science)</strong>.
              I don't just write code; I architect systems.
            </p>
          </div>
        </div>

        <div className="block-card" onMouseMove={handleMouseMove} style={{ padding: 0, overflow: 'hidden', position: 'relative' }}>
          <div className="card-spotlight" />

          {/* Google Maps Embed */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            minHeight: '300px',
            zIndex: 2
          }}>
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px', filter: 'grayscale(20%) contrast(1.1)' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089943312!2d80.06892495!3d13.0826802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              title="Chennai Location"
            />

            {/* Compact Info Overlay */}
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              background: 'rgba(0,0,0,0.92)',
              padding: '1rem 1.25rem',
              borderRadius: '12px',
              zIndex: 3,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(204, 255, 0, 0.3)',
              maxWidth: '220px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
            }}>
              <p style={{
                margin: '0 0 0.5rem 0',
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.6)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>Currently at</p>
              <p style={{
                margin: 0,
                fontSize: '1rem',
                color: '#ccff00',
                fontWeight: 700
              }}>Chennai, India</p>
              <p style={{
                marginTop: '0.35rem',
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.7)',
                fontWeight: 500
              }}>
                Open to remote work
              </p>
            </div>
          </div>
        </div>

        <div className="block-card span-3" onMouseMove={handleMouseMove} style={{ display: 'block' }}>
          <div className="card-spotlight" />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 className="block-title" style={{ marginBottom: '2rem' }}>Tech Arsenal</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

              {skillCategories.map((cat, idx) => (
                <div key={idx}>
                  <h4 style={{
                    fontSize: '1rem', color: 'var(--accent)', textTransform: 'uppercase',
                    letterSpacing: '0.05em', marginBottom: '1rem', fontWeight: 600
                  }}>• {cat.title}</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    {cat.items.map(skill => (
                      <div key={skill.name} className="skill-pill" style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        {/* Fallback to simple circle if image fails, but let's try mostly working slugs */}
                        <img
                          src={`https://cdn.simpleicons.org/${skill.slug}/ffffff`}
                          style={{ width: '16px', height: '16px', opacity: 0.9 }}
                          alt=""
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                        <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Soft Skills */}
              <div>
                <h4 style={{
                  fontSize: '1rem', color: 'var(--accent)', textTransform: 'uppercase',
                  letterSpacing: '0.05em', marginBottom: '1rem', fontWeight: 600
                }}>• Soft Skills</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {softSkills.map(skill => (
                    <span key={skill} className="skill-pill" style={{
                      padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--border-color)', borderRadius: '8px',
                      fontSize: '0.9rem', fontWeight: 500
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
