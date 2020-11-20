import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./Team.scss";

function Team() {
  return (
    <Container fluid>
      <h1 className="font-weight-bold w-100 mb-3"> My team </h1>

      <Row>
        <Col className="mb-3" sm="12" md="8">
          <div>wefvwef</div>
        </Col>
        <Col>
          <div>wefwef</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Team;
