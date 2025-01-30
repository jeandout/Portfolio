import styles from '../styles/IDE.module.css';
import React from 'react';

import data from "../public/CV.json";
import FolderInNav from '../components/FolderInNav';
import Editor from './Editor';

import { useState } from "react";

function IDE() {

  const [openTabs, setOpenTabs] = useState([]); //état des onglets ouverts
  const [selectedFile, setSelectedFile] = useState(""); //

  
  function addTab(item) { //ajoute un nouvel onglet au clic dans le menu
    if (!openTabs.includes(item)) {
      setOpenTabs([...openTabs, item]);
    }
    setSelectedFile(item);
  }

  function removeTab(item) { //ferme un onglet
    setOpenTabs(openTabs.filter(tab => tab !== item));
    setSelectedFile("")
  }

  return (
    <div className={styles.component}>
      <nav className={styles.nav}>
      <h1>{data.profil.user.firstname} {data.profil.user.name}</h1>
      <FolderInNav
        action={addTab} //action à effectuer lorsqu'on clique sur un fichier
        data={data} //données à afficher
        selectedFile={selectedFile} // fichier mis en avant
      />
      </nav>
      <main className={styles.main}>
        <section className={styles.editor}>
          <Editor openedTabs={openTabs} removeTab={removeTab} selectedFile={selectedFile} setSelectedFile={setSelectedFile}/>
        </section>
        <section className={styles.console}>
          <ul>
            <li>Console</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default IDE;
