import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/site/Layout.module.css';
import Button from './Button';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fermer le menu si on redimensionne > 940px
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 940) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Bloquer le scroll body quand menu ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={`container ${styles.headerInner}`}>
        <Link href="/" className={styles.logo}>
          <svg width="71" height="68" viewBox="0 0 71 68" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logoMark} aria-hidden="true">
            <path d="M3.8147e-06 51.3519V39.5439H11.712V52.2159C11.712 54.9679 13.12 56.3439 15.936 56.3439H23.1C25.916 56.3439 27.324 54.9679 27.324 52.2159V16.4999H39.036V51.3519V66.9999H23.388H15.648C5.216 66.9999 3.8147e-06 61.7839 3.8147e-06 51.3519Z" fill="#6B8AAD"/>
            <path d="M55.288 67.1479L43.48 67.1479L43.48 55.4359L56.152 55.4359C58.904 55.4359 60.28 54.0279 60.28 51.2119L60.28 15.936C60.28 13.12 58.904 11.712 56.152 11.712L12.936 11.712L12.936 2.53526e-06L55.288 6.83996e-07L70.936 0L70.936 15.648L70.936 51.4999C70.936 61.9319 65.72 67.1479 55.288 67.1479Z" fill="currentColor"/>
          </svg>
          <span className={styles.logoText}>Jean Doutrebente</span>
        </Link>

        {/* Nav desktop */}
        <nav className={styles.nav} aria-label="Navigation principale">
          <Link href="/accompagnement" className={styles.navLink}>Accompagnement</Link>
          <Link href="/cv" className={styles.navLink}>Parcours</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
          <Button href="/contact">Parlons de votre projet</Button>
        </nav>

        {/* Hamburger mobile */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>

      {/* Overlay mobile */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!menuOpen}
        {...(!menuOpen ? { inert: true } : {})}
      >
        <nav className={styles.mobileNav} aria-label="Navigation mobile">
          <Link href="/accompagnement" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
            Accompagnement
          </Link>
          <Link href="/cv" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
            Parcours
          </Link>
          <Link href="/contact" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Button href="/contact" className={styles.mobileCtaBtn} size="lg" onClick={() => setMenuOpen(false)}>
            Parlons de votre projet
          </Button>
        </nav>
      </div>
    </header>
  );
}
