import React, { useEffect } from "react";
import { Container } from "reactstrap";

import { TeamTable } from "./TeamTable/TeamTable";
import "./Team.scss";
import { connect } from "react-redux";
import { fetchTree } from "../../../store/tree/actions";

function Team(props) {
  useEffect(() => {
    props.fetchTree();
  }, []);

  return (
    <Container fluid>
      <h1 className="font-weight-bold w-100 mb-3"> My team </h1>

      <div>
        <h4 className="w-100 text-muted mb-3">All team members</h4>
        <TeamTable />
      </div>
    </Container>
  );
}

const mapDispatchToProps = {
  fetchTree,
};

export default connect(null, mapDispatchToProps)(Team);
