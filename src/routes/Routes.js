import React from "react";
import { Route, Switch } from "react-router-dom";
import Admin from "../pages/admin/Admin";
import Home from "../pages/home/Home";
// import { LoginPage } from "../pages/LoginPage";
import { PrivateRoute } from "./PrivateRoute";

function Routes() {
  return (
    <Switch>
      <Route path={["/", "/verify/:id/:token"]} exact>
        <Home />
      </Route>{" "}
      <PrivateRoute path="/admin">
        <Admin />
      </PrivateRoute>{" "}
    </Switch>
  );
}

export default Routes;
