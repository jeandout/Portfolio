import styles from '../styles/Editor.module.css';
import { useState } from "react";
import { MdClose } from "react-icons/md";
import Image from 'next/image';
import ProfilPic from '../components/ProfilPic';

import EditorContent from '../components/EditorContent';




function Editor({ openTabs, setOpenTabs, selectedFile, setSelectedFile }) {

    const close = (item) => {
        const newOpenTabs = openTabs.filter(tab => tab.title !== item.title);
        console.log(newOpenTabs)
        setOpenTabs(newOpenTabs);
        setSelectedFile(newOpenTabs.at(-1))
    }

    const tabs = () => {

        return (
            openTabs.map((data, key) => {
                return (<button onClick={() => setSelectedFile(data)} className={data == selectedFile ? "selectedTab" : "tab"} key={key}><div style={{ "textTransform": "capitalize" }} className={data == selectedFile ? "selectedTextTab" : {}} >{data.title} </div><MdClose onClick={() => close(data)}></MdClose></button>)
            })
        )
    }




    return (
        <div className={styles.editor} >
            <div className={styles.tabLine}>
                {tabs()}
            </div>
            <EditorContent
                openTabs={openTabs}
                setOpenTabs={setOpenTabs}
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
            />
        </div>
    )
}

export default Editor;