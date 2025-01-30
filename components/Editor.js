import styles from '../styles/Editor.module.css';
import { useState } from "react";
import { MdClose } from "react-icons/md";



function Editor({ openedTabs, action }) {

    const tabs = () => {

        return (
            openedTabs.map((data, key) => {
                return (<div className={styles.tab} key={key}>{data.title}<MdClose onClick={() => close(data)}></MdClose></div>)
            })
        )
    }

    const close = (item) => {
        action(item);
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