'use client';

import { useTranslations } from 'next-intl';
import Container from '@/components/common/container';
import Heading from '@/components/common/custom-heading';
import SubHeading from '@/components/common/custom-subheading';
import Image from 'next/image';
import React from 'react';
import { serviceData } from '../../../data';
import Button from '@/components/common/custom-button';

const AboutUs = () => {
  const t = useTranslations();

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
              className="h-auto w-5/6"
            />
          </div>
          <div className="space-y-3">
            <Heading>{t('about_heading')}</Heading>

            <h1 className="text-gray font-bold uppercase py-3">
              {t('about_title')}
            </h1>

            <SubHeading>{t('subheading')}</SubHeading>

            <div className="max-w-5/6">
              <p className="text-lightBlack text-base">
                {t('about_description')}
              </p>

              <h1 className="font-semibold py-5">{t('services')}</h1>

              <div>
                {serviceData.map((item, index) => (
                  <div key={index} className="flex gap-2">
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
            <Button label="Learn More" className="rounded-br-lg !text-primary hover:text-white hover:bg-primary border-2 !bg-transparent py-2" />
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
