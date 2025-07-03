// components/Footer.js
import Link from 'next/link';
import { colors } from '../constants/colors';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: colors.primary,
      color: colors.light,
      padding: '3rem 1rem'
    }}>
      <div style={{
        maxWidth: '72rem',
        margin: '0 auto'
      }}>
        <div className="grid gap-8 md:flex md:gap-24">
          {/* Branches Section */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Bharat Sevashram Sangha
            </h3>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>
              Branches in India:
            </h4>
            <p style={{
              fontSize: '0.875rem',
              marginBottom: '1rem'
            }}>
              Vrindavan, Gaya, Puri, Allahabad, Vrindavan, Haridwar, Vrindavan, Kedarnath,
              Kurukshetra, Gorakhpur, New Delhi, Nainital, Mumbai, Hyderabad, Surat, Dwarka,
              Ahmedabad, Jamshedpur, Guwahati, Shillong, Rameswaram, Kanyakumari, Chennai,
              Bengaluru, Jabalpur, Varanasi, Port Blair, Nabadwip, Gangasagar, Tarapith (WB),
              Raipur (Chhattisgarh), Amarkantak (M.P.)
            </p>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>
              Worldwide Branches:
            </h4>
            <p style={{
              fontSize: '0.875rem'
            }}>
              Bulgaria, Madangir, Khulna, Ashoknagar, Nagpur, Dhaka (Bangladesh),
              London (UK), New York, New Jersey (USA), Toronto (Canada),
              Sofia & Plovdiv (Bulgaria), Trinidad & Tobago, Fiji, Nepal
            </p>
            <Link
              href="/branches/india"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                color: colors.light,
                textDecoration: 'none'
              }}
            >
              Find all branches &gt; branches/india
            </Link>
          </div>

          {/* Services Section */}
          <div>
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Services
            </h4>
            <ul style={{
              display: 'grid',
              gap: '0.5rem'
            }}>
              {[
                "Swami Pranavananda Vidyarthi Bhavan",
                "Charitable Dispensary",
                "Guest House",
                "Relief Work",
                "Mobile Medical Unit",
                "Langar Seva"
              ].map((service, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start'
                }}>
                  <span style={{ marginRight: '0.5rem' }}>•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts Section */}
          <div>
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Contacts
            </h4>
            <address style={{ fontStyle: 'normal' }}>
              <p style={{
                fontWeight: '600',
                marginBottom: '0.5rem'
              }}>
                Bharat Sevashram Sangha
              </p>
              <p style={{ marginBottom: '0.25rem' }}>58 Pranavananda Road, Garia,</p>
              <p style={{ marginBottom: '0.25rem' }}>South 24 Paragana,</p>
              <p style={{ marginBottom: '0.25rem' }}>Kolkata-700084</p>
              <p style={{
                marginTop: '1rem',
                marginBottom: '0.25rem'
              }}>
                +91-9434012856
              </p>
              <p style={{ marginBottom: '1rem' }}>+91-9596943769</p>
              <a
                href="mailto:contact@bssgaria.org"
                style={{
                  color: colors.light,
                  textDecoration: 'none'
                }}
              >
                contact@bssgaria.org
              </a>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: `1px solid rgba(255,255,255,0.2)`,
          marginTop: '2rem',
          paddingTop: '1.5rem',
          textAlign: 'center'
        }}>
          <p>Bharat Sevashram Sangha, Garia © {new Date().getFullYear()} All Rights Reserved</p>
          <Link
              href="/developer"
              style={{
                display: 'inline-block',
                marginTop: '0.5rem',
                color: colors.light,
                textDecoration: 'none',
                fontSize:'0.8em',
              }}
            >
              Developers&apos; Details
            </Link>
        </div>
      </div>
    </footer>
  );
}