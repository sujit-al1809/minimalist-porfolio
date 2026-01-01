"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogs } from '@/data/blogs';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export default function BlogSection() {

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <section id="blog" className="section container">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="section-label">/ THOUGHTS & INSIGHTS</span>
                <h2>Engineering Blog</h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {blogs.slice(0, 3).map((post, idx) => (
                    <Link href={`/blog/${post.slug}`} key={idx}>
                        <motion.div
                            className="block-card group"
                            onMouseMove={handleMouseMove}
                            style={{ padding: '0', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="card-spotlight" />

                            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    className="project-img"
                                />
                                <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: '100px', fontSize: '0.75rem', color: '#fff' }}>
                                    {post.tags[0]}
                                </div>
                            </div>

                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> {post.date}</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {post.readTime}</span>
                                </div>

                                <h3 className="block-title" style={{ fontSize: '1.2rem', marginBottom: '0.75rem', lineHeight: 1.4 }}>{post.title}</h3>

                                <p className="block-desc" style={{ fontSize: '0.9rem', marginBottom: '1.5rem', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', display: '-webkit-box', overflow: 'hidden' }}>
                                    {post.excerpt}
                                </p>

                                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 600 }}>
                                    Read Article <ArrowRight size={16} />
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
