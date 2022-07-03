import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.module.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <ToastContainer />
    </React.StrictMode>
  </BrowserRouter>
);
