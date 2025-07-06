import Link from "next/link";
import Image from "next/image";
import { colors } from "../../constants/colors";
import Layout from "@/app/components/Layout";
export default function HealthcareServices() {
  return (
    <Layout>
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Text Content */}
            <div className="md:w-1/2 order-2 md:order-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Healthcare Services
              </h1>
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: colors.primary }}
              >
                Serving the Sick and Ailing Across India
              </h2>

              <div className="prose max-w-none text-gray-700 prose-p:mb-4 prose-li:mb-2">
                <p>
                  The Sangha runs 46 branches and 300 sub-centres across India
                  that maintain hospitals, mobile clinics, and charitable
                  dispensaries, focusing on rural and under-served areas. Health
                  awareness and disease eradication programs like TB, leprosy,
                  and malaria are regularly conducted.
                </p>

                <h3 className="text-xl font-semibold">
                  Cancer Care Unit, Mumbai
                </h3>
                <p>
                  Offers chemotherapy day-care, consultations, and is expanding
                  to include a full diagnostic center. Over 2000 patients
                  treated last year.
                </p>

                <h3 className="text-xl font-semibold">Seva Niketans</h3>
                <p>
                  3 centers in Mumbai provide free lodging, meals, and
                  counseling for cancer patients and families. Over 6838
                  patients assisted.
                </p>

                <h3 className="text-xl font-semibold">
                  Tuberculosis Treatment
                </h3>
                <p>
                  Free TB treatment camps including X-rays and sputum tests;
                  500+ patients cured.
                </p>

                <h3 className="text-xl font-semibold">
                  Leprosy Control & Rehabilitation
                </h3>
                <p>
                  Work began in 1981 in Jamshedpur. Now includes 4 referral
                  hospitals, rehabilitation units, vocational training, and
                  education for children of leprosy-affected families. Over 350
                  surgeries have been performed free of charge.
                </p>

                <h3 className="text-xl font-semibold">
                  Health Awareness Camps
                </h3>
                <p>
                  Over 6116 students examined. Special tribal clinics benefited
                  3793 patients.
                </p>

                <h3 className="text-xl font-semibold">
                  Sunderban Mobile Healthcare
                </h3>
                <p>
                  Operating in 26 villages with weekly clinics covering
                  pediatrics, gynecology, ENT, and dental. Over 69,339 patients
                  served annually. North & South 24 Parganas served over 36,000
                  patients.
                </p>

                <h3 className="text-xl font-semibold">
                  Healthcare in Gangasagar Islands
                </h3>
                <ul>
                  <li>Mahendraganj: 15,350 patients</li>
                  <li>Lot 8, Kakdwip: 9,865 patients</li>
                  <li>
                    Chhoto Mollakhali, Kalikapur, Kumirmari: 9,893 patients
                  </li>
                  <li>HO Homeopathy clinic: 6,813 patients weekly</li>
                </ul>

                <h3 className="text-xl font-semibold">Eye Care & Camps</h3>
                <p>
                  Free eye surgeries (850+), free spectacles (310+), and regular
                  medical camps in areas like Jabalpur, Bangalore, Burdwan, etc.
                </p>

                <h3 className="text-xl font-semibold">Specialist Clinics</h3>
                <p>
                  Held in Krishnapur, New Town, Bhangar, etc., covering
                  medicine, gynecology, surgery, skin, and eye care.
                </p>

                <h3 className="text-xl font-semibold">
                  Cancer Patients’ Home (Navi Mumbai)
                </h3>
                <p>
                  Assists 9450+ patients with 124 patients and 142 attendants
                  accommodated. Includes bus service to Tata Memorial Hospital
                  and counselling.
                </p>

                <p className="italic font-semibold">
                  “Service to the sick is service to God.” The Sangha remains
                  dedicated to reaching the poorest and most remote with
                  compassion and care.
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
                  src="/images/activities/health.png"
                  alt="Healthcare Services by Bharat Sevashram Sangha"
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
