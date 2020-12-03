import React, { useEffect } from "react";
import { Container } from "reactstrap";

import { TeamTable } from "./TeamTable/TeamTable";
import "./Team.scss";
import { connect } from "react-redux";
import { fetchTree } from "../../../store/tree/actions";
import TitleHamlet from "../../../components/TitleHamlet/TitleHamlet";

function Team(props) {
  useEffect(() => {
    props.fetchTree();
  }, []);

  return (
    <Container fluid>
      <TitleHamlet title="Team" />
      <h1 className="font-weight-bold w-100 mb-3"> My team </h1>

      <div>
        <h4 className="w-100 text-muted mb-3">All team members</h4>
        <TeamTable treeData={props.treeData} />
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    treeData: state.treeReducer.treeData,
  };
};

const mapDispatchToProps = {
  fetchTree,
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);
