"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { projects } from '@/data/projects';
import { ArrowLeft, Github, ExternalLink, Calendar, Layers, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProjectDetail() {
    const { slug } = useParams();
    const router = useRouter();

    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
                <h2>Project not found</h2>
                <button onClick={() => router.push('/')} className="btn-shiny">Go Home</button>
            </div>
        );
    }

    return (
        <main>
            <Navbar />

            <article className="container section" style={{ paddingTop: '8rem' }}>

                {/* Back Button */}
                <motion.button
                    onClick={() => router.back()}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer',
                        marginBottom: '2rem',
                        fontSize: '0.9rem'
                    }}
                    className="text-link-arrow"
                >
                    <ArrowLeft size={16} /> Back to Projects
                </motion.button>

                {/* Header Section */}
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '4rem', alignItems: 'start', marginBottom: '6rem' }} className="project-header-grid">

                    {/* Left: Meta Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div style={{ marginBottom: '2rem' }}>
                            <project.icon size={48} color="var(--accent)" style={{ marginBottom: '1.5rem' }} />
                            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '1rem', color: 'var(--text-main)' }}>
                                {project.title}
                            </h1>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                                {project.description}
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>

                            <div>
                                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Tech Stack</h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {project.techStack?.map(tech => (
                                        <span key={tech} className="tag-pill">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-shiny" style={{ width: 'fit-content', padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>
                                    <Github size={18} /> Source Code
                                </a>
                                <a href="#" className="btn-small-shiny" style={{ padding: '0.8rem 1.5rem' }}>
                                    Live Demo <ExternalLink size={16} />
                                </a>
                            </div>

                        </div>
                    </motion.div>

                    {/* Right: Feature Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            position: 'relative',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            border: '1px solid var(--border-color)',
                            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)',
                            minHeight: '400px'
                        }}
                    >
                        <div style={{
                            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                            background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.8) 100%)',
                            zIndex: 2
                        }}></div>
                        <img
                            src={project.image}
                            alt={project.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', zIndex: 3, padding: '0.5rem 1rem', background: 'var(--accent)', color: '#000', borderRadius: '100px', fontWeight: 700, fontSize: '0.9rem' }}>
                            {project.metrics} Performance
                        </div>
                    </motion.div>

                </div>

                {/* Content Section */}
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="block-card"
                        style={{ marginBottom: '4rem' }}
                    >
                        <h3 className="block-title" style={{ marginBottom: '1.5rem' }}>Project Overview</h3>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                            {project.longDescription}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="block-title" style={{ marginBottom: '2rem' }}>Key Features</h3>
                        <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                            {project.features?.map((feature, idx) => (
                                <div key={idx} className="block-card" style={{ padding: '1.5rem' }}>
                                    <div style={{ width: '8px', height: '8px', background: 'var(--accent)', borderRadius: '50%', marginBottom: '1rem', boxShadow: '0 0 10px var(--accent)' }}></div>
                                    <p style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-main)', margin: 0 }}>
                                        {feature}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>

                <style jsx>{`
            @media (max-width: 900px) {
              .project-header-grid {
                 grid-template-columns: 1fr !important;
                 gap: 2rem !important;
              }
            }
          `}</style>

            </article>

            <Footer />
        </main>
    );
}
