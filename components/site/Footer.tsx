import styles from '../../styles/site/Layout.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <p className={styles.footerBrand}>
          Jean Doutrebente — Designer &amp; Développeur
        </p>
        <nav className={styles.footerLinks} aria-label="Liens externes">
          <a
            href="https://www.linkedin.com/in/jean-doutrebente-732884203/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jeandout/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            GitHub
          </a>
        </nav>
        <p className={styles.footerCopy}>© 2026 Jean Doutrebente</p>
      </div>
    </footer>
  );
}
