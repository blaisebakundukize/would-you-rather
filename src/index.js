import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";

import "./index.css";
import App from "./components/App";
import reducer from "./reducers";
import middleware from "./middleware";

const store = createStore(reducer, middleware);

const app = (
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <LoadingBar />
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
