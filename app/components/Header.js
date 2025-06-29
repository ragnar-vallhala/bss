// components/Header.js
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { colors } from '../constants/colors';
import { navLinks } from '../constants/content';
import Donate from './Donate';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`bg-[${colors.primary}] flex items-center justify-between md:px-16 px-4 relative md:min-h-[130px] min-h-[70px]`}
      style={{ backgroundColor: colors.primary }}
    >
      {/* Logo - always visible */}
      <Link href="/" className="flex items-center z-10">
        <img
          src="/images/logo/logo.png"
          alt="Logo"
          className="md:h-20 h-10 w-auto"
        />
      </Link>

      {/* Mobile menu button - right aligned */}
      <button
        className="md:hidden text-white z-10"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop Donate button - right aligned */}
      
      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Navigation - slides in from right on mobile */}
      <nav 
        className={`fixed md:static top-0 right-0 h-full w-3/4 md:w-auto bg-[${colors.primary}] z-30 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
        }`}
        style={{ backgroundColor: colors.primary }}
      >
        <div className="h-full flex flex-col md:flex-row items-center justify-center md:pl-16">
          <ul className="flex flex-col md:flex-row items-center list-none m-0 p-0 gap-6 md:gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white no-underline font-bold text-base uppercase tracking-wider whitespace-nowrap hover:opacity-80 py-2 md:py-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Donate button - centered in menu */}
          <div className="my-8 md:pl-5">
            <Donate />
          </div>
        </div>
      </nav>
    </header>
  );
}