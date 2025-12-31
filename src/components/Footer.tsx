"use client";
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>Webstack</span>
        </div>

        <div style={{ fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Sujit Laware.
        </div>

        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', fontWeight: 500 }}>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
