import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../src/reducers/";

import "./index.css";
import App from "./App";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
