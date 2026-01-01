"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { Download, Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.body.setAttribute('data-theme', storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const ThemeIcon = () => {
    if (!mounted) return null;
    return theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />;
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, zIndex: 100,
        background: 'var(--navbar-bg)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div className="container" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px'
        }}>
          <Link href="/" style={{
            fontSize: '1rem', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-main)'
          }}>
            sujit.al
          </Link>

          {/* DESKTOP MENU */}
          <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <Link href="#about" className="nav-link-item">About</Link>
              <Link href="#projects" className="nav-link-item">Work</Link>
              <Link href="#blog" className="nav-link-item">Blog</Link>
              <Link href="#contact" className="nav-link-item">Contact</Link>
            </div>

            {/* DIVIDER */}
            <div style={{ width: '1px', height: '24px', background: 'var(--border-color)', margin: '0 0.5rem' }}></div>

            {/* AVAILABILITY BADGE */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
              background: 'rgba(204,255,0,0.1)',
              border: '1px solid rgba(204,255,0,0.3)',
              borderRadius: '100px',
              fontSize: '0.85rem',
              color: 'var(--text-main)',
              fontWeight: 500
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                background: 'var(--accent)',
                borderRadius: '50%',
                boxShadow: '0 0 8px rgba(204, 255, 0, 0.6)',
                animation: 'pulse 2s infinite'
              }}></span>
              Available
            </div>

            {/* THEME TOGGLE */}
            <button onClick={toggleTheme} style={{
              background: 'transparent', border: 'none', cursor: 'pointer',
              color: 'var(--text-muted)', padding: '8px', borderRadius: '8px',
              display: 'flex', alignItems: 'center', transition: 'all 0.2s'
            }}>
              <ThemeIcon />
            </button>

            {/* RESUME BUTTON */}
            <a href="/resume.pdf" download className="btn-small-shiny">
              Resume <Download size={16} />
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="mobile-toggle" style={{ display: 'none', gap: '1rem', alignItems: 'center' }}>
            <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)' }}>
              <ThemeIcon />
            </button>
            <button onClick={() => setIsMobileOpen(!isMobileOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)' }}>
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`}>
        <Link href="#about" onClick={() => setIsMobileOpen(false)} className="nav-link-item" style={{ fontSize: '1.2rem' }}>About</Link>
        <Link href="#projects" onClick={() => setIsMobileOpen(false)} className="nav-link-item" style={{ fontSize: '1.2rem' }}>Work</Link>
        <Link href="#blog" onClick={() => setIsMobileOpen(false)} className="nav-link-item" style={{ fontSize: '1.2rem' }}>Blog</Link>
        <Link href="#contact" onClick={() => setIsMobileOpen(false)} className="nav-link-item" style={{ fontSize: '1.2rem' }}>Contact</Link>
        <a href="/resume.pdf" target="_blank" className="btn-shiny" style={{ justifyContent: 'center' }}>
          Resume <Download size={18} />
        </a>
      </div>
    </>
  );
}
