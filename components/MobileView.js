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
          
                {/* <h1>{dataList[0].user.firstname} {dataList[0].user.name}</h1> */}
        <p>Ce site n'est disponible que sur écran supérieur à 960px</p>
        </div>
    )

}
export default MobileView