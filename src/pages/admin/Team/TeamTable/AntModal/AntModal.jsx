import React, { useState } from "react";

import { Modal, Button } from "antd";

function AntModal({ userEmail, userLink, userName, userTelegram, userImage }) {
  const [visible, setvisible] = useState(false);

  const showModal = () => {
    setvisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setvisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setvisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Information
      </Button>
      <Modal
        centered={true}
        title={userName}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p> {userEmail} </p>
        <p> {userLink} </p>
        <p> {userTelegram} </p>
      </Modal>
    </div>
  );
}

export default AntModal;
