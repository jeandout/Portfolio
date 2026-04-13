import { HiOutlineBriefcase, HiOutlineCalendar, HiOutlinePhone } from 'react-icons/hi';
import texts from '../locales/fr.json';
import styles from '../styles/site/Contact.module.css';

const PHONE_NUMBER = '+33632031786';

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>{texts.contact.title}</h1>
          <p className={styles.subtitle}>{texts.contact.subtitle}</p>
        </header>

        <section className={styles.grid}>
          <article className={styles.contactCard}>
            <h2 className={styles.asideTitle}>
              <HiOutlinePhone />
              Un appel direct ?
            </h2>
            <p className={styles.asideText}>Appelez-moi directement pour un premier echange.</p>
            <a className={`${styles.bookingButton} ${styles.cardAction}`} href={`tel:${PHONE_NUMBER}`}>
              M&apos;appeler
            </a>
          </article>

          <article className={styles.contactCard}>
            <h2 className={styles.asideTitle}>
              <HiOutlineCalendar />
              {texts.contact.booking.title}
            </h2>
            <p className={styles.asideText}>{texts.contact.booking.description}</p>
            <a
              className={`${styles.bookingButton} ${styles.cardAction}`}
              href={texts.contact.booking.url}
              target="_blank"
              rel="noreferrer"
            >
              {texts.contact.booking.button}
            </a>
          </article>

          <article className={styles.contactCard}>
            <h2 className={styles.asideTitle}>
              <HiOutlineBriefcase />
              Contact pro
            </h2>
            <p className={styles.asideText}>Retrouvez-moi aussi sur LinkedIn.</p>
            <a
              className={`${styles.bookingButton} ${styles.cardAction}`}
              href={texts.contact.info.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </article>
        </section>
      </div>
    </div>
  );
}
