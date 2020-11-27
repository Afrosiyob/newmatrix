import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Container, Row, Col } from "reactstrap";
import { fetchPlans } from "../../../store/plans/actions";
import TarifCard from "./TarifCard/TarifCard";

import "./Tariflar.scss";

function Tariflar(props) {
  useEffect(() => {
    props.fetchPlans();
  }, []);

  const fakeCards = [
    {
      id: 1,
      name: "name 1",
      price: 3000,
    },
    {
      id: 2,
      name: "name 2",
      price: 3000,
    },
    {
      id: 3,
      name: "name 3",
      price: 3000,
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
        {fakeCards.map((item, index) => (
          <Col sm="12" md="3" className="mb-3">
            <TarifCard
              cardName={item.name}
              key={index}
              cardPrice={item.price}
              cardId={item.id}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    plans: state.setPlansReducers.plans,
  };
};

const mapDispatchToProps = {
  fetchPlans,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tariflar);
