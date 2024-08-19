import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import banner1 from './Banner1.png';
import banner2 from './Banner2.png';
import banner3 from './banner3.png';
import banner4 from './banner4.png';


const slides = [
  {
    image: banner3,
  },
  {
    image: banner1,
  },
  {
    image: banner4,
  },
  {
    image: banner2,
  },
  {
    image: banner1,
  },
];

// Custom hook to detect screen size
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);
  const { width } = useWindowSize();
  const isSmallScreen = width < 768; // Tailwind's md breakpoint is 768px

  useEffect(() => {
    if (!isSmallScreen) {
      startSlideShow();
    }
    return () => {
      stopSlideShow();
    };
  }, [isSmallScreen]);

  const startSlideShow = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 3000);
  };

  const stopSlideShow = () => {
    clearInterval(slideInterval.current);
  };

  const nextSlide = () => {
    stopSlideShow();
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    startSlideShow();
  };

  const prevSlide = () => {
    stopSlideShow();
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    startSlideShow();
  };

  return (
    <div className="relative w-full h-40 md:h-96 overflow-hidden">
      {isSmallScreen ? (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slides[0].image})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        >
        </div>
      ) : (
        slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
        ))
      )}
      {!isSmallScreen && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 transform -translate-y-1/2 left-2 md:left-4 bg-black bg-opacity-50 p-1 md:p-2 rounded-full"
          >
            <FaArrowLeft className="text-white text-sm md:text-lg" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 transform -translate-y-1/2 right-2 md:right-4 bg-black bg-opacity-50 p-1 md:p-2 rounded-full"
          >
            <FaArrowRight className="text-white text-sm md:text-lg" />
          </button>
        </>
      )}
    </div>
  );
};

export default Slideshow;
