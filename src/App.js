import React, { useState } from "react";
import RestaurantList from "./components/RestaurantList";
import { Row, Col } from "react-materialize";

const App = () => {
  const [name, setName] = useState("viewers");
  return (
    <div style={{marginTop: "16px"}}>
      <Row>
        <Col s={12} m={10} l={8} offset="m1 l2">
          <RestaurantList />
        </Col>
      </Row>
    </div>
  );
};

export default App;
