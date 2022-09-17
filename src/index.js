import React from "react";
import ReactDom from "react-dom";

import App from "./App";
import "./index.css";
import { ContextProvider } from "./context/ContextProvider";

ReactDom.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
