import React from 'react'
import LandingWrapper from '../../wrappers/landingWrapper/LandingWrapper'
import FeaturesCard from '../../molecules/featuresCard/FeaturesCard'
import './Home.css'
import GetStartedCard from '../../molecules/getStartedCard/GetStartedCard'
import HeadingAndParagraph from '../../molecules/headingAndParagraph/HeadingAndParagraph'
import Testimonials from '../../molecules/testimonials/Testimonials'
import TradeCrypto from '../../molecules/tradeCrypto/TradeCrypto'
import Hero from '../../molecules/Hero/Hero'
import Terms from '../../molecules/terms&conditions/Terms'

const Home = () => {
  return (
    <div className='home'>
      <LandingWrapper>
        <Hero/>
        <div className='home__tradeCrypto'>
          <HeadingAndParagraph
            introductionText='Introducing Simplicity'
            heading='A new, easy way to Trade Cryptocurrency'
          />
          <div>
            {/* <TradeCrypto /> */}
          </div>
        </div>
        <div className='home__featureCard1'>
          <FeaturesCard
            introductionText='Introducing Simplicity'
            heading={`Features you’ll expect from a simple wallet`}
            paragraph='Lorem ipsum dolor sit amet consectetur. Nisi quam cras nibh nam
              nullam auctor lectus in nulla. Sed leo mattis neque ullamcorper
              ultricies.Lorem ipsum dolor sit amet consectetur.'
            subHeading1='Funds Safety'
            subHeadingParagraph1='Lorem ipsum dolor sit amet consectetur. Nisi quam cras nibh nam
                nullam auctor lectus in nulla.'
            subHeading2='Multi Assets'
            subHeadingParagraph2='Lorem ipsum dolor sit amet consectetur. Nisi quam cras nibh
                  nam nullam auctor lectus in nulla.'
          />
        </div>
        {/*  */}
        <div className='home__featureCard2'>
          <FeaturesCard
            introductionText='Introducing Variety'
            heading={`Supporting your local currencies`}
            paragraph='Lorem ipsum dolor sit amet consectetur. Nisi quam cras nibh nam
              nullam auctor lectus in nulla. Sed leo mattis neque ullamcorper
              ultricies.Lorem ipsum dolor sit amet consectetur.'
            subHeading1='Nigerian Naira'
            subHeadingParagraph1='Lorem ipsum dolor sit amet consectetur. Nisi quam cras nibh nam
                nullam auctor lectus in nulla.'
            subHeading2='Kenyan Sheilings'
            subHeadingParagraph2='Lorem ipsum dolor sit amet consectetur. Nisi quam cras nibh
                  nam nullam auctor lectus in nulla.'
            order1
            order2
          />
        </div>
        {/*  */}
        <div className='home__featureCard1'>
          <FeaturesCard
            introductionText='Introducing Variety'
            heading={`Features you’ll expect from a simple wallet`}
            paragraph='Lorem ipsum dolor sit amet consectetur. Nisi quam cras nibh nam
              nullam auctor lectus in nulla. Sed leo mattis neque ullamcorper
              ultricies.Lorem ipsum dolor sit amet consectetur.'
            subHeading1='Funds Safety'
            subHeadingParagraph1='Lorem ipsum dolor sit amet consectetur. Nisi quam cras nibh nam
                nullam auctor lectus in nulla.'
            subHeading2='Multi Assets'
            subHeadingParagraph2='Lorem ipsum dolor sit amet consectetur. Nisi quam cras nibh
                  nam nullam auctor lectus in nulla.'
          />
        </div>
        <div>
            {/* <Testimonials /> */}
        </div>
        <div className='home__featureCard1'>
          <GetStartedCard />
        </div>
      </LandingWrapper>
    </div>
  )
}

export default Home
