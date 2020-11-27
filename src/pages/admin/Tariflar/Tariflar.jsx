import React from "react";
import { connect } from "react-redux";

import { Container, Row, Col } from "reactstrap";
import TarifCard from "./TarifCard/TarifCard";

import "./Tariflar.scss";

function Tariflar() {
  const cards = [
    {
      cardName: "card 1",
      cardPrice: 100,
    },
    {
      cardName: "card 2",
      cardPrice: 200,
    },
    {
      cardName: "card 3",
      cardPrice: 300,
    },
    {
      cardName: "card 4",
      cardPrice: 400,
    },
    {
      cardName: "card 5",
      cardPrice: 500,
    },
  ];

  return (
    <Container fluid>
      <h1 className="font-weight-bold w-100 mb-3"> Tariflar </h1>
      <h4 className="w-100 text-muted mb-3">
        {" "}
        Sizga qulay bo'lgan tarifni tanlang{" "}
      </h4>
      <Row>
        {cards.map((item, index) => (
          <Col sm="12" md="3" className="mb-3">
            <TarifCard
              cardName={item.cardName}
              key={index}
              cardPrice={item.cardPrice}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Tariflar);
