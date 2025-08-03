// components/Header.js
'use client';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { colors } from '../constants/colors';
import { navLinks } from '../constants/content';
import Donate from './Donate';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const dropdownCloseTimeout = useRef(null);

  // Sample dropdown items structure
  const dropdownItems = {
    '/about': [
      { name: 'Our History', href: '/about/history' },
      { name: 'Our Mission', href: '/about/mission' },
      { name: 'NITI Ayog Registration', href: '/about/niti' },
    ],
    '/branches': [
      { name: 'India Branches', href: '/branches/india' },
      { name: 'International Branches', href: '/branches/international' }
    ],
    '/activities': [
      { name: 'Relief Work', href: '/activities/relief-work' },
      { name: 'Healthcare Services', href: '/activities/healthcare-services' },
      { name: 'Education Program', href: '/activities/education-program' },
      { name: 'Tribal Welfare', href: '/activities/tribal-welfare' },
      { name: 'Spiritual Harmony', href: '/activities/spiritual-harmony' },
      { name: 'Development Programs', href: '/activities/development-programs' },
    ]
  };

  const toggleDropdown = (linkName) => {
    setActiveDropdown(activeDropdown === linkName ? null : linkName);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="relative">
      {/* Top Contact Bar */}
      <div className="bg-gray-800 text-white text-xs md:text-sm py-2 px-4 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="text-center md:text-left">
            Bharat Sevashram Sangha, 58 Pranavananda Road, Garia, South 24 Parganas, Kolkata-700084
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91-9434012856, +91-9596943769</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>contact@bssgaria.org</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div
        className="flex items-center justify-between md:px-16 px-4 relative md:min-h-[100px] min-h-[70px]"
        style={{ backgroundColor: colors.primary }}
      >
        {/* Logo - always visible */}
        <Link href="/" className="flex items-center z-10">
          <img
            src="/images/logo/logo.png"
            alt="Logo"
            className="md:h-20 h-10 w-auto object-contain"
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

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={() => {
              setIsMenuOpen(false);
              setActiveDropdown(null);
            }}
          />
        )}

        {/* Navigation - slides in from right on mobile */}
        <nav
          className={`fixed md:static top-[45px] md:top-0 right-0 h-full md:h-auto w-3/4 md:w-auto z-30 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
            }`}
          style={{ backgroundColor: colors.primary }}
          ref={dropdownRef}
        >
          <div className="h-full flex flex-col md:flex-row items-center justify-center md:pl-16">
            <ul className="flex flex-col md:flex-row items-center list-none m-0 p-0 gap-6 md:gap-8">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => {
                    if (window.innerWidth > 768) {
                      clearTimeout(dropdownCloseTimeout.current);
                      setActiveDropdown(link.name);
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth > 768) {
                      dropdownCloseTimeout.current = setTimeout(() => {
                        setActiveDropdown(null);
                      }, 200); // adjust delay as needed
                    }
                  }}
                >
                  {dropdownItems[link.href] ? (
                    <div>
                      <button
                        className="text-white no-underline font-bold text-base uppercase tracking-wider whitespace-nowrap hover:opacity-80 py-2 md:py-0 flex items-center"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDropdown(link.name);
                        }}
                      >
                        {link.name}
                        <svg
                          className="w-4 h-4 ml-1 transition-transform"
                          style={{ transform: activeDropdown === link.name ? 'rotate(180deg)' : 'rotate(0deg)' }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {(activeDropdown === link.name) && (
                        <div
                          className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg ${isMenuOpen ? 'static mt-0 ml-4' : ''
                            }`}
                          style={{ backgroundColor: colors.primary }}
                          onClick={(e) => e.stopPropagation()}
                          onMouseEnter={() => clearTimeout(dropdownCloseTimeout.current)}
                          onMouseLeave={() => {
                            dropdownCloseTimeout.current = setTimeout(() => {
                              setActiveDropdown(null);
                            }, 200);
                          }}
                        >
                          <div className="py-1">
                            {dropdownItems[link.href].map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className={`block px-4 py-2 text-white hover:bg-opacity-80`}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setActiveDropdown(null);
                                }}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white no-underline font-bold text-base uppercase tracking-wider whitespace-nowrap hover:opacity-80 py-2 md:py-0"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Donate button - centered in menu */}
            <div className="my-8 md:pl-5">
              <Donate />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}