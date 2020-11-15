import React from "react";

import "./HomeAbout.scss";

import { Col, Container, Row } from "reactstrap";

function HomeAbout() {
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
              <p>
                {" "}
                Business Trend Company - this is the community, which includes
                several areas: High-yield matrix models with training in various
                trends; Favorable and reliable investment model, justified by
                trading on the crypto market; Development of own IT-software;
                Charity at the expense of the Holding. The main idea of the
              </p>
              <p>
                {" "}
                Holding is to help as many people as possible. For someone it is
                help in getting rid of work, or in multiplying capital, or in
                long-term and productive work in a worthy company. For another
                one - the realization of dreams and goals like traveling, own
                house, premium cars, additional or remote earnings, and for
                someone - just gratuitous help via charity.
              </p>
              <p>
                {" "}
                The main principles of GMMG Holdings are honesty, openness and
                maximum value for partners. Thousands of people who decided to
                develop together with us already convinced in this.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeAbout;
