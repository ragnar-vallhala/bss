import Image from "next/image";
import { colors } from "../constants/colors";
import Layout from "../components/Layout";
export default function ActivitiesSection() {
  return (
    <Layout>
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
            Our Activities
          </h1>
          <h2
            className="text-xl md:text-2xl font-semibold text-center mb-12"
            style={{ color: colors.primary }}
          >
            Selfless Service for the Nation & Humanity
          </h2>

          <div className="prose max-w-none text-gray-700 space-y-8">
            <section>
              <h3 style={{ color: colors.primary }}>
                1. Disaster Relief & Emergency Response
              </h3>
              <p>
                Bharat Sevashram Sangha has been a frontline responder in times
                of calamities—natural or man-made. From cyclones, floods, and
                earthquakes to pandemics and refugee crises, the Sangha has
                reached the remotest corners of affected areas, distributing
                food, clothing, medicine, and shelter.
              </p>
              <ul>
                <li>Odisha Super Cyclone (1999)</li>
                <li>Gujarat Earthquake (2001)</li>
                <li>Tsunami (2004)</li>
                <li>Bihar & Assam Floods (regularly)</li>
                <li>COVID-19 Relief Work (2020-22)</li>
                <li>Bangladesh Liberation War (1971) refugee support</li>
              </ul>
            </section>

            <section>
              <h3 style={{ color: colors.primary }}>
                2. Free Healthcare & Medical Services
              </h3>
              <p>
                The Sangha runs a number of charitable hospitals, mobile medical
                units, eye care centers, and organizes regular health camps.
                They serve rural, tribal, and disaster-hit regions, often where
                no medical infrastructure exists.
              </p>
              <ul>
                <li>Free general and specialty medical camps</li>
                <li>Mobile dispensaries in tribal and remote areas</li>
                <li>Blood donation drives & eye donation camps</li>
                <li>Health check-ups during pilgrimages and fairs</li>
              </ul>
            </section>

            <section>
              <h3 style={{ color: colors.primary }}>3. Education for All</h3>
              <p>
                Education is one of BSS's core commitments. The Sangha has set
                up schools, hostels, and coaching centers for poor and tribal
                children, offering free lodging, meals, and quality education.
              </p>
              <ul>
                <li>
                  Hostels for tribal boys and girls in Jharkhand, Assam, Bengal
                </li>
                <li>Free coaching for underprivileged students</li>
                <li>Primary to higher secondary schools</li>
                <li>Training in computer education and technical skills</li>
              </ul>
            </section>

            <section>
              <h3 style={{ color: colors.primary }}>
                4. Pilgrimage Services & Camps
              </h3>
              <p>
                During large-scale religious pilgrimages like **Amarnath
                Yatra**, **Gangasagar Mela**, and **Kumbh Mela**, BSS provides
                **free food, shelter, health care, sanitation, and guidance** to
                lakhs of pilgrims every year.
              </p>
              <ul>
                <li>Amarnath Yatra Seva Camp (Jammu & Kashmir)</li>
                <li>Gangasagar Camp (West Bengal)</li>
                <li>Kumbh Mela Camps (Haridwar, Prayagraj, Nashik)</li>
              </ul>
            </section>

            <section>
              <h3 style={{ color: colors.primary }}>
                5. Tribal & Rural Welfare
              </h3>
              <p>
                The Sangha has dedicated decades to tribal upliftment through
                education, skill-building, hygiene awareness, and social reform.
                These programs aim to integrate tribal communities with
                mainstream development while preserving their cultural identity.
              </p>
            </section>

            <section>
              <h3 style={{ color: colors.primary }}>
                6. National Integration & Defense Training
              </h3>
              <p>
                Inspired by Swami Pranavananda’s vision, the Sangha trains youth
                through its **Rakshadal units**. These are village-level defense
                teams trained in:
              </p>
              <ul>
                <li>Martial arts and physical fitness</li>
                <li>Disaster management and fire safety</li>
                <li>Combating communal violence and riots</li>
              </ul>
            </section>

            <section>
              <h3 style={{ color: colors.primary }}>
                7. Cultural & Spiritual Renaissance
              </h3>
              <p>
                BSS organizes spiritual discourses, satsangs, yoga sessions, and
                festivals to preserve and spread India’s cultural and spiritual
                traditions. They publish books and magazines on Indian
                philosophy, scriptures, and Swami Pranavananda's teachings.
              </p>
              <ul>
                <li>Milan Mandirs as centers of cultural harmony</li>
                <li>Publication of spiritual literature</li>
                <li>Spiritual education for youth</li>
              </ul>
            </section>

            <section>
              <h3 style={{ color: colors.primary }}>
                8. International Outreach
              </h3>
              <p>
                BSS operates in over a dozen countries to serve the Indian
                diaspora and local populations. These centers promote **yoga,
                health camps, humanitarian work, interfaith dialogue, and
                spiritual education**.
              </p>
              <p>
                Countries include: **USA, UK, Canada, Nepal, Guyana, Trinidad,
                Suriname, Fiji**, among others.
              </p>
            </section>

            <section>
              <h3 style={{ color: colors.primary }}>
                9. Environmental Protection
              </h3>
              <p>
                BSS participates in environmental initiatives like tree
                plantation, sanitation drives, clean water access, and spreading
                awareness about climate and sustainability.
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
