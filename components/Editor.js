import styles from '../styles/Editor.module.css';
import { useState } from "react";
import { MdClose } from "react-icons/md";
import Image from 'next/image';
import ProfilPic from '../components/ProfilPic';




function Editor({ openedTabs, removeTab, selectedFile, setSelectedFile }) {


    const tabs = () => {

        return (
            openedTabs.map((data, key) => {
                return (<button onClick={() => setSelectedFile(data)} className={data == selectedFile ? "selectedTab" : "tab"} key={key}><div style={{ "textTransform": "capitalize" }} className={data == selectedFile ? "selectedTextTab" : {}} >{data.title} </div><MdClose onClick={() => close(data)}></MdClose></button>)
            })
        )
    }

    const editorContent = () => {
        if (selectedFile) {
            switch (selectedFile.title) {
                case '🤵🏼‍♂️ profil':
                    return (
                        <>
                            
                            <div className='profilContent'>
                            {ProfilPic(selectedFile.profilPic)}

                                <div style={{ "width": "100%", "textAlign": "left", "display": "flex", "flexDirection": "column", "justifyContent": "flex-end", "height": "100%", "gap":"15px" }} >
                                    <h1 >
                                        {selectedFile.user.firstname} {selectedFile.user.name}
                                    </h1>

                                    <h2 style={{ "marginBottom": "0rem" }}>
                                        {selectedFile.cvTitle}
                                    </h2>
                                    <p style={{ "width": "100%" }}>
                                    {selectedFile.resume}
                                </p>
                                </div>

                                
                            </div>
                        </>

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
                                        <div key={key} className={styles.card}>
                                            <p className={styles.years}>{item.date}</p>
                                            <div className={styles.formation}>
                                                <h2 >{item.title}</h2>
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
                                        <div key={key}>
                                            <h2 >{item.title}</h2>
                                            <div>{item.skills.map((skill, key) => {
                                                return (
                                                    <p key={key}>{skill}</p>
                                                )
                                            })}</div>
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
                                        <div key={key} className={styles.card}>
                                            <p className={styles.years}>{item.date}</p>
                                            <div className={styles.formation}>
                                                <h2 >{item.title}</h2>
                                                <p style={{ "color": "white", "textTransform": "uppercase" }}>{item.company}</p>
                                                <div>{item.description.map((desc, key) => {
                                                    return (
                                                        <p key={key}>{desc}</p>
                                                    )
                                                })}</div>
                                                {item.projects && (
                                                    <>
                                                        <p>Projets notables :</p>
                                                        <ul>
                                                            {item.projects.map((project, key) => {
                                                                return (
                                                                    <li key={key} style={{ "listStyleType": "disc", "marginLeft": "15px" }} >{project}</li>
                                                                )
                                                            }
                                                            )}
                                                        </ul>
                                                    </>
                                                )}
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
                                        <div key={key} className={styles.card}>
                                            <p className={styles.years}>{xp.date}</p>
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