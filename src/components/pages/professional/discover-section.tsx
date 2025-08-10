import Container from '@/components/common/container';
import Button from '@/components/common/custom-button';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import React from 'react'

const DiscoverSection = () => {
   const t=useTranslations();
  return (
    <div>
        <Container className='!px-0'>
            <div className="bg-cover bg-no-repeat bg-center h-[75vh] w-full"
             style={{ backgroundImage: `url(/assets/bg.jpg)` }}
            >
            <div className="max-w-6xl mx-auto flex flex-col gap-4 justify-center items-start h-full">
             <h1 className='font-bold text-4xl text-white'>{t(`discover`)}</h1>
             <h1 className='font-bold text-4xl text-white'>{t(`discover_desc`)}</h1>
             <Link href={'/'}>
            <Button
               label={t(`discover`)}
               className="rounded-br-lg border-2 border-white hover:!border-none !bg-transparent hover:!bg-primary py-3"
            />
             </Link>
            </div>
            </div>
        </Container>
    </div>
  )
}

export default DiscoverSection