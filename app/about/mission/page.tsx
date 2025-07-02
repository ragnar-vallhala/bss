import Image from "next/image";
import { colors } from "../../constants/colors";
import Layout from "@/app/components/Layout";
export default function OurHistory() {
  return (
    <Layout>
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="md:w-1/2 order-2 md:order-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Mission
              </h1>
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: colors.primary }}
              >
                Bharat Sevashram Mission & Service to Nation
              </h2>

              <div className="prose max-w-none text-gray-600 mb-8">
                <p>
                  Bharat Sevashram Sangha (BSS) is a spiritual brotherhood of
                  Hindu monks and dedicated volunteer workers, founded in 1917
                  by Acharya Srimat Swami Pranavananda Maharaj. The Sangha is
                  committed to the service and upliftment of the nation through
                  moral and spiritual education, healthcare, disaster relief,
                  and empowerment of marginalized communities.
                </p>

                <p>
                  At the age of 17, Acharya Pranavananda undertook intense
                  sadhana under Baba Gambhirnathji of the Natha Sampradaya. He
                  was initiated into monastic life in 1924 at the age of 28. His
                  vision led to the creation of “Milan Mandirs,” centers of
                  spiritual awakening and social reform that now number over 500
                  across the globe.
                </p>

                <p>
                  During the Bengal famine in the 1920s, Acharya led relief
                  efforts with 500 students, going door to door to collect
                  essentials for those in need. He also formed the "Rakshadal" —
                  local village defense forces to protect communities from
                  communal violence.
                </p>

                <p>
                  Monks of the Sangha receive training in martial arts, fire
                  fighting, disaster management, and riot control to ensure
                  effective physical and mental preparedness. Disaster relief
                  remains a cornerstone of the Sangha’s mission, directly
                  inspired by the example of its founder.
                </p>

                <p>
                  Today, BSS is active in several countries including the USA,
                  UK, Canada, Nepal, Fiji, Guyana, Trinidad, and Suriname — with
                  Guyana alone producing over 15 monks. It also holds
                  consultative status with the United Nations Economic and
                  Social Council.
                </p>

                <p>
                  The teachings of Acharya Pranavananda continue to inspire
                  national pride, spiritual awakening, and service to humanity.
                  Even during the British era, the Sangha played a vital role in
                  feeding the hungry, educating the ignorant, and reviving
                  cultural identity. It carries forward this legacy of
                  compassionate service and spiritual upliftment to this day.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="md:w-1/2 order-1 md:order-2 w-full">
              <div className="relative h-64 w-full md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/history/history.png"
                  alt="Historical roots of Bharat Sevashram Sangha"
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
    </Layout>
  );
}
