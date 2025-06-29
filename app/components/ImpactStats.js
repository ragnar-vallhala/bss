// components/ImpactStats.js
import {  colors } from '../constants/colors';

export default function ImpactStats() {
  return (
    <section style={{ 
      padding: '3rem 1rem',
      backgroundColor: colors.light,
      textAlign: 'center'
    }}>
      <h2 style={{ 
        color: colors.dark,
        marginBottom: '2rem'
      }}>IMPACT 2023-24</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* {impactStats.map((stat, index) => (
          <div key={index}>
            <h3 style={{
              fontSize: '2.5rem',
              color: colors.primary,
              marginBottom: '0.5rem'
            }}>{stat.value}</h3>
            <p style={{ color: colors.dark }}>{stat.label}</p>
          </div>
        ))} */}
      </div>
    </section>
  );
}