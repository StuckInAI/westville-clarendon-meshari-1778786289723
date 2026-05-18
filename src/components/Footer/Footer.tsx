import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Youtube, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const navLinks = [
    { label: 'Recipes', to: '/recipes' },
    { label: 'About', to: '/about' },
    { label: 'Store', to: '/store' },
    { label: 'Work With Me', to: '/work-with-me' },
    { label: 'The Croissant Crew', to: '/croissant-crew' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoText}>alchenny</span>
              <span>🍪</span>
            </Link>
            <p className={styles.tagline}>
              Classic French technique. Playful storytelling. An approachable love of dessert — based in New York City.
            </p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colHeading}>Explore</h4>
            <nav className={styles.linkList}>
              {navLinks.map((l) => (
                <Link key={l.to} to={l.to} className={styles.link}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colHeading}>Contact</h4>
            <a className={styles.link} href="mailto:partnerships@alchenny.com">partnerships@alchenny.com</a>
            <a className={styles.link} href="mailto:hello@alchenny.com">hello@alchenny.com</a>
            <a className={styles.link} href="mailto:alchenny@palettemgmt.com">alchenny@palettemgmt.com</a>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colHeading}>Follow</h4>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/al.chenny/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.social}>
                <Instagram size={18} />
              </a>
              <a href="https://www.tiktok.com/@alchenny" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={styles.social}>
                <span className={styles.tiktok}>TT</span>
              </a>
              <a href="https://alchenny.substack.com" target="_blank" rel="noopener noreferrer" aria-label="Substack" className={styles.social}>
                <Mail size={18} />
              </a>
              <a href="https://www.facebook.com/alchenny/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.social}>
                <Facebook size={18} />
              </a>
              <a href="https://www.linkedin.com/in/allison-chenny/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.social}>
                <Linkedin size={18} />
              </a>
              <a href="https://www.youtube.com/@alchenny" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={styles.social}>
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Alchenny LLC. All rights reserved.</span>
          <span className={styles.bottomRight}>Made with butter, sugar, and patience in NYC.</span>
        </div>
      </div>
    </footer>
  );
}
