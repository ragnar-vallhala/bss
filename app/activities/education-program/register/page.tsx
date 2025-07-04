"use client";
import Layout from "@/app/components/Layout";
import { colors } from "../../../constants/colors";
import { useState } from "react";
import toast from 'react-hot-toast';

export default function StudentRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    parentName: "",
    parentPhone: "",
    qualification: "",
    course: "",
    experience: "",
    emergencyName: "",
    emergencyPhone: "",
    comments: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = [
    "Vocational Training",
    "Pranavananda Computer Institute",
    "Scripture Studies",
    "Physical Education & Self-Defence",
  ];

  const genders = ["Male", "Female", "Other"];

  const qualifications = [
    "No formal education",
    "Primary School",
    "Secondary School",
    "Higher Secondary",
    "Graduate",
    "Postgraduate",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwW9h1T8WAvWze7K6CuZIWvO8kqtBDHQHPUYZBDUOh8dLJfQWJ_YmVK1eBBFABQLiAfbw/exec",
        {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=UTF-8" },
          body: JSON.stringify(formData),
          redirect: "follow",
        }
      );

      if (response.status == 200) {
        toast.success("✅ Registration Successful!");
        setFormData({
          name: "",
          dob: "",
          gender: "",
          email: "",
          phone: "",
          address: "",
          parentName: "",
          parentPhone: "",
          qualification: "",
          course: "",
          experience: "",
          emergencyName: "",
          emergencyPhone: "",
          comments: "",
        });
        setSubmitted(true);
      } else {
        toast.error("⚠️ Submission failed. Try again later.");
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Could not submit the form. Please check your network.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-white min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Registration Successful
          </h1>
          <p className="text-gray-700 mb-6">
            Thank you for registering for the Education Program. We will contact
            you soon.
          </p>
          <a
            href="/activities/education-program"
            className="text-white bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-6 rounded"
          >
            Back to Education Program
          </a>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12 my-4 px-4 md:px-8 lg:px-16 max-w-3xl mx-auto bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Student Registration
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor="dob" className="block mb-2 font-semibold text-gray-700">
              Date of Birth <span className="text-red-600">*</span>
            </label>
            <input
              id="dob"
              name="dob"
              type="date"
              required
              value={formData.dob}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label htmlFor="gender" className="block mb-2 font-semibold text-gray-700">
              Gender <span className="text-red-600">*</span>
            </label>
            <select
              id="gender"
              name="gender"
              required
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select Gender --</option>
              {genders.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block mb-2 font-semibold text-gray-700">
              Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Permanent Address */}
          <div>
            <label htmlFor="address" className="block mb-2 font-semibold text-gray-700">
              Permanent Address <span className="text-red-600">*</span>
            </label>
            <textarea
              id="address"
              name="address"
              rows={3}
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your permanent address"
            />
          </div>

          {/* Parent/Guardian Name */}
          <div>
            <label htmlFor="parentName" className="block mb-2 font-semibold text-gray-700">
              Parent/Guardian Name <span className="text-red-600">*</span>
            </label>
            <input
              id="parentName"
              name="parentName"
              type="text"
              required
              value={formData.parentName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter parent or guardian name"
            />
          </div>

          {/* Parent/Guardian Phone */}
          <div>
            <label htmlFor="parentPhone" className="block mb-2 font-semibold text-gray-700">
              Parent/Guardian Contact Number <span className="text-red-600">*</span>
            </label>
            <input
              id="parentPhone"
              name="parentPhone"
              type="tel"
              required
              value={formData.parentPhone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter parent or guardian phone number"
            />
          </div>

          {/* Educational Qualification */}
          <div>
            <label htmlFor="qualification" className="block mb-2 font-semibold text-gray-700">
              Educational Qualification <span className="text-red-600">*</span>
            </label>
            <select
              id="qualification"
              name="qualification"
              required
              value={formData.qualification}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select Qualification --</option>
              {qualifications.map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </select>
          </div>

          {/* Course Interested In */}
          <div>
            <label htmlFor="course" className="block mb-2 font-semibold text-gray-700">
              Select Course <span className="text-red-600">*</span>
            </label>
            <select
              id="course"
              name="course"
              required
              value={formData.course}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                -- Select a course --
              </option>
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          {/* Previous Experience */}
          <div>
            <label htmlFor="experience" className="block mb-2 font-semibold text-gray-700">
              Previous Experience (if any)
            </label>
            <textarea
              id="experience"
              name="experience"
              rows={3}
              value={formData.experience}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe any relevant previous experience"
            />
          </div>

          {/* Emergency Contact Name */}
          <div>
            <label htmlFor="emergencyName" className="block mb-2 font-semibold text-gray-700">
              Emergency Contact Name <span className="text-red-600">*</span>
            </label>
            <input
              id="emergencyName"
              name="emergencyName"
              type="text"
              required
              value={formData.emergencyName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter emergency contact name"
            />
          </div>

          {/* Emergency Contact Phone */}
          <div>
            <label htmlFor="emergencyPhone" className="block mb-2 font-semibold text-gray-700">
              Emergency Contact Phone <span className="text-red-600">*</span>
            </label>
            <input
              id="emergencyPhone"
              name="emergencyPhone"
              type="tel"
              required
              value={formData.emergencyPhone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter emergency contact phone number"
            />
          </div>

          {/* Additional Comments */}
          <div>
            <label htmlFor="comments" className="block mb-2 font-semibold text-gray-700">
              Additional Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              rows={3}
              value={formData.comments}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Any additional information you want to provide"
            />
          </div>

          <button
            type="submit"
            style={{ backgroundColor: colors.primary }}
            className={`text-white font-bold py-3 px-6 rounded w-full hover:bg-opacity-90 transition-colors flex items-center justify-center ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
            disabled={isSubmitting}
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
                Processing...
              </>
            ) : (
              "Register"
            )}
          </button>
        </form>
      </section>
    </Layout>
  );
}