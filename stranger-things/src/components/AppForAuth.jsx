import React, { useState } from 'react';
import LogInSignUpForm from './LogInSignUpForm';
import LogAuth from './LogAuth';
import SignUpForm from './SignUpForm';


const AppForAuth = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null);

    const handleSubmit = async (event) => {

        event.preventDefault();


        try {
            const response = await fetch(
                'https://strangers-things.herokuapp.com/api/2306-fsa-et-web-ft-sf/users/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user: {
                            username: username,
                            password: password,
                        },
                    }),
                }
            );

            const result = await response.json();
            console.log(`API response`, response)
            console.log('Token:', result.token)
            setToken(result.token);

        } catch (error) {
            console.error('Error occurred:', error);
            setError('An error occurred while processing your request.');
            console.log(result)

        }
    };

    return (
        <>
            <SignUpForm token={token} setToken={setToken} />
            <LogInSignUpForm token={token} setToken={setToken} />
            <LogAuth token={token} setToken={setToken} />
            <h2>Log In Form</h2>
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
                        }}
                    />
                </label>
                <button type="submit">Log In</button>
            </form>
        </>
    );
};

export default AppForAuth;
