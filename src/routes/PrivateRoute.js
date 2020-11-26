import React from "react";

import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../components/auth/Auth";

export function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("token") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

// export const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) => {
//       localStorage.getItem("user") ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: "/",
//             state: { from: props.location },
//           }}
//         />
//       );
//     }}
//   />
// );
