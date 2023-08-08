import React, { useState } from 'react';
import LogInSignUpForm from './LogInSignUpForm';
import LogAuth from './LogAuth';
import './App.css'
import App from './App.jsx'

const AppForAuth = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2306-fsa-et-web-ft-sf/someEndPoint`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                    }),
                })

            const result = await response.json()
            console.log(`API response`, result)
            console.log(`Token:`, result.token)
            // return result
            setToken(result.token)
        } catch (error) {
            console.error('Error occured:', error)
            setError(`There was an error while processing your request, sorry`)
            console.log(result)
        }
    }

    return (
        <>
            <LogInSignUpForm token={token} setToken={setToken} />
            <LogAuth token={token} setToken={setToken} />
            <h2>Sign Up Form</h2>
            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text"
                        value={username}
                        onChange={(event) => {
                            console.log(event.target.value);
                            setUsername(event.target.value)
                        }} />
                </label>
                <label>
                    Password:
                    <input type="password"
                        value={password}
                        onChange={(event) => {
                            console.log(event.target.value)
                            setPassword(event.target.value)
                        }} />
                </label>
                <button type='Submit'> Submit </button>

            </form>
        </>
    );
};

export default AppForAuth;
