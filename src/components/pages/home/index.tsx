import React from 'react'
import HeroSection from './hero-section'
import AboutUs from './about-us'
import ReadtoUse from './ready-to-use'
import PersonalQuote from './personal-quote'
import WhatDoBest from './what-do-best'
import FlagSection from './flag-section'
import Picture from './picture'

const LandingPage = () => {
  return (
    <div>
        <HeroSection/>
        <AboutUs/>
        <PersonalQuote/>
        <ReadtoUse/>
        <WhatDoBest/>
        <FlagSection/>
        <Picture/>
    </div>
  )
}

export default LandingPage