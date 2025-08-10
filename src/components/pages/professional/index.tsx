import React from 'react'
import HeroSection from './hero-section'
import DiscoverSection from './discover-section'
import ProfessionSection from './profession-section'
import ServicesSection from './services-section'
import FinancialSolution from './financial-solution'

const ProfessionalPage = () => {
  return (
    <div>
        <HeroSection/>
        <ProfessionSection/>
        <ServicesSection/>
        <DiscoverSection/>
        <FinancialSolution/>
    </div>
  )
}

export default ProfessionalPage