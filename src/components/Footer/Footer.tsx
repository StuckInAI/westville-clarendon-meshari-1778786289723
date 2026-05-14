import { Instagram, Facebook } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Hours & Location', href: '#hours' },
    { label: 'Reservations', href: '#reservations' },
  ];

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.col}>
          <div className={styles.logo}>
            <span className={styles.logoMain}>Westville</span>
            <span className={styles.logoSub}>Clarendon · Arlington, VA</span>
          </div>
          <p className={styles.tagline}>Fresh, local, and vegetable-forward. <br />Your neighborhood table in Clarendon.</p>
          <div className={styles.socials}>
            <a href="https://www.instagram.com/westvilleclarendon" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/westvilleclarendon" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://www.yelp.com/biz/westville-clarendon" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Yelp">
              <span className={styles.yelpIcon}>Y</span>
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colHeading}>Visit Us</h4>
          <address className={styles.address}>
            2800 Clarendon Blvd, Suite 620<br />
            Arlington, VA 22201
          </address>
          <a href="tel:+17035551234" className={styles.phone}>(703) 555-1234</a>
          <div className={styles.hoursBlock}>
            <div className={styles.hoursRow}><span>Mon–Fri</span><span>11:30 AM – 10 PM</span></div>
            <div className={styles.hoursRow}><span>Friday</span><span>11:30 AM – 11 PM</span></div>
            <div className={styles.hoursRow}><span>Sat–Sun</span><span>10 AM – 10/11 PM</span></div>
            <div className={styles.hoursNote}>Brunch Sat &amp; Sun 10AM–3PM</div>
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colHeading}>Quick Links</h4>
          <nav className={styles.navLinks}>
            {navLinks.map((link) => (
              <button key={link.href} className={styles.navLink} onClick={() => handleNav(link.href)}>
                {link.label}
              </button>
            ))}
            <a href="https://www.ordernerd.com/westville" target="_blank" rel="noopener noreferrer" className={styles.navLink}>Order Online</a>
            <a href="mailto:catering@westvilleclarendon.com" className={styles.navLink}>Catering Inquiries</a>
            <a href="https://www.instagram.com/westvilleclarendon" target="_blank" rel="noopener noreferrer" className={styles.navLink}>@westvilleclarendon</a>
          </nav>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <span>© {new Date().getFullYear()} Westville Clarendon. All rights reserved.</span>
          <span className={styles.bottomRight}>Made with ❤️ in Arlington, VA</span>
        </div>
      </div>
    </footer>
  );
}
