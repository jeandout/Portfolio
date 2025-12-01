import { useState } from 'react';
const API_URL = process.env.NEXT_PUBLIC_API_URL;


function Console() {

    const [message, setMessage] = useState('');

    const handleClick = async () => {

        try {
            const response = await fetch(`${API_URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message, createdAt: new Date().toISOString() }),
            });

            const data = await response.json();

            if (data.result) {
                alert("Message envoyé avec succès !");
                setMessage(""); // Réinitialiser le champ après l'envoi
            } else {
                alert("Échec de l'envoi du message : " + data.message);
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi :", error);
            alert("Une erreur est survenue.");
        }
    };

    return (
        <div className="console">
            <textarea
                style={{ "width": "100%", "height": "100%", "zIndex": "1", "color": "rgb(201,201,201)" }}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder='Contactez moi'
            />
            <button className="sendButton" style={{ "zIndex": "10", "position": "absolute", "bottom": "10px", "right": "10px" }} onClick={() => handleClick()}>Envoyer</button>
        </div>
    )

}

export default Console;