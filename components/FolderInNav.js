import { useState } from "react";
import { MdExpandMore, MdChevronRight } from "react-icons/md";


function FolderInNav({ action, data }) {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState("");

    let titles = []; //récupère les titres des fichiers
    for (const key in data) {
        if (data[key].title) {
            titles.push(data[key]);
        }
    }

    const handleClick = () => { //ouvre ou ferme le dossier
        setIsOpen(!isOpen);
    }

    const clickedFile = (item) => { //action lorsqu'on clique sur un fichier
        setSelectedFile(item.title);
        action(item);
    }
   

    const items = titles.map((item, key) => { //affiche les fichiers et change la couleur de celui selectionné
        return (
            <button onClick={() => clickedFile(item)} className="folderInNavContentItem" style={item.title == selectedFile ? { "color": "red", "font-weight": "600" } : {}} key={key}>{item.title}</button>
        )
    })

    return (
        <>
            <button role="button" onClick={() => handleClick()} className="folderInNav">
                {isOpen ? <MdExpandMore className="folderInNavIcon" /> : <MdChevronRight className="folderInNavIcon" />}
                <h3>{data.profil.cvTitle}</h3>
            </button>
            <div className="folderInNavContent">
                {isOpen && items}
            </div>
        </>
    )
}

export default FolderInNav;