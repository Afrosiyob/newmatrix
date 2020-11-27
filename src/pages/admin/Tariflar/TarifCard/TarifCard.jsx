import React from "react";
import { Card } from "antd";
import Ripples from "react-ripples";

import ClickLogo from "../../../../assets/images/Click.png";
import PaymeLogo from "../../../../assets/images/payme.png";

import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { connect } from "react-redux";
import { sendPayment } from "../../../../store/payment/actions";

import "./TarifCard.scss";

function TarifCard({ cardName, cardPrice, cardId }) {
  const clickHandle = (type, id) => {
    const formData = new FormData();
    formData.append("type", type);
    formData.append("plan_id", id);
    sendPayment(formData);
    // alert("wfewefwe");
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <button onClick={clickHandle("click", cardId)}>
          <img className="img-pay" src={ClickLogo} alt="click logo" />
        </button>
      </Menu.Item>
      <Menu.Item>
        <Ripples color="rgba(255,255,255,0.5)" className=" rounded-pill">
          <img className="img-pay" src={PaymeLogo} alt="payme logo" />
        </Ripples>
      </Menu.Item>
    </Menu>
  );

  return (
    <Card
      bordered={false}
      className="rounded d-flex flex-column justify-content-center align-items-center align-content-center rounded tarif-card"
    >
      <h3 className="text-center text-muted text-uppercase"> {cardName} </h3>
      <h2 className="text-center font-weight-bold"> {cardPrice}</h2>
      <button onClick={clickHandle}>click</button>
      <div className="w-100 mt-3 d-flex justify-content-between">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Hover me <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    paymentData: state.paymentReducer.data,
  };
};

const mapDispatchToProps = {
  sendPayment,
};

export default connect(mapStateToProps, mapDispatchToProps)(TarifCard);
