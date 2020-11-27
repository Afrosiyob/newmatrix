import React from "react";

import { Container, Row, Col } from "reactstrap";
import TarifCard from "./TarifCard/TarifCard";

import "./Tariflar.scss";

function Tariflar() {
  const cards = [{}];

  return (
    <Container fluid>
      <h1 className="font-weight-bold w-100 mb-3"> Tariflar </h1>
      <h4 className="w-100 text-muted mb-3">
        {" "}
        Sizga qulay bo'lgan tarifni tanlang{" "}
      </h4>
      <Row>
        <Col sm="12" md="3">
          <TarifCard />
        </Col>
        <Col sm="12" md="3">
          card
        </Col>
        <Col sm="12" md="3">
          card
        </Col>
        <Col sm="12" md="3">
          card
        </Col>
        <Col sm="12" md="3">
          card
        </Col>
        <Col sm="12" md="3">
          card
        </Col>
        <Col sm="12" md="3">
          card
        </Col>
        <Col sm="12" md="3">
          card
        </Col>
        <Col sm="12" md="3">
          card
        </Col>
      </Row>
    </Container>
  );
}

export default Tariflar;
