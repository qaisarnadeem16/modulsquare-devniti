'use client'
import Container from '@/components/common/container';
import Image from 'next/image';
import React, { useState } from 'react';
import { MdArrowForwardIos, MdOutlineArrowBackIosNew, } from 'react-icons/md';

const gallery = [
  '/assets/pic1.jpeg',
  '/assets/pic2.jpg',
  '/assets/pic3.jpg',
  '/assets/pic4.webp',
  '/assets/pic6.jpeg',
  '/assets/pic7.jpeg',
  '/assets/pic8.webp',
  '/assets/img1.jpg',
  '/assets/img2.jpg',
  '/assets/img3.jpg',
  '/assets/img4.jpg',
  '/assets/pic6.jpeg',
  '/assets/pic7.jpeg',
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openLightbox = (index:any) => {
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  const showPrev = (e:any) => {
    e.stopPropagation();
    setCurrentIndex((prev:any) =>  (prev > 0 ? prev - 1 : gallery.length - 1));
  };

  const showNext = (e:any) => {
    e.stopPropagation();
    setCurrentIndex((prev:any) => (prev < gallery.length - 1 ? prev + 1 : 0));
  };

  return (
    <div>
      <Container>
        <div className="grid md:grid-cols-4 py-10 grid-cols-1 gap-4">
          {gallery.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden group bg-black/10 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="transition-transform overflow-hidden duration-500 group-hover:scale-110">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  width={450}
                  height={400}
                  className="w-full h-[62vh] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Lightbox */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 text-white text-lg bg-gradient-to-b from-black/70 to-transparent">
            <span>
              {currentIndex + 1} / {gallery.length}
            </span>
            <button
              className="text-3xl cursor-pointer font-bold hover:text-gray-300"
              onClick={closeLightbox}
            >
              ✕
            </button>
          </div>

          {/* Image */}
          <div className="max-w-5xl max-h-[80vh] flex items-center justify-center">
            <Image
              src={gallery[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              width={1600}
              height={800}
              className="object-contain max-h-[80vh] w-full"
            />
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute cursor-pointer left-5 text-white text-5xl font-bold hover:text-gray-300"
            onClick={showPrev}
          >
            <MdOutlineArrowBackIosNew /> 
          </button>
          <button
            className="absolute right-5 cursor-pointer text-white text-5xl font-bold hover:text-gray-300"
            onClick={showNext}
          >
              <MdArrowForwardIos />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
