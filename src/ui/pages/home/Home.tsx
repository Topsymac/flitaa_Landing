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
          {/* <Hero /> */}
          <div className='home__tradeCrypto'>
            <div className='home__tradeCrypto-paragraph'>
              <HeadingAndParagraph
                introductionText={'A seamless and interactive crypto journey'}
                heading={t('aNewAndEasyWayToGetIntoCrypto')}
              />
            </div>
            <div>
              <TradeCrypto />
            </div>
          </div>
          <div className="home__featureCard1">
            <FeaturesCard
              introductionText={'Built for beginners and experienced traders'}
              heading={t('getStartedWithCryptoLike')}
              paragraph={t('inAWorldOfComplexity')}
              subHeading1={t('fundsSafety')}
              subHeadingParagraph1={t('theSafetyOfCustomers')}
              subHeading2={t('multiAssets')}
              subHeadingParagraph2={t('weSupportMultiChains')}
              walletImgOne
            />
          </div>
          {/*  */}
          <div className="home__featureCard2">
            <FeaturesCard
              introductionText={'Easiest Crypto platform'}
              heading={t(`supportLocalCurrency`)}
              paragraph="Deposit and withdraw cash straight to your bank account in your local currency"
              subHeading1="Nigerian Naira"
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
              introductionText={'Take ownership of your digital assets'}
              heading={t('featuresFromSimpleWallet')}
              paragraph='Track price movement in real time using valuable insight to make timely decisions'
              subHeading1={t('managePortfolio')}
              subHeadingParagraph1='Never miss out on price movement opportunities, get price notices sent to you everyday.'
              subHeading2={t('ManageAccounts')}
              subHeadingParagraph2='Send & receive crypto across multiple chains, from Bitcoin to Solana.'
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
