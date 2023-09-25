import React, { useEffect, useState } from "react";
import "./Hero.css"
import logo from "../../Assets/Image (1).svg";
import bottomleft from "../../Assets/Screenshot 2023-07-31 at 17.45 3.svg";
import topright from "../../Assets/Screenshot 2023-07-31 at 17.45 1.svg";
import bottomright from "../../Assets/Screenshot 2023-07-31 at 17.45 2.svg";
import appstore from "../../Assets/Mobile app store badge.svg";
import googlestore from "../../Assets/Mobile google store badge.svg";

const Hero = () => {
  const [windowScroll, setWindowScroll] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setWindowScroll(window.scrollY);
      const element = document.querySelector(".logo-img");
      // Logo Image
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          const rotationX = (300 - window.scrollY) / 5;
          const rotationY = (300 - window.scrollY) / 30;
          const rotationZ = (300 - window.scrollY) / -8.57;
          (element as HTMLElement).style.transform = `rotateY(${
            rotationY > 0 ? rotationY : 0
          }deg) rotateX(${rotationX > 0 ? rotationX : 0}deg) rotateZ(${
            rotationZ < 0 ? rotationZ : 0
          }deg) translateY(${window.scrollY < 300 ? window.scrollY : "300"}px)`;
        }
      }
      // Media Logos
      const mediaElement = document.querySelector(".media_logo");
      if (mediaElement) {
        const mediarect = mediaElement.getBoundingClientRect();
        if (mediarect.top < window.innerHeight && mediarect.bottom >= 0) {
          const translateY = 50 + window.scrollY / -1.5;
          (mediaElement as HTMLElement).style.transform = `translateY(${
            translateY > -150 ? translateY : -150
          }px)`;
        }
      }
      // coin at the left
      const bottom_small_left_logo = document.querySelector(
        ".bottom_small_left_logo"
      );
      if (bottom_small_left_logo) {
        const bottom_small_left_logorect =
          bottom_small_left_logo.getBoundingClientRect();
        if (
          bottom_small_left_logorect.top < window.innerHeight &&
          bottom_small_left_logorect.bottom >= 0
        ) {
          const translateY = window.scrollY / 2;
          const translateX = window.scrollY / 3;
          (
            bottom_small_left_logo as HTMLElement
          ).style.transform = `translateY(${
            translateY < 150 ? translateY : 150
          }px) translateX(${translateX < 100 ? translateX : 100}px)`;
        }
      }
      // coin at the top right
      const top_small_right_logo = document.querySelector(
        ".top_small_right_logo"
      );
      if (top_small_right_logo) {
        const top_small_right_logorect =
          top_small_right_logo.getBoundingClientRect();
        if (
          top_small_right_logorect.top < window.innerHeight &&
          top_small_right_logorect.bottom >= 0
        ) {
          const translateY = 50 + window.scrollY / -1.5;
          const translateX = 50 + window.scrollY / -2;
          (top_small_right_logo as HTMLElement).style.transform = `translateY(${
            translateY > -150 ? translateY : -150
          }px) translateX(${translateX > -100 ? translateX : -100}px)`;
        }
      }
      // coin at the bottom right
      const bottom_small_right_logo = document.querySelector(
        ".bottom_small_right_logo"
      );
      if (bottom_small_right_logo) {
        const bottom_small_right_logorect =
          bottom_small_right_logo.getBoundingClientRect();
        if (
          bottom_small_right_logorect.top < window.innerHeight &&
          bottom_small_right_logorect.bottom >= 0
        ) {
          const translateY = window.scrollY / -2;
          const translateX = window.scrollY / -3;
          (
            bottom_small_right_logo as HTMLElement
          ).style.transform = `translateY(${
            translateY > -150 ? translateY : -150
          }px) translateX(${translateX > -100 ? translateX : -100}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`Hero ${windowScroll < 300 ? "Appbottom" : ""}`}>
        <div
          className={`top`}
          style={
            windowScroll < 300
              ? {
                  position: "sticky",
                  top: "100px",
                  left: "0",
                  right: "0",
                }
              : {
                  marginTop: "280px",
                }
          }
        >
          <div className="left">
            <h1>Buy, Trade and Hold Cryptocurrencies in it’s easiest form</h1>
          </div>
          <div className="right">
            <p>
              Easily buy and sell cryptocurrencies with our user friendly app.
              Access over 40 tokens.The crypto wallet you have been waiting for.
            </p>
          </div>
        </div>
        <div
          className={`bottom ${
            windowScroll < 300 ? "bottomfixed" : "scrollbottom"
          }`}
        >
          <div className="logo-img">
            <img src={logo} alt="" />
          </div>
          <div className="media_logo">
            <img src={googlestore} alt="" />
            <img src={appstore} alt="" />
          </div>
          <div className="bottom_small_left_logo">
            <img src={bottomleft} alt="" />
          </div>
          <div className="top_small_right_logo">
            <img src={topright} alt="" />
          </div>
          <div className="bottom_small_right_logo">
            <img src={bottomright} alt="" />
          </div>
        </div>
      </div>
      <div className="redbox" />
    </>
  );
}

export default Hero