import Link from 'next/link';
import styles from '../../styles/site/CvStory.module.css';

const PDF_PATH = '/CV%20-%20Jean%20Doutrebente.pdf';

const cleanTitle = (value = '') => value.replace(/[^\p{L}\p{N}\s&/-]/gu, '').trim();

export default function CvStory({ cvData }) {
  const profil = cvData?.profil ?? {};
  const competences = cvData?.competences?.items ?? [];
  const formations = cvData?.formations?.items ?? [];

  const skillThemes = competences.slice(0, 4).map((item) => ({
    title: item.title,
    summary: (item.skills ?? []).slice(0, 3).join(' · ')
  }));

  const shortFormations = formations.slice(0, 2);

  return (
    <section className={`section ${styles.page}`}>
      <div className={`container ${styles.wrapper}`}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Exp&eacute;rience et expertise</p>
          <h1 className={styles.title}>
            {profil.user?.firstname} {profil.user?.name}
          </h1>
          <p className={styles.role}>{profil.cvTitle}</p>
          <p className={styles.lead}>
            J&apos;aide les &eacute;quipes &agrave; transformer une id&eacute;e en produit utile, du cadrage &agrave; la mise en production.
            Mon fil rouge : garder la vision produit, l&apos;exp&eacute;rience utilisateur et l&apos;ex&eacute;cution technique
            dans une m&ecirc;me dynamique.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryButton}>
              Discuter de votre projet
            </Link>
            <a href={PDF_PATH} className={styles.secondaryButton} download>
              T&eacute;l&eacute;charger le CV PDF
            </a>
          </div>
        </header>

        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Ce que j&apos;apporte &agrave; un projet</h2>
          <div className={styles.contributionGrid}>
            <article className={styles.contributionCard}>
              <h3>Vision claire</h3>
              <p>On clarifie le probl&egrave;me r&eacute;el, les priorit&eacute;s et les objectifs avant de produire.</p>
            </article>
            <article className={styles.contributionCard}>
              <h3>Prototype concret</h3>
              <p>Je rends rapidement les solutions testables pour it&eacute;rer sans perdre de temps.</p>
            </article>
            <article className={styles.contributionCard}>
              <h3>Ex&eacute;cution fiable</h3>
              <p>Je relie design, produit et code pour livrer un r&eacute;sultat coh&eacute;rent de bout en bout.</p>
            </article>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>{cleanTitle(cvData?.competences?.title || 'Compétences')}</h2>
          <div className={styles.themeList}>
            {skillThemes.map((theme) => (
              <article key={theme.title} className={styles.themeItem}>
                <h3>{theme.title}</h3>
                <p>{theme.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.centeredRow}>
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>{cleanTitle(cvData?.formations?.title || 'Formations')}</h2>
            <ul className={styles.simpleList}>
              {shortFormations.map((formation) => (
                <li key={`${formation.date}-${formation.school}`}>
                  <p>{formation.title}</p>
                  <span>
                    {formation.school} - {formation.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Quelques rep&egrave;res</h2>
          <div className={styles.kpis}>
            <article className={styles.kpiCard}>
              <p className={styles.kpiValue}>7+</p>
              <p className={styles.kpiLabel}>ans en design UX et pilotage produit</p>
            </article>
            <article className={styles.kpiCard}>
              <p className={styles.kpiValue}>1</p>
              <p className={styles.kpiLabel}>profil hybride : design + d&eacute;veloppement</p>
            </article>
            <article className={styles.kpiCard}>
              <p className={styles.kpiValue}>De A &agrave; Z</p>
              <p className={styles.kpiLabel}>de l&apos;id&eacute;e au produit mis en ligne</p>
            </article>
          </div>
        </section>

        <footer className={styles.bottomCta}>
          <p>Si votre projet a besoin d&apos;un profil qui relie strat&eacute;gie, UX et ex&eacute;cution technique, parlons-en.</p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryButton}>
              Me contacter
            </Link>
            <Link href="/v1" className={styles.legacyLink}>
              Voir la V1
            </Link>
          </div>
        </footer>
      </div>
    </section>
  );
}
