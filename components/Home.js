import styles from '../styles/Home.module.css';


import { gsap } from "gsap";

import data from "../public/CV.json";


function Home() {
  return (
      <div >
        <header className={`${styles.section} ${styles.bgRed}`}>
          <h1>{data.user.firstname} {data.user.name}</h1>
          <h2 >{data.cvTitle}</h2>
        </header>
        <main >
          <section className={`${styles.section} ${styles.bgBlue}`}>
            <p>{data.profil}</p>
          </section>
          <section className={`${styles.section} ${styles.bgGreen}`}>
            <p>{data.profil}</p>
          </section>
        </main>
      </div>
  );
}

export default Home;
