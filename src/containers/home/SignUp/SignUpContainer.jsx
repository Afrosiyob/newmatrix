import React from "react";
import SignUp from "../../../layouts/home/SignUp/SignUp";

import { connect } from "react-redux";

import { signUserUp } from "../../../store/TokenStorage/actions";

function SignUpContainer({ signUserUp }) {
  return <SignUp signUserUp={signUserUp} />;
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  signUserUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
