import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/global.css";
import Home from "./pages/Home";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
