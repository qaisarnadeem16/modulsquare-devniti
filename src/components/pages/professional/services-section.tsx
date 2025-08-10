'use client'
import Container from '@/components/common/container';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import { useTranslations } from 'next-intl';

const ServicesSection = () => {
  const t=useTranslations() 
  const serviceList = t.raw('service_list');
  const detailList = t.raw('detail_list');
  return (
    <div className="relative flex  bg-white">
      {/* Left-side background image */}
      <div className="hidden md:block">
        <Image
          src="/assets/slide3.png"
          alt="slide3"
          height={500}
          width={500}
          className="bg-cover h-full w-full"
        />
      </div>

       <Container>
        <div className="grid md:grid-cols-12 max-w-7xl mx-auto items-center grid-cols-1 gap-8 py-12">
          {/* Left Column */}
          <div className="md:col-span-7 z-10">
            <h2 className="text-2xl font-bold mb-4">{t('service')}</h2>
            <p className="text-gray-700 mb-8">{t('service_intro')}</p>

            <ul className="space-y-4">
              {serviceList.map((item:any, i:any) => (
                <li key={i} className="flex items-start">
                  <div className="pr-2">
                    <FaCheck className="text-primary mt-1 bg-gray-100 h-5 w-5 rounded-full p-1" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">
                      {item.title}:
                      <span className="text-gray-600 px-2 font-normal">{item.desc}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="py-3 space-y-2.5">
              <h1 className="text-2xl font-bold mb-4">{t('services_not_covered_title')}</h1>
              <p className="text-gray-600">{t('services_not_covered_desc')}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:flex md:col-span-1 justify-center">
            <Image
              src="/assets/divider.png"
              alt="divider"
              width={200}
              height={20}
              className="h-1/4 w-auto"
            />
          </div>

          {/* Right Column */}
          <div className="md:col-span-4 z-10">
            <h3 className="text-2xl font-bold mb-4">{t('detail')}</h3>
            <ul className="space-y-4">
              {detailList.map((text:any, i:any) => (
                <li key={i} className="flex items-center">
                  <div className="pr-2">
                    <FaCheck className="text-primary bg-gray-100 h-5 w-5 rounded-full p-1" />
                  </div>
                  <span className="text-gray-700">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServicesSection;
