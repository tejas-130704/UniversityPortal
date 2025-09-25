import React, { useState, useEffect } from "react";
import coep from "../../assets/images/coep.jpg";
import coep2 from "../../assets/images/coep2.jpg";
import coep3 from "../../assets/images/coep3.jpg";

const ControlledCarousel = () => {
  const images = [coep, coep2, coep3];
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false); 

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  useEffect(() => {
    if (isPaused) return; 
    const id = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(id);
  }, [images.length, isPaused]);

  return (
    // Hidden on small devices, visible from md (768px) up
    <div
      className="hidden lg:block relative w-full h-[80vh] overflow-hidden rounded-t-lg mt-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out h-full will-change-transform"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="min-w-full h-full flex-shrink-0">
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover object-center"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-4 h-4 rounded-full transition-colors ${
              current === idx ? "bg-white" : "bg-gray-400/70"
            }`}
          />
        ))}
      </div>

      {/* Controls */}
      <button
        aria-label="Previous slide"
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition z-20"
      >
        ❮
      </button>
      <button
        aria-label="Next slide"
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition z-20"
      >
        ❯
      </button>
    </div>
  );
};

export default ControlledCarousel;
