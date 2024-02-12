import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LandingWrapper from "../../wrappers/landingWrapper/LandingWrapper";
import FeaturesCard from "../../molecules/featuresCard/FeaturesCard";
import GetStartedCard from "../../molecules/getStartedCard/GetStartedCard";
import HeadingAndParagraph from "../../molecules/headingAndParagraph/HeadingAndParagraph";
import Testimonials from "../../molecules/testimonials/Testimonials";
import TradeCrypto from "../../molecules/tradeCrypto/TradeCrypto";
import Hero from "../../molecules/Hero/Hero";
import nigeriaIcon from "../../../assets/ngn.png";
import kenyaIcon from "../../../assets/kenyaIcon.svg";
import "./Home.css";
import { useLocation } from "react-router-dom";
import Loading from "../../molecules/loading/Loading";
import TradeCryptoTwo from "../../molecules/tradeCrypto/TradeCryptoTwo";
import CardBg from "../../../assets/3.png";
import downloadIcon from "../../../assets/downloadIcon.svg";
import deposit from "../../../assets/depositIcon.svg";
import rocket from "../../../assets/transactIcon.svg";
import forwardProgress from "../../../assets/forwarddProgress.svg";

const Home = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="home">
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <LandingWrapper>
          <Hero />
          <div className="home__tradeCryptoCard">
            {/* <div className="home__tradeCrypto">
              <div className="home__tradeCrypto-paragraph">
                <HeadingAndParagraph
                  introductionText={t("aSeamlessAndInteractiveCryptoJourney")}
                  heading={t("aNewAndEasyWayToGetIntoCrypto")}
                />
              </div>
            </div>
            <TradeCrypto />
            <TradeCryptoTwo /> */}
            {/* new design */}
            <div className="new_design_trade">
              <div className="new_design_trade_top">
                <HeadingAndParagraph
                  introductionText={t("aSeamlessAndInteractiveCryptoJourney")}
                  heading={t("aNewAndEasyWayToGetIntoCrypto")}
                  image={forwardProgress}
                />
                <div>
                  <div className="new_design_trade_div_content">
                    <img
                      src={CardBg}
                      alt=""
                      className="new_design_trade_image"
                    />
                    <div className="new_design_trade_content">
                      <div>
                        <img
                          src={downloadIcon}
                          alt="icon"
                          className="new_design_trade_icon"
                        />
                      </div>
                      <div className="new_design_trade_textOne">
                        <div className="new_design_trade_heading">
                          {t("downloadApp")}
                        </div>
                        <p className="new_design_trade_paragraph">
                          {"Download our app on app store and googleplay store"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="new_design_trade_bottom">
                <div className="new_design_trade_div_content">
                  <img src={CardBg} alt="" className="new_design_trade_image" />
                  <div className="new_design_trade_content">
                    <div>
                      <img
                        src={deposit}
                        alt="icon"
                        className="new_design_trade_icon"
                      />
                    </div>
                    <div className="new_design_trade_textOne">
                      <div className="new_design_trade_heading">
                        {t("depositCash")}
                      </div>
                      <p className="new_design_trade_paragraph">
                        {t("bringInOrTakeOutCashAtZeroDeposit")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="new_design_trade_div_content">
                  <img
                    src={CardBg}
                    alt=""
                    className="new_design_trade_imageThree"
                  />
                  <div className="new_design_trade_content">
                    <div>
                      <img
                        src={rocket}
                        alt="icon"
                        className="new_design_trade_icon"
                      />
                    </div>
                    <div className="new_design_trade_textOne">
                      <div className="new_design_trade_heading">
                        {t("startInvesting")}
                      </div>
                      <p className="new_design_trade_paragraph">
                        {t("bringInOrTakeOutCashAtZeroDeposit")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end of new design  */}
          </div>

          <div className="home__featureCard1">
            <FeaturesCard
              introductionText={t("builtForBeginnersAndExperiencedTraders")}
              heading={t("getStartedWithCryptoLike")}
              paragraph={t("executeInstantBuySwap")}
              subHeading1={t("instantBuy")}
              subHeadingParagraph1={t("executeInstantBuyOrders")}
              subHeading2={t("fastWithdrawal")}
              subHeadingParagraph2={t("needToConvertYourCryptoToCash")}
              walletImgOne
            />
          </div>
          {/*  */}
          <div className="home__featureCard2">
            <FeaturesCard
              introductionText={t("introducingEasiest")}
              heading={t(`supportLocalCurrency`)}
              paragraph={t('depositStraightToBank')}
              subHeading1={t('NigerianNaira')}
              subHeadingParagraph1={t('investEasilyUsingNaira')}
              subHeading2={t('kenyanShillings')}
              subHeadingParagraph2={t('investingMadeSimpleWithKes')}
              order1
              order2
              walletImgTwo
              nigeriaFlag={nigeriaIcon}
              kenyaFlag={kenyaIcon}
            />
          </div>
          {/*  */}
          <div className="home__featureCard1">
            <FeaturesCard
              introductionText={t("takeOwnership")}
              heading={t("featuresFromSimpleWallet")}
              paragraph={t("trackPriceMovements")}
              subHeading1={t("managePortfolio")}
              subHeadingParagraph1={t("neverMissOut")}
              subHeading2={t("ManageAccounts")}
              subHeadingParagraph2={t("sendAndReceiveCryptoAcrossMultiple")}
              walletImgThree
            />
          </div>
          <div>
            {/* <Testimonials /> */}
          </div>
          <div className="home__getStarted">
            <GetStartedCard />
          </div>
        </LandingWrapper>
      )}
    </div>
  );
};

export default Home;
