import { useRef } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import styles from './AboutSection.module.css';
import clsx from 'clsx';

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.15 });

  const highlights = [
    { icon: '🥦', label: 'Vegetable-Forward' },
    { icon: '🌿', label: 'Locally Sourced' },
    { icon: '🗓️', label: 'Seasonal Rotating Menu' },
    { icon: '🤝', label: 'Community-Driven' },
  ];

  return (
    <section ref={ref} id="about" className={clsx(styles.section, isVisible && styles.visible)}>
      <div className={styles.container}>
        <div className={styles.textCol}>
          <div className={styles.eyebrow}>Our Story</div>
          <h2 className={styles.heading}>
            Born in Brooklyn.<br />
            Grown in California.<br />
            <span className={styles.accent}>Coming Home to Arlington.</span>
          </h2>
          <p className={styles.body}>
            Westville was founded in New York City in 2003 with a simple but radical idea: build a menu around vegetables &mdash; not as a side thought, but as the star of the plate. With 24+ daily market vegetables rotating each day, no two visits are exactly alike.
          </p>
          <p className={styles.body}>
            In July 2025, Westville opened its first Virginia location right here in Clarendon &mdash; bringing that same warm, neighborhood energy to Arlington. Whether you&apos;re a longtime Westville fan from New York or discovering us for the first time, we&apos;re thrilled to be your new local.
          </p>
          <blockquote className={styles.quote}>
            <p>&ldquo;We&apos;ve always believed the best food comes from knowing your farmer and trusting the season. Every plate tells that story.&rdquo;</p>
            <cite>&mdash; Jay Strauss, Founder</cite>
          </blockquote>
          <div className={styles.badges}>
            {highlights.map((h) => (
              <div key={h.label} className={styles.badge}>
                <span className={styles.badgeIcon}>{h.icon}</span>
                <span>{h.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop"
              alt="Westville restaurant dining room with fresh food on display"
              loading="lazy"
              className={styles.image}
            />
            <div className={styles.imageTag}>
              <span className={styles.imageTagNumber}>24+</span>
              <span className={styles.imageTagText}>Daily Market<br />Vegetables</span>
            </div>
          </div>
          <div className={styles.imageSecondary}>
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&q=80&auto=format&fit=crop"
              alt="Fresh locally sourced vegetables and ingredients"
              loading="lazy"
              className={styles.imageSm}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
