import { useState } from 'react';

function LoginForm() {
    //handle form value states
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleFormSubmit( event ) {
        event.preventDefault();

        const user = {
            username,
            password
        };

        console.log( user );
    }

    return(
        <form onSubmit = { handleFormSubmit }>
            <label>Username: </label>
            <input 
                type = "text" 
                value = {username} 
                name = "username"
                onChange = { ( event ) => setUsername( event.target.value ) }
            /><br/>
            <label>Password: </label>
            <input 
                type = "password"
                value = {password} 
                name = "password"
                onChange = { ( event ) => setPassword( event.target.value ) }
            /><br/>
            <button type = "submit">LOGIN</button>
        </form>
    );
}


export default LoginForm;