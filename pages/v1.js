import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles/CVPage.module.css';

const MobileView = dynamic(() => import('../components/MobileView'), { ssr: false });
const IDE = dynamic(() => import('../components/IDE'), { ssr: false });

function CV() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 940 });

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (isMobile) {
    return (
      <section className="section">
        <div className="container ide-root">
          <MobileView />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.page}>
      <div className={styles.desktopMockup}>
        <div className={styles.windowBar}>
          <span className={`${styles.windowDot} ${styles.dotRed}`} />
          <span className={`${styles.windowDot} ${styles.dotYellow}`} />
          <span className={`${styles.windowDot} ${styles.dotGreen}`} />
        </div>
        <div className={styles.windowContent}>
          <div className="ide-root">
            <IDE />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CV;
