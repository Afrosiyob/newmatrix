import React from "react";
import SignIn from "../../../layouts/home/SignIn/SignIn";
import { setPassword, setUsername } from "../../../store/SignUp/actions";
import { connect } from "react-redux";

function SignInContainer({ username, password, setUsername, setPassword }) {
  return (
    <SignIn
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.signIn.username,
    password: state.signIn.password,
  };
};

const mapDispatchToProps = {
  setUsername,
  setPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
