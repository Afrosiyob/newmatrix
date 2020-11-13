import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ProvideAuth } from "./components/auth/Auth";
// import i18n (needs to be bundled ;))
import "./i18n";
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <ProvideAuth>
        <Router>
          <App />
        </Router>
      </ProvideAuth>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
