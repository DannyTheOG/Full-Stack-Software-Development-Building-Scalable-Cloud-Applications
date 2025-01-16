import React from 'react';
import { Alert } from 'react-bootstrap'

function AlertMessage( props ) {
    return(
        <>
            <Alert 
                variant = {props.variant} 
                key = {props.variant}
            >
                <p
                    className="bi bi-exclamation-diamond-fill"
                >
                    {props.message}
                </p>
            </Alert>
        </>
    );
}


export default AlertMessage;