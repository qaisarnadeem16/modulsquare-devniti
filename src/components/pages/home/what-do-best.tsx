import React from 'react'

import { infoBlocks } from '@/data'
import Container from '@/components/common/container'
import Heading from '@/components/common/custom-heading'
import SubHeading from '@/components/common/custom-subheading'

const WhatDoBest = () => {
  return (
    <div className='relative'>
        <Container className='md:!px-0'>
            <div className="bg-semiBlack py-28 px-3 w-full md:-mt-28 -top-20 ">
                <div className="max-w-7xl mx-auto">
                    <div className="py-4">
                        <Heading className='text-center'>
                        What We Do Best
                    </Heading>
                    <h1 className='font-medium py-4 text-center text-lg text-gray '>Expertise</h1>
                    </div>
                    <div className="py-6">
                        <SubHeading>
                            Fulfilling all your needs
                        </SubHeading>
                    </div>
                    <div className="grid py-3 md:grid-cols-3 gap-6 grid-cols-1">
                      {infoBlocks.map((block, index) => (
                          <div key={index} className="text-white space-y-3.5">
          <SubHeading className='!text-whit'>{block.title}</SubHeading>
          <h1 className='font-semibold'>{block.heading}</h1>
          <p>{block.text}</p>
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