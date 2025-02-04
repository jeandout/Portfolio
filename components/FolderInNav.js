import { useState } from "react";
import { MdExpandMore, MdChevronRight } from "react-icons/md";


function FolderInNav({ action, data, selectedFile}) {

    const [isOpen, setIsOpen] = useState(true);

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
        action(item);
    }
   

    const items = titles.map((item, key) => { //affiche les fichiers et change la couleur de celui selectionné
        return (
            <button onClick={() => clickedFile(item)} style={{"textTransform": "capitalize"}} className={item == selectedFile ? "selectedFile" : "fileItem"} key={key}>{item.title}</button>
        )
    })

    return (
        <div>
            <button onClick={() => handleClick()} className="folderInNav">
                {isOpen ? <MdExpandMore className="folderInNavIcon" /> : <MdChevronRight className="folderInNavIcon" />}
                <h3 className="menuTitle">{data.profil.cvTitle}</h3>
            </button>
            <div className="folderInNavContent">
                {isOpen && items}
            </div>
        </div>
    )
}

export default FolderInNav;