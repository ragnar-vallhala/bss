import Layout from "@/app/components/Layout";
import { colors } from "../../constants/colors";
import Link from "next/link";
import Image from "next/image";



export default function EducationProgram() {
  return (
    <Layout>
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Text Content */}
            <div className="md:w-1/2 order-2 md:order-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Education Program
              </h1>
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: colors.primary }}
              >
                Empowering Through Education
              </h2>

              <div className="prose max-w-none text-gray-700 prose-p:mb-4 prose-li:mb-2">
                <p>
                  The Sangha operates over 100 institutions across India,
                  offering quality formal and non-formal education including
                  primary schools, night schools, and colleges—especially in
                  rural and semi-urban areas. Vocational training programs
                  empower the youth for economic independence.
                </p>

                <p>
                  Emphasis is laid on holistic learning, with moral and
                  spiritual development alongside academics, fostering
                  discipline, dignity of labour, and respect for Indian culture.
                </p>

                <h3>Pranavananda Computer Institute</h3>
                <p>
                  Located in Kolkata, this center offers subsidized training in
                  DOS, HTML, E-Commerce, Internet, Multimedia, and JavaScript.
                  Over 850 students enrolled.
                </p>

                <h3>Scripture Studies</h3>
                <p>
                  A 3-year graduate-level course with free scripture
                  distribution. In 2023, 9000 students from 400 institutions
                  participated in exams via 32 centres.
                </p>

                <h3>Physical Education & Self-Defence</h3>
                <p>
                  Programs in wrestling, boxing, ju-jitsu, yoga, and traditional
                  martial arts are conducted through Milan Mandirs across India.
                </p>

                <h3>Highlights from 2017–2018</h3>
                <p>
                  <strong>Lot No. 8, Kakdwip:</strong>
                </p>
                <ul>
                  <li>Pre-primary & primary school: 243 students</li>
                  <li>Scholarships to 100 poor students</li>
                  <li>Yoga training, student homes, pathology centre</li>
                  <li>
                    Financial aid to families affected by fishing accidents
                  </li>
                </ul>

                <p>
                  <strong>Manmathapur Pranav Mandir, South 24 Parganas:</strong>
                </p>
                <ul>
                  <li>133 textbook sets for Class V–XII</li>
                  <li>Free medical camp for 560 patients</li>
                  <li>Educational support to 9 graduate students</li>
                  <li>35 students awarded “Swami Pranavananda Award”</li>
                  <li>Women empowerment through 88 SHGs with 1470 women</li>
                  <li>
                    Free coaching to 117 girls; karate for 100 girl students
                  </li>
                  <li>
                    21 cultural/spiritual programs; 8500+ people in festival
                    gatherings
                  </li>
                </ul>

                <p>
                  <strong>Pranavananda Vidyamandirs:</strong>
                </p>
                <p>
                  34 schools across Sunderban serve 3400 students with textbooks
                  and notebooks. Focus is on early education in remote areas.
                </p>

                <p>
                  <strong>Kanmari (Sunderban), North 24 Parganas:</strong>
                </p>
                <p>
                  Primary education for 217 students and blankets distributed to
                  300 underprivileged residents.
                </p>

                <p>
                  <strong>Khatra:</strong>
                </p>
                <ul>
                  <li>Primary school with 195 students</li>
                  <li>Textbook bank helping 579 students</li>
                  <li>Computer training for 50 students</li>
                  <li>Hostel, nursing training, infertility care unit</li>
                  <li>Gym training with 112 students</li>
                  <li>Veterinary mobile units treated 6 lakh animals</li>
                  <li>
                    Food, clothing, and essentials to 700+ poor individuals
                  </li>
                </ul>

                <p className="italic font-semibold">
                  “Education is the key to transformation” – The Sangha
                  envisions a future where every child and youth has access to
                  knowledge, values, and opportunity.
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
                <Link
                  href="/activities/education-program/register"
                  style={{
                    backgroundColor: colors.secondary || "#555", // optionally use another color or define one
                    color: "white",
                  }}
                  className="hover:bg-opacity-90 font-bold py-3 px-6 rounded-full text-center transition-colors"
                >
                  Student Registration
                </Link>
              </div>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2 order-1 md:order-2 w-full">
              <div className="relative h-64 w-full md:h-[36rem] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/education/banner.jpg"
                  alt="Bharat Sevashram Sangha - Education Program"
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
