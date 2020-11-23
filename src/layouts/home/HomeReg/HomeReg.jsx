import React from "react";

import "./HomeReg.scss";
import Ripples from "react-ripples";

import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";

function HomeReg() {
  const { t } = useTranslation();
  return (
    <div className="home-reg my-5 py-3" id="section4">
      <h1 className="back-text"> {t(`homeReg.Titul`)} </h1>

      <Container className="position-relative">
        <Row>
          <Col sm="12" md="5">
            <div className="left-box">
              <h1> {t(`homeReg.Titul`)} </h1>
              <h3>{t(`homeReg.Titul2`)}</h3>
            </div>
          </Col>
          <Col sm="12" md="5">
            <div className="right-box">
              <Ripples
                color="rgba(255,255,255,0.5)"
                className="mr-3 mb-3 rounded-pill"
              >
                <button className="header-btn  px-5 py-2 rounded-pill">
                  {t(`homeReg.Titul4`)}
                </button>
              </Ripples>
              <Ripples
                color="rgba(255,255,255,0.5)"
                className="mr-3 mb-3 rounded-pill"
              >
                <button className="header-btn rounded-pill px-5 py-2">
                  {t(`homeReg.Titul3`)}
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
