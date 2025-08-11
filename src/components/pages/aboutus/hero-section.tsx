'use client'
import Container from '@/components/common/container'
import { useTranslations } from 'next-intl';
import React from 'react'

const HeroSection = () => {
     const t=useTranslations();
  return (
    <div>
        <Container className='!px-0'>
            <div className="bg-cover bg-no-repeat bg-center h-[75vh] w-full"
             style={{ backgroundImage: `url(/assets/aboutbg.jpg)` }}
            >
            <div className="max-w-6xl mx-auto flex items-center h-full">
             <h1 className='font-bold text-7xl text-white'>{t(`about_us`)}</h1>
            </div>
            </div>
        </Container>
    </div>
  )
}

export default HeroSection