import React from "react";
import { Card } from "antd";
import Ripples from "react-ripples";

import "./TarifCard.scss";

function TarifCard(props) {
  return (
    <Card
      bordered={false}
      className="rounded d-flex flex-column justify-content-center align-items-center align-content-center rounded"
    >
      <h3 className="text-center">title</h3>
      <p className="text-center">subtitle</p>
      <p className="text-center">subtitle</p>
      <p className="text-center">subtitle</p>

      <div className="w-100 d-flex justify-content-between">
        <Ripples color="rgba(255,255,255,0.5)" className=" rounded-pill">
          <button className="mx-1  tarif-card-btn rounded-pill"> payme </button>
        </Ripples>

        <Ripples color="rgba(255,255,255,0.5)" className=" rounded-pill">
          <button className="mx-1 tarif-card-btn rounded-pill"> payme </button>
        </Ripples>
      </div>
    </Card>
  );
}

export default TarifCard;
