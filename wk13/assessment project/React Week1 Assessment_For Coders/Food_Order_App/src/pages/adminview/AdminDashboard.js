import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import pages from "../../admin-pages";
import PageTab from "../../components/MenuTab";

const AdminDashboard = () => {
  return (
    <>
      <Container>
        <h2 className="md-auto text-center p-4">Admin Dashboard</h2>
        <Row className="mb-3">
          {/* <Col className="mb-3">
            <Card border="secondary">
              <Card.Body>
                <Card.Title as="h4">Cuisines</Card.Title>
                <Button variant="outline-info" size="sm" className="me-3">
                  View Cuisines
                </Button>
                <Button variant="outline-info" size="sm" className="me-3">
                  Add Cuisine
                </Button>
              </Card.Body>
            </Card>
          </Col> */}

          {
            pages.map( ( page ) => {
              return <PageTab  key={page.id} page={page} />
            } )
          }
        </Row>
      </Container>
    </>
  );
};
export default AdminDashboard;
