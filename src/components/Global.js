import React from "react";
import GlobalContext from "./context/GlobalSettings";
import App from "./App";

const Global = () => {
  return (
    <GlobalContext>
      <App />
    </GlobalContext>
  );
};

export default Global;
