import IndiaBranchesMap from "@/app/components/IndiaBranchesMap";
import Head from "next/head";
import Layout from "@/app/components/Layout";
export default function IndiaBranchesPage() {
  return (
    <>
      <Head>
        <title>India Branches | Bharat Sevashram Sangha</title>
      </Head>
      <Layout>
        <main className="py-10 px-4 md:px-16">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            Bharat Sevashram Sangha Branches in India
          </h1>
          <p className="text-center max-w-2xl mx-auto mb-8 text-gray-600">
            Explore the various Bharat Sevashram Sangha centers across India
            actively involved in service, education, healthcare, and
            spirituality.
          </p>
          <IndiaBranchesMap />
        </main>
      </Layout>
    </>
  );
}
