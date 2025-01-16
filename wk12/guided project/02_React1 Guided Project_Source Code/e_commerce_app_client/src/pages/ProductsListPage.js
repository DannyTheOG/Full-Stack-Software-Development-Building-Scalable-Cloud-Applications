import React,  { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products"


function ProductListPage() {
    const [productList, setProductList] = useState( products );

    return(
        <>
            <Row>
                { productList.map( ( productItem ) => (
                    <Col key = {productItem.id} lg={3} md={6} sm={12}>
                        <Product product = { productItem }/>
                    </Col>
                ))}
            </Row>
        </>
    );
}


export default ProductListPage;