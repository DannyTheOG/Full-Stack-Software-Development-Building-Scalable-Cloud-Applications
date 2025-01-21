import { Col, Card, Button } from "react-bootstrap";

const PageTab = ( props ) => {
    return(
        <Col className="mb-3" xs={12} md={6} lg={4}>
            <Card border="secondary">
                <Card.Body>
                <Card.Title as="h4">{props.page.name}</Card.Title>
                {props.page.view !== "" && 
                    <Button variant="outline-info" size="sm" className="me-3">
                        {props.page.view}
                    </Button>
                }

                {props.page.add !== "" && 
                    <Button variant="outline-info" size="sm" className="me-3">
                        {props.page.add}
                    </Button>
                }
                {props.page.update !== "" && 
                    <Button variant="outline-info" size="sm" className="me-3">
                        {props.page.update}
                    </Button>
                }
                </Card.Body>
            </Card>
        </Col>
    )
}


export default PageTab;