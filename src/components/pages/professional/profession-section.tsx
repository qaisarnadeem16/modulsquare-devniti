'use client'
import Container from '@/components/common/container'
import Button from '@/components/common/custom-button'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const ProfessionSection = () => {
    const t=useTranslations()
  return (
    <div className='bg-light py-5 md:py-20'>
        <Container className='md:!px-0'>
            <div className="grid max-w-7xl mx-auto md:grid-cols-12 py-8 grid-cols-1 gap-10">
                <div className="md:col-span-7">
                 <Image src={'/assets/slide.jpg'} alt='profession' height={300} width={300} className='h-auto w-full'/>
                </div>
                <div className="md:col-span-5">
                    <div className="space-y-4">
                        <p className='font-semibold text-xl text-gray '>{t(`professional`)}</p>
                       <div className="space-y-3 pt-6 py-4">
                         <h1 className='font-semibold text-2xl text-primary capitalize'>{t('modular_profession')}</h1>
                        <h1 className='font-semibold text-3xl text-primary capitalize'>{t('your_vision')}</h1>
                       <div className="space-y-4 py-6">
                         <p className='text-semiBlack text-lg'>{t('para_1')}</p>
                         <p className='text-semiBlack text-lg'>{t('para_2')}</p>
                       </div>
                       </div>
                       <Link href={'/quotation'}>
                     <Button
               label={t(`footer.contact`)}
               className="rounded-br-lg border-2 !text-semiBlack hover:!text-white !px-8 border-primary hover:!border-none !bg-transparent hover:!bg-primary py-3"
            />
             </Link>
                    </div>
                </div>

            </div>
        </Container>
    </div>
  )
}

export default ProfessionSection