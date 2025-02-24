import styles from '../styles/IDE.module.css';
import React from 'react';
import data from "../public/CV.json";
import FolderInNav from '../components/FolderInNav';
import Editor from './Editor';
import Console from './Console';

import { useState, useRef, useEffect } from "react";

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

  useEffect(() => {
    if (!openTabs.includes(selectedFile)) {
      setSelectedFile(openTabs.at(-1) || null);
    }
  }, [openTabs]); // Se déclenche à chaque mise à jour de `openTabs`
  
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

  function openLink(item) {
    console.log(item.link)
    window.open(item.link, "_blank", "noopener,noreferrer");

  }

  function addTab(item) { //ajoute un nouvel onglet au clic dans le menu
    if (!openTabs.includes(item)) {
      setOpenTabs([...openTabs, item]);
    }
    setSelectedFile(item);
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
          titles={titles} //tableau de données à afficher
          selectedFile={selectedFile} // fichier mis en avant
          name={data.profil.cvTitle}
        />
        <FolderInNav
          action={openLink} //action à effectuer lorsqu'on clique sur un fichier
          titles={[{ "title": "GitHub", "link": "https://github.com/jeandout/" }, { "title": "LinkedIn", "link": "https://www.linkedin.com/in/jean-doutrebente-732884203/" }]} //tableau de données à afficher
          selectedFile={selectedFile} // fichier mis en avant
          name="Mes réseaux"
        />

      </nav>
      <div className="resizer" onMouseDown={startResizing} />
      <main className={styles.main} style={{ width: `${100 - leftWidth}%` }} onMouseMove={handleMouseMoveH}
        onMouseUp={stopResizingH}
        onMouseLeave={stopResizingH}>
        <section className={styles.editor} style={{ height: `${editorHeight}%` }}>
          <Editor
            openTabs={openTabs}
            selectedFile={selectedFile}
            setOpenTabs={setOpenTabs}
            setSelectedFile={setSelectedFile} />
        </section>
        <div className="resizerH" onMouseDown={startResizingH} />
        <section className={styles.console} style={{ height: `${100 - editorHeight}%` }}>
          <Console />
        </section>
      </main>
    </div>
  );
}

export default IDE;
