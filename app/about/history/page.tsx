import Image from "next/image";
import { colors } from "../../constants/colors";
import Layout from "@/app/components/Layout";
export default function HistorySection() {
  return (
    <Layout>
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="md:w-1/2 order-2 md:order-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Historical Journey
              </h1>
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: colors.primary }}
              >
                The Legacy of Bharat Sevashram Sangha
              </h2>

              <div className="prose max-w-none text-gray-600 mb-8">
                <p>
                  The Bharat Sevashram Sangha (BSS) was founded in 1917
                  by Acharya Srimat Swami Pranavananda Maharaj, a visionary
                  spiritual leader and patriot. In a time when India was under
                  colonial rule, Acharya Maharaj established the Sangha with the
                  twin objectives of spiritual awakening and social service.
                </p>

                <p>
                  Inspired by the ideals of selfless service and sacrifice, he
                  united a group of dedicated monks and volunteers to serve the
                  suffering humanity. The Sangha was envisioned as a
                  non-sectarian spiritual and humanitarian movement focused on
                  uplifting the masses, particularly the poor, sick, and
                  disaster-struck.
                </p>

                <p>
                  Acharya Maharaj’s early years were marked by deep spiritual
                  practice. He received intense yogic training under Baba
                  Gambhirnathji of the Natha sect. By the time he took
                  monastic vows at the age of 28, he had already envisioned the
                  Sangha as a catalyst for India’s cultural resurgence and moral
                  regeneration.
                </p>

                <p>
                  During the 1920s famine in Bengal, the Sangha, under his
                  leadership, provided massive relief. Acharya Maharaj organized
                  volunteers and students to collect food and distribute aid in
                  affected regions. This event marked the beginning of the
                  Sangha’s long-standing tradition of disaster relief and
                  community support.
                </p>

                <p>
                  Over the decades, BSS has expanded its footprint across India
                  and globally. It has actively participated in freedom
                  movements, tribal welfare, education,
                  healthcare, and rehabilitation. Despite its monastic
                  roots, the Sangha has always maintained a practical approach
                  to nation-building through action and sacrifice.
                </p>

                <p>
                  Today, the Bharat Sevashram Sangha continues to uphold the
                  values set forth by its founder—selfless service, spiritual
                  discipline, and social commitment. It has more than 500
                  branches worldwide and is recognized as a key player in
                  humanitarian relief, education, and cultural preservation.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="md:w-1/2 order-1 md:order-2 w-full">
              <div className="relative h-64 w-full md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/welcome/welcome.png"
                  alt="Swami Pranavananda Maharaj - Founder"
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
