import Link from "next/link";
import Image from "next/image";
import { colors } from "../constants/colors";

export default function EducationProgramCard() {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <div className="relative h-64 md:h-[24rem] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/activities/education.jpg"
              alt="Bharat Sevashram Sangha - Education"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Education Program
          </h2>
          <h3
            className="text-xl md:text-2xl font-semibold mb-4"
            style={{ color: colors.primary }}
          >
            Empowering Through Education
          </h3>

          <p className="text-gray-700 mb-3">
            Over 100 schools and training centers across India provide holistic
            education, moral values, and vocational skills. The Sangha supports
            students through scholarships, coaching, physical training, and
            spiritual learning in rural and underserved areas.
          </p>

          <p className="text-gray-800 font-medium italic mb-4">
            Free Stay and Food Provided to Students
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="/activities/education-program"
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-5 rounded-full text-center transition-colors"
            >
              Read More
            </Link>
            <Link
              href="/activities/education-program/register"
              className="bg-[var(--secondary-color)] hover:bg-opacity-90 text-white font-bold py-2 px-5 rounded-full text-center transition-colors"
              style={{ backgroundColor: colors.secondary || "#555" }}
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
