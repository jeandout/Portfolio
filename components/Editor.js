import styles from '../styles/Editor.module.css';
import { useState } from "react";
import { MdClose } from "react-icons/md";



function Editor({ openedTabs, removeTab, selectedFile, setSelectedFile }) {

    const tabs = () => {

        return (
            openedTabs.map((data, key) => {
                return (<div className={data == selectedFile ? "selectedTab" : "tab"} key={key}><button className={data == selectedFile ? "selectedTextTab" : {}} onClick={() => setSelectedFile(data)}>{data.title}</button><MdClose onClick={() => close(data)}></MdClose></div>)
            })
        )
    }

    const editorContent = () => {
        if (selectedFile) {
            switch (selectedFile.title) {
                case 'profil':
                    return (
                        <div className='profilContent'>
                            <h1>
                                {selectedFile.user.firstname} {selectedFile.user.name}
                            </h1>

                            <h2>
                                {selectedFile.cvTitle}
                            </h2>
                            <p>
                                {selectedFile.resume}
                            </p>
                            <div className='contact'>
                                contact
                            </div>
                        </div>
                    );
                default:
                    return (
                        <div>Choisissez une catégorie dans le menu</div>

                    )
            }
        }else{
            return (
                <div>Choisissez une catégorie dans le menu</div>

            )
        }

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
                {editorContent()}
            </div>
        </div>
    )
}

export default Editor;