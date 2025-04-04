'use client'
import { url } from "inspector";
import Link from "next/link";
import { useState, useEffect } from "react"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Carousel data with 3 slides
  const slides = [
    {
      subtitle: "HOLIDAY 2022",
      title: "Men's New Arrivals",
      description: "New colors, now also available in men's sizing",
      buttonText: "View Collection",
      image: "/assets/erasebg-transformed.png",
      url: "/collections/mens-new-arrivals"
    },
    {
      subtitle: "SUMMER 2022",
      title: "Women's Collection",
      description: "Lightweight fabrics perfect for the season",
      buttonText: "Shop Now",
      image: "/assets/hero3.png",
      url: "/store"
    },
    {
      subtitle: "NEW SEASON",
      title: "Accessories Essentials",
      description: "Complete your look with our latest accessories",
      buttonText: "Discover More",
      image: "/assets/hero4.png",
      url: "/collections/accessories"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        changeSlide((currentSlide + 1) % slides.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating, slides.length]);

  // Manual slide navigation with animation control
  const changeSlide = (index: number) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 500);
  };

  return (
    <div className="bg-[#f8f0e3] w-full overflow-hidden relative">
      {/* Hero section with responsive container */}
      <div className="max-w-7xl mx-auto h-screen relative">
        {/* Current and next slide container */}
        <div className="relative h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out
                ${index === currentSlide
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-full'
                }
                ${isAnimating && index === currentSlide ? 'opacity-0 -translate-x-full' : ''}
                ${isAnimating && index === (currentSlide + 1) % slides.length ? 'opacity-100 translate-x-0' : ''}
              `}
            >
              {/* Using flex column on mobile, row on desktop */}
              <div className="flex flex-col md:flex-row h-full">
                {/* Mobile text overlay at center - visible only on mobile */}
                <div className="absolute inset-0 flex items-center justify-center md:hidden z-10">
                  <div className="w-full px-6 py-8 bg-[#f8f0e3] bg-opacity-80 text-center">
                    <p className="text-xs uppercase tracking-wide mb-2">
                      {slide.subtitle}
                    </p>
                    <h1 className="text-3xl font-bold mb-3 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-sm mb-4">
                      {slide.description}
                    </p>
                    <Link
                      href=""
                      className="inline-block bg-black text-white text-xs px-5 py-3 hover:bg-gray-800 transition-colors"
                    >
                      {slide.buttonText}
                    </Link>
                  </div>
                </div>

                {/* Desktop content - hidden on mobile, visible on desktop */}
                <div className="hidden md:flex w-1/2 flex-col justify-center pl-16 py-16 order-1 z-10">
                  <p className="text-xs uppercase tracking-wide mb-2">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-4xl font-bold mb-3 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-sm mb-6">
                    {slide.description}
                  </p>
                  <div>
                    <button className="bg-black text-white text-xs px-5 py-3">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>

                {/* Image - full width on all devices */}
                <div className="w-full md:w-1/2 relative h-full order-1 md:order-2">
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="absolute inset-0 h-full  object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination indicators */}
      <div className="pb-6 flex justify-center absolute bottom-0 left-0 right-0 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 mx-1 
        ${index === currentSlide ? 'w-8 bg-black' : 'w-2 bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero