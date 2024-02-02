import React, { useEffect, useState } from "react";
import loadingVid from "../../../assets/Flitaa_Logo_2.webm"
import loadingVideo from "../../../assets/logo.lottie"
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import "./Loading.css";

const Loading = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);

  //   return () => clearTimeout(timeout);
  // }, []); 
  return (
    <>
      <div className="loading">
        <video autoPlay muted className="loading_video">
          <source src={loadingVid} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Loading;
