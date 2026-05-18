import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import styles from './Navbar.module.css';
import clsx from 'clsx';

const links = [
  { label: 'Recipes', to: '/recipes' },
  { label: 'About', to: '/about' },
  { label: 'Store', to: '/store' },
  { label: 'Work With Me', to: '/work-with-me' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className={clsx(styles.nav, scrolled && styles.navScrolled)}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} aria-label="Alchenny home">
          <span className={styles.logoText}>alchenny</span>
          <span className={styles.logoIcon}>🍪</span>
        </Link>

        <ul className={styles.desktopLinks}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) => clsx(styles.navLink, isActive && styles.navLinkActive)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/croissant-crew" className={styles.crewBtn}>
              The Croissant Crew
              <ArrowUpRight size={14} />
            </Link>
          </li>
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={clsx(styles.mobileMenu, isOpen && styles.mobileMenuOpen)}>
        <ul className={styles.mobileLinks}>
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className={styles.mobileLink}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/croissant-crew" className={styles.mobileCrewBtn}>
              The Croissant Crew <ArrowUpRight size={16} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
