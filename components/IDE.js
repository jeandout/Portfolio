import styles from '../styles/IDE.module.css';
import React from 'react';
import data from "../public/CV.json";
import FolderInNav from '../components/FolderInNav';
import Editor from './Editor';

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

  useEffect(() => {
    if (!openTabs.includes(selectedFile)) {
      setSelectedFile(openTabs.at(-1) || null);
    }
  }, [openTabs]); // Se déclenche à chaque mise à jour de `openTabs`
  
  //Gestion du resize des éléments horizontaux

  const isResizing = useRef(false);
  const containerRef = useRef(null);

  const startResizing = () => {
    isResizing.current = true;
  };

  const stopResizing = () => {
    isResizing.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isResizing.current) return;

    const container = containerRef.current;
    if (!container) return;

    // Calcul de la largeur en pourcentage relatif au conteneur IDE
    const { left, width } = container.getBoundingClientRect();
    const relativeX = e.clientX - left;
    const newWidth = (relativeX / width) * 100;
    setLeftWidth(Math.min(85, Math.max(15, newWidth))); // Limite entre 15% et 85%
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
    <div ref={containerRef} className={styles.component}
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
      <main className={styles.main} style={{ width: `${100 - leftWidth}%` }}>
        <section className={styles.editor}>
          <Editor
            openTabs={openTabs}
            selectedFile={selectedFile}
            setOpenTabs={setOpenTabs}
            setSelectedFile={setSelectedFile} />
        </section>
      </main>
    </div>
  );
}

export default IDE;
