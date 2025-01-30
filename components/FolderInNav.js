import { useState } from "react";
import { MdExpandMore, MdChevronRight } from "react-icons/md";


function FolderInNav({ data, content }) {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        console.log("click");
        setIsOpen(!isOpen);
    }

    const items = content.map((item, key) => {
        return (
            <div className="folderInNavContentItem" key={key}>{item}</div>
        )
    })


    return (
        <>
            <button role="button" onClick={() => handleClick()} className="folderInNav">
                {isOpen ? <MdExpandMore className="folderInNavIcon" /> : <MdChevronRight className="folderInNavIcon" />}
                <h2>{data}</h2>
            </button>
            <div className="folderInNavContent">
                {isOpen && items}
            </div>
        </>
    )
}

export default FolderInNav;