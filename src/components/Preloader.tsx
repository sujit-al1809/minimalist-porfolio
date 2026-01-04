"use client";
import React, { useEffect, useState } from 'react';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [text, setText] = useState("");
  const [complete, setComplete] = useState(false);
  const [cleanup, setCleanup] = useState(false);

  const fullText = "INITIALIZING SYSTEM... ACCESS GRANTED.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => setComplete(true), 500);
        setTimeout(() => setCleanup(true), 1200);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (cleanup) return null;

  return (
    <div className={`${styles.preloader} ${complete ? styles.preloaderHidden : ''}`}>
      <div className={styles.terminalLoader}>
        <span className={styles.terminalText}>{text}</span>
        <span className={styles.cursor}>_</span>
      </div>
    </div>
  );
}
