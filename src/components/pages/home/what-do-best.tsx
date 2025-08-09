'use client'
import React from 'react'
import Container from '@/components/common/container'
import Heading from '@/components/common/custom-heading'
import SubHeading from '@/components/common/custom-subheading'
import { useTranslations } from 'next-intl'

const WhatDoBest = () => {
      const t = useTranslations();
      const infoblock = t.raw('infoblock'); 
  return (
    <div className='relative'>
        <Container className='md:!px-0'>
            <div className="bg-semiBlack py-28 px-3 w-full md:-mt-28 -top-20 ">
                <div className="max-w-7xl mx-auto">
                    <div className="py-4">
                        <Heading className='text-center'>
                        {t(`do_best`)}
                    </Heading>
                    <h1 className='font-medium py-4 text-center text-lg text-gray '>{t(`experties`)}</h1>
                    </div>
                    <div className="py-6">
                        <SubHeading>
                           {t(`fulfill`)}
                        </SubHeading>
                    </div>
                    <div className="grid py-3 md:grid-cols-3 gap-6 grid-cols-1">
                      {infoblock.map((block:any, index:any) => (
                          <div key={index} className="text-white space-y-3.5">
          <SubHeading className='!text-whit'>{block.label}</SubHeading>
          <h1 className='font-semibold'>{block.sub_label}</h1>
          <p>{block.info_description}</p>
        </div>
      ))}
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default WhatDoBest