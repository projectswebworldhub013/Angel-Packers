import React from 'react'
import HeroSlider from '../Components/Hero'
import AboutSection from '../Components/AboutSection'
import HowItWorks from '../Components/HowItWorks'
import StatsSection from '../Components/StatsSection'
import RateChart from '../Components/RateChart'

const Home = () => {
  return (
    <div>
      <HeroSlider/>
      <AboutSection/>
      <HowItWorks/>
      <StatsSection/>
      <RateChart/>
    </div>
  )
}

export default Home
