import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from '../../styles/site/Timeline.module.css';

interface TimelineStep {
  title: string;
  description: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const items = sectionRef.current.querySelectorAll('[data-timeline-item]');
    const mm = gsap.matchMedia();

    mm.add('(min-width: 941px)', () => {
      items.forEach((item) => {
        const side = item.getAttribute('data-side');
        const offsetX = side === 'left' ? -30 : 30;

        gsap.fromTo(
          item,
          { opacity: 0, x: offsetX },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
            }
          }
        );
      });
    });

    mm.add('(max-width: 940px)', () => {
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
            }
          }
        );
      });
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className={`section ${styles.timelineSection}`}>
      <div className={`container ${styles.timeline}`}>
        <span className={styles.timelineLine} aria-hidden="true" />
        {steps.map((step, index) => {
          const side = index % 2 === 0 ? 'left' : 'right';
          return (
            <article
              key={step.title}
              className={`${styles.timelineItem} ${side === 'left' ? styles.left : styles.right}`}
              data-timeline-item
              data-side={side}
            >
              {side === 'left' ? (
                <>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                  <div className={styles.timelineDot}>{index + 1}</div>
                </>
              ) : (
                <>
                  <div className={styles.timelineDot}>{index + 1}</div>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
