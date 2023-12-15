import React from "react";
import loadingLogo from "../../../assets/LOGO.svg";
import icon from "../../../assets/Icon.svg";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <img src={loadingLogo} alt="logo" className="animate-bounce" />
    </div>
  );
};

export default Loading;
