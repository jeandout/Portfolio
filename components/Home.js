import styles from '../styles/Home.module.css';


import { gsap } from "gsap";

import data from "../public/CV.json";


function Home() {
  return (
    <div>
      <header className={styles.section}>
        <h1>{data.user.firstname}{data.user.name}</h1>
        <h2 >{data.cvTitle}</h2>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <p>{data.profil}</p>
        </section>


        <section className={styles.name}>

        </section>
      </main>
    </div>
  );
}

export default Home;
