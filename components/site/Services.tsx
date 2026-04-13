import { useEffect, useRef } from 'react';
import {
  HiOutlineCode,
  HiOutlinePencilAlt,
  HiOutlineSearch
} from 'react-icons/hi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from '../../styles/site/Home.module.css';

interface ServiceItem {
  title: string;
  description: string;
  icon: 'search' | 'pencil' | 'code' | string;
}

interface ServicesTexts {
  title: string;
  items: ServiceItem[];
  note: string;
}

interface ServicesProps {
  texts: ServicesTexts;
}

const ICON_MAP = {
  search: HiOutlineSearch,
  pencil: HiOutlinePencilAlt,
  code: HiOutlineCode
};

export default function Services({ texts }: ServicesProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('[data-service-card]');

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      });

      timeline.fromTo(
        '[data-services-title]',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      timeline.fromTo(
        cards,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' },
        '-=0.4'
      );

      timeline.fromTo(
        '[data-services-note]',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.35'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={`section ${styles.services}`}>
      <div className="container">
        <h2 className={styles.sectionTitle} data-services-title>
          {texts.title}
        </h2>
        <div className={styles.servicesGrid}>
          {texts.items.map((item) => {
            const Icon = ICON_MAP[item.icon as keyof typeof ICON_MAP] ?? HiOutlineCode;
            return (
              <article key={item.title} className={styles.serviceCard} data-service-card>
                <Icon className={styles.serviceIcon} aria-hidden="true" />
                <h3 className={styles.serviceTitle}>{item.title}</h3>
                <p className={styles.serviceDescription}>{item.description}</p>
              </article>
            );
          })}
        </div>
        <p className={styles.servicesNote} data-services-note>
          {texts.note}
        </p>
      </div>
    </section>
  );
}
