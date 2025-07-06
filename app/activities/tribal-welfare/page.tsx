import Layout from "@/app/components/Layout";
import { colors } from "../../constants/colors";
import Image from "next/image";
import Link from "next/link";

export default function TribalWelfare() {
  return (
    <Layout>
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="md:w-1/2 order-2 md:order-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Tribal Welfare
              </h1>
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: colors.primary }}
              >
                Empowering Tribal Communities Across India
              </h2>

              <div className="prose max-w-none text-gray-700 prose-p:mb-4 prose-li:mb-2">
                <p>
                  The Tribal Welfare Program by Bharat Sevashram Sangha covers healthcare,
                  education, income generation, and housing for tribal communities in
                  Jharkhand, Odisha, West Bengal, and Gujarat. These initiatives are
                  designed to foster self-reliance and inclusion in mainstream society.
                </p>

                <h3>Healthcare</h3>
                <p>
                  Multi-specialty free hospitals, mobile dispensaries, and awareness
                  campaigns reach thousands in remote areas. Mobile clinics under the
                  Government&apos;s Grant-in-Aid Program serve 200,000 people in 64 locations.
                </p>

                <h3>Elderly & Orphan Care</h3>
                <p>
                  Care for 60 elderly individuals, 45 sponsored by Helpage India, includes
                  food, healthcare, housing, and clothing.
                </p>

                <h3>Education</h3>
                <p>
                  17 day-schools serve 1557 tribal students with free meals, uniforms,
                  and books. Residential schools for boys and girls emphasize
                  character-building, while computer education centers support modern
                  skills.
                </p>

                <h3>Income Generation</h3>
                <p>
                  Vocational training in weaving, tailoring, carpentry, and handicrafts
                  has empowered hundreds. Agro-farming and horticulture projects help
                  maximize yields and sustainability.
                </p>

                <h3>Home Construction</h3>
                <p>
                  Cement houses with basic amenities replace makeshift shelters,
                  improving safety and hygiene for tribal families.
                </p>

                <h3>Highlights from 2017–2018</h3>
                <ul>
                  <li>Over 10 residential and non-residential schools serving thousands of students</li>
                  <li>Leprosy hospitals, dispensaries, and eye care centers in Jamshedpur & surrounding blocks</li>
                  <li>Handloom and handicraft training for hundreds of tribals</li>
                  <li>Mobile medical units treating 5000+ patients annually per region</li>
                  <li>Specialized cancer detection and eye operation camps</li>
                  <li>New hostels and vocational centers for tribal girls and women</li>
                  <li>Computer training for 300+ tribal youths</li>
                </ul>

                <p>
                  These projects reflect the Sangha’s commitment to uplifting tribal
                  communities through sustainable development, education, and health
                  empowerment.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link
                  href="/donate"
                  style={{ backgroundColor: colors.primary, color: "white" }}
                  className="hover:bg-opacity-90 font-bold py-3 px-6 rounded-full text-center transition-colors"
                >
                  Donate Now
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 order-1 md:order-2 w-full">
              <div className="relative h-64 w-full md:h-[36rem] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/activities/tribal.jpg"
                  alt="Bharat Sevashram Sangha - Tribal Welfare"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
