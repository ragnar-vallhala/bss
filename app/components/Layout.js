// components/Layout.js
'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { colors } from '../constants/colors';

export default function Layout({ children }) {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div style={{ backgroundColor: colors.light }}>
      <Head>
        <title>Bharat Sevashram Sangha</title>
        <meta name="description" content="Official website of Bharat Sevashram Sangha" />
      </Head>
      
      <Header />
      
      <main>{children}</main>
      
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            backgroundColor: colors.primary,
            color: colors.light,
            padding: '0.75rem',
            borderRadius: '9999px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 300ms ease',
            zIndex: 50
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: '1.5rem',
              width: '1.5rem'
            }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}