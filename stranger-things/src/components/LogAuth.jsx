import React from "react";
import { useState } from "react";

const LogAuth = ({ token }) => {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleClick = async () => {
        try {
            const response = await fetch("https://strangers-things.herokuapp.com/api/2306-fsa-et-web-ft-sf/someEndPoint",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    },
                }
            )
            const result = await response.json()
            setSuccessMessage(result.message);
            console.log(`Thank you for Log In!`, result.username)
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <div>
            <h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token</button>
        </div>
    )
}
export default LogAuth