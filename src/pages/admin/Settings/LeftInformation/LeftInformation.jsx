import React from "react";
import { Card, Image } from "antd";

function LeftInformation() {
  return (
    <div>
      {" "}
      <Card
        style={{ width: "100%", padding: "10px" }}
        cover={
          <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
        }
      >
        <div className="user-information">
          <div className="information-item mb-2">
            <h6 className="text-muted p-0 m-0">Username</h6>
            <p className="font-weight-bolder ml-2">
              <i className="fas fa-user text-muted mr-2"></i> Afrosiyob
            </p>
          </div>
          <div className="information-item mb-2">
            <h6 className="text-muted p-0 m-0">Username</h6>
            <p className="font-weight-bolder ml-2">
              <i className="fas fa-user text-muted mr-2"></i> Afrosiyob
            </p>
          </div>
          <div className="information-item mb-2">
            <h6 className="text-muted p-0 m-0">Username</h6>
            <p className="font-weight-bolder ml-2">
              <i className="fas fa-user text-muted mr-2"></i> Afrosiyob
            </p>
          </div>{" "}
          <div className="information-item mb-2">
            <h6 className="text-muted p-0 m-0">Username</h6>
            <p className="font-weight-bolder ml-2">
              <i className="fas fa-user text-muted mr-2"></i> Afrosiyob
            </p>
          </div>
          <div className="information-item mb-2">
            <h6 className="text-muted p-0 m-0">Username</h6>
            <p className="font-weight-bolder ml-2">
              <i className="fas fa-user text-muted mr-2"></i> Afrosiyob
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default LeftInformation;
