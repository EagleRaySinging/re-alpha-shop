import React from "react";
import ReactDOM from "react-dom/client";
import './main.scss'
import StepProgress from "./components/StepProgress/StepProgress";
import Steps from "./components/Steps/Steps";
import ProgressControl from "./components/ProgressControl/ProgressControl";
import Cart from "./components/Cart/Cart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="main-container">
      <div className="payInfo-container">
        <StepProgress />
        <Steps />
        <ProgressControl />
      </div>
      <div className="cart-container">
        <Cart />
      </div>
    </div>
  </React.StrictMode>
);
