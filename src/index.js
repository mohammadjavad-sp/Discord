import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App";
import "./index.css";
import "./setting.css";
import "../node_modules/flowbite/dist/flowbite.min";
import { BrowserRouter } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
Aos.init();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
