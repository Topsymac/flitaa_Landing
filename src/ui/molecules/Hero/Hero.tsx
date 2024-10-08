/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import "./Hero.css";
import logo from "../../../assets/heroLogo.svg";
import bottomleft from "../../../assets/Innovation & Knowledge copy.png";
import topright from "../../../assets/Innovation & Knowledge.png";
import topOrangeright from "../../../assets/Innovation & Knowledge copy 2.png";
import bottomright from "../../../assets/Forward Progress.png";
import appstore from "../../../assets/heroAppStore.svg";
import googlestore from "../../../assets/heroGoogleStore.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [windowScroll, setWindowScroll] = useState<number>(0);
  const [isIntersection, setIsIntersection] = useState(false);
  const [isIntersectionLeft, setIsIntersectionLeft] = useState(false);
  const textKeys = useMemo(() => ["withEase", "faster", "efficiently"], []);

  const [currentIndex, setCurrentIndex] = useState(0);


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
          const translateY = isMobileScreen
            ? 25 + window.scrollY / -0.75
            : 50 + window.scrollY / -1.5;
          (mediaElement as HTMLElement).style.transform = `translateY(${
            isMobileScreen
              ? translateY > -250
                ? translateY
                : -250
              : translateY > -150
              ? translateY
              : -150
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
          const scrollThreshold = 200;
        if (
          bottom_small_left_logorect.top < window.innerHeight &&
          bottom_small_left_logorect.bottom >= 0
        ) {
          // console.log("scrollY", window.scrollY, "threshold", scrollThreshold);
          setIsIntersectionLeft(window.scrollY > scrollThreshold);
          const translateY = isMobileScreen
            ? window.scrollY / 1
            : window.scrollY / 2;
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
        } else {
          setIsIntersectionLeft(false);
        }
      }
      // coin at the top right
      const top_small_right_logo = document.querySelector(
        ".top_small_right_logo"
      );
      if (top_small_right_logo) {
        const top_small_right_logorect =
          top_small_right_logo.getBoundingClientRect();
          const scrollThreshold = 80;
        if (
          top_small_right_logorect.top < window.innerHeight &&
          top_small_right_logorect.bottom >= 0
        ) {
          // console.log("scrollYgreen", window.scrollY, "thresholdgreen", scrollThreshold);
          setIsIntersection(window.scrollY > scrollThreshold);
          const translateY = isMobileScreen
            ? 50 + window.scrollY / -0.75
            : 50 + window.scrollY / -1.5;
          const translateX = isMobileScreen
            ? 50 + window.scrollY / -1
            : 50 + window.scrollY / -2;
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
        } else {
          setIsIntersection(false);
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
          const translateY = isMobileScreen
            ? window.scrollY / -1
            : window.scrollY / -2;
          const translateX = isMobileScreen
            ? window.scrollY / -1.5
            : window.scrollY / -3;
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

  // trial 4
useEffect(() => {
  const intervalId = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % textKeys.length);
  }, 3000);

  return () => clearInterval(intervalId);
}, [textKeys.length]);


  
  return (
    <>
      <div className={`Hero`}>
        <div className={`top`}>
          <div className="left">
            <p className="blurLeft"></p>
            <p className="blurLeftText">
              <span className="leftTextSpanOne">{t("tradeAndHoldCryptocurrencies")} </span>
              <span className="leftTextSpan">{t(textKeys[currentIndex])}</span>
              {t("forEveryone")}
            </p>
          </div>
          <div className="right">
            <p className="blurRight"></p>
            <p className="blurRightText">{t("buyAndAccessToken")}</p>
          </div>
        </div>
        <div className={`bottom`}>
          <div className="logo-img-wrapper">
            <div className="logo-img">
              <img src={logo} alt="flitaa logo" />
            </div>
          </div>
          <div className="media_logo">
            <Link to="https://apps.apple.com/ng/app/flitaa/id1566777501">
              <img src={appstore} alt="flitaa appstore" />
            </Link>
            <Link to="https://play.google.com/store/apps/details?id=com.flitaa.app ">
              <img src={googlestore} alt="flitaa playstore" />
            </Link>
          </div>
          <div
            className={`bottom_small_left_logo ${
              isIntersectionLeft ? "fade" : ""
            }`}
          >
            <img src={bottomleft} alt="flitaa left icon" />
          </div>
          <div
            className={`top_small_right_logo ${isIntersection ? "fade" : ""}`}
          >
            <img src={topright} alt="flitaa right icon" />
          </div>

          <div className="bottom_small_right_logo">
            <img src={topOrangeright} alt="flitaa top icon" />
          </div>
          <div className="top_small_right_orange_logo">
            <img src={bottomright} alt="flitaa green icon" />
          </div>
        </div>
        <div className="hero_bottom_mobile">
          <div className="hero_mobile_logo-img">
            <img src={logo} alt="flitaa mobile logo" />
          </div>
          <div className="hero_mobile_media_logo">
            <Link to="https://apps.apple.com/ng/app/flitaa/id1566777501">
              <img src={appstore} alt="flitaa appstore" />
            </Link>
            <Link to="https://play.google.com/store/apps/details?id=com.flitaa.app ">
              <img src={googlestore} alt="flitaa playstore" />
            </Link>
          </div>
          <div className={`hero_mobile_purple_icon`}>
            <img src={bottomleft} alt="flitaa purple icon" />
          </div>
          <div className={`hero_mobile_green_icon`}>
            <img src={topright} alt="flitaa green icon" />
          </div>

          <div className="hero_mobile_orange_icon">
            <img src={topOrangeright} alt="flitaa orange icon" />
          </div>
          <div className="hero_mobile_greenarrow_icon">
            <img src={bottomright} alt="flitaa greenarrow icon" />
          </div>
        </div>
      </div>
      <div className="redbox" />
    </>
  );
};

export default Hero;
