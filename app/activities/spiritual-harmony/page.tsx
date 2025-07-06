import Layout from "@/app/components/Layout";
import { colors } from "../../constants/colors";
import Image from "next/image";
import Link from "next/link";

export default function SpiritualHarmony() {
  return (
    <Layout>
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="md:w-1/2 order-2 md:order-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Spiritual Harmony
              </h1>
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: colors.primary }}
              >
                Promoting Unity through Vedantic Ideals
              </h2>

              <div className="prose max-w-none text-gray-700 prose-p:mb-4 prose-li:mb-2">
                <h3>Moving Ashrams</h3>
                <p>
                  To spread awareness of Vedantic philosophy and the spiritual life,
                  Bharat Sevashram Sangha formed seven moving Ashrams led by highly
                  educated and spiritually advanced Sanyasins. These groups travel
                  across India, organizing meetings, cultural gatherings, and spiritual
                  conferences.
                </p>
                <p>
                  In 2004-2005, over 265 programs were conducted, engaging more than
                  850,000 people in discussions and practices promoting spiritual and
                  cultural unity.
                </p>

                <h3>Householder Ashrams</h3>
                <p>
                  Inspired by Acharya Srimat Swami Pranavanandaji Maharaj’s vision of
                  an inclusive society, the Sangha established Householder Ashrams to
                  unite individuals across caste, creed, and economic backgrounds. These
                  Ashrams serve as platforms for social reform and spiritual upliftment
                  and now operate in India and abroad.
                </p>

                <h3>Pilgrim Services</h3>
                <p>
                  Since 1924, the Sangha has provided essential services to pilgrims at
                  religious fairs and holy sites, ensuring comfort and safety. These
                  services include free accommodations, medical aid, and spiritual
                  guidance, promoting a peaceful and organized environment.
                </p>

                <h3>Kumbh Mela</h3>
                <p>
                  The Kumbh Mela, derived from the Sanskrit term for &quot;Pot of Nectar&quot;,
                  is the world’s largest pilgrimage, attracting millions of devotees.
                  Held every twelve years at four sacred locations, the Sangha plays a
                  vital role in organizing services, offering spiritual teachings,
                  and supporting pilgrims throughout the event.
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
                  src="/images/activities/spritual.jpg"
                  alt="Spiritual Harmony Bharat Sevashram Sangha"
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