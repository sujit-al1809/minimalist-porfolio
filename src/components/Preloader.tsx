"use client";
import React, { useEffect, useState } from 'react';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [complete, setComplete] = useState(false);
  const [cleanup, setCleanup] = useState(false);

  useEffect(() => {
    // Start fade out after 0.8s (reduced from 2s)
    const timer1 = setTimeout(() => {
      setComplete(true);
    }, 800);

    // Remove from DOM after transition (0.5s)
    const timer2 = setTimeout(() => {
      setCleanup(true);
    }, 1300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (cleanup) return null;

  return (
    <div className={`${styles.preloader} ${complete ? styles.preloaderHidden : ''}`}>
      <div className={styles.loaderContent}>
        <div className={styles.spinner}></div>
        <p className={styles.loaderText}>Loading...</p>
      </div>
    </div>
  );
}
