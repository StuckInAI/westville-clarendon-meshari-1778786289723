import { useState, useRef } from 'react';
import { menuData } from '@/data/menuData';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import styles from './MenuSection.module.css';
import clsx from 'clsx';

export default function MenuSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);

  const activeData = menuData.find((c) => c.id === activeCategory);

  const dietColors: Record<string, string> = {
    Vegetarian: styles.tagVeg,
    Vegan: styles.tagVegan,
    'Gluten-Free': styles.tagGF,
  };

  return (
    <section ref={ref} id="menu" className={clsx(styles.section, isVisible && styles.visible)}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Our Menu</div>
          <h2 className={styles.heading}>What We\'re Known For</h2>
          <p className={styles.subtext}>Fresh, seasonal, and endlessly satisfying. Our menu rotates with the harvest.</p>
        </div>

        <div className={styles.tabs}>
          {menuData.map((cat) => (
            <button
              key={cat.id}
              className={clsx(styles.tab, activeCategory === cat.id && styles.tabActive)}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className={styles.tabIcon}>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {activeData && (
          <div className={styles.grid}>
            {activeData.items.map((item, i) => (
              <div key={item.id} className={styles.card} style={{ animationDelay: `${i * 80}ms` }}>
                <div className={styles.cardTop}>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  {item.popular && <span className={styles.popular}>Popular</span>}
                </div>
                <p className={styles.itemDesc}>{item.description}</p>
                <div className={styles.cardBottom}>
                  <span className={styles.price}>{item.price}</span>
                  <div className={styles.tags}>
                    {item.tags.map((tag) => (
                      <span key={tag} className={clsx(styles.tag, dietColors[tag])}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={styles.dessertCallout}>
          <span className={styles.calloutIcon}>🍰</span>
          <div>
            <strong>Save room for dessert!</strong> Our rotating seasonal dessert menu features local fruit crumbles, chocolate lava cake, and house-made gelato.
          </div>
        </div>

        <div className={styles.cta}>
          <a
            href="https://www.westvillerestaurant.com/menu"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
