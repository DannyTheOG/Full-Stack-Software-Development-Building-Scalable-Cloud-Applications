import React,  { useState } from "react";
import { Form, FormGroup, Button, Row, Col } from "react-bootstrap";

import AlertMessage from "../components/AlertMessage";
import { credentials } from "../credentials";
import { users } from "../users";


function LoginPage() {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("");
    const [ success, setSuccess ] = useState("");

    const handleUsernameChange = ( event ) => {
        setError( "" );
        setUsername( event.target.value );
    }

    const handlePasswordChange = ( event ) => {
        setError( "" );
        setPassword( event.target.value );
    }

    const handleSubmit = ( event ) => {
        event.preventDefault();

        if( username === "" && password === "" ) {
            setError( "Username and Password are required." );
        } else {
            const userCredentials = credentials;

            if( !userCredentials ) {
                setError( "Unable to perform sign in operation." );
            } else if( userCredentials[username] && userCredentials[username] === password ) {
                setSuccess( "Logged in successfully." );

                const userObject = users.filter(
                    ( user ) => user.username === username
                )[0];

                sessionStorage.setItem( "loggedInUser", JSON.stringify( userObject ) );
                window.location.reload();
            } else {
                setError( "Username or password incorrect" );
            }
        }
    }



    return(
        <>
            {
                error && 
                <AlertMessage 
                    variant = {"danger"} 
                    message = {error} 
                /> 
            }
            {
                success && 
                <AlertMessage 
                    variant = {"success"} 
                    message = {success} 
                /> 
            }
            <FormGroup className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    id="username"
                    placeholder="username"
                    onChange={ handleUsernameChange }
                />
            </FormGroup>
            <FormGroup className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    id="password"
                    placeholder="password"
                    onChange={ handlePasswordChange }
                />
            </FormGroup>
            <Button 
                variant="primary" 
                type="submit"
                onClick={ handleSubmit }
            >
                LOGIN
            </Button>
            <Row>
                <Col className="mb-3">
                    Don't have an account? Register
                </Col>
            </Row>
        </>
    );
}


export default LoginPage;