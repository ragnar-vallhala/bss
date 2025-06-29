// components/Vani.js
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { colors } from '../constants/colors';
const messages = [
  {
    id: 1,
    title: "What are Real Assets?",
    text: "Self-confidence, Self-reliance and Self-respect"
  },
  {
    id: 2,
    title: "What are Real Enemies?",
    text: "Indolence, Slumber, Procrastination, Inertia, Lustful senses and Passions"
  },
  {
    id: 3,
    title: "What are Real Friends?",
    text: "Energy, Enthusiasm and Perseverance"
  },
  {
    id: 4,
    title: "What is the Goal?",
    text: "Self Realization, Universal Emancipation"
  },
  {
    id: 5,
    title: "What is Religion?",
    text: "Self-sacrifice, Self-abnegation, Self-Discipline, Adherence to truth and Continence"
  },
  {
    id: 6,
    title: "What is Real Death?",
    text: "Forgetfulness of the 'Self'"
  },
  {
    id: 7,
    title: "What is Real Life?",
    text: "Self-possession, Self-remembrance and Self-consciousness"
  },
  {
    id: 8,
    title: "What are Real Virtues?",
    text: "Heroism, Virility, Manliness and Aspiration for emancipation"
  },
  {
    id: 9,
    title: "What are Real Sins?",
    text: "Weakness, Fear (Defeatism), Cowardice, Meanness and Selfishness"
  },
  {
    id: 10,
    title: "What are Real Source of Strength?",
    text: "Patience, Fortitude and Endurance"
  }
];

export default function Vani() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % messages.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, messages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide(prev => (prev + 1) % messages.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const goToPrev = () => {
    setCurrentSlide(prev => (prev - 1 + messages.length) % messages.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  return (
    <section className={`bg-[${colors.light}]`}>
      {/* Top Content with Background Image */}
      <div className={`relative py-16 px-4 md:px-8 lg:px-16`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold text-[#2a5f9e] mb-4`}>
            Shri Shri Sangha Vani
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ten divine messages of Acharya Srimat Swami Pranavanandaji Maharaj.
          </p>
        </div>
      </div>

      {/* Messages Carousel */}
      <div className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Carousel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {messages.map((message) => (
                  <div key={message.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center h-full flex flex-col justify-center">
                      <h3 className="text-xl md:text-2xl font-bold text-[#2a5f9e] mb-4">
                        {message.title}
                      </h3>
                      <p className="text-gray-600 text-lg">
                        {message.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors z-10 border border-gray-200"
            >
              <svg className="w-5 h-5 text-[#2a5f9e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors z-10 border border-gray-200"
            >
              <svg className="w-5 h-5 text-[#2a5f9e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {messages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-[#2a5f9e] w-6' : 'bg-gray-300'}`}
                aria-label={`Go to message ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}