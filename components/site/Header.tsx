import { useState, useEffect, type MouseEvent } from 'react';
import Link from 'next/link';
import styles from '../../styles/site/Layout.module.css';
import { useCVPopup } from './CVPopupContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDesktop, openCvPopup } = useCVPopup();

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

  const handleDesktopCVClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isDesktop) return;
    event.preventDefault();
    openCvPopup();
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={`container ${styles.headerInner}`}>
        <Link href="/" className={styles.logo}>
          Jean Doutrebente
        </Link>

        {/* Nav desktop */}
        <nav className={styles.nav} aria-label="Navigation principale">
          <Link href="/accompagnement" className={styles.navLink}>Accompagnement</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
          <Link href="/cv" className={styles.navLink} onClick={handleDesktopCVClick}>CV</Link>
          <Link href="/contact" className={styles.ctaBtn}>
            Parlons de votre projet
          </Link>
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
          <Link href="/contact" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link href="/cv" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
            CV
          </Link>
          <Link href="/contact" className={`${styles.ctaBtn} ${styles.mobileCtaBtn}`} onClick={() => setMenuOpen(false)}>
            Parlons de votre projet
          </Link>
        </nav>
      </div>
    </header>
  );
}
