import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from '../../styles/site/Home.module.css';

interface AboutTexts {
  title: string;
  text: string;
  cta: string;
}

interface AboutProps {
  texts: AboutTexts;
}

export default function About({ texts }: AboutProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-about-animate]',
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
    <section ref={sectionRef} className={`section ${styles.about}`}>
      <div className={`container ${styles.aboutInner}`}>
        <h2 className={styles.sectionTitle} data-about-animate>
          {texts.title}
        </h2>
        <p className={styles.aboutText} data-about-animate>
          {texts.text}
        </p>
        <Link href="/cv" className={styles.inlineLink} data-about-animate>
          {texts.cta} →
        </Link>
      </div>
    </section>
  );
}
