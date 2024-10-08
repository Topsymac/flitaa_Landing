import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import star from '../../../assets/star.png';
// import image from '../../../assets/Image.png';
import getStartedPhoneImg from '../../../assets/getStartedPhoneImg.png';
import googlePlay from '../../../assets/heroAppStore.svg';
import applePlay from '../../../assets/heroGoogleStore.svg';
import getStartedBorder from '../../../assets/getStartedBorder.svg';
// import mobileScreenGetStarted from '../../../assets/mobileScreenGetStarted.svg';

import './GetStartedCard.css';

const GetStartedCard = () => {
  const { t } = useTranslation();

  return (
    <div className="getStarted">
      <div className="getStarted__div-border">
        <img src={getStartedBorder} alt="flitaa get started" className="getStartedBorder" />
        {/* for mobile screen   */}
        {/* <img
          src={mobileScreenGetStarted}
          alt='img'
          className='mobileScreenGetStarted'
        /> */}
        <div className="getStarted__div">
          <div className="getStarted__divOne">
            <div className="getStarted__introduction">
              <div>
                <img
                  src={star}
                  alt="flitaa star"
                  className="getStarted__introduction-img"
                />
              </div>
              <p className="getStarted__introduction-text">
                {t("downloadApp")}
              </p>
            </div>
            <div>
              <p className="getStarted__header">{t("letGetYouStarted")}</p>
            </div>
            <div>
              <div className="getStarted__paragraph">
                {t("noMatterWhereYouAre")}
                <div>{t("stayUpdatedOnYourInvestment")}</div>
                <br />
                <div className="getStarted__paragraph-sub">
                  {t("availableOnAndroidAndIOS")}
                </div>
              </div>
            </div>
            <div className="getStarted__store">
              <div>
                <Link to="https://apps.apple.com/ng/app/flitaa/id1566777501">
                  <img
                    src={googlePlay}
                    alt="flitaa google store"
                    className="getStarted__googlePlay"
                  />
                </Link>
              </div>
              <div>
                <Link to="https://play.google.com/store/apps/details?id=com.flitaa.app ">
                  <img
                    src={applePlay}
                    alt="flitaa apple store"
                    className="getStarted__applePlay"
                  />
                </Link>
              </div>
            </div>
          </div>
          <img
            src={getStartedPhoneImg}
            alt='flitaa get started img'
            className='getStarted__image'
          />
        </div>
      </div>
    </div>
  );
};

export default GetStartedCard;
