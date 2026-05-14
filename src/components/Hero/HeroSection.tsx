import { useEffect, useState } from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay} />
      <div className={styles.content} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}>
        <div className={styles.badge}>Now Open in Arlington, VA</div>
        <h1 className={styles.headline}>
          Fresh.<br />
          <span className={styles.headlineAccent}>Local.</span><br />
          Yours.
        </h1>
        <p className={styles.subtext}>
          24+ daily market vegetables, locally sourced ingredients, and a welcoming California-casual atmosphere right in the heart of Clarendon.
        </p>
        <div className={styles.ctaGroup}>
          <a
            href="https://www.opentable.com/westville-clarendon"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaPrimary}
          >
            Reserve a Table
          </a>
          <a
            href="https://www.ordernerd.com/westville"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaSecondary}
          >
            Order Online
          </a>
        </div>
        <div className={styles.scrollHint}>
          <div className={styles.scrollLine} />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
