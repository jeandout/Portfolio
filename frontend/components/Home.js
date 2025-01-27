import styles from '../styles/Home.module.css';

import { gsap } from "gsap";

import data from "../public/CV.json";


function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {data.cvTitle}
        </h1>
        <p>{data.profil}</p>
      </main>
    </div>
  );
}

export default Home;
