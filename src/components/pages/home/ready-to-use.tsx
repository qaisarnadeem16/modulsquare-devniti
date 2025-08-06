import Container from '@/components/common/container'
import Heading from '@/components/common/custom-heading'
import SubHeading from '@/components/common/custom-subheading'
import { cards } from '@/data'
import Image from 'next/image'
import React from 'react'

const ReadtoUse = () => {
  return (
    <div className='py-10 bg-[#f8f9fa]'>
        <Container>
            <div className="flex flex-col items-center justify-center gap-8">
                <Heading>
                    Ready to use
                </Heading>
                <SubHeading>
                    A process designed to make your life easier
                </SubHeading>
            </div>
            <div className="pt-10">
                <div className="grid relative grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative overflow-hidden group bg-black/10"
        >
          <div className="transition-transform duration-600 group-hover:scale-125">
            <Image
              src={card.img}
              alt={card.label}
              width={500}
              height={350}
              className="w-full h-[62vh] object-cover"
            />
          </div>
           <div className="absolute top-[calc(50%-10px)] left-10 z-20">
          <span className="text-white text-xl font-medium -rotate-90 origin-left  inline-block">
            {card.label2}
          </span>
        </div>
          <div className="absolute bottom-4 left-4 text-white text-2xl font-bold z-10">
            {card.label}
          </div>
          <div className="absolute bottom-4 right-4 text-primary text-4xl font-bold z-10">
            {card.number}
          </div>
        </div>
      ))}
    </div>
            </div>
        </Container>
    </div>
  )
}

export default ReadtoUse