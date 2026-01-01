"use client";
import React from 'react';
import { Trophy, Award, Star, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const hackathons = [
    {
        title: "Smart India Hackathon 2024",
        result: "Winner",
        project: "Agri-Tech Solutions",
        desc: "Developed a precision farming system using IoT and Drone imagery.",
        icon: Trophy,
        color: "#ffd700" // Gold
    },
    {
        title: "ETHIndia 2023",
        result: "Finalist",
        project: "DeFi Aggregator",
        desc: "Built a cross-chain yield optimizer on Ethereum using Solidity.",
        icon: Code2,
        color: "#c0c0c0" // Silver
    },
    {
        title: "Google Solution Challenge",
        result: "Top 50 Global",
        project: "EcoTrack",
        desc: "Carbon footprint tracking app integrated with Google Maps Platform.",
        icon: Star,
        color: "#ccff00" // Acid Green
    },
    {
        title: "HackHarvard 2023",
        result: "Best UI/UX",
        project: "MindPal",
        desc: "Mental health companion app with emotion recognition capabilities.",
        icon: Award,
        color: "#cd7f32" // Bronze
    }
];

export default function Hackathon() {

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <section id="hackathons" className="section container">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="section-label">/ COMPETITIVE</span>
                <h2>Hackathons</h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {hackathons.map((hack, idx) => (
                    <motion.div
                        key={idx}
                        className="block-card"
                        onMouseMove={handleMouseMove}
                        style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                        <div className="card-spotlight" />

                        <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '12px', border: `1px solid ${hack.color}40` }}>
                                <hack.icon size={24} color={hack.color} />
                            </div>
                            <div style={{
                                padding: '0.4rem 0.8rem',
                                borderRadius: '100px',
                                background: `${hack.color}10`,
                                border: `1px solid ${hack.color}30`,
                                color: hack.color,
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                textTransform: 'uppercase'
                            }}>
                                {hack.result}
                            </div>
                        </div>

                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <h3 className="block-title" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{hack.title}</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: 500 }}>
                                {hack.project}
                            </p>
                            <p className="block-desc" style={{ fontSize: '0.85rem' }}>
                                {hack.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
