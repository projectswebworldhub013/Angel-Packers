import React from 'react'
import HeroSlider from '../Components/Hero'
import AboutSection from '../Components/AboutSection'
import HowItWorks from '../Components/HowItWorks'
import StatsSection from '../Components/StatsSection'
import RateChart from '../Components/RateChart'
import Testimonials from '../Components/Testimonials'
import WhoWeAre from '../Components/WhoWeAre'

const Home = () => {
  return (
    <div>
      <HeroSlider/>
      <AboutSection/>
      <HowItWorks/>
      <WhoWeAre/>
      <StatsSection/>
      <RateChart/>
      <Testimonials/>
    </div>
  )
}

export default Home
