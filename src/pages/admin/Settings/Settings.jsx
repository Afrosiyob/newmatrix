import React from "react";
import { Container, Row, Col } from "reactstrap";
import LeftInformation from "./LeftInformation/LeftInformation";
import RightInformation from "./RightInformation/RightInformation";
import "./Settings.scss";

function Settings() {
  return (
    <Container fluid>
      <h1 className="font-weight-bold w-100 mb-3"> Setting </h1>
      <Row>
        <Col sm="12" md="3">
          <h4 className="w-100 text-muted mb-3">Basic info</h4>
          <div>
            <LeftInformation />
          </div>
        </Col>
        <Col sm="12" md="9">
          <h4 className="w-100 text-muted mb-3"> Change </h4>
          <div>
            {" "}
            <RightInformation />{" "}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Settings;
