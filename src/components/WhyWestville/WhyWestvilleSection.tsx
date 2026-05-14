import { useRef } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import styles from './WhyWestvilleSection.module.css';
import clsx from 'clsx';

type Feature = {
  icon: string;
  title: string;
  description: string;
};

export default function WhyWestvilleSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  const features: Feature[] = [
    {
      icon: '🥦',
      title: '24+ Daily Vegetables',
      description: 'Our market menu rotates daily with 24+ seasonal vegetables — always fresh, never boring.',
    },
    {
      icon: '🌿',
      title: 'Locally Sourced',
      description: 'We partner with Virginia and Mid-Atlantic farms to bring you ingredients at peak freshness.',
    },
    {
      icon: '🗓️',
      title: 'Rotating Seasonal Specials',
      description: 'Every season brings new flavors. Our chefs craft dishes around what\'s growing right now.',
    },
    {
      icon: '🌱',
      title: 'Veg, Vegan & GF Options',
      description: 'Extensive vegetarian, vegan, and gluten-free choices — clearly labeled on every menu.',
    },
    {
      icon: '🐕',
      title: 'Dog-Friendly Patio',
      description: 'Bring your four-legged family member! Our dog-friendly patio welcomes all good boys and girls.',
    },
    {
      icon: '🎉',
      title: 'Private Events & Catering',
      description: 'From intimate dinners to corporate events, we bring the Westville experience to your celebration.',
    },
  ];

  return (
    <section ref={ref} className={clsx(styles.section, isVisible && styles.visible)}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Why We\'re Different</div>
          <h2 className={styles.heading}>Why Westville</h2>
          <p className={styles.subtext}>More than a restaurant — a commitment to how food should be.</p>
        </div>
        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={f.title} className={styles.tile} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className={styles.tileIcon}>{f.icon}</div>
              <h3 className={styles.tileTitle}>{f.title}</h3>
              <p className={styles.tileDesc}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
