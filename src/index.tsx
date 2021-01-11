import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/global.css";
import Home from "./pages/Home";
import { store, persistedStore } from "./store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <Home />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
