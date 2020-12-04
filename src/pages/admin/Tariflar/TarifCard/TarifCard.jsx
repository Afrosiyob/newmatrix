import React, { useState, useEffect } from "react";

import Ripples from "react-ripples";

import ClickLogo from "../../../../assets/images/Click.png";
import PaymeLogo from "../../../../assets/images/payme.png";

import { Radio, Modal, Button } from "antd";

import { connect } from "react-redux";
import { sendPayment } from "../../../../store/payment/actions";

import { Link } from "react-router-dom";
import "./TarifCard.scss";

function TarifCard(props) {
  const [modalvisible, setmodalvisible] = useState(false);
  const [modalvisibletwo, setmodalvisibletwo] = useState(false);
  const [modalLoadingtwo, setmodalLoadingtwo] = useState(false);
  const [modalLoading, setmodalLoading] = useState(false);
  const [value, setValue] = useState("click");

  console.log(" payment data ====================================");
  console.log(props.paymentData);
  console.log("====================================");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const showModal = () => {
    setmodalvisible(true);
  };

  const handleOk = (e) => {
    setTimeout(() => {
      setmodalvisible(false);
      setmodalLoading(false);

      const formData = new FormData();
      formData.append("type", value);
      formData.append("plan_id", props.cardId);
      props.sendPayment(formData);
      showModaltwo();
    }, 1000);
  };

  const handleCancel = (e) => {
    console.log(e);
    setmodalvisible(false);
  };

  const showModaltwo = () => {
    setmodalvisibletwo(true);
  };

  const handleOktwo = () => {
    setmodalLoadingtwo(true);
    setTimeout(() => {
      setmodalvisibletwo(false);
      setmodalLoadingtwo(false);
    }, 3000);
  };

  const handleCanceltwo = () => {
    setmodalvisibletwo(false);
  };

  return (
    <div className="plans-card-item rounded shadow-lg overflow-hidden d-flex flex-column justify-content-between align-content-center align-items-center">
      <h3 className="header-title w-100 text-center py-2 text-uppercase">
        {props.cardName}
      </h3>

      <div className="my-4 p-2">
        <h1 className="w-100 p-0 m-0 text-center  price-title">
          {" "}
          {props.cardPrice} <span className="text-muted">so'm</span>
        </h1>

        <div className="my-3">
          <p className="w-100 font-weight-bold text-muted text-center">
            - {props.cardDescription}
          </p>
        </div>
      </div>
      <button
        onClick={showModal}
        className="custom-button text-uppercase mb-3 rounded-pill"
      >
        {" "}
        Sotib olish{" "}
      </button>

      <Modal
        visible={modalvisibletwo}
        title="To'lovni davom ettirish..."
        onOk={handleOktwo}
        onCancel={handleCanceltwo}
        footer={[
          <Button key="back" onClick={handleCanceltwo}>
            Bekor qilish
          </Button>,
          <a
            style={{ margin: "0 10px" }}
            key="submit"
            type="primary"
            loading={modalLoadingtwo}
            onClick={handleOktwo}
            href={props.paymentData.process_buy_url}
          >
            <Button type="primary">To'lovni tasdiqlash</Button>
          </a>,
        ]}
      >
        <p>
          {" "}
          <em> yo'riqnoma</em>{" "}
        </p>
      </Modal>

      <Modal
        title="To'lov turini tanlash"
        visible={modalvisible}
        onOk={handleOk}
        centered
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Bekor qilish
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={modalLoading}
            onClick={handleOk}
          >
            Sotib olish
          </Button>,
        ]}
      >
        <Radio.Group
          onChange={onChange}
          value={value}
          size="large"
          className="w-100 d-flex justify-content-center"
        >
          <Radio.Button value="click" className="select-img-payment">
            <img src={ClickLogo} alt="click" />
          </Radio.Button>
          <Radio.Button value="payme" className="select-img-payment">
            <img src={PaymeLogo} alt="payme" />
          </Radio.Button>
        </Radio.Group>
      </Modal>
    </div>
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
