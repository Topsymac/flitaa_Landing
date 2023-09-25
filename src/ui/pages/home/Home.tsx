import React from 'react'
import LandingWrapper from '../../wrappers/landingWrapper/LandingWrapper'
import FeaturesCard from '../../molecules/featuresCard/FeaturesCard'

const Home = () => {
  return (
    <div>
      <LandingWrapper>
        <FeaturesCard introductionText='Introducing Simplicity' />
        <FeaturesCard introductionText='Introducing Variety' />
        {/* <FeaturesCard  Introducing Simplicity/> */}
      </LandingWrapper>
    </div>
  )
}

export default Home
