import styles from '../styles/IDE.module.css';
import React from 'react';

import data from "../public/CV.json";

const menu = () => {
  return (
    <>
      <h1>{data.user.firstname} {data.user.name}</h1>
      <h2 >{data.cvTitle}</h2>
      <ul>
        <li>Profil</li>
        <li>Formations</li>
        <li>Compétences</li>
        <li>Expériences</li>
        <li>Intérêts </li>
      </ul>
    </>
  )
}

function IDE() {

  return (
    <div className={styles.component}>
      <nav className={styles.nav}>
        {menu()}
      </nav>
      <main className={styles.main}>
        <section className={styles.editor}>
          <ul>
            <li>Profil</li>
            <li>Formations</li>
            <li>Compétences</li>
            <li>Expériences</li>
            <li>Intérêts </li>
          </ul>
        </section>
        <section className={styles.console}>
          <ul>
            <li>Profil</li>
            <li>Formations</li>
            <li>Compétences</li>
            <li>Expériences</li>
            <li>Intérêts </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default IDE;
