import data from "../public/CV.json";
import styles from '../styles/MobileView.module.css';


function MobileView() {

    const dataList = []

    for (const key in data) {
        if (data[key].title) {
            dataList.push(data[key]);
        }
    }

    return (
        <div className={styles.mobileContent}>

            <h1>{dataList[0].user.firstname} {dataList[0].user.name}</h1>
            <h2>{dataList[0].cvTitle}</h2>
            <h3>{dataList[0].resume}</h3>

        </div>
    )

}
export default MobileView