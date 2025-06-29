// components/Activities.js
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const activities = [
    {
        id: 1,
        title: "Amarnath Yatra",
        description: "During Amarnath Yatra a Camp maintained every year at chandanwari to provide medical services, distributing warm clothes and other accessories.",
        image: "/images/activities/1.jpeg",
        link: "/amarnathyatra"
    },
    {
        id: 2,
        title: "Educational",
        description: "To provide better education to the backward classes the institution Swami Pranavananda Vidyamandir is established.",
        image: "/images/activities/2.jpeg",
        link: "/school"
    },
    {
        id: 3,
        title: "Healthcare",
        description: "The Sangha running a charitable dispensary and mobile medical unit to poor people.",
        image: "/images/activities/3.jpeg",
        link: "/mobile"
    },
    {
        id: 4,
        title: "Relief Work",
        description: "The Sangha is ready to provide relief services any time anywhere in Jammu & Kashmir.",
        image: "/images/activities/4.jpeg",
        link: "/reliefwork"
    }
];

export default function Activities() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    useEffect(() => {
        let interval;
        if (autoPlay) {
            interval = setInterval(() => {
                setCurrentSlide(prev => (prev + 1) % activities.length);
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
        setCurrentSlide(prev => (prev + 1) % activities.length);
        setAutoPlay(false);
        setTimeout(() => setAutoPlay(true), 10000);
    };

    const goToPrev = () => {
        setCurrentSlide(prev => (prev - 1 + activities.length) % activities.length);
        setAutoPlay(false);
        setTimeout(() => setAutoPlay(true), 10000);
    };

    return (
        <section className="bg-white">
            {/* Top Content with Background Image - Lighter version */}
            <div className="py-12 px-4 md:px-8 lg:px-16 bg-[#f8fafc]">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2a5f9e] mb-6">
                        Activities in BSS Jammu Branch
                    </h2>
                    <div className="prose-lg text-gray-600 max-w-4xl mx-auto">
                        <p>
                            Swami Satyamitranandaji Maharaj first visited the Jammu and Kashmir in 2004 and started free medical camp during Shri Amarnath Yatra at Chandanwari, Pahalgam for the yatra
                            pilgrims, defence personnel, Horsemen, Gujjar, Bakarwal since 2007 and continues to till date.
                        </p>
                        <p>
                            Swamiji found a suitable place for setting up a branch for the rural development and the Jammu branch established in 2012 at village Panjgrain surrounded by many villages.
                            The Sangha fully devoted to running various Socio-Cultural-Economic activities such as Charitable Dispensary, Mobile Medical Unit, Ambulance Services,
                            Junior School, Student&lsquo;s Scholarship Programmes, Clothes distribution for the needy, Yatri Niwas (Guest house) for the pilgrims of Shri Amarnath Yatra and Mata Vaishno Devi shrines and others.
                        </p>
                    </div>
                </div>
            </div>

            {/* Activities Carousel - Lighter version */}
            <div className="py-12 px-4 md:px-8 lg:px-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="relative">
                        {/* Carousel */}
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {activities.map((activity) => (
                                    <div key={activity.id} className="w-full flex-shrink-0 px-4">
                                        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                                            <div className="relative h-64 md:h-80">
                                                <Image
                                                    src={activity.image}
                                                    alt={activity.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6">
                                                    <Link href={activity.link} className="inline-flex items-center text-white hover:text-blue-200 transition-colors">
                                                        <span className="mr-2 font-semibold">View Details</span>
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-xl md:text-2xl font-bold text-[#2a5f9e] mb-3">
                                                    {activity.title}
                                                </h3>
                                                <p className="text-gray-600">{activity.description}</p>
                                            </div>
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
                        {activities.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-[#2a5f9e] w-6' : 'bg-gray-300'}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}