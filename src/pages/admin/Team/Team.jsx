import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./Team.scss";
import { TeamTable } from "./TeamTable/TeamTable";

function Team() {
  return (
    <Container fluid>
      <h1 className="font-weight-bold w-100 mb-3"> My team </h1>

      <Row>
        <Col className="mb-3" sm="12" md="9">
          <div>
            <h4 className="w-100 text-muted mb-3">All team members</h4>
            <TeamTable />
          </div>
        </Col>
        <Col className="mb-3" sm="12" md="3">
          <div>wefwef</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Team;
