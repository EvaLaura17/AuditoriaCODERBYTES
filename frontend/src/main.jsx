import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/globals.css";
import "./styles/layout.css";
import "./styles/dashboard.css";
import "./styles/modules.css";
import "./styles/Sidebar.css";
import "./styles/Aduanas/Aduana.css";
import "./styles/Comercial/Comercial.css";
import "./styles/Comercial/TablasComercial.css";

import App from "./App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);