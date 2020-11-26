import React, { useEffect } from "react";
import { connect } from "react-redux";
import Routes from "./routes/Routes";
import { autoLogin } from "./store/user/actions";

function App(props) {
  useEffect(() => {
    props.autoLogin();
  }, []);
  return <Routes />;
}

const mapDispatchToProps = {
  autoLogin,
};

export default connect(null, mapDispatchToProps)(App);
