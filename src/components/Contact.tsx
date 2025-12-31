"use client";
import React, { useState } from 'react';
import { Mail, ArrowRight, User, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section container">
      <div className="section-header">
        <span className="section-label">/ GET IN TOUCH</span>
        <h2>Let's Build Something</h2>
      </div>

      <div className="bento-grid contact-grid-mobile" style={{ alignItems: 'start' }}>

        {/* CONTACT INFO CARD */}
        <div
          className="block-card CONTACT_CARD"
          onMouseMove={handleMouseMove}
          style={{ minHeight: '400px' }}
        >
          <div className="card-spotlight" />
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
            <div>
              <Mail size={40} color="var(--accent)" style={{ marginBottom: '1.5rem' }} />
              <h3 className="block-title">Contact</h3>
              <p className="block-desc">
                I'm currently accessible for freelance work and engineering roles.
              </p>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <a href="mailto:sujit@example.com" style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-main)', fontWeight: '500' }}>
                sujit.laware@example.com
              </a>
              <p style={{ color: 'var(--text-muted)' }}>Chennai, India</p>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div
          className="block-card span-2 contact-col-span-mobile"
          onMouseMove={handleMouseMove}
          style={{ padding: '0' }}
        >
          <div className="card-spotlight" />
          <div style={{ position: 'relative', zIndex: 2, padding: '2.5rem', width: '100%' }}>
            {submitted ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px', textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(204,255,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Send size={30} color="var(--accent)" />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-muted)' }}>I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="contact-grid-mobile" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div className="input-group">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Name</label>
                    <div style={{ position: 'relative' }}>
                      <User size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        style={{
                          width: '100%', padding: '1rem 1rem 1rem 3rem',
                          background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)',
                          borderRadius: '12px', color: 'var(--text-main)', fontSize: '1rem', outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div className="input-group">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email</label>
                    <div style={{ position: 'relative' }}>
                      <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={e => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        style={{
                          width: '100%', padding: '1rem 1rem 1rem 3rem',
                          background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)',
                          borderRadius: '12px', color: 'var(--text-main)', fontSize: '1rem', outline: 'none'
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="input-group">
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Message</label>
                  <div style={{ position: 'relative' }}>
                    <MessageSquare size={18} style={{ position: 'absolute', left: '1rem', top: '1.2rem', color: 'var(--text-muted)' }} />
                    <textarea
                      required
                      value={formState.message}
                      onChange={e => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      rows={4}
                      style={{
                        width: '100%', padding: '1rem 1rem 1rem 3rem',
                        background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)',
                        borderRadius: '12px', color: 'var(--text-main)', fontSize: '1rem', outline: 'none', resize: 'none', fontFamily: 'inherit'
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-shiny accent"
                  style={{ alignSelf: 'flex-start', border: 'none', cursor: isSubmitting ? 'wait' : 'pointer', minWidth: '160px', justifyContent: 'center' }}
                >
                  {isSubmitting ? 'Sending...' : <>Send Message <ArrowRight size={18} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
