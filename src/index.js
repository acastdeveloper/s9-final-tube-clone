import React from "react";
import ReactDOM from "react-dom";
import Global from "./components/Global";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

ReactDOM.render(
  <React.StrictMode>
    <Global />
  </React.StrictMode>,
  document.getElementById("root")
);
