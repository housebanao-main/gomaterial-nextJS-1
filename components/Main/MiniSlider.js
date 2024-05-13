import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons

const MiniSlider = () => {
  const images = [
    '/lights.png',
    '/cement.png',
    '/bathroom-sanitry.png',
    '/chimny.png',
    '/basin.png',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [currentSlide, images.length]);

  const scrollNext = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const scrollPrev = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className='mini-slider w-4/4 h-42 relative overflow-hidden'>
      <div className="slides flex" style={{ transform: `translateX(-${currentSlide * 200}px)`, transition: 'transform 1s ease-in-out', width: `${images.length * 200}px` }}>
        {images.map((image, index) => (
          <div key={index} className="slide-item inline-block h-32 m-4 rounded-xl" style={{ width: '200px', backgroundColor: 'white' }}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        ))}
      </div>
      <button onClick={scrollPrev} className="absolute cursor-pointer left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
        <FaChevronLeft />
      </button>
      <button onClick={scrollNext} className="absolute cursor-pointer right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
        <FaChevronRight />
      </button>
    </div>
  );
};

export default MiniSlider;
