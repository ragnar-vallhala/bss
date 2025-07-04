// components/Layout.js
'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { colors } from '../constants/colors';
import { Toaster } from 'react-hot-toast';


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
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{
          top: 80,
          right: 20,
        }}
        toastOptions={{
          className: 'font-sans',
          duration: 4000,
          style: {
            background: colors.secondary, // Using your theme's primary color
            color: '#ffffff',
            fontWeight: '500',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            padding: '12px 16px',
            fontSize: '14px',
            borderLeft: `4px solid ${colors.secondary}`, // Using your theme's secondary color
            transition: 'all 0.3s ease',
          },
          success: {
            iconTheme: {
              primary: '#ffffff',
              secondary: colors.secondary,
            },
            style: {
              background: colors.secondary,
              borderLeft: `4px solid #10b981`,
            },
          },
          error: {
            iconTheme: {
              primary: '#ffffff',
              secondary: '#ef4444',
            },
            style: {
              background: '#ef4444',
              borderLeft: `4px solid #b91c1c`,
            },
          },
          loading: {
            style: {
              background: '#1e293b',
              borderLeft: `4px solid ${colors.primary}`,
            },
          },
        }}
      />

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