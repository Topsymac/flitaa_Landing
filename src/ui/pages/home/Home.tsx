import React from 'react';
import { useTranslation } from 'react-i18next';
import LandingWrapper from '../../wrappers/landingWrapper/LandingWrapper';
import FeaturesCard from '../../molecules/featuresCard/FeaturesCard';
import GetStartedCard from '../../molecules/getStartedCard/GetStartedCard';
import HeadingAndParagraph from '../../molecules/headingAndParagraph/HeadingAndParagraph';
import Testimonials from '../../molecules/testimonials/Testimonials';
import TradeCrypto from '../../molecules/tradeCrypto/TradeCrypto';
import Hero from '../../molecules/Hero/Hero';
// import Terms from '../terms&conditions/TermsAndCondition';

import './Home.css';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className='home'>
      <LandingWrapper>
        <Hero />
        <div className='home__tradeCrypto'>
          <div className='home__tradeCrypto-paragraph'>
            <HeadingAndParagraph
              introductionText={t('introducingSimplicity')}
              heading={t('easyWaytoTradeCryptocurrency')}
            />
          </div>
          <div>
            <TradeCrypto />
          </div>
        </div>
        <div className='home__featureCard1'>
          <FeaturesCard
            introductionText={t('introducingSimplicity')}
            heading={t('featuresFromSimpleWallet')}
            paragraph={t('inAWorldOfComplexity')}
            subHeading1={t('fundsSafety')}
            subHeadingParagraph1={t('theSafetyOfCustomers')}
            subHeading2={t('multiAssets')}
            subHeadingParagraph2={t('weSupportMultiChains')}
            walletImgOne
          />
        </div>
        {/*  */}
        <div className='home__featureCard2'>
          <FeaturesCard
            introductionText={t('introducingVariety')}
            heading={t(`supportLocalCurrency`)}
            paragraph='Lorem ipsum dolor sit amet consectetur. Nisi quam cras nibh nam
              nullam auctor lectus in nulla. Sed leo mattis neque ullamcorper
              ultricies.Lorem ipsum dolor sit amet consectetur.'
            subHeading1='Nigerian Naira'
            subHeadingParagraph1='Lorem ipsum dolor sit amet consectetur. Nisi quam cras nibh nam
                nullam auctor lectus in nulla.'
            subHeading2={t('kenyanShillings')}
            subHeadingParagraph2='Lorem ipsum dolor sit amet consectetur. Nisi quam cras nibh
                  nam nullam auctor lectus in nulla.'
            order1
            order2
            walletImgTwo
          />
        </div>
        {/*  */}
        <div className='home__featureCard1'>
          <FeaturesCard
            introductionText={t('introducingSimplicity')}
            heading={t('featuresFromSimpleWallet')}
            paragraph='Lorem ipsum dolor sit amet consectetur. Nisi quam cras nibh nam
              nullam auctor lectus in nulla. Sed leo mattis neque ullamcorper
              ultricies.Lorem ipsum dolor sit amet consectetur.'
            subHeading1={t('fundsSafety')}
            subHeadingParagraph1='Lorem ipsum dolor sit amet consectetur. Nisi quam cras nibh nam
                nullam auctor lectus in nulla.'
            subHeading2={t('multiAssets')}
            subHeadingParagraph2='Lorem ipsum dolor sit amet consectetur. Nisi quam cras nibh
                  nam nullam auctor lectus in nulla.'
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
    </div>
  );
};

export default Home;
