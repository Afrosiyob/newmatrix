import React from "react";
import { Card } from "antd";
import Ripples from "react-ripples";

import ClickLogo from "../../../../assets/images/Click.png";
import PaymeLogo from "../../../../assets/images/payme.png";

import "./TarifCard.scss";

function TarifCard({ cardName, cardPrice }) {
  return (
    <Card
      bordered={false}
      className="rounded d-flex flex-column justify-content-center align-items-center align-content-center rounded tarif-card"
    >
      <h3 className="text-center text-muted text-uppercase"> {cardName} </h3>
      <h2 className="text-center font-weight-bold"> {cardPrice} </h2>

      <div className="w-100 d-flex justify-content-between">
        <Ripples color="rgba(255,255,255,0.5)" className=" rounded-pill">
          <img className="img-pay" src={ClickLogo} alt="click logo" />
        </Ripples>

        <Ripples color="rgba(255,255,255,0.5)" className=" rounded-pill">
          <img className="img-pay" src={PaymeLogo} alt="payme logo" />
        </Ripples>
      </div>
    </Card>
  );
}

export default TarifCard;
