import React, { useEffect, useState } from "react";
import loadingVid from "../../../assets/Flitaa_Logo_2.webm"
import loadingVideo from "../../../assets/logo.lottie"
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import "./Loading.css";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []); 
  return (
    <>
      {loading && (
        <div className="loading">
          <video autoPlay loop muted className="loading_video">
            <source src={loadingVid} type="video/mp4" />
          </video>
          {/* <div className="loading_video">
            <DotLottiePlayer src={loadingVideo} autoplay loop></DotLottiePlayer>
          </div> */}
        </div>
      )}
    </>
  );
};

export default Loading;
