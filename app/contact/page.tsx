import Layout from "@/app/components/Layout";
import { colors } from "../constants/colors";

export default function ContactUs() {
  return (
    <Layout>
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4" style={{ color: colors.primary }}>
            Contact Us
          </h1>

          <p className="text-lg text-gray-700 mb-8">
            Have a question, suggestion, or want to get involved? We&lsquo;d love to hear from you!
          </p>

          <form className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring focus:ring-opacity-50"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90"
              style={{ backgroundColor: colors.primary }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
