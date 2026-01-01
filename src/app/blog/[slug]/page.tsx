"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { blogs } from '@/data/blogs';
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPost() {
    const { slug } = useParams();
    const router = useRouter();

    const post = blogs.find(p => p.slug === slug);

    if (!post) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
                <h2>Article not found</h2>
                <button onClick={() => router.push('/')} className="btn-shiny">Go Home</button>
            </div>
        );
    }

    return (
        <main>
            <Navbar />

            <article className="container section" style={{ paddingTop: '8rem', maxWidth: '800px' }}>

                <motion.button
                    onClick={() => router.back()}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-link-arrow"
                    style={{
                        background: 'none', border: 'none', color: 'var(--text-muted)',
                        marginBottom: '2rem', fontSize: '0.9rem', cursor: 'pointer'
                    }}
                >
                    <ArrowLeft size={16} /> Back
                </motion.button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                        {post.tags.map(tag => (
                            <span key={tag} className="tag-pill">{tag}</span>
                        ))}
                    </div>

                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.2, marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                        {post.title}
                    </h1>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem', marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={16} /> {post.date}</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> {post.readTime}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Share2 size={18} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
                        </div>
                    </div>

                    <div style={{ height: '400px', width: '100%', borderRadius: '16px', overflow: 'hidden', marginBottom: '3rem' }}>
                        <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    <div
                        className="blog-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                        style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}
                    />

                    {/* Author Box */}
                    <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#333', overflow: 'hidden' }}>
                            {/* Reuse hero image if possible or generic avatar */}
                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent)', color: '#000', fontWeight: 'bold' }}>SA</div>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Sujit AL</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Design Engineer & AI Enthusiast. Building the future of digital experiences.</p>
                        </div>
                    </div>

                </motion.div>

                <style jsx global>{`
            .blog-content h2 { color: var(--text-main); margin-top: 2.5rem; margin-bottom: 1rem; font-size: 1.8rem; }
            .blog-content h3 { color: var(--text-main); margin-top: 2rem; margin-bottom: 0.75rem; font-size: 1.4rem; }
            .blog-content p { margin-bottom: 1.5rem; }
            .blog-content strong { color: var(--text-main); }
            .blog-content pre { background: rgba(0,0,0,0.5); padding: 1.5rem; borderRadius: 8px; border: 1px solid var(--border-color); overflow-x: auto; margin-bottom: 1.5rem; }
            .blog-content code { font-family: monospace; color: var(--accent); }
          `}</style>
            </article>

            <Footer />
        </main>
    );
}
