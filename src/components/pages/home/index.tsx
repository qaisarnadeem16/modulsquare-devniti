import React from 'react'
import HeroSection from './hero-section'
import AboutUs from './about-us'
import PersonalQuote from './personal-quote'
import WhatDoBest from './what-do-best'
import FlagSection from './flag-section'
import Picture from './picture'
import ReadytoUse from './ready-to-use'

const LandingPage = () => {
  return (
    <div>
        <HeroSection/>
        <AboutUs/>
        <PersonalQuote/>
        <ReadytoUse/>
        <WhatDoBest/>
        <FlagSection/>
        <Picture/>
    </div>
  )
}

export default LandingPage