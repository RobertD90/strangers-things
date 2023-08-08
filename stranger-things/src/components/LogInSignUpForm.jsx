import React, { useState } from 'react';



const LogInSignUpForm = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        handleLogin(event);
    }



    return (
        <div>

            <h3>Stranger's Things</h3>

        </div>
    );
}

export default LogInSignUpForm;