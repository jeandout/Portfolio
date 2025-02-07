function ProfilPic(image) {



    return (
        
        <div >
            {image.map((line, key) => {
                return (<p style={{"fontWeight":"800","fontSize":"8px", "fontFamily":"monospace","color":"rgb(0, 0, 0)", "lineHeight":"8px"}} key={key}>{line}</p>)
            })}
        </div>
    )
}

export default ProfilPic