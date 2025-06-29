// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2a5f9e] text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branches Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Bharat Sevashram Sangha</h3>
            <h4 className="text-lg font-semibold mb-2">Branches in India:</h4>
            <p className="text-sm mb-4">
              Vrindavan, Gaya, Puri, Allahabad, Vrindavan, Haridwar, Vrindavan, Kedarnath, 
              Kurukshetra, Gorakhpur, New Delhi, Nainital, Mumbai, Hyderabad, Surat, Dwarka, 
              Ahmedabad, Jamshedpur, Guwahati, Shillong, Rameswaram, Kanyakumari, Chennai, 
              Bengaluru, Jabalpur, Varanasi, Port Blair, Nabadwip, Gangasagar, Tarapith (WB), 
              Raipur (Chhattisgarh), Amarkantak (M.P.)
            </p>
            <h4 className="text-lg font-semibold mb-2">Worldwide Branches:</h4>
            <p className="text-sm">
              Bulgaria, Madangir, Khulna, Ashoknagar, Nagpur, Dhaka (Bangladesh), 
              London (UK), New York, New Jersey (USA), Toronto (Canada), 
              Sofia & Plovdiv (Bulgaria), Trinidad & Tobago, Fiji, Nepal
            </p>
            <Link href="https://basemashram.org" className="inline-block mt-4 text-white hover:underline">
              Find all branches &gt; basemashram.org
            </Link>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Amarnath Yatra</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Mata Vaishno Devi Yatra</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Swami Pranavananda Vidyaniketan</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Charitable Dispensary</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Guest House</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Relief Work</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Mobile Medical Unit</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Langar Seva</span>
              </li>
            </ul>
          </div>

          {/* Contacts Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contacts</h4>
            <address className="not-italic">
              <p className="font-semibold mb-2">Bharat Sevashram Sangha</p>
              <p className="mb-1">NH-44, Bye Pass Road, Paloura,</p>
              <p className="mb-1">Jammu-181221</p>
              <p className="mb-1">Near ITI and Polytechnic</p>
              <p className="mt-4 mb-1">+91-8385086767</p>
              <p className="mb-4">+91-9149705497</p>
              <a href="mailto:bharatsevashramjammu@gmail.com" className="hover:underline">
                bharatsevashramjammu@gmail.com
              </a>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p>Bharat Sevashram Sangha, Jammu © {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}