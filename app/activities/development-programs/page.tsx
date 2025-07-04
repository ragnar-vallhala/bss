import Layout from "@/app/components/Layout";
import { colors } from "../../constants/colors";
import Link from "next/link";


export default function DevelopmentPrograms() {
  return (
    <Layout>
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary }}>
              Rural Development Programs
            </h1>
            <p className="text-gray-600 text-lg">
              Bharat Sevashram Sangha’s extensive rural development work in the Sunderbans is a model of sustainable community empowerment, combining vocational training, healthcare, primary education, and SHG-based income generation.
            </p>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 style={{ color: colors.primary }}>Self Help Groups (SHGs) & Income Generation</h2>
            <p>
              The Sangha provided financial assistance to 298 group members of 42 SHGs across villages in Mograhat-11 Block and 130 group members of 32 SHGs in Sagar Block. Initiatives included:
            </p>
            <ul>
              <li>Guava and vegetable gardening</li>
              <li>Hogla planting and mat making</li>
              <li>Poultry farming, fishery, betel vine cultivation</li>
              <li>Small businesses like grocery shops and photo frame binding</li>
              <li>Training and financial assistance for vermi-compost organic manure production</li>
            </ul>

            <h2 style={{ color: colors.primary }}>Support to Agriculture</h2>
            <p>
              Financial and technical support is provided for:
            </p>
            <ul>
              <li>Paddy production via the System of Rice Intensification</li>
              <li>Betel Vine infrastructure</li>
              <li>Organic vegetable farming</li>
            </ul>

            <h2 style={{ color: colors.primary }}>Primary Schools for the Weaker Section</h2>
            <p>
              The Sangha established 5 Pranavananda Vidyamandir primary schools in remote Sunderban villages:
            </p>
            <ul>
              <li>Lot No. 8 (Kakdip)</li>
              <li>Batiswar (Mathurapur)</li>
              <li>Manmathapur (Kakdip)</li>
              <li>Daria (Canning)</li>
              <li>Bansberia</li>
            </ul>
            <p>
              In addition to free education, students receive uniforms, books, notebooks, and tiffin.
            </p>

            <h2 style={{ color: colors.primary }}>Mobile Health Care Services</h2>
            <p>
              For over 13 years, the Sangha’s mobile medical units have served 26 remote villages, including:
            </p>
            <ul>
              <li>Andulia, Pranab Pally, Garaguri, Madhyamgram (North 24 Parganas)</li>
              <li>Hotar, Manmathapur (South 24 Parganas)</li>
              <li>Gangasagar Islands: 2816 patients treated at Mahendraganj unit</li>
              <li>Lot No. 8 Centre (Kakdip): 8000 patients treated</li>
            </ul>
            <p>
              A total of 31,105 patients benefitted last year through these mobile initiatives.
            </p>

            <div className="mt-8">
              <Link
                href="/donate"
                className="inline-block bg-primary hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-full transition-colors"
                style={{ backgroundColor: colors.primary }}
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
