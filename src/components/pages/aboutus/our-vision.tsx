'use client'
import Container from '@/components/common/container'
import SubHeading from '@/components/common/custom-subheading'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const OurVision = () => {
    const t=useTranslations('OurVision')
  return (
    <div>
        <Container>
            <div className="max-w-7xl mx-auto py-10">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
                    <div className="">
                    <div className="space-y-4 py-7">
                       <h1>{t('title')}</h1>
                       <SubHeading>{t('subheading')}</SubHeading>
                       <p className='text-base text-darkGray leading-7'>{t('desc_1')}</p>
                       <p className='text-base text-darkGray leading-7'>{t('desc_2')}</p>
                       <p className='text-base text-darkGray leading-7'>{t('desc_3')}</p>
                    </div>
                    <div className="flex items-center justify-between">
                       <div className="">
                         <h1 className='font-bold text-darkGray'>{t('directorName')}</h1>
                         <p>{t('directorRole')}</p>
                       </div>
                         <Image src={'/assets/signature.png'} alt='' height={250} width={250} className='' />
                    </div>
                    </div>
                    <div className="flex justify-center">
                        <Image src={'/assets/modular.png'} alt='' height={400} width={400} className='border-r-[1.2rem] border-b-[1.2rem]  border-primary' />
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default OurVision