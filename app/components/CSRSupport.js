// components/CSRSupport.js
import {  colors } from '../constants/colors';

export default function CSRSupport() {
  return (
    <section style={{ 
      backgroundColor: colors.secondary, 
      padding: '2rem',
      color: colors.light,
      textAlign: 'center'
    }}>
      <h2 style={{ marginBottom: '1rem' }}>FOR CSR SUPPORT</h2>
      <p style={{ marginBottom: '0.5rem' }}>
        Write to <strong>{"Ashu"} – {"+91-95968917316"}</strong>
      </p>
      <p>{"ashu"}</p>
    </section>
  );
}