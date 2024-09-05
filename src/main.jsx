import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import TipCalculatorProvider from "./TipCalculatorContext/CalculatorContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TipCalculatorProvider>
      <App />
    </TipCalculatorProvider>
  </React.StrictMode>
);
