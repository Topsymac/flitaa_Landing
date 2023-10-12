import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next'

import "./Hero.css"
import logo from "../../../assets/Image (2).svg";
import bottomleft from "../../../assets/Screenshot 2023-07-31 at 17.45 3.svg";
import topright from "../../../assets/Screenshot 2023-07-31 at 17.45 1.svg";
import bottomright from "../../../assets/Screenshot 2023-07-31 at 17.45 2.svg";
import appstore from "../../../assets/Mobile app store badge.svg";
import googlestore from "../../../assets/Mobile google store badge.svg";

const Hero = () => {
  const { t } = useTranslation()
  const [windowScroll, setWindowScroll] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setWindowScroll(window.scrollY);
      // eslint-disable-next-line no-restricted-globals
      const isMobileScreen = screen.width <= 768;
      const element = document.querySelector(".logo-img");
      // Logo Image
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          const rotationX = isMobileScreen
            ? (150 - window.scrollY) / 2.5
            : (300 - window.scrollY) / 5;
          const rotationY = isMobileScreen
            ? (150 - window.scrollY) / 15
            : (300 - window.scrollY) / 30;
          const rotationZ = isMobileScreen
            ? (150 - window.scrollY) / -4.285
            : (300 - window.scrollY) / -8.57;
          (element as HTMLElement).style.transform = `rotateY(${
            rotationY > 0 ? rotationY : 0
          }deg) rotateX(${rotationX > 0 ? rotationX : 0}deg) rotateZ(${
            rotationZ < 0 ? rotationZ : 0
          }deg) translateY(${
            isMobileScreen
              ? window.scrollY < 150
                ? window.scrollY
                : "150"
              : window.scrollY < 300
              ? window.scrollY
              : "300"
          }px)`;
        }
      }
      // console.log("inner innerWidth", isMobileScreen);
      // console.log("window scroll", window.scrollY);
      // Media Logos
      const mediaElement = document.querySelector(".media_logo");
      if (mediaElement) {
        const mediarect = mediaElement.getBoundingClientRect();
        if (mediarect.top < window.innerHeight && mediarect.bottom >= 0) {
          const translateY = isMobileScreen ? 25 + window.scrollY / -0.75 : 50 + window.scrollY / -1.5 ;
          (mediaElement as HTMLElement).style.transform = `translateY(${ isMobileScreen ? translateY > -250 ? translateY : -250 :
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
          const translateY = isMobileScreen ? window.scrollY / 1 : window.scrollY / 2;
          const translateX = isMobileScreen
            ? window.scrollY / 1.5
            : window.scrollY / 3;
          (
            bottom_small_left_logo as HTMLElement
          ).style.transform = `translateY(${
            translateY < 150 ? translateY : 150
          }px) translateX(${
            isMobileScreen
              ? translateX < 50
                ? translateX
                : 50
              : translateX < 100
              ? translateX
              : 100
          }px)`;
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
          const translateY = isMobileScreen ? 50 + window.scrollY/-0.75 : 50 + window.scrollY / -1.5;
          const translateX = isMobileScreen ? 50 + window.scrollY/ -1 : 50 + window.scrollY / -2;
          (top_small_right_logo as HTMLElement).style.transform = `translateY(${
            isMobileScreen
              ? translateY > -80
                ? translateY
                : -80
              : translateY > -150
              ? translateY
              : -150
          }px) translateX(${
            isMobileScreen
              ? translateX > -30
                ? translateX
                : -30
              : translateX > -100
              ? translateX
              : -100
          }px)`;
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
          const translateY = isMobileScreen ? window.scrollY /-1 : window.scrollY / -2;
          const translateX = isMobileScreen ? window.scrollY /-1.5 : window.scrollY / -3;
          (
            bottom_small_right_logo as HTMLElement
          ).style.transform = `translateY(${
            translateY > -150 ? translateY : -150
          }px) translateX(${
            isMobileScreen
              ? translateX > -30
                ? translateX
                : -30
              : translateX > -100
              ? translateX
              : -100
          }px)`;
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
      <div className={`Hero`}>
        <div className={`top`}>
          <div className="left">
            <h1>{t("tradeAndHoldCryptocurrencies")}</h1>
          </div>
          <div className="right">
            <p>{t("buyAndAccessToken")}</p>
          </div>
        </div>
        <div className={`bottom`}>
          <div className="logo-img-wrapper">
            <div className="logo-img">
              <img src={logo} alt="" />
            </div>
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
};

export default Hero;
