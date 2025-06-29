// components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2a5f9e] mb-8 text-center">
          Ongoing Activities/Projects
        </h1>
        
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          All activities, events are organized and maintained by Bharat Sevashram Sangha, Jammu Branch since 2007.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-[#2a5f9e] text-white text-sm font-bold px-3 py-1 rounded-full">1ST APRIL 2024</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Panigrain Mobile Medical Unit 2024</h2>
              <p className="text-gray-600 mb-4 flex items-start">
                <svg className="w-5 h-5 text-[#2a5f9e] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Preigrain, Nugots, Jammu</span>
              </p>
              <p className="text-gray-600">
                This mobile medical unit runs 300 days yearly for the economically weaker sections in the remotest rural villages in Jammu. Free Health service with Medicine, Basic tests and Ambulance are available to the patients.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-[#2a5f9e] text-white text-sm font-bold px-3 py-1 rounded-full">DEC 2021</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Construction of Higher Secondary School building 2024</h2>
              <p className="text-gray-600 mb-4 flex items-start">
                <svg className="w-5 h-5 text-[#2a5f9e] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Panigrain, Nugots, Jammu</span>
              </p>
              <p className="text-gray-600">
                Expansion of Middle School to a Higher Secondary School with SBIL development training facilities for 2000 students.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-[#2a5f9e] text-white text-sm font-bold px-3 py-1 rounded-full">JULY 2024</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Sri Amarnath Yatra 2024</h2>
              <p className="text-gray-600 mb-4 flex items-start">
                <svg className="w-5 h-5 text-[#2a5f9e] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Comadamant, Pahalgam, Kashmir</span>
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">GADCA - 6:00 PM</span>
              </p>
              <p className="text-gray-600">
                Health Check Up, Free Medicine, Yatra Guide etc. will be available to all Amarnath Pilgrims.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#2a5f9e] mb-6 text-center">Our Impact in Numbers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-[#2a5f9e] mb-2">565,000+</p>
              <p className="text-gray-600">Pilgrims served during Sri Amarnath Yatra</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-[#2a5f9e] mb-2">92,000+</p>
              <p className="text-gray-600">Medical Camp since 2007</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-[#2a5f9e] mb-2">120,000+</p>
              <p className="text-gray-600">Patients served by Mobile Medical Unit</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-[#2a5f9e] mb-2">250+</p>
              <p className="text-gray-600">Students served annually</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-[#2a5f9e] mb-2">300+</p>
              <p className="text-gray-600">Days of mobile medical service yearly</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-[#2a5f9e] mb-2">2,000+</p>
              <p className="text-gray-600">School capacity after expansion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;