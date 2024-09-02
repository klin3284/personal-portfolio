"use client";

import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

interface ImageGalleryProps {
  slides: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-full w-full p-4 relative group">
      <div className="relative w-full h-full">
        <img
          src={slides[currentIndex]}
          alt={`Spotlight Image ${currentIndex}`}
          className="object-cover w-full h-full pb-4"
        />
      </div>
      <div className="slide-left-arrow bg-blue-400 text-white">
        <BsChevronCompactLeft onClick={prevSlide} size={20} />
      </div>
      <div className="slide-right-arrow bg-blue-400 text-white">
        <BsChevronCompactRight onClick={nextSlide} size={20} />
      </div>
      <div className="slide-dots">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl ${slideIndex === currentIndex ? "text-blue-400" : "text-gray-500"}`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
