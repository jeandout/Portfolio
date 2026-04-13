import { HiOutlineCalendar } from 'react-icons/hi';
import ContactForm from '../components/site/ContactForm';
import texts from '../locales/fr.json';
import styles from '../styles/site/Contact.module.css';

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>{texts.contact.title}</h1>
          <p className={styles.subtitle}>{texts.contact.subtitle}</p>
        </header>

        <section className={styles.grid}>
          <ContactForm texts={texts.contact.form} fallbackEmail={texts.contact.info.email} />

          <aside className={styles.aside}>
            <article className={styles.bookingCard}>
              <h2 className={styles.asideTitle}>
                <HiOutlineCalendar />
                {texts.contact.booking.title}
              </h2>
              <p className={styles.asideText}>{texts.contact.booking.description}</p>
              <a
                className={styles.bookingButton}
                href={texts.contact.booking.url}
                target="_blank"
                rel="noreferrer"
              >
                {texts.contact.booking.button}
              </a>
            </article>

            <hr className={styles.separator} />

            <article className={styles.infoCard}>
              <h2 className={styles.asideTitle}>Contact direct</h2>
              <a className={styles.infoLink} href={`mailto:${texts.contact.info.email}`}>
                {texts.contact.info.email}
              </a>
              <a
                className={styles.infoLink}
                href={texts.contact.info.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </article>
          </aside>
        </section>
      </div>
    </div>
  );
}
