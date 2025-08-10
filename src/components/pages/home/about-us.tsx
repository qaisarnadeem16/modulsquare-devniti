'use client';

import { useTranslations } from 'next-intl';
import Container from '@/components/common/container';
import Heading from '@/components/common/custom-heading';
import SubHeading from '@/components/common/custom-subheading';
import Image from 'next/image';
import React from 'react';
import Button from '@/components/common/custom-button';
import { FaCheck, } from 'react-icons/fa6';


const AboutUs = () => {
  const t = useTranslations();
  const serviceData = t.raw('servicesData');

  return (
    <div>
      <Container className="md:!px-0">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div>
            <Image
              src="/assets/container.png"
              alt="Logo"
              width={200}
              height={200}
              className="h-auto w-full md:w-5/6"
            />
          </div>
          <div className="space-y-3">
            <Heading>{t('about_heading')}</Heading>

            <h1 className="text-gray font-bold uppercase py-3">
              {t('about_title')}
            </h1>

            <SubHeading>{t('subheading')}</SubHeading>

            <div className="md:max-w-5/6">
              <p className="text-lightBlack text-base">
                {t('about_description')}
              </p>

              <h1 className="font-semibold py-5">{t('services')}</h1>

              <div>
                {serviceData.map((item:any, index:any) => (
                  <div key={index} className="flex gap-2 items-start">
                    <div className="">
                      <FaCheck  className='text-primary mt-2 bg-gray-100 h-5 w-5 rounded-full p-1' />
                    </div>
                    <p className="leading-8 text-lightBlack">
                      <strong className="text-black">{item.heading}:</strong>{' '}
                      <span>{item.description}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lightBlack">
              {t('closing')}
            </p>
          </div>
        </div>
            <div className="flex justify-center py-3">
            <Button label={t('learn_more')} className="rounded-br-lg !text-primary hover:!text-white hover:!bg-primary border-2 !bg-transparent py-2" />
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
