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
          <img src="/JD.svg" alt="" aria-hidden="true" className={styles.logoMark} />
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
