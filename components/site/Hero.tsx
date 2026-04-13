import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from '../../styles/site/Home.module.css';
import Button from './Button';

interface HeroTexts {
  title: string;
  subtitle: string;
  description: string;
  cta_primary: string;
  cta_secondary: string;
}

interface HeroProps {
  texts: HeroTexts;
}

export default function Hero({ texts }: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-animate',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className={`container ${styles.heroInner}`}>
        <h1 className={`${styles.heroTitle} hero-animate`}>{texts.title}</h1>
        <p className={`${styles.heroSubtitle} hero-animate`}>{texts.subtitle}</p>
        <p className={`${styles.heroDescription} hero-animate`}>{texts.description}</p>
        <div className={`${styles.heroActions} hero-animate`}>
          <Button href="/contact">
            {texts.cta_primary}
          </Button>
          <Button href="/accompagnement" variant="secondary">
            {texts.cta_secondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
