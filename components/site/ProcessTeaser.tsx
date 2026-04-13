import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from '../../styles/site/Home.module.css';

interface ProcessTeaserTexts {
  title: string;
  steps: string[];
  cta: string;
}

interface ProcessTeaserProps {
  texts: ProcessTeaserTexts;
}

export default function ProcessTeaser({ texts }: ProcessTeaserProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      });

      timeline.fromTo(
        '[data-process-title]',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      timeline.fromTo(
        '[data-process-dot]',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power2.out' },
        '-=0.45'
      );

      timeline.fromTo(
        '[data-process-link]',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.35'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={`section ${styles.process}`}>
      <div className="container">
        <h2 className={styles.sectionTitle} data-process-title>
          {texts.title}
        </h2>
        <div className={styles.processScroller}>
          <div className={styles.processTrack}>
            {texts.steps.map((step, index) => (
              <div key={step} className={styles.processStep}>
                <div className={styles.processDot} data-process-dot>
                  {index + 1}
                </div>
                {index < texts.steps.length - 1 && <span className={styles.processLine} aria-hidden="true" />}
                <p className={styles.processLabel}>{step}</p>
              </div>
            ))}
          </div>
        </div>
        <Link href="/accompagnement" className={`${styles.inlineLink} ${styles.processCta}`} data-process-link>
          {texts.cta} →
        </Link>
      </div>
    </section>
  );
}
