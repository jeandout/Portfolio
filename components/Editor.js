import styles from '../styles/Editor.module.css';
import { useState } from "react";
import { MdClose } from "react-icons/md";



function Editor({ openedTabs, removeTab, selectedFile, setSelectedFile }) {

    const tabs = () => {

        return (
            openedTabs.map((data, key) => {
                return (<div className={styles.tab}  key={key}><button className={data == selectedFile ? "selectedFile" : {}} onClick={() => setSelectedFile(data)}>{data.title}</button><MdClose onClick={() => close(data)}></MdClose></div>)
            })
        )
    }

    const editorContent = () => {
    
    }

    const close = (item) => {
        removeTab(item);
    }

    return (
        <div className={styles.editor}>
            <div className={styles.tabLine}>
                {tabs()}
            </div>
            <div className="editorContent">

            </div>
        </div>
    )
}

export default Editor;