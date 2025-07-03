"use client";
import Layout from "../components/Layout";
import { colors } from "../constants/colors";
import Image from "next/image";
import { useState } from "react";

export default function DonationPage() {
  const [donationComplete, setDonationComplete] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    transactionId: "",
    message: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your donation! We'll contact you soon.");
    setDonationComplete(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: colors.primary }}
            >
              Support Our Mission
            </h1>
            <div
              className="w-24 h-1.5 mx-auto mb-4 rounded-full"
              style={{ backgroundColor: colors.primary }}
            ></div>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: colors.dark }}
            >
              Your generous donations help us continue our spiritual and
              charitable work
            </p>
          </div>

          {!donationComplete ? (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Bank Transfer Information */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div
                    className="p-3 rounded-full mr-4"
                    style={{ backgroundColor: `${colors.primary}20` }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke={colors.primary}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                  <h2
                    className="text-xl font-bold"
                    style={{ color: colors.primary }}
                  >
                    Bank Transfer
                  </h2>
                </div>

                <div className="space-y-4" style={{ color: colors.dark }}>
                  <div>
                    <h3
                      className="text-sm font-semibold uppercase tracking-wider"
                      style={{ color: colors.primary }}
                    >
                      Account Name
                    </h3>
                    <p className="text-lg font-medium">
                      Bharat Sevashram Sangha
                    </p>
                  </div>

                  <div>
                    <h3
                      className="text-sm font-semibold uppercase tracking-wider"
                      style={{ color: colors.primary }}
                    >
                      Branch
                    </h3>
                    <p className="text-lg font-medium">Fartabad, Garia</p>
                  </div>

                  <div>
                    <h3
                      className="text-sm font-semibold uppercase tracking-wider"
                      style={{ color: colors.primary }}
                    >
                      Account Number
                    </h3>
                    <p className="text-lg font-mono font-medium">10723720570</p>
                  </div>

                  <div>
                    <h3
                      className="text-sm font-semibold uppercase tracking-wider"
                      style={{ color: colors.primary }}
                    >
                      IFSC Code
                    </h3>
                    <p className="text-lg font-mono font-medium">SBIN0007422</p>
                  </div>

                  <div>
                    <h3
                      className="text-sm font-semibold uppercase tracking-wider"
                      style={{ color: colors.primary }}
                    >
                      Bank Name
                    </h3>
                    <p className="text-lg font-medium">State Bank of India</p>
                  </div>
                </div>
              </div>

              {/* UPI Payment */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div
                    className="p-3 rounded-full mr-4"
                    style={{ backgroundColor: `${colors.primary}20` }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke={colors.primary}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h2
                    className="text-xl font-bold"
                    style={{ color: colors.primary }}
                  >
                    UPI Payment
                  </h2>
                </div>

                <div
                  className="flex flex-col items-center"
                  style={{ color: colors.dark }}
                >
                  <p className="mb-4 text-center">
                    Scan the QR code or use our UPI ID for instant donations
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                    <Image
                      src="/images/upi-qr.png"
                      alt="UPI QR Code"
                      width={180}
                      height={180}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm mb-1" style={{ color: colors.light }}>
                      UPI ID
                    </p>
                    <p className="text-lg font-mono font-medium bg-gray-100 px-3 py-2 rounded">
                      bssgaria@upi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <h2
                className="text-2xl font-bold mb-6 text-center"
                style={{ color: colors.primary }}
              >
                Thank You for Your Donation!
              </h2>
              <p className="mb-6 text-center" style={{ color: colors.dark }}>
                Please help us track your contribution by filling this short
                form
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-1"
                    style={{ color: colors.dark }}
                  >
                    Full Name <span style={{ color: colors.primary }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{
                      backgroundColor: colors.light,
                      color: colors.dark,
                      borderColor: colors.secondary,
                     
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1"
                    style={{ color: colors.dark }}
                  >
                    Email <span style={{ color: colors.primary }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{
                      backgroundColor: colors.light,
                      color: colors.dark,
                      borderColor: colors.secondary,
                     
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="amount"
                    className="block mb-1"
                    style={{ color: colors.dark }}
                  >
                    Donation Amount (₹){" "}
                    <span style={{ color: colors.primary }}>*</span>
                  </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    required
                    value={formData.amount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{
                      backgroundColor: colors.light,
                      color: colors.dark,
                      borderColor: colors.secondary,
                     
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="transactionId"
                    className="block mb-1"
                    style={{ color: colors.dark }}
                  >
                    Transaction/UTR Number{" "}
                    <span style={{ color: colors.primary }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="transactionId"
                    name="transactionId"
                    required
                    value={formData.transactionId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{
                      backgroundColor: colors.light,
                      color: colors.dark,
                      borderColor: colors.secondary,
                     
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1"
                    style={{ color: colors.dark }}
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{
                      backgroundColor: colors.light,
                      color: colors.dark,
                      borderColor: colors.secondary,
                     
                    }}
                  ></textarea>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setDonationComplete(false)}
                    className="px-6 py-2 rounded-lg transition-colors"
                    style={{
                      border: `1px solid ${colors.primary}`,
                      color: colors.dark,
                      backgroundColor: colors.light,
                    }}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-lg transition-colors"
                    style={{
                      backgroundColor: colors.primary,
                      color: colors.light,
                    }}
                  >
                    Submit Details
                  </button>
                </div>
              </form>
            </div>
          )}
          <button
            onClick={() => setDonationComplete(true)}
            className="mt-6 w-full font-bold py-3 px-4 rounded-lg transition-colors"
            style={{ backgroundColor: colors.primary, color: colors.light }}
          >
            I&apos;ve Donated
          </button>
          {/* Tax Benefit Section */}
          <div
            className="mt-12 rounded-xl p-6"
            style={{
              backgroundColor: `${colors.primary}10`,
              border: `1px solid ${colors.primary}20`,
            }}
          >
            <h3
              className="text-xl font-bold mb-3 flex items-center"
              style={{ color: colors.primary }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke={colors.primary}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Tax Benefits
            </h3>
            <p style={{ color: colors.primary }}>
              Donations to Bharat Sevashram Sangha are eligible for tax
              exemption under Section 80G of the Income Tax Act. Please contact
              us for the exemption certificate.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
