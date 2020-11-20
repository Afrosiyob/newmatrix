import React from "react";
// import * as Icon from "react-bootstrap-icons";
import "./StatisticCard.scss";

function StatisticCard({
  bgColor,
  bgShadow,
  bgIcon,
  iconClass,
  iconColor,
  titul,
  subTitul,
  textColor = "black",
}) {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          content: "",
          position: "absolute",
          width: "90%",
          height: "50px",
          backgroundColor: bgShadow,
          bottom: "-10px",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "16px",
        }}
      ></div>
      <div className="statistic-card-wrap">
        <div className="statistic-card" style={{ backgroundColor: bgColor }}>
          <div
            className="left-card-box mr-2"
            style={{ backgroundColor: bgIcon }}
          >
            <i className={iconClass} style={{ color: iconColor }}></i>
          </div>
          <div className="right-card-box">
            <h4
              className="font-weight-bold m-0 p-0"
              style={{ color: textColor }}
            >
              {titul}
            </h4>
            <p className="m-0 p-0" style={{ color: textColor }}>
              {subTitul}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticCard;
