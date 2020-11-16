import React from "react";

import "./HomeReg.scss";
import Ripples from "react-ripples";

import { Container, Row, Col } from "reactstrap";

function HomeReg() {
  return (
    <div className="home-reg my-5 py-3" id="section4">
      <h1 className="back-text"> Business Trend Company </h1>

      <Container className="position-relative">
        <Row>
          <Col sm="12" md="5">
            <div className="left-box">
              <h1> Business Trend Company </h1>
              <h3>We help the people</h3>
            </div>
          </Col>
          <Col sm="12" md="5">
            <div className="right-box">
              <Ripples
                color="rgba(255,255,255,0.5)"
                className="mr-3 mb-3 rounded-pill"
              >
                <button className="header-btn  px-5 py-2 rounded-pill">
                  Sign In
                </button>
              </Ripples>
              <Ripples
                color="rgba(255,255,255,0.5)"
                className="mr-3 mb-3 rounded-pill"
              >
                <button className="header-btn rounded-pill px-5 py-2">
                  Become Partner
                </button>
              </Ripples>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeReg;
