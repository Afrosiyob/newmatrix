import React, { useState } from "react";

import Ripples from "react-ripples";

import ClickLogo from "../../../../assets/images/Click.png";
import PaymeLogo from "../../../../assets/images/payme.png";

import { Menu, Dropdown, Radio, Card, Modal, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { connect } from "react-redux";
import { sendPayment } from "../../../../store/payment/actions";

import "./TarifCard.scss";

function TarifCard(props) {
  const [modalvisible, setmodalvisible] = useState(false);
  const [modalLoading, setmodalLoading] = useState(false);
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const showModal = () => {
    setmodalvisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setTimeout(() => {
      setmodalvisible(false);
      setmodalLoading(false);
    }, 1000);
  };

  const handleCancel = (e) => {
    console.log(e);
    setmodalvisible(false);
  };

  const clickHandle = (type, id) => {
    const formData = new FormData();
    formData.append("type", type);
    formData.append("plan_id", id);
    props.sendPayment(formData);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <button onClick={() => clickHandle("click", props.cardId)}>
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
        title="To'lov turini tanlash"
        visible={modalvisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel} disabled={true}>
            Bekor qilish
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={modalLoading}
            onClick={handleOk}
            disabled={true}
          >
            Sotib olish
          </Button>,
        ]}
      >
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>click</Radio>
          <Radio value={2}>payme</Radio>
        </Radio.Group>
      </Modal>
    </div>

    // <Card
    //   bordered={false}
    //   className="rounded d-flex flex-column justify-content-center align-items-center align-content-center rounded tarif-card"
    // >
    //   <h3 className="text-center text-muted text-uppercase">
    //     {" "}
    //     {props.cardName}{" "}
    //   </h3>
    //   <h2 className="text-center font-weight-bold"> {props.cardPrice}</h2>

    //   <div className="w-100 mt-3 d-flex justify-content-between">
    //     <Dropdown overlay={menu}>
    //       <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
    //         Hover me <DownOutlined />
    //       </a>
    //     </Dropdown>
    //   </div>
    // </Card>
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
