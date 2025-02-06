function ProfilPic(image) {



    return (
        
        <div >
            {image.map((line, key) => {
                return (<p style={{"fontWeight":"800","fontSize":"5px", "fontFamily":"monospace","color":"black", "lineHeight":"5px"}} key={key}>{line}</p>)
            })}
        </div>
    )
}

export default ProfilPic