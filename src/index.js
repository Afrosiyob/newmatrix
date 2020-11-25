import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ProvideAuth } from "./components/auth/Auth";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./store/reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
// import i18n (needs to be bundled ;))
import "./i18n";
import "./index.css";

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <ProvideAuth>
      <React.StrictMode>
        <Suspense fallback="loading">
          <Router>
            <App />
          </Router>{" "}
        </Suspense>{" "}
      </React.StrictMode>
    </ProvideAuth>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
