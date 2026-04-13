import Timeline from '../components/site/Timeline';
import CallToAction from '../components/site/CallToAction';
import texts from '../locales/fr.json';
import styles from '../styles/site/Accompagnement.module.css';

export default function Accompagnement() {
  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>{texts.accompagnement.title}</h1>
        <p>{texts.accompagnement.subtitle}</p>
      </header>
      <Timeline steps={texts.accompagnement.steps} />
      <CallToAction
        texts={{
          title: texts.accompagnement.cta,
          subtitle: '',
          button: 'Me contacter'
        }}
      />
    </div>
  );
}
