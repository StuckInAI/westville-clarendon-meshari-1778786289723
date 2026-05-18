import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout/PageLayout';
import Placeholder from '@/components/Placeholder/Placeholder';
import useReveal from '@/hooks/useReveal';
import { featuredRecipes } from '@/data/recipesData';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import styles from './HomePage.module.css';

const stats = [
  { icon: '📱', value: '1.5M+', label: 'Total Followers' },
  { icon: '🎂', value: '584K', label: 'TikTok / 34.4M Likes' },
  { icon: '📸', value: '542K', label: 'Instagram Followers' },
  { icon: '📬', value: '14K+', label: 'Substack Subscribers' },
];

const brands = ['Microsoft', 'Instacart', 'KitchenAid', 'Pique', 'Very Cool Ice Cream', 'Kitsby'];

export default function HomePage() {
  const heroRef = useReveal<HTMLDivElement>();
  const recipesRef = useReveal<HTMLDivElement>();
  const aboutRef = useReveal<HTMLDivElement>();
  const brandsRef = useReveal<HTMLDivElement>();
  const newsletterRef = useReveal<HTMLDivElement>();

  return (
    <PageLayout>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div ref={heroRef} className={`${styles.heroInner} reveal`}>
            <span className="eyebrow">Allison Chen · New York City</span>
            <h1 className={styles.headline}>
              Pastry Chef.<br />
              Recipe Developer.<br />
              <em>Content Creator.</em>
            </h1>
            <div className={styles.divider}>
              <span className={styles.dividerLine} />
              <span className={styles.dividerIcon}>🥐</span>
              <span className={styles.dividerLine} />
            </div>
            <p className={styles.subhead}>
              Classic French technique. Playful storytelling. An approachable love of dessert — based in New York City.
            </p>
            <div className={styles.ctaGroup}>
              <Link to="/recipes" className={styles.ctaPrimary}>
                Explore Recipes <ArrowRight size={16} />
              </Link>
              <Link to="/about" className={styles.ctaSecondary}>
                About Allison
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statIcon}>{s.icon}</span>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED RECIPES */}
      <section className={styles.section}>
        <div className="container">
          <div ref={recipesRef} className={`${styles.sectionHead} reveal`}>
            <div>
              <span className="eyebrow">From the kitchen</span>
              <h2 className={styles.sectionHeading}>Latest Recipes</h2>
            </div>
            <Link to="/recipes" className={styles.headLink}>
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className={styles.recipeGrid}>
            {featuredRecipes.map((r) => (
              <article key={r.id} className={styles.recipeCard}>
                <div className={styles.recipeImage}>
                  <Placeholder hue={r.hue} ratio="4 / 5" />
                </div>
                <span className={styles.category}>{r.category}</span>
                <h3 className={styles.recipeTitle}>{r.title}</h3>
                <p className={styles.recipeDesc}>{r.description}</p>
                <Link to="/recipes" className={styles.recipeLink}>
                  View Recipe <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>

          <div className={styles.centerCta}>
            <Link to="/recipes" className={styles.ctaPrimary}>
              View All Recipes <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT MINI */}
      <section className={`${styles.section} ${styles.aboutMini}`}>
        <div className="container">
          <div ref={aboutRef} className={`${styles.aboutGrid} reveal`}>
            <div className={styles.aboutImage}>
              <Placeholder hue={28} ratio="4 / 5" rounded label="Portrait" />
            </div>
            <div className={styles.aboutText}>
              <span className="eyebrow">Meet Allison</span>
              <h2 className={styles.sectionHeading}>Hi, I'm Allison <span style={{ fontStyle: 'normal' }}>👋</span></h2>
              <p>
                I'm a pastry chef, recipe developer, and content creator based in NYC. I went to French pastry school (so you don't have to), ran a viral tasting menu out of my college apartment, and have been documenting my pastry adventures ever since.
              </p>
              <p className={styles.welcome}>Welcome to Alchenny.</p>
              <Link to="/about" className={styles.ctaSecondary}>
                Read My Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND COLLAB */}
      <section className={styles.brandSection}>
        <div className="container">
          <div ref={brandsRef} className={`reveal ${styles.brandsHead}`}>
            <span className="eyebrow">As seen working with</span>
          </div>
          <div className={styles.brandsRow}>
            {brands.map((b) => (
              <div key={b} className={styles.brandLogo}>{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className={styles.newsletter}>
        <div className="container">
          <div ref={newsletterRef} className={`${styles.newsletterInner} reveal`}>
            <span className={styles.newsletterEyebrow}>The Newsletter</span>
            <h2 className={styles.newsletterHeading}>Join The Croissant Crew</h2>
            <p className={styles.newsletterText}>
              Baking guides straight from pastry school, recipe archives, and life updates — delivered to your inbox. 14,000+ subscribers.
            </p>
            <form
              className={styles.newsletterForm}
              onSubmit={(e) => {
                e.preventDefault();
                window.open('https://alchenny.substack.com', '_blank');
              }}
            >
              <input type="email" placeholder="your@email.com" required className={styles.newsletterInput} />
              <button type="submit" className={styles.newsletterBtn}>
                Subscribe <ArrowUpRight size={16} />
              </button>
            </form>
            <p className={styles.newsletterNote}>Hosted on Substack. Free and paid tiers available.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
