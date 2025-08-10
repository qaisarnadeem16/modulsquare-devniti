'use client'
import Container from '@/components/common/container'
import Heading from '@/components/common/custom-heading'
import SubHeading from '@/components/common/custom-subheading'
import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl'

const ReadytoUse = () => {
  const t = useTranslations();
  const cards = t.raw('cards'); 

  return (
    <div className='py-10 bg-[#f8f9fa]'>
      <Container className='md:!px-0'>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-8">
            <Heading>{t(`ready_to_use`)}</Heading>
            <SubHeading>{t(`ready_description`)}</SubHeading>
          </div>
          <div className="pt-10">
            <div className="grid z-20 relative grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:p-4">
              {cards.map((card:any, index:any) => (
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
                  <div className="absolute top-[calc(70%-10px)] left-10 z-20">
                    <span className="text-white text-xl font-medium -rotate-90 origin-left inline-block">
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
        </div>
      </Container>
    </div>
  )
}

export default ReadytoUse
