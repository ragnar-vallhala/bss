// components/FAQ.js
'use client';
// import { useState } from 'react';
import { colors } from '../constants/colors';

export default function FAQ() {
  // const [activeIndex, setActiveIndex] = useState(null);

  // const toggleFAQ = (index) => {
  //   setActiveIndex(activeIndex === index ? null : index);
  // };

  return (
    <section style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ 
        color: colors.dark, 
        borderBottom: `2px solid ${colors.accent}`,
        paddingBottom: '0.5rem'
      }}>
        FREQUENTLY ASKED QUESTIONS (FAQS)
      </h2>
      
      {/* <div style={{ marginTop: '1.5rem' }}>
        {faqs.map((faq, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <button
              onClick={() => toggleFAQ(index)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '1rem',
                background: colors.light,
                border: `1px solid ${colors.gray}`,
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: colors.dark,
                fontWeight: 'bold'
              }}
            >
              <span>{faq.question}</span>
              <span>{activeIndex === index ? '−' : '+'}</span>
            </button>
            
            {activeIndex === index && (
              <div style={{
                padding: '1rem',
                background: '#fff',
                borderLeft: `3px solid ${colors.secondary}`,
                marginTop: '0.5rem'
              }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div> */}
    </section>
  );
}