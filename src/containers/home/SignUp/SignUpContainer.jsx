import React from "react";
import SignUp from "../../../layouts/home/SignUp/SignUp";

import { connect } from "react-redux";
import {
  setConfirmPassword,
  setEmail,
  setPartner,
  setPassword,
  setPhone,
  setUsername,
} from "../../../store/SignUp/actions";

function SignUpContainer({
  username,
  email,
  password,
  confirmPassword,
  phone,
  partner,
  setUsername,
  setEmail,
  setPassword,
  setConfirmPassword,
  setPhone,
  setPartner,
}) {
  return (
    <SignUp
      username={username}
      email={email}
      password={password}
      confirmPassword={confirmPassword}
      phone={phone}
      partner={partner}
      setUsername={setUsername}
      setEmail={setEmail}
      setPassword={setPassword}
      setConfirmPassword={setConfirmPassword}
      setPhone={setPhone}
      setPartner={setPartner}
    />
  );
}

const mapStateToProps = (state) => ({
  username: state.signUp.username,
  email: state.signUp.email,
  password: state.signUp.password,
  confirmPassword: state.signUp.confirmPassword,
  phone: state.signUp.phone,
  partner: state.signUp.partner,
});

const mapDispatchToProps = {
  setUsername,
  setEmail,
  setPassword,
  setConfirmPassword,
  setPhone,
  setPartner,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
