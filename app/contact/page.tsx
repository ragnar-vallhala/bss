'use client';

import Layout from "@/app/components/Layout";
import { colors } from "../constants/colors";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzsazBdmUCSivCjm1365zNVktoblYaW_m1ASZd72_gTA2t01URYnr5P0VSqzBMtpLlX/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        alert("✅ Thank you for your message!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Could not submit the form. Please check your network.");
    }
  };

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

          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
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
