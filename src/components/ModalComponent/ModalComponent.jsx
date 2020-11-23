/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
import Ripples from "react-ripples";

import SignInContainer from "../../containers/home/SignIn/SignInContainer";
import SignUpContainer from "../../containers/home/SignUp/SignUpContainer";

const ModalComponent = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Ripples
        onClick={toggle}
        color="rgba(255,255,255,0.5)"
        className="rounded-pill"
      >
        <button className="btn-sign-in rounded-pill">
          {" "}
          <svg
            className="user-icon mr-2"
            width="18"
            height="17"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.3664 18.736C20.8611 17.5392 20.1279 16.452 19.2075 15.5351C18.2899 14.6156 17.2029 13.8825 16.0066 13.3762C15.9959 13.3709 15.9852 13.3682 15.9745 13.3628C17.6432 12.1575 18.728 10.1941 18.728 7.97889C18.728 4.30924 15.7548 1.33603 12.0852 1.33603C8.41552 1.33603 5.44231 4.30924 5.44231 7.97889C5.44231 10.1941 6.52713 12.1575 8.19588 13.3655C8.18517 13.3709 8.17445 13.3735 8.16374 13.3789C6.96374 13.8851 5.88695 14.611 4.96285 15.5378C4.04332 16.4554 3.31018 17.5424 2.80392 18.7387C2.30657 19.9099 2.03833 21.1656 2.01374 22.4378C2.01302 22.4664 2.01804 22.4948 2.02849 22.5215C2.03893 22.5481 2.05461 22.5723 2.07458 22.5928C2.09455 22.6133 2.11841 22.6296 2.14476 22.6407C2.17112 22.6518 2.19943 22.6575 2.22802 22.6575H3.83517C3.95302 22.6575 4.04677 22.5637 4.04945 22.4485C4.10302 20.3807 4.93338 18.4441 6.40124 16.9762C7.91999 15.4575 9.93695 14.6217 12.0852 14.6217C14.2334 14.6217 16.2503 15.4575 17.7691 16.9762C19.237 18.4441 20.0673 20.3807 20.1209 22.4485C20.1236 22.5664 20.2173 22.6575 20.3352 22.6575H21.9423C21.9709 22.6575 21.9992 22.6518 22.0256 22.6407C22.0519 22.6296 22.0758 22.6133 22.0958 22.5928C22.1157 22.5723 22.1314 22.5481 22.1418 22.5215C22.1523 22.4948 22.1573 22.4664 22.1566 22.4378C22.1298 21.1575 21.8646 19.9119 21.3664 18.736ZM12.0852 12.586C10.8557 12.586 9.69856 12.1066 8.82802 11.236C7.95749 10.3655 7.47802 9.20835 7.47802 7.97889C7.47802 6.74942 7.95749 5.59228 8.82802 4.72174C9.69856 3.85121 10.8557 3.37174 12.0852 3.37174C13.3146 3.37174 14.4718 3.85121 15.3423 4.72174C16.2128 5.59228 16.6923 6.74942 16.6923 7.97889C16.6923 9.20835 16.2128 10.3655 15.3423 11.236C14.4718 12.1066 13.3146 12.586 12.0852 12.586Z"
              fill="white"
            />
          </svg>
          {buttonLabel}
        </button>
      </Ripples>
      <Modal
        isOpen={modal}
        toggle={toggle}
        centered={true}
        className={className}
        size="xl"
      >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Row>
            <Col sm="12" md="8" className="mb-3">
              <SignUpContainer />
            </Col>
            <Col sm="12" md="4" className="mb-3">
              <SignInContainer />
            </Col>
          </Row>
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
};

export default ModalComponent;
