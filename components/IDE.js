import styles from '../styles/IDE.module.css';
import React from 'react';

import data from "../public/CV.json";
import FolderInNav from '../components/FolderInNav';
import Editor from './Editor';

import { useState, useRef } from "react";


function IDE() {

  const titles = []

  for (const key in data) {
    if (data[key].title) {
      titles.push(data[key]);
    }
  }

  const [openTabs, setOpenTabs] = useState(titles); //état des onglets ouverts
  const [selectedFile, setSelectedFile] = useState(openTabs[0]); //
  const [leftWidth, setLeftWidth] = useState(30); // Largeur initiale en %
  const [editorHeight, setEditorHeight] = useState(70); // Largeur initiale en %


  //Gestion du resize des éléments horizontaux

  const isResizing = useRef(false);

  const startResizing = () => {
    isResizing.current = true;
  };

  const stopResizing = () => {
    isResizing.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isResizing.current) return;

    // Calcul de la largeur en pourcentage
    const newWidth = (e.clientX / window.innerWidth) * 100;
    setLeftWidth(Math.min(85, Math.max(15, newWidth))); // Limite entre 20% et 80%
  };

  //end of resize

  //Gestion du resize des éléments verticaux

  const isResizingH = useRef(false);

  const startResizingH = () => {
    isResizingH.current = true;
  };

  const stopResizingH = () => {
    isResizingH.current = false;
  };

  const handleMouseMoveH = (e) => {
    if (!isResizingH.current) return;

    // Calcul de la largeur en pourcentage
    const newHeight = (e.clientY / window.innerHeight) * 100;
    setEditorHeight(Math.min(80, Math.max(20, newHeight))); // Limite entre 20% et 80%
  };

  //end of resize

  function addTab(item) { //ajoute un nouvel onglet au clic dans le menu
    if (!openTabs.includes(item)) {
      setOpenTabs([...openTabs, item]);
    }
    setSelectedFile(item);
  }

  function removeTab(item) { //ferme un onglet
    setOpenTabs(openTabs.filter(tab => tab !== item));
    setSelectedFile(openTabs.filter(tab => tab !== item).at(-1))//selectionne le dernier objet de la liste des onglet ouvert
  }

  return (
    <div className={styles.component}
      onMouseMove={handleMouseMove}
      onMouseUp={stopResizing}
      onMouseLeave={stopResizing}
    >
      <nav className={styles.nav} style={{ width: `${leftWidth}%` }}>
        <h1>{data.profil.user.firstname} {data.profil.user.name}</h1>
        <FolderInNav
          action={addTab} //action à effectuer lorsqu'on clique sur un fichier
          data={data} //données à afficher
          selectedFile={selectedFile} // fichier mis en avant
        />
      </nav>
      <div className="resizer" onMouseDown={startResizing} />
      <main className={styles.main} style={{ width: `${100 - leftWidth}%` }} onMouseMove={handleMouseMoveH}
        onMouseUp={stopResizingH}
        onMouseLeave={stopResizingH}>
        <section className={styles.editor} style={{ height: `${editorHeight}%` }}>
          <Editor openedTabs={openTabs} removeTab={removeTab} selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
        </section>
        <div className="resizerH" onMouseDown={startResizingH} />
        <section className={styles.console} style={{ height: `${100 - editorHeight}%` }}>
          <ul>
            <li>Console</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default IDE;
