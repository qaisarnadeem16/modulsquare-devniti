'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import Button from '@/components/common/custom-button';
import { useTranslations } from 'next-intl';
import Container from '@/components/common/container';

const slides = [
  '/assets/hero.png',
  '/assets/hero2.png',
];

const HeroSection = () => {
  const t = useTranslations();
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000, // Change every 2 sec
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    swipe: false,
  };

  return (
    <div >
    <Container>
      <div className="relative overflow-hidden">
          <Slider {...settings}>
        {slides.map((img, index) => (
          <div key={index}>
            <div
              className="min-h-[75vh] bg-cover bg-center overflow-hidden flex items-center justify-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <h1 className="text-white text-4xl md:text-8xl font-bold text-center drop-shadow-xl">
                 {t(`title`)} <br /> {t(`title_1`)}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex justify-center py-6">
        <Button label={t(`our_offer`)} className="rounded-br-lg py-3" />
      </div>
      </div>
    </Container>
    </div>
  );
};

export default HeroSection;
