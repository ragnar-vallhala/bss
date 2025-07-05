"use client";

import Layout from "@/app/components/Layout";
import { colors } from "../constants/colors";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Add loading state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // Changed type to FormEvent
    e.preventDefault();
    setIsSubmitting(true); // Set loading to true when submitting
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzsazBdmUCSivCjm1365zNVktoblYaW_m1ASZd72_gTA2t01URYnr5P0VSqzBMtpLlX/exec",
        {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=UTF-8" },
          body: JSON.stringify(formData),
          redirect: "follow",
        }
      );
      const result = await response.json();
      console.log("Contact result", result);

      if (result.status == "success") {
        const mail = {
          to: formData.email,
          subject: "Thank you for contacting BSS Garia!",
          message: `Hi ${formData.name},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nWarm regards,\nBSS Garia`,
        };

        const res = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(mail),
        });
        // const data = await res.json();
        console.log(res);

        toast.success("✅ Thank you for your message!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("⚠️ Submission failed. Try again later.");
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Could not submit the form. Please check your network.");
    } finally {
      setIsSubmitting(false); // Set loading to false when done
    }
  };

  return (
    <Layout>
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ color: colors.primary }}
          >
            Contact Us
          </h1>

          <p className="text-lg text-gray-700 mb-8">
            Have a question, suggestion, or want to get involved? We&lsquo;d
            love to hear from you!
          </p>

          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
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
              disabled={isSubmitting} // Disable button when submitting
              className={`bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 flex items-center justify-center ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              }`}
              style={{ backgroundColor: colors.primary }}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
