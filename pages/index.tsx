import styles from '../styles/site/Home.module.css';

export default function Home() {
  return (
    <section className={styles.placeholder}>
      <div className="container">
        <h1 className={styles.title}>Site en construction</h1>
        <p className={styles.sub}>La page d'accueil arrive à l'étape 3.</p>
        <div className={styles.dot} />
      </div>
    </section>
  );
}
