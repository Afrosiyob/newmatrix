import React from "react";

import "./HomePdf.scss";

import { Container } from "reactstrap";
import ShapeDots from "./ShapeDots/ShapeDots";
import LeftShape from "./LeftShape/LeftShape";
import RightShape from "./RightShape/RightShape";

function HomePdf() {
  return (
    <div className="home-pdf my-5 py-5" id="section3">
      <LeftShape />
      <RightShape />

      <Container>
        <h1 className="w-100 text-center font-weight-bold mb-4 position-relative">
          PDF - materials
        </h1>

        <div className="wrap-box">
          <div className="inner-item">
            <ShapeDots />
            <div className="position-relative">
              <img
                src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg"
                alt="item"
              />
            </div>
          </div>
          <div className="inner-item">
            <ShapeDots />
            <div className="position-relative">
              <img
                src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg"
                alt="item"
              />
            </div>
          </div>
          <div className="inner-item">
            <ShapeDots />
            <div className="position-relative">
              <img
                src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg"
                alt="item"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomePdf;
