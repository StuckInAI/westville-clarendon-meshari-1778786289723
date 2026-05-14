import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { reviews } from '@/data/reviewsData';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import styles from './ReviewsSection.module.css';
import clsx from 'clsx';

export default function ReviewsSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.15 });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const goNext = useCallback(() => {
    setDirection('right');
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection('left');
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(goNext, 5500);
    return () => clearInterval(interval);
  }, [goNext]);

  const getVisible = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((current + i) % reviews.length);
    }
    return indices;
  };

  return (
    <section ref={ref} id="reviews" className={clsx(styles.section, isVisible && styles.visible)}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>What Guests Say</div>
          <h2 className={styles.heading}>Loved by the Neighborhood</h2>
          <div className={styles.badge}>
            <div className={styles.badgeStars}>
              {[1,2,3,4,5].map((s) => (
                <Star key={s} size={16} fill={s <= 4 ? '#D4A853' : 'none'} stroke={s <= 4 ? '#D4A853' : '#D4A853'} />
              ))}
            </div>
            <span className={styles.badgeRating}>4.5</span>
            <span className={styles.badgeSource}>on Google Reviews</span>
          </div>
        </div>

        <div className={styles.carouselWrapper}>
          <button className={styles.navBtn} onClick={goPrev} aria-label="Previous review">
            <ChevronLeft size={22} />
          </button>

          <div className={styles.cardsRow}>
            {getVisible().map((idx, pos) => {
              const review = reviews[idx];
              return (
                <div
                  key={`${idx}-${pos}`}
                  className={clsx(
                    styles.card,
                    pos === 1 && styles.cardCenter,
                    direction === 'right' ? styles.slideRight : styles.slideLeft
                  )}
                >
                  <div className={styles.cardStars}>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="#D4A853" stroke="#D4A853" />
                    ))}
                  </div>
                  <p className={styles.cardText}>"{review.text}"</p>
                  <div className={styles.cardFooter}>
                    <div className={styles.cardAvatar}>
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className={styles.cardName}>{review.name}</div>
                      <div className={styles.cardMeta}>{review.source} · {review.date}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className={styles.navBtn} onClick={goNext} aria-label="Next review">
            <ChevronRight size={22} />
          </button>
        </div>

        <div className={styles.dots}>
          {reviews.map((_, i) => (
            <button
              key={i}
              className={clsx(styles.dot, i === current && styles.dotActive)}
              onClick={() => { setDirection(i > current ? 'right' : 'left'); setCurrent(i); }}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
