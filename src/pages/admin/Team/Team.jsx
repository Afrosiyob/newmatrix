import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./Team.scss";
import { TeamTable } from "./TeamTable/TeamTable";

function Team() {
  return (
    <Container fluid>
      <h1 className="font-weight-bold w-100 mb-3"> My team </h1>

      <div>
        <h4 className="w-100 text-muted mb-3">All team members</h4>
        <TeamTable />
      </div>
    </Container>
  );
}

export default Team;
