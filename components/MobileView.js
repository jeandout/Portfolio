import data from "../public/CV.json";

function MobileView() {

    const dataList = []

        for (const key in data) {
            if (data[key].title) {
                dataList.push(data[key]);
            }
        }

    // const MobileMenu = () => {

        

    //     return (
    //         <ul>

    //             {
    //                 dataList.map((data, key) => {
    //                     return (
    //                         <li key={key}>{data.title}</li>
    //                     )
    //                 })
    //             }

    //         </ul>

    //     )
    // }

    return (
        <div className="mobileContent">
            <nav>
                <h1>{dataList[0].user.firstname} {dataList[0].user.name}</h1>
            </nav>
            <main>
            </main>
        </div>
    )

}
export default MobileView