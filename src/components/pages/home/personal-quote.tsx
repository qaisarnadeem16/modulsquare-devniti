'use client'
import Container from '@/components/common/container'
import SubHeading from '@/components/common/custom-subheading'
import QuotationForm from '@/components/common/quotation-form'
import { useTranslations } from 'next-intl'
import React from 'react'
import { FaClock, FaEuroSign, FaHandshakeAngle } from 'react-icons/fa6'

const PersonalQuote = () => {
  const t = useTranslations();
  return (
    <div className='py-10'>
      <Container className='md:!px-0'>
        <div
          className="relative min-h-[80vh] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(/assets/bgimage.jpg)` }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: '#54748e',
              opacity: 0.5,
              transition: 'background 0.3s,  border-radius 0.3s, opacity 0.3s'
            }}
          />

          <div className="grid md:grid-cols-2 relative max-w-7xl mx-auto  gap-10 grid-cols-1">
           <div className="text-white py-10 px-2">
             <h1 className='text-lg font-medium'>{t(`quote_title`)}</h1>
            <SubHeading className='!text-white py-6'>
                {t(`quote_question`)}
            </SubHeading>
            <div className="grid grid-cols-2 md:grid-cols-3 py-10 gap-6">
                 <div className="flex gap-5 flex-col items-center text-center">
                    <span>
                        <FaClock size={36}/>
                    </span>
                    <SubHeading className='!text-white'>{t('quote_fast')}</SubHeading>
                    <p className='text-base'>{t('quote_within')}</p>
                </div>
                 <div className="flex gap-5 flex-col items-center text-center">
                    <span>
                        <FaHandshakeAngle  size={36}/>
                    </span>
                   <SubHeading className='!text-white'>{t('consulting_title')}</SubHeading>
                    <p className='text-base'>{t('consulting_description')}</p>
                </div>
                <div className="flex gap-5 flex-col items-center text-center">
                    <span>
                     <FaEuroSign  size={36}/>
                    </span>
                   <SubHeading className='!text-white'>{t('rates_title')}</SubHeading>
                    <p className='text-base'>{t('rates_description')}</p>
                </div>
            </div>
           </div>
           <div className="">
                <QuotationForm/>
           </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PersonalQuote
