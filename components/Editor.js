import styles from '../styles/Editor.module.css';
import { useState } from "react";
import { MdClose } from "react-icons/md";
import Image from 'next/image';




function Editor({ openedTabs, removeTab, selectedFile, setSelectedFile }) {


    const tabs = () => {

        return (
            openedTabs.map((data, key) => {
                return (<div className={data == selectedFile ? "selectedTab" : "tab"} key={key}><button style={{ "textTransform": "capitalize" }} className={data == selectedFile ? "selectedTextTab" : {}} onClick={() => setSelectedFile(data)}>{data.title} </button><MdClose onClick={() => close(data)}></MdClose></div>)
            })
        )
    }


    const editorContent = () => {


        if (selectedFile) {
            switch (selectedFile.title) {
                case '🤵🏼‍♂️ profil':
                    return (
                        <div className='profilContent'>
                            <div style={{"flex-grow":"1", "width":"100%", "textAlign":"right", "display":"flex", "flexDirection":"column", "justifyContent":"space-between", "height":"100%"}} >
                                <h1 >
                                    {selectedFile.user.firstname} {selectedFile.user.name}
                                </h1>

                                <h2>
                                    {selectedFile.cvTitle}
                                </h2>
                            </div>

                            <p style={{"flex-grow":"1", "width":"100%"}}>
                                {selectedFile.resume}
                            </p>
                        </div>
                    );
                case '🎓 formations':
                    return (
                        <div className={styles.formationsTab}>
                            {/* <h1 style={{ "paddingBottom": "20px", "textAlign": "center" }}>
                                {selectedFile.title}
                            </h1> */}
                            <div className={styles.formationsListe}>
                                {selectedFile.items.map((item, key) => {
                                    return (
                                        <div className={styles.card}>
                                            <p className={styles.years}>{item.date}</p>
                                            <div className={styles.formation}>
                                                <h2 key={key}>{item.title}</h2>
                                                <p>{item.school}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    );
                case '🛠️ compétences':
                    return (
                        <div className={styles.formationsTab}>
                            {/* <h1 style={{ "paddingBottom": "20px", "textAlign": "center" }}>
                                {selectedFile.title}
                            </h1> */}
                            <div className={styles.formationsListe}>
                                {selectedFile.items.map((item, key) => {
                                    return (
                                        <div>
                                            <h2 key={key}>{item.title}</h2>
                                            <p>{item.skills.map((skill, key) => {
                                                return (
                                                    <p key={key}>{skill}</p>
                                                )
                                            })}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    );
                case '💼 expériences':
                    return (
                        <div className={styles.formationsTab}>
                            {/* <h1 style={{ "paddingBottom": "20px", "textAlign": "center" }}>
                                {selectedFile.title}
                            </h1> */}
                            <div className={styles.formationsListe}>
                                {selectedFile.items.map((item, key) => {
                                    return (
                                        <div className={styles.card}>
                                            <p className={styles.years}>{item.date}</p>
                                            <div className={styles.formation}>
                                                <h2 key={key}>{item.title}</h2>
                                                <p style={{ "color": "white", "textTransform": "uppercase" }}>{item.company}</p>
                                                <p>{item.description.map((point, key) => {
                                                    return (
                                                        <p key={key}>{point}</p>
                                                    )
                                                })}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    );
                case '👷🏼‍♂️ autres expériences':
                    return (
                        <div className={styles.formationsTab}>
                            {/* <h1 style={{ "paddingBottom": "20px", "textAlign": "center" }}>
                                {selectedFile.title}
                            </h1> */}
                            <div className={styles.formationsListe} style={{ "alignItems": "center" }}>
                                {selectedFile.items.map((xp, key) => {
                                    return (
                                        <div className={styles.card}>
                                            <p key={key} className={styles.years}>{xp.date}</p>
                                            <h2> {xp.company}</h2>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    );
                case '🔎 intérêts':
                    return (
                        <div className={styles.formationsTab}>
                            {/* <h1 style={{ "paddingBottom": "20px", "textAlign": "center" }}>
                                {selectedFile.title}
                            </h1> */}
                            <div className={styles.formationsListe} style={{ "alignItems": "center" }}>
                                {selectedFile.items.map((xp, key) => {
                                    return (
                                        <p key={key}>{xp}</p>

                                    )
                                })}
                            </div>
                        </div>
                    );
                default:
                    return (
                        <div>Choisissez une catégorie dans le menu</div>
                    )
            }
        } else {
            return (
                <div>Choisissez une catégorie dans le menu</div>
            )
        }

    }

    const close = (item) => {
        removeTab(item);
    }

    return (
        <div className={styles.editor} >
            <div className={styles.tabLine}>
                {tabs()}
            </div>
            <div className="editorContent"  >
                {editorContent()}
            </div>
        </div>
    )
}

export default Editor;