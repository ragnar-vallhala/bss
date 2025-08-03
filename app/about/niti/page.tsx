import React from 'react';
import Layout from "@/app/components/Layout";
import { colors } from "../../constants/colors";

const NitiAayogRegistration = () => {
  return (
    <Layout>
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-12">
            {/* Header Section */}
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Registration with NITI Aayog
              </h1>
              <h2 
                className="text-2xl md:text-3xl font-bold"
                style={{ color: colors.primary }}
              >
                Bharat Sevashram Sangha Kolkata
              </h2>
            </div>

            {/* Registration Details Card */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4" style={{ color: colors.primary }}>
                Registration Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <DetailCardItem label="Registered With" value="Registrar Societies" />
                <DetailCardItem label="Type of NGO" value="Registered Societies (Non-Government)" />
                <DetailCardItem label="Registration No" value="5679/61 of 1927-28" />
                <DetailCardItem label="Copy of Registration Certificate" value="Available" />
                <DetailCardItem label="Copy of Pan Card" value="Available" />
                <DetailCardItem label="Act Name" value="Societies Registration Act XXI of 1860" />
                <DetailCardItem label="City of Registration" value="Kolkata" />
                <DetailCardItem label="State of Registration" value="West Bengal" />
                <DetailCardItem label="Date of Registration" value="02-06-1927" />
              </div>
            </div>

            {/* Members Section */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4" style={{ color: colors.primary }}>
                Members
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 border text-left font-medium text-gray-700">Name</th>
                      <th className="py-3 px-4 border text-left font-medium text-gray-700">Designation</th>
                      <th className="py-3 px-4 border text-left font-medium text-gray-700">PAN/AADHAR</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow name="Swami Madhavananda" designation="President" pan="Available" />
                    <TableRow name="Swami Biswatmananda" designation="General Secretary" pan="Available" />
                    <TableRow name="Swami Girishananda" designation="Treasurer" pan="Available" />
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Issues Section */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4" style={{ color: colors.primary }}>
                Sector/Key Issues
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800">Key Issues:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Art & Culture", "Children", "Disaster Management", "Education & Literacy", 
                      "Health & Family Welfare", "Housing", "Information & Communication Technology", 
                      "Tribal Affairs", "Vocational Training", "Youth Affairs"].map((item) => (
                      <span key={item} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800">Operational Area – State:</h4>
                  <p className="mt-1 text-gray-700">WEST BENGAL</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800">Operational Area – District:</h4>
                  <p className="mt-1 text-gray-700">Kolkata, South Twenty Four Parganas</p>
                </div>
              </div>
            </div>

            {/* FCRA Section */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4" style={{ color: colors.primary }}>
                FCRA Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DetailCardItem label="FCRA" value="Available" />
                <DetailCardItem label="FCRA Registration No" value="147120536" />
              </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4" style={{ color: colors.primary }}>
                Details of Achievements
              </h3>
              <p className="text-gray-700 italic"><a href="https://ngodarpan.gov.in/index.php/home/statewise_ngo/8070/19/12?per_page=100" target="_blank">https://ngodarpan.gov.in/index.php/home/statewise_ngo/8070/19/12?per_page=100</a></p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const DetailCardItem = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-white p-3 rounded border border-gray-200">
    <span className="block text-sm font-medium text-gray-500">{label}</span>
    <span className="block mt-1 text-gray-800">{value}</span>
  </div>
);

const TableRow = ({ name, designation, pan }: { name: string; designation: string; pan: string }) => (
  <tr className="hover:bg-gray-50 transition-colors">
    <td className="py-3 px-4 border text-gray-700">{name}</td>
    <td className="py-3 px-4 border text-gray-700">{designation}</td>
    <td className="py-3 px-4 border text-gray-700">{pan}</td>
  </tr>
);

export default NitiAayogRegistration;