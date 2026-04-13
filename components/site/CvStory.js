import Link from 'next/link';
import styles from '../../styles/site/CvStory.module.css';

const PDF_PATH = '/CV%20-%20Jean%20Doutrebente%20-%20PE.pdf';

const cleanTitle = (value = '') => value.replace(/[^\p{L}\p{N}\s&/-]/gu, '').trim();
const currentYear = new Date().getFullYear();

const getExperienceDuration = (period = '') => {
  const fromMatch = period.match(/Depuis\s+(\d{4})/i);
  if (fromMatch) {
    const startYear = Number(fromMatch[1]);
    return Math.max(1, currentYear - startYear + 1);
  }

  const rangeMatch = period.match(/(\d{4})\s*-\s*(\d{4})/);
  if (rangeMatch) {
    const startYear = Number(rangeMatch[1]);
    const endYear = Number(rangeMatch[2]);
    return Math.max(1, endYear - startYear + 1);
  }

  const singleYearMatch = period.match(/(\d{4})/);
  if (singleYearMatch) return 1;

  return 1;
};

const logoForExperience = (experience = {}) => {
  const company = experience.company?.toLowerCase?.() ?? '';
  if (company.includes('dynames')) return '/dynames-logo.svg';
  if (company.includes('cea')) return '/cea-logo.svg';
  return '/JD.svg';
};

export default function CvStory({ cvData }) {
  const profil = cvData?.profil ?? {};
  const experiences = cvData?.experiences?.items ?? [];
  const competences = cvData?.competences?.items ?? [];
  const formations = cvData?.formations?.items ?? [];
  const interest = cvData?.interest?.items ?? [];

  const rawKeyMoments = experiences.slice(0, 3).map((experience) => {
    const duration = getExperienceDuration(experience.date);
    return {
      period: experience.date,
      duration,
      title:
        experience.title === 'Product Engineer'
          ? `${experience.title} — Freelance`
          : `${experience.title} — ${experience.company}`,
      storyLines: (experience.description ?? []).slice(0, 4),
      logo: logoForExperience(experience)
    };
  });
  const maxDuration = Math.max(...rawKeyMoments.map((moment) => moment.duration), 1);
  const keyMoments = rawKeyMoments.map((moment) => ({
    ...moment,
    weight: Number((moment.duration / maxDuration).toFixed(2))
  }));

  const skillThemes = competences.slice(0, 4).map((item) => ({
    title: item.title,
    summary: (item.skills ?? []).slice(0, 3).join(' · ')
  }));

  const shortFormations = formations.slice(0, 2);

  return (
    <section className={`section ${styles.page}`}>
      <div className={`container ${styles.wrapper}`}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Parcours</p>
          <h1 className={styles.title}>
            {profil.user?.firstname} {profil.user?.name}
          </h1>
          <p className={styles.role}>{profil.cvTitle}</p>
          <p className={styles.lead}>
            J&apos;aide les equipes a transformer une idee en produit utile, du cadrage a la mise en production.
            Mon fil rouge: garder la vision produit, l&apos;experience utilisateur et l&apos;execution technique
            dans une meme dynamique.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryButton}>
              Discuter de votre projet
            </Link>
            <a href={PDF_PATH} className={styles.secondaryButton} download>
              Telecharger le CV PDF
            </a>
          </div>
        </header>

        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Mon histoire en 3 chapitres</h2>
          <ol className={styles.storyline}>
            {keyMoments.map((moment) => (
              <li
                key={moment.title}
                className={styles.storyItem}
                style={{ '--story-weight': moment.weight }}
              >
                <div className={styles.storyLogoWrap}>
                  <img src={moment.logo} alt="" aria-hidden="true" className={styles.storyLogo} />
                </div>
                <article className={styles.storyCard}>
                  <div className={styles.storyHead}>
                    <h3>{moment.title}</h3>
                    <span>{moment.period}</span>
                  </div>
                  {moment.storyLines.map((line, index) => (
                    <p key={`${moment.title}-${index}`}>{line}</p>
                  ))}
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Ce que j&apos;apporte a un projet</h2>
          <div className={styles.contributionGrid}>
            <article className={styles.contributionCard}>
              <h3>Vision claire</h3>
              <p>On clarifie le probleme reel, les priorites et les objectifs avant de produire.</p>
            </article>
            <article className={styles.contributionCard}>
              <h3>Prototype concret</h3>
              <p>Je rends rapidement les solutions testables pour iterer sans perdre de temps.</p>
            </article>
            <article className={styles.contributionCard}>
              <h3>Execution fiable</h3>
              <p>Je relie design, produit et code pour livrer un resultat coherent de bout en bout.</p>
            </article>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>{cleanTitle(cvData?.competences?.title || 'Competences')}</h2>
          <div className={styles.themeList}>
            {skillThemes.map((theme) => (
              <article key={theme.title} className={styles.themeItem}>
                <h3>{theme.title}</h3>
                <p>{theme.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.twoCols}>
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
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>En dehors du cadre</h2>
            <ul className={styles.tagList}>
              {interest.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Quelques reperes</h2>
          <div className={styles.kpis}>
            <article className={styles.kpiCard}>
              <p className={styles.kpiValue}>7+</p>
              <p className={styles.kpiLabel}>ans en design UX et pilotage produit</p>
            </article>
            <article className={styles.kpiCard}>
              <p className={styles.kpiValue}>1</p>
              <p className={styles.kpiLabel}>profil hybride: design + developpement</p>
            </article>
            <article className={styles.kpiCard}>
              <p className={styles.kpiValue}>A a Z</p>
              <p className={styles.kpiLabel}>de l&apos;idee au produit mis en ligne</p>
            </article>
          </div>
        </section>

        <footer className={styles.bottomCta}>
          <p>Si ton projet a besoin d&apos;un profil qui relie strategie, UX et execution technique, parlons-en.</p>
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
