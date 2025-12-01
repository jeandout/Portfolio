import data from "../public/CV.json";
import styles from '../styles/MobileView.module.css';
import ProfilPic from '../components/ProfilPic';

function MobileView() {

    const profil = data.profil;
    const formations = data.formations;
    const competences = data.competences;
    const experiences = data.experiences;
    const otherExperiences = data.otherExperiences;
    const interest = data.interest;

    return (
        <div className={styles.mobileContent}>
            {/* Profil Section */}
            <section className={`${styles.section} ${styles.profilSection}`}>
                <h2>{profil.user.firstname} {profil.user.name}</h2>
                <h1>{profil.cvTitle}</h1>
                <p>{profil.resume}</p>
            </section>

            {/* Competences Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>{competences.title}</h2>
                {competences.items.map((item, key) => (
                    <div key={key} className={styles.card}>
                        <h2>{item.title}</h2>
                        <div className={styles.skillsList}>
                            {item.skills.map((skill, k) => (
                                <span key={k} className={styles.skillItem}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* Experiences Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>{experiences.title}</h2>
                {experiences.items.map((item, key) => (
                    <div key={key} className={styles.card}>
                        <p className={styles.years}>{item.date}</p>
                        <div className={styles.experience}>
                            <h2>{item.title}</h2>
                            <p className={styles.company}>{item.company}</p>
                            {item.description.map((desc, k) => (
                                <p key={k}>{desc}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* Formations Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>{formations.title}</h2>
                {formations.items.map((item, key) => (
                    <div key={key} className={styles.card}>
                        <p className={styles.years}>{item.date}</p>
                        <div className={styles.formation}>
                            <h2>{item.title}</h2>
                            <p>{item.school}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Other Experiences Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>{otherExperiences.title}</h2>
                {otherExperiences.items.map((item, key) => (
                    <div key={key} className={styles.card}>
                        <p className={styles.years}>{item.date}</p>
                        <h2>{item.company}</h2>
                    </div>
                ))}
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <a href="https://github.com/jeandout/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>GitHub</a>
                <a href="https://www.linkedin.com/in/jean-doutrebente-732884203/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>LinkedIn</a>
            </footer>

        </div>
    )

}
export default MobileView