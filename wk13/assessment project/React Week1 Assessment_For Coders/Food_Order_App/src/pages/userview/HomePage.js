import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import ItemCard from "../../components/ItemCard";
import categories from "../../categories";
import cuisines from "../../cuisines";
import restaurants from "../../restaurants";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid">
        {/* Implement Task 1 - Displaying cuisine names and images */}
         <h4><strong>Try New Cuisines</strong></h4>
         <Row>
            {cuisines.map(cuisine=> (
              <Col key={cuisine.id} xs={12} md={6} lg={3}>
                <ItemCard itemName={"cuisine"} item={cuisine} />
              </Col>
            ))}
         </Row>
      </div>
      <div className="container-fluid">
        {/* Implement Task 1 - Displaying category names and images */}
        <h4><strong>Get inspiration for your order</strong></h4>
         <Row>
            {categories.map(category=> (
              <Col key={category.id} xs={12} md={6} lg={3}>
                <ItemCard itemName={"category"} item={category} />
              </Col>
            ))}
         </Row>
      </div>
      <div className="container-fluid">
        {/* Implement Task 1 - Displaying restaurant names and images */}
        <h4><strong>Available restaurant</strong></h4>
        <Row>
            {restaurants.map(restaurant=> (
              <Col  key={restaurant.id} xs={12} md={6} lg={3}>
                <ItemCard itemName={"restaurant"} item={restaurant} />
              </Col>
            ))}
         </Row>
      </div>
    </>
  );
};

export default HomePage;
