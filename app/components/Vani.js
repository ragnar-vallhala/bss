// components/Vani.js
'use client';
import { useState, useEffect } from 'react';
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
  }, [autoPlay]);

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
    <section style={{ 
      backgroundColor: colors.light,
      padding: '3rem 1rem'
    }}>
      {/* Top Content */}
      <div style={{
        position: 'relative',
        padding: '4rem 1rem',
        maxWidth: '72rem',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '1.875rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: colors.primary
        }}>
          Shri Shri Sangha Vani
        </h2>
        <p style={{
          fontSize: '1.125rem',
          maxWidth: '42rem',
          margin: '0 auto',
          color: colors.dark
        }}>
          Ten divine messages of Acharya Srimat Swami Pranavanandaji Maharaj.
        </p>
      </div>

      {/* Messages Carousel */}
      <div style={{
        padding: '3rem 1rem',
        maxWidth: '72rem',
        margin: '0 auto'
      }}>
        <div style={{ position: 'relative' }}>
          {/* Carousel */}
          <div style={{ overflow: 'hidden' }}>
            <div style={{
              display: 'flex',
              transition: 'transform 500ms ease-in-out',
              transform: `translateX(-${currentSlide * 100}%)`
            }}>
              {messages.map((message) => (
                <div key={message.id} style={{
                  width: '100%',
                  flexShrink: 0,
                  padding: '0 1rem'
                }}>
                  <div style={{
                    backgroundColor: colors.light,
                    padding: '2rem',
                    borderRadius: '0.5rem',
                    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
                    border: `1px solid ${colors.gray}`,
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      marginBottom: '1rem',
                      color: colors.primary
                    }}>
                      {message.title}
                    </h3>
                    <p style={{
                      fontSize: '1.125rem',
                      color: colors.dark
                    }}>
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
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              marginLeft: '-0.5rem',
              backgroundColor: colors.light,
              padding: '0.5rem',
              borderRadius: '9999px',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
              border: `1px solid ${colors.gray}`,
              zIndex: 10,
              cursor: 'pointer',
              transition: 'background-color 200ms ease'
            }}
          >
            <svg 
              width="1.25rem" 
              height="1.25rem" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{ color: colors.primary }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={goToNext}
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              marginRight: '-0.5rem',
              backgroundColor: colors.light,
              padding: '0.5rem',
              borderRadius: '9999px',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
              border: `1px solid ${colors.gray}`,
              zIndex: 10,
              cursor: 'pointer',
              transition: 'background-color 200ms ease'
            }}
          >
            <svg 
              width="1.25rem" 
              height="1.25rem" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{ color: colors.primary }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem',
          gap: '0.5rem'
        }}>
          {messages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: index === currentSlide ? '1.5rem' : '0.75rem',
                height: '0.75rem',
                borderRadius: '9999px',
                backgroundColor: index === currentSlide ? colors.primary : colors.gray,
                transition: 'all 200ms ease',
                cursor: 'pointer'
              }}
              aria-label={`Go to message ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}