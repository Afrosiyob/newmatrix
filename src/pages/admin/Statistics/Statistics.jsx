import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import TitleHamlet from "../../../components/TitleHamlet/TitleHamlet";
import StatisticCard from "./StatisticCard/StatisticCard";
import StatisticChart from "./StatisticChart/StatisticChart";

import "./Statistics.scss";

function Statistics(props) {
  if (props && props.user && props.user.user) {
    let user = props.user;
    const topCardData = [
      {
        bgColor: "white",
        bgIcon: "#DED3FF",
        bgShadow: "rgba(255,255,2552,0.5)",
        iconClass: "fas fa-users",
        iconColor: "#5F2EEA",
        titul: user.children_count,
        subTitul: "Total partners",
      },
      {
        bgColor: "white",
        bgIcon: "#DED3FF",
        bgShadow: "rgba(255,255,2552,0.5)",
        iconClass: "fas fa-hand-holding-usd",
        iconColor: "#5F2EEA",
        titul: `  ${user.user.balance} USD`,
        subTitul: "Total earned by partners",
      },
      {
        bgColor: "white",
        bgIcon: "#DED3FF",
        bgShadow: "rgba(255,255,2552,0.5)",
        iconClass: "fas fa-hand-holding-heart",
        iconColor: "#5F2EEA",
        titul: `${user.user.balance} USD`,
        subTitul: "Allocated from holdingfor charity",
      },
    ];

    return (
      <Container fluid>
        <TitleHamlet title="Statistics" />

        <h1 className="font-weight-bold w-100 mb-3">Welcome</h1>

        <Row className="mb-3">
          {topCardData.map((item, index) => {
            const {
              bgColor,
              bgIcon,
              bgShadow,
              iconClass,
              iconColor,
              titul,
              subTitul,
            } = item;

            return (
              <Col sm="12" md="4" className="mb-3" key={index}>
                <StatisticCard
                  bgColor={bgColor}
                  bgIcon={bgIcon}
                  bgShadow={bgShadow}
                  iconClass={iconClass}
                  iconColor={iconColor}
                  titul={titul}
                  subTitul={subTitul}
                />
              </Col>
            );
          })}
        </Row>

        <Row className="mb-3">
          <Col className="mb-3" sm="12" md="8">
            <h4 className="w-100 text-muted mb-3">General information</h4>
            <StatisticChart />
          </Col>
          <Col className="mb-3" sm="12" md="4">
            <div className="mb-4">
              <h4 className="w-100 text-muted mb-3">Total in team</h4>
              <StatisticCard
                bgColor={"#1CC8EE"}
                bgIcon={"rgba(255,255,255,0.37)"}
                bgShadow={"#ABF0FF"}
                iconClass={"fas fa-users"}
                iconColor={"white"}
                titul={"4"}
                subTitul={"Personally invited"}
                textColor={"white"}
              />
            </div>
            <div className="mb-4">
              <h4 className="w-100 text-muted mb-3">Structure turnover</h4>
              <StatisticCard
                bgColor={"#F4B740"}
                bgIcon={"rgba(255,255,255,0.37)"}
                bgShadow={"#FFD98E"}
                iconClass={"fas fa-level-down-alt"}
                iconColor={"white"}
                titul={"0.00 USD"}
                subTitul={"Total"}
                textColor={"white"}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return <div> Opps... no data :( </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, null)(Statistics);
