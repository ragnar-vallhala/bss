import Layout from "../components/Layout";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { colors } from "../constants/colors";

const developers = [
  {
    name: "Ashutosh Vishwakarma",
    role: "Lead Developer",
    image: "/dev/ashu.png",
    linkedin: "https://www.linkedin.com/in/ashutosh-vishwakarma-083305257/",
    github: "https://github.com/ragnar-vallhala",
  },
  {
    name: "Nipun Singh",
    role: "Backend Engineer",
    image: "/dev/nipun.png",
    linkedin: "https://www.linkedin.com/in/nipunsingh99",
    github: "https://github.com/nipunsingh27",
  },
  {
    name: "Shubham Kumar",
    role: "Frontend Developer",
    image: "/dev/shubham.png",
    linkedin: "https://www.linkedin.com/in/shubham-kumar-hr/",
    github: "",
  },
  {
    name: "Vibhu Gupta",
    role: "DevOps Engineer",
    image: "/dev/vibhu.png",
    linkedin: "https://www.linkedin.com/in/vibhu-gupta-893008256/",
    github: "",
  },
];


export default function DeveloperPage() {
  return (
    <Layout>
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Meet the Developers
            </h1>
            <div className="w-24 h-1.5 bg-primary mx-auto mb-4 rounded-full"></div>
            <h2 className="text-xl md:text-2xl font-medium" style={{ color: colors.primary }}>
              Builders of the Digital Sangha Platform
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mb-16">
            {developers.map((dev) => (
              <div
                key={dev.name}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
              >
                <div className="relative pt-8 px-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-primary transition-colors duration-300">
                    <Image
                      src={dev.image}
                      alt={dev.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                
                <div className="px-6 pb-8 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {dev.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{dev.role}</p>
                  
                  <div className="flex justify-center space-x-4">
                    {dev.github && (
                      <a
                        href={dev.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors text-gray-700 hover:text-black"
                        aria-label={`${dev.name}'s GitHub`}
                      >
                        <FaGithub className="h-5 w-5" />
                      </a>
                    )}
                    {dev.linkedin && (
                      <a
                        href={dev.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors text-blue-600 hover:text-blue-800"
                        aria-label={`${dev.name}'s LinkedIn`}
                      >
                        <FaLinkedin className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
}