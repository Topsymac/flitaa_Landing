import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LandingWrapper from '../../wrappers/landingWrapper/LandingWrapper';
import FeaturesCard from '../../molecules/featuresCard/FeaturesCard';
import GetStartedCard from '../../molecules/getStartedCard/GetStartedCard';
import HeadingAndParagraph from '../../molecules/headingAndParagraph/HeadingAndParagraph';
import Testimonials from '../../molecules/testimonials/Testimonials';
import TradeCrypto from '../../molecules/tradeCrypto/TradeCrypto';
import Hero from '../../molecules/Hero/Hero';
import nigeriaIcon from '../../../assets/ngn.png';
import kenyaIcon from '../../../assets/kenyaIcon.svg';
// import loadingLogo from "../../../assets/LOGO.svg"

// import Terms from '../terms&conditions/TermsAndCondition';

import './Home.css';
import { useLocation } from 'react-router-dom';
import Loading from '../../molecules/loading/Loading';

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
          <div className="home__tradeCrypto">
            <div className="home__tradeCrypto-paragraph">
              <HeadingAndParagraph
                introductionText={t("introducingSimplicity")}
                heading={t("aNewAndEasyWayToGetIntoCrypto")}
              />
            </div>
            <div>
              <TradeCrypto />
            </div>
          </div>
          <div className="home__featureCard1">
            <FeaturesCard
              introductionText={t("introducingVariety")}
              heading={t("getStartedWithCryptoLike")}
              paragraph={t("inAWorldOfComplexity")}
              subHeading1={t("fundsSafety")}
              subHeadingParagraph1={t("theSafetyOfCustomers")}
              subHeading2={t("multiAssets")}
              subHeadingParagraph2={t("weSupportMultiChains")}
              walletImgOne
            />
          </div>
          {/*  */}
          <div className="home__featureCard2">
            <FeaturesCard
              introductionText={t("introducingEasiest")}
              heading={t(`supportLocalCurrency`)}
              paragraph={t("depositStraightToBank")}
              subHeading1={t("NigerianNaira")}
              subHeadingParagraph1=""
              subHeading2={t("kenyanShillings")}
              subHeadingParagraph2=""
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
            <Testimonials />
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
