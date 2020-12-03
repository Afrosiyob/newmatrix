import React from "react";
import { Card, Image, Spin } from "antd";
import { connect } from "react-redux";

function LeftInformation(props) {
  if (props && props.user && props.user.user) {
    let user = props.user.user;

    return (
      <div>
        {" "}
        <Card
          style={{ width: "100%", padding: "10px" }}
          cover={<Image src={user.image} />}
        >
          <div className="user-information">
            <div className="information-item mb-2">
              <h6 className="text-muted ">Username</h6>
              <p className="font-weight-bolder ml-2">
                <i className="fas fa-user text-muted mr-2"></i> {user.username}
              </p>
            </div>
            <div className="information-item mb-2">
              <h6 className="text-muted">Email</h6>
              <p className="font-weight-bolder ml-2">
                <i className="fas fa-at text-muted mr-2"></i> {user.email}
              </p>
            </div>
            <div className="information-item mb-2">
              <h6 className="text-muted ">Balans</h6>
              <p className="font-weight-bolder ml-2">
                <i className="fas fa-wallet text-muted mr-2"></i> {user.balance}{" "}
                sum
              </p>
            </div>{" "}
            <div className="information-item mb-2">
              <h6 className="text-muted ">Status</h6>
              <p className="font-weight-bolder ml-2">
                <i className="fas fa-shield-alt text-muted mr-2"></i>{" "}
                {user.status_plan}
              </p>
            </div>
            <div className="information-item mb-2">
              <h6 className="text-muted ">Time</h6>
              <p className="font-weight-bolder ml-2">
                <i className="fas fa-user-clock text-muted mr-2"></i>{" "}
                {user.date_joined}{" "}
              </p>
            </div>
          </div>
        </Card>
      </div>
    );
  } else {
    return <Spin size="large" />;
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, null)(LeftInformation);
