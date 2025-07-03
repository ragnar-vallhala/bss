// components/Welcome.js
import Link from 'next/link';
import Image from 'next/image';
import { colors } from '../constants/colors';

export default function Welcome() {
    return (
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                    {/* Text Content - order changes on mobile */}
                    <div className="md:w-1/2 order-2 md:order-1">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                            Welcome to
                        </h1>
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-6"
                            style={{ color: colors.primary }}
                        >
                            Bharat Sevashram Sangha
                        </h2>

                        <div className="prose max-w-none text-gray-600 mb-8">
                            <p>
                                The Bharat Sevashram Sangha founded by Srimat Swami Pranavanandaji Maharaj, the great illustrious patriot and philanthropist in the year of 1917. The headquaters of the Sangha is situated at 211, Rashbehari Avenue, Kolkata-700019, West Bengal. The Sangha is a philanthropic, charitable registered organisation worldwide on service to the humanity and service to the afflicted people for 100 years. Bharat Sevashram Sangha is a non-profit organisation and depends entirely on the support and generosity of Individuals, Foundation and Corporate Houses. The Sangha is purely a non-sectarian, non-communal and non-political character, irrespective of their caste and creed.</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/about/history"
                                style={{
                                    backgroundColor: colors.primary,
                                    color: 'white'
                                }}
                                className="hover:bg-opacity-90 font-bold py-3 px-6 rounded-full text-center transition-colors"
                            >
                                Read More
                            </Link>
                        </div>

                        <div className="mt-8 pt-4 border-t border-gray-200">
                            <p className="text-gray-700 font-semibold">
                                <span style={{ color: colors.primary }}>Founder:</span> Acharya Sirimat Swami Panawanandaji Maharaj
                            </p>
                        </div>
                    </div>

                    {/* Image - comes first on mobile */}
                    <div className="md:w-1/2 order-1 md:order-2 w-full">
                        <div className="relative h-64 w-full md:h-96 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/images/welcome/image.png"
                                alt="Founder of Bharat Sevashram Sangha"
                                fill
                                className="object-contain md:object-contain"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}