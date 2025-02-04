import { useState } from 'react';

function Console() {

    const [message, setMessage] = useState('');

    const handleClick = () => {

    }

    return (
        <div className="console">
            <textarea
                style={{ "width": "100%", "height": "100%", "zIndex": "1", "color": "rgb(201,201,201)" }}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder='Pour me contacter, tapper votre message'
            />
            <button className="sendButton" style={{ "zIndex": "10", "position": "absolute", "bottom": "10px", "right": "10px" }} onClick={() => handleClick()}>Envoyer</button>
        </div>
    )
}
export default Console;