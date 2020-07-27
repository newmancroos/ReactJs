import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import MenuContainer from "./MenuContainer";
ReactDOM.render(
  <React.StrictMode>
    <MenuContainer />
  </React.StrictMode>,
  document.getElementById("container")
);
serviceWorker.unregister();
