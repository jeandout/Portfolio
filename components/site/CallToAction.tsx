import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from '../../styles/site/Home.module.css';
import Button from './Button';

interface CallToActionTexts {
  title: string;
  subtitle: string;
  button: string;
}

interface CallToActionProps {
  texts: CallToActionTexts;
}

export default function CallToAction({ texts }: CallToActionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-cta-animate]',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.ctaSection}>
      <div className={`container ${styles.ctaInner}`}>
        <h2 className={styles.ctaTitle} data-cta-animate>
          {texts.title}
        </h2>
        <p className={styles.ctaSubtitle} data-cta-animate>
          {texts.subtitle}
        </p>
        <Button href="/contact" data-cta-animate>
          {texts.button}
        </Button>
      </div>
    </section>
  );
}
