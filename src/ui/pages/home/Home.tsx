import React from 'react'
import LandingWrapper from '../../wrappers/landingWrapper/LandingWrapper'
import FeaturesCard from '../../molecules/featuresCard/FeaturesCard'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <LandingWrapper>
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
        {/* <FeaturesCard  Introducing Simplicity/> */}
      </LandingWrapper>
    </div>
  )
}

export default Home
