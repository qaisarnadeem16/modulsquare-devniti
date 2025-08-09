'use client'
import Container from '@/components/common/container'
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import React from 'react'

const FlagSection = () => {
    const t = useTranslations();
  return (
    <div className=''>
        <Container className='md:!px-0'>
        <div
          className="relative min-h-[80vh] bg-no-repeat"
          style={{ backgroundImage: `url(/assets/italyflag.png)` }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: '#fff',
              opacity: 0.5,
              transition: 'background 0.3s,  border-radius 0.3s, opacity 0.3s'
            }}
         />

          <div className="items-center justify-center px-3 min-h-[94vh] flex">
            <div className="grid relative md:grid-cols-2  gap-10  py max-w-7xl mx-auto grid-cols-1 ">
            <div className="md:flex items-center gap-5">
                <Image src={'/assets/logoflag.png'} alt='flaglogo' height={200} width={200} />
                <p className=''>{t(`flag_desc`)}</p>
            </div>
            <div className="md:grid-cols-5 grid grid-cols-2 gap-3 items-center">
               <Image src={'/assets/logo1.png'} alt='flaglogo' height={100} width={100} className='w-auto h-auto'/>
               <Image src={'/assets/logo2.jpg'} alt='flaglogo' height={85} width={85} className='w-[92px] h-[92px]'/>
               <Image src={'/assets/logo3.png'} alt='flaglogo' height={100} width={100} />
               <Image src={'/assets/logo4.jpg'} alt='flaglogo' height={100} width={100} />
               <Image src={'/assets/logo5.webp'} alt='flaglogo' height={100} width={100} />
            </div>
          </div>
          </div>
          </div>
        </Container>
    </div>
  )
}

export default FlagSection