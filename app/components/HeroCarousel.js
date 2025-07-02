// components/HeroCarousel.js
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { colors } from '../constants/colors';

const slides = [
  {
    id: 1,
    image: '/images/hero/1.jpeg',
    title: 'Join Our Mission',
    subtitle: 'Help us make a difference in communities worldwide',
    cta: 'Learn More',
    ctaLink: '/about'
  },
  {
    id: 2,
    image: '/images/hero/2.jpeg',
    title: 'Support Our Campaigns',
    subtitle: 'Your contribution can change lives',
    cta: 'Donate Now',
    ctaLink: '/donate'
  },
  {
    id: 3,
    image: '/images/hero/3.jpeg',
    title: 'Volunteer With Us',
    subtitle: 'Become part of our dedicated team',
    cta: 'Get Involved',
    ctaLink: '/volunteer'
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative w-full">
      <div className="w-full h-[calc(100vh-70px)] md:h-[calc(100vh-130px)] min-h-[400px] max-h-[800px] overflow-hidden">
        {/* Slides */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
              <Image
                src={slide.image}
                alt=""
                fill
                className="object-cover"
                priority={index === 0}
              />

              {/* Text overlay with padding to avoid header */}
              <div className="absolute inset-0 bg-black/30 flex items-center pt-[20px] pb-[80px] px-4 md:px-16">
                <div className="container mx-auto text-center md:text-left">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeIn">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-2xl mx-auto md:mx-0 animate-fadeIn delay-100">
                    {slide.subtitle}
                  </p>
                  <Link
                    href={slide.ctaLink}
                    style={{ backgroundColor: colors.primary }}
                    className="inline-block text-gray-900 font-bold py-3 px-8 rounded-full hover:opacity-90 transition-all animate-fadeIn delay-200"
                  >
                    {slide.cta}
                  </Link>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full z-10 transition-all"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full z-10 transition-all"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}