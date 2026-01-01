"use client";
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', marginTop: '4rem', padding: '2rem 0', background: 'rgba(5, 5, 5, 0.8)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontWeight: 700, fontSize: '1.2rem', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
              SUJIT<span style={{ color: 'var(--accent)' }}>.AL</span>
            </span>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              Engineering digital experiences from the void.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}>
              <Github size={18} /> <span className="hide-mobile">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}>
              <Linkedin size={18} /> <span className="hide-mobile">LinkedIn</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}>
              <Twitter size={18} /> <span className="hide-mobile">Twitter</span>
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '1.5rem', borderTop: '1px dashed rgba(255,255,255,0.1)', flexWrap: 'wrap-reverse', gap: '1rem' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} Sujit AL. All Systems Nominal.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--accent)', background: 'rgba(204,255,0,0.05)', padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid rgba(204,255,0,0.1)' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 6px var(--accent)' }}></div>
            OPERATIONAL
          </div>
        </div>

      </div>
    </footer>
  );
}
