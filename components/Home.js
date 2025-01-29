import styles from '../styles/Home.module.css';
import React from 'react';

import data from "../public/CV.json";

const competences = data.competences.items.map((competence, key) => {
  const lines = competence.skills.map((skill, key) => {
    return (
      <li key={key}>{skill}</li>
    );
  });
  return (
    <div key={key}>
      <h3>{competence.groupName}</h3>
      <ul>{lines}</ul>
    </div>
  );
})

const experiences = data.experiences.items.map((experience, key) => {
  return (
    <div key={key}>
      <h3>{experience.title} {experience.company}</h3>
      <p>{experience.date}</p>
    </div>
  );
})

function Home() {

  return (
    <div >
      <header className={`${styles.section}`}>
        <h1>{data.user.firstname} {data.user.name}</h1>
        <h2 >{data.cvTitle}</h2>
        <p>{data.profil}</p>
      </header>
      <main className={`${styles.container}`} >
        <section className={`${styles.section} `}>
          <h2>{data.competences.title}</h2>
          {competences}
        </section>
        <section className={`${styles.section} `}>
        <h2>{data.experiences.title}</h2>
        {experiences}
        </section>
        <section className={`${styles.section} `}>

        </section>
      </main>
    </div>
  );
}

export default Home;
