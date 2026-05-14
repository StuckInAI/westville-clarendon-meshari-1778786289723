import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import clsx from 'clsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Hours & Location', href: '#hours' },
    { label: 'Reservations', href: '#reservations' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const navHeight = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className={clsx(styles.nav, scrolled && styles.navScrolled)}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className={styles.logoMain}>Westville</span>
          <span className={styles.logoSub}>Clarendon</span>
        </div>

        <ul className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <button className={styles.navLink} onClick={() => handleNavClick(link.href)}>
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://www.ordernerd.com/westville"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.orderBtn}
            >
              Order Online
            </a>
          </li>
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={clsx(styles.mobileMenu, isOpen && styles.mobileMenuOpen)}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <button className={styles.mobileLink} onClick={() => handleNavClick(link.href)}>
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://www.ordernerd.com/westville"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileOrderBtn}
            >
              Order Online
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
