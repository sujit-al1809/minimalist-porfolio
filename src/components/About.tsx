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

        <div className="block-card" onMouseMove={handleMouseMove}>
          <div className="card-spotlight" />
          <Globe size={32} color="#ccff00" style={{ marginBottom: '1.5rem', position: 'relative', zIndex: 2 }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 className="block-title">Location</h3>
            <p className="block-desc">Based in Chennai, India.</p>
            <p className="block-desc" style={{ marginTop: '0.25rem' }}>Open to remote work.</p>
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
