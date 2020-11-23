import React from "react";

import "./HomeAbout.scss";

import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "react-i18next";

function HomeAbout() {
  const { t } = useTranslation();
  return (
    <div className="home-about my-5" id="section2">
      <Container>
        <Row>
          <Col sm="12" md="6">
            <div className="left-box">
              <div className="left-item-box">
                {" "}
                <img
                  src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg"
                  alt="some data"
                />{" "}
                <img
                  src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg"
                  alt="some data"
                />{" "}
              </div>
              <div className="right-item-box">
                {" "}
                <img
                  src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg"
                  alt="some data"
                />{" "}
                <img
                  src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg"
                  alt="some data"
                />{" "}
              </div>
            </div>
          </Col>
          <Col sm="12" md="6">
            <div className="right-box">
              <p> {t(`homeAbout.Title`)}</p>
              <p> {t(`homeAbout.Title2`)}</p>
              <p> {t(`homeAbout.Title3`)}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeAbout;
