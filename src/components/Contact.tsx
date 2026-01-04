"use client";
import React, { useState } from 'react';
import { Mail, ArrowRight, User, MessageSquare, Send } from "lucide-react";
import { motion } from "framer-motion";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error sending message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">/ GET IN TOUCH</span>
        <h2>Let's Build Something</h2>
      </motion.div>

      <div className="contact-wrapper" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          className="block-card"
          onMouseMove={handleMouseMove}
          style={{ padding: '3rem', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="card-spotlight" />

          {/* Left Side: Info */}
          <div style={{ position: 'relative', zIndex: 2, borderRight: '1px solid var(--border-color)', paddingRight: '2rem' }}>
            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', marginBottom: '1rem', lineHeight: 1.1 }}>
              Let's <span style={{ color: 'var(--accent)' }}>talk.</span>
            </h3>
            <p className="block-desc" style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
              I&apos;m currently available for <strong style={{ color: 'var(--accent)' }}>freelance projects</strong> and <strong style={{ color: 'var(--text-main)' }}>full-time roles</strong>.
              <br /><br />
              Whether you need a high-performance web app, an AI integration, or just want to discuss the future of tech — my inbox is open.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={18} color="var(--accent)" />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Email me at</span>
                  <a href="mailto:sujit@example.com" style={{ color: 'var(--text-main)', fontWeight: 500 }}>sujit.laware@example.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <User size={18} color="var(--accent)" />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Based in</span>
                  <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>Chennai, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
              >
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(204,255,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid var(--accent)' }}>
                  <Send size={32} color="var(--accent)" />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Message Sent</h3>
                <p style={{ color: 'var(--text-muted)' }}>I'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="input-group">
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Name"
                      style={{
                        width: '100%', padding: '1rem',
                        background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)',
                        borderRadius: '8px', color: 'var(--text-main)', fontSize: '0.95rem', outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                    />
                  </div>

                  <div className="input-group">
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      placeholder="Email"
                      style={{
                        width: '100%', padding: '1rem',
                        background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)',
                        borderRadius: '8px', color: 'var(--text-main)', fontSize: '0.95rem', outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                    />
                  </div>
                </div>

                <div className="input-group">
                  <textarea
                    required
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    rows={4}
                    style={{
                      width: '100%', padding: '1rem',
                      background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)',
                      borderRadius: '8px', color: 'var(--text-main)', fontSize: '0.95rem', outline: 'none', resize: 'none', fontFamily: 'inherit',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-shiny accent"
                  style={{ alignSelf: 'flex-start', border: 'none', cursor: isSubmitting ? 'wait' : 'pointer', width: '100%', justifyContent: 'center' }}
                >
                  {isSubmitting ? 'Sending...' : <>Send Message <ArrowRight size={18} /></>}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
