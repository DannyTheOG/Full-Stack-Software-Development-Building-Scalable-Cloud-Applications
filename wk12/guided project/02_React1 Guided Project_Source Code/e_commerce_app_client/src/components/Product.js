import React from 'react';
import { Card } from 'react-bootstrap';

function Product( props ) {
    return(
        <>
            <Card className = "p-3 my-3 rounded">
                <Card.Img
                    variant = "top"
                    src = {props.product.image}
                    width = {"100%"}
                />
                <Card.Body>
                    <Card.Title as = "div">
                        <strong>{props.product.name}</strong>
                    </Card.Title>
                    <Card.Text as = "h3">
                        ${props.product.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}


export default Product;