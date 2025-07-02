import Link from "next/link";
import Image from "next/image";
import { colors } from "../../constants/colors";
import Layout from "@/app/components/Layout";
export default function ReliefWork() {
  return (
    <Layout>
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Text Content */}
            <div className="md:w-1/2 order-2 md:order-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Relief Work
              </h1>
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: colors.primary }}
              >
                Disaster Relief and Humanitarian Services
              </h2>

              <div className="prose max-w-none text-gray-700 prose-p:mb-4 prose-li:mb-2">
                <p>
                  The Sangha’s disaster relief efforts began in 1923 during the
                  Bengal Famine. Since then, it has actively responded to
                  several major disasters, including floods, cyclones,
                  earthquakes, and gas tragedies across India.
                </p>

                <h3>Notable Disaster Relief Operations:</h3>
                <ul>
                  <li>West Bengal Floods (1978, 1998, 2001)</li>
                  <li>Bhopal Gas Tragedy (1980)</li>
                  <li>Andhra Pradesh Cyclone (1996)</li>
                  <li>Super Cyclone in Orissa (1999)</li>
                  <li>Bhuj Earthquake (2001)</li>
                  <li>Mumbai & Gujarat Flash Flood (2005)</li>
                  <li>Aeyla, Bihar & Assam Floods, Bulbul cyclone</li>
                </ul>

                <p className="font-semibold">
                  Flood Relief Work in Kerala (2017–2018):
                </p>
                <p>
                  Daily cooked food for 10,000 people for 30 days and
                  distribution of dry rations and clothes in Kozhikode district.
                </p>

                <p className="font-semibold">Gaja & Titli Cyclone Relief:</p>
                <p>
                  Relief distribution to 2000+ families each in Tamil Nadu and
                  Andhra Pradesh—sarees, t-shirts, floor sheets, biscuits, baby
                  food, milk, etc.
                </p>

                <p className="font-semibold">
                  Medical Relief & Garment Distribution:
                </p>
                <p>
                  Medical services during pilgrimages, and distribution of over
                  50,000 garments and 10,000 blankets across India including
                  Haridwar, Jammu, Kolkata, etc.
                </p>

                <p className="font-semibold">Tripura Flood Relief:</p>
                <p>
                  Served over 5000 flood-affected people with essentials and
                  cooked food daily for a month. Provided school supplies and
                  mosquito nets to thousands.
                </p>

                <p className="font-semibold">Bangalore Branch Highlights:</p>
                <ul>
                  <li>Scholarships to 50 needy girl children</li>
                  <li>
                    Daily mid-day meals for 100+ individuals (41,000+ fed)
                  </li>
                  <li>Yoga training for 125 people</li>
                  <li>
                    Ambulance & hearse services, community halls for rituals
                  </li>
                </ul>

                <p className="font-semibold">Relief in Gujarat:</p>
                <ul>
                  <li>
                    <strong>Dediapara:</strong> Distributed 2000+ garments, 295
                    blankets, books to 2600 students, and mobile health services
                    in 42 villages.
                  </li>
                  <li>
                    <strong>Kalol:</strong> Cooked food and blankets to 1000+
                    people, organized summer camps and feeding programs for 3000
                    annually.
                  </li>
                </ul>

                <p className="font-semibold">
                  Panjgrain, Nagrota (Jammu & Kashmir):
                </p>
                <p>
                  Charitable hospital with mobile vans, vocational training
                  school, meditation hall, and a primary school for 150
                  children.
                </p>

                <p className="font-semibold italic">
                  "In Service to Humanity" – Our large network of volunteers and
                  monks helps us deliver prompt, large-scale humanitarian aid
                  across the country.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link
                  href="/donate"
                  style={{
                    backgroundColor: colors.primary,
                    color: "white",
                  }}
                  className="hover:bg-opacity-90 font-bold py-3 px-6 rounded-full text-center transition-colors"
                >
                  Donate Now
                </Link>
              </div>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2 order-1 md:order-2 w-full">
              <div className="relative h-64 w-full md:h-[36rem] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/relief-work/banner.jpg"
                  alt="Relief work by Bharat Sevashram Sangha"
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
