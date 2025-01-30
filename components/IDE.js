import styles from '../styles/IDE.module.css';
import React from 'react';

import data from "../public/CV.json";
import FolderInNav from '../components/FolderInNav';

const menu = () => {
  return (
    <>
      <h1>{data.profil.user.firstname} {data.profil.user.name}</h1>
      <FolderInNav data={data.profil.cvTitle} content={["Profil","Formations","Compétences","Expériences","Intérêts",<FolderInNav 
            key="sub-folder" 
            data="Dossier Enfant" 
            content={["Expériences", "Compétences",]} 
        />]}/>
    </>
  )
}

function File(title, type, items) {
  return(
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map((item, key) => {
          return (
            <li key={key}>{item}</li>
          );
        })}
      </ul>
    </div>
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
