'use client'
import Container from '@/components/common/container';
import SubHeading from '@/components/common/custom-subheading';
import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

const PrioritySection = () => {
  const t = useTranslations(); 

  const points = [
    t('points.sub_point1'),
    t('points.sub_point2'),
    t('points.sub_point3')
  ];

  return (
    <div className="py-10">
      <Container>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <div className="relative">
              <Image
                src={'/assets/about.jpg'}
                alt=""
                height={400}
                width={400}
                className="w-full h-auto"
              />
              <div className="relative w-full bottom-20 md:left-10 flex justify-end">
                <div className="relative bg-[#4a6b80] w-72 h-40 clip-path-custom flex items-center justify-center">
                  <div
                    style={{
                      backgroundImage: `url(/assets/badgeimg.png)`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right center',
                      backgroundSize: 'contain'
                    }}
                    className="absolute inset-0"
                  ></div>
                  <span className="text-white capitalize text-xl font-bold">
                    {t('flawless')}<br />
                    {t('quality')}
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <h1 className="text-gray-500 font-medium text-lg">
                {t('about_module')}
              </h1>
              <div>
                <SubHeading>{t('quality_priority')}</SubHeading>
                <div className="py-10 text-darkGray text-lg space-y-4">
                  <p>{t('point_1')}</p>
                  <p>{t('point_2')}</p>
                  <p>
                    {t('point_3')} <br />
                    {t('point_4')}
                  </p>
                  <p>{t('point_5')}</p>
                </div>
                <div>
                    {points.map((text, i) => (
                     <div key={i} className="flex items-start gap-2 mb-3">
                       <Image
                          src={'/assets/checkmark.png'}
                          alt=""
                          height={20}
                          width={20}
                          className="mt-1 flex-shrink-0"
                         />
                       <p className="m-0">{text}</p>
                     </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PrioritySection;
