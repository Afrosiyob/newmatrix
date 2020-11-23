import React from "react";
import Routes from "./routes/Routes";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./store/reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
