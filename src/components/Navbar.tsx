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

  // Prevent hydration mismatch by returning null until mounted if needed, 
  // or simply ensuring safe rendering for the theme icon.
  const ThemeIcon = () => {
    if (!mounted) return null; // or a placeholder
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
            sujit.laware
          </Link>

          {/* DESKTOP MENU */}
          <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            <Link href="#about" className="nav-link-item">About</Link>
            <Link href="#projects" className="nav-link-item">Work</Link>
            <Link href="#contact" className="nav-link-item">Contact</Link>

            <button onClick={toggleTheme} className="btn-icon" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)' }}>
              <ThemeIcon />
            </button>

            <a href="/resume.pdf" target="_blank" className="btn-small-shiny">
              Resume <Download size={14} />
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
        <Link href="#contact" onClick={() => setIsMobileOpen(false)} className="nav-link-item" style={{ fontSize: '1.2rem' }}>Contact</Link>
        <a href="/resume.pdf" target="_blank" className="btn-shiny" style={{ justifyContent: 'center' }}>
          Resume <Download size={18} />
        </a>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
}
