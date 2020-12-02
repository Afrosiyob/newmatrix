import React from "react";
import { Card, Image } from "antd";
import { connect } from "react-redux";

function LeftInformation(props) {
  console.log(props.user.user);

  return (
    <div>
      {" "}
      <Card
        style={{ width: "100%", padding: "10px" }}
        cover={<Image src={props.user.user.image} />}
      >
        <div className="user-information">
          <div className="information-item mb-2">
            <h6 className="text-muted ">Username</h6>
            <p className="font-weight-bolder ml-2">
              <i className="fas fa-user text-muted mr-2"></i>{" "}
              {props.user.user.username}
            </p>
          </div>
          <div className="information-item mb-2">
            <h6 className="text-muted">Email</h6>
            <p className="font-weight-bolder ml-2">
              <i className="fas fa-at text-muted mr-2"></i>{" "}
              {props.user.user.email}
            </p>
          </div>
          <div className="information-item mb-2">
            <h6 className="text-muted ">Balans</h6>
            <p className="font-weight-bolder ml-2">
              <i className="fas fa-wallet text-muted mr-2"></i>{" "}
              {props.user.user.balance} sum
            </p>
          </div>{" "}
          <div className="information-item mb-2">
            <h6 className="text-muted ">Status</h6>
            <p className="font-weight-bolder ml-2">
              <i className="fas fa-shield-alt text-muted mr-2"></i>{" "}
              {props.user.user.status_plan}
            </p>
          </div>
          <div className="information-item mb-2">
            <h6 className="text-muted ">Time</h6>
            <p className="font-weight-bolder ml-2">
              <i className="fas fa-user-clock text-muted mr-2"></i> 20.01.2020{" "}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, null)(LeftInformation);
