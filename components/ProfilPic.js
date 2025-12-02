function ProfilPic(image) {



    return (

        <div >
            {image.map((line, key) => {
                return (<p style={{ "fontWeight": "800", "fontSize": "4px", "fontFamily": "monospace", "color": "rgb(0, 0, 0)", "lineHeight": "4px" }} key={key}>{line}</p>)
            })}
        </div>
    )
}

export default ProfilPic