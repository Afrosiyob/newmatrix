import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Container, Row, Col } from "reactstrap";
import AudioComponent from "../../../components/audioPlayer/AudioComponent";
import TitleHamlet from "../../../components/TitleHamlet/TitleHamlet";
import { fetchPlans } from "../../../store/plans/actions";
import TarifCard from "./TarifCard/TarifCard";

import "./Tariflar.scss";

function Tariflar() {
  return (
    <Container fluid>
      <TitleHamlet title="Plans" />
      <h1 className="font-weight-bold w-100 mb-3"> Tariflar </h1>
      <h4 className="w-100 text-muted mb-3">
        {" "}
        Sizga qulay bo'lgan tarifni tanlang{" "}
      </h4>
      <Row>
        {props.plans.map((item, index) => (
          <Col sm="12" md="3" className="mb-3">
            <TarifCard
              cardName={item.name}
              key={index}
              cardPrice={item.price}
              cardId={item.id}
              cardDescription={item.description}
            />
          </Col>
        ))}
      </Row>

      <AudioComponent />
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
