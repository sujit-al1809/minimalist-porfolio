"use client";
import React from 'react';
import Link from "next/link";
import { Download } from "lucide-react";

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(5, 5, 5, 0.6)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '64px'
      }}>
        <Link href="/" style={{
          fontSize: '1rem',
          fontWeight: 600,
          letterSpacing: '-0.02em',
          color: '#fff'
        }}>
          sujit.laware
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <Link href="#about" className="nav-link-item">About</Link>
          <Link href="#projects" className="nav-link-item">Work</Link>
          <Link href="#contact" className="nav-link-item">Contact</Link>

          <a href="/resume.pdf" target="_blank" className="btn-small-shiny">
            Resume <Download size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
}
