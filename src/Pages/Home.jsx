import React from 'react'
import HeroSlider from '../Components/Hero'
import AboutSection from '../Components/AboutSection'
import HowItWorks from '../Components/HowItWorks'
import StatsSection from '../Components/StatsSection'

const Home = () => {
  return (
    <div>
      <HeroSlider/>
      <AboutSection/>
      <HowItWorks/>
      <StatsSection/>
    </div>
  )
}

export default Home
