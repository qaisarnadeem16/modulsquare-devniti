'use client'

import Container from '@/components/common/container'
import Heading from '@/components/common/custom-heading'
import SubHeading from '@/components/common/custom-subheading'
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
const images = [
  '/assets/img1.jpg',
  '/assets/img2.jpg',
  '/assets/img3.jpg',
  '/assets/img4.jpg',
  '/assets/img1.jpg',
  '/assets/img4.jpg',
];

const Picture = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: (dots:any) => (
      <div>
        <ul className="custom-dots">{dots}</ul>
      </div>
    ),
    customPaging: () => <div className="dash-dot" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <div>
        <Container className='md:!px-0'>
            <div className="py-10">
                <div className="max-w-7xl mx-auto">
                <Heading className='text-center'>
                    Pictures
                </Heading>
                <SubHeading className='!text-4xl !text-semiBlack'>
                    Modulaire Maurice
                </SubHeading>
                </div>
                <div className="my-10 md:px-5">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2 relative group overflow-hidden">
            <div className="transition-transform duration-600  group-hover:scale-125">
            <Image src={src} alt={`logo-${index}`} width={500}
              height={350}
              className="w-full h-[62vh] object-cover" />
            </div>
          </div>
        ))}
      </Slider>

      {/* Optional: Custom styles */}
      <style jsx>{`
        .custom-dots {
          display: flex !important;
          justify-content: center;
          margin-top: 15px;
        }
        .dash-dot {
          width: 20px;
          height: 3px;
          background: #333;
          margin: 0 4px;
          border-radius: 2px;
        }
        .slick-dots li.slick-active .dash-dot {
          background: #54748e;
        }
      `}</style>
    </div>


            </div>
        </Container>
    </div>
  )
}

export default Picture