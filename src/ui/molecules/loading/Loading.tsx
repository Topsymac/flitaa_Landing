import React from "react";
import loadingVid from "../../../assets/Flitaa_Logo_2.webm"
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <video autoPlay loop muted className="loading_video">
        <source src={loadingVid} type="video/mp4" />
      </video>
    </div>
  );
};

export default Loading;
