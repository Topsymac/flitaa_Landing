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
import TradeCryptoTwo from '../../molecules/tradeCrypto/TradeCryptoTwo';

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
    <div className='home'>
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
                introductionText={t('aSeamlessAndInteractiveCryptoJourney')}
                heading={t('aNewAndEasyWayToGetIntoCrypto')}
              />
            </div>
            <div>
              {/* <TradeCrypto /> */}
              <TradeCryptoTwo />
            </div>
          </div>
          <div className='home__featureCard1'>
            <FeaturesCard
              introductionText={t('builtForBeginnersAndExperiencedTraders')}
              heading={t('getStartedWithCryptoLike')}
              paragraph={t('executeInstantBuySwap')}
              subHeading1={t('instantBuy')}
              subHeadingParagraph1={t('executeInstantBuyOrders')}
              subHeading2={t('fastWithdrawal')}
              subHeadingParagraph2={t('needToConvertYourCryptoToCash')}
              walletImgOne
            />
          </div>
          {/*  */}
          <div className='home__featureCard2'>
            <FeaturesCard
              introductionText={t('easiestCryptoPlatform')}
              heading={t(`investWithYourLocalCurrency`)}
              paragraph={t('depositAndWithdrawCashStraight')}
              subHeading1='Nigerian Naira'
              subHeadingParagraph1=''
              subHeading2={t('kenyanShillings')}
              subHeadingParagraph2=''
              order1
              order2
              walletImgTwo
              nigeriaFlag={nigeriaIcon}
              kenyaFlag={kenyaIcon}
            />
          </div>
          {/*  */}
          <div className='home__featureCard1'>
            <FeaturesCard
              introductionText={t('takeOwnershipOfYourDigitalAssets')}
              heading={t('manageYourPortfolioLikeAPro')}
              paragraph={t('trackPriceMovementInRealTime')}
              subHeading1={t('getDailyPriceAlerts')}
              subHeadingParagraph1={t('neverMissOutOnPriceMovement')}
              subHeading2={t('multiChainSupport')}
              subHeadingParagraph2={t(
                'sendAndReceiveCryptoAcrossMultipleChains'
              )}
              walletImgThree
            />
          </div>
          <div>
            <Testimonials />
          </div>
          <div className='home__getStarted'>
            <GetStartedCard />
          </div>
        </LandingWrapper>
      )}
    </div>
  );
};

export default Home;
