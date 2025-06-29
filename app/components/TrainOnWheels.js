// components/TrainOnWheels.js
import {  colors } from '../constants/colors';
import {trainOnWheelsContent} from '../constants/content';
export default function TrainOnWheels() {
  return (
    <section style={{ 
      padding: '3rem 1rem',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h2 style={{ 
        color: colors.primary,
        marginBottom: '1.5rem',
        textAlign: 'center'
      }}>{trainOnWheelsContent.title}</h2>
      
      <p style={{ 
        marginBottom: '1.5rem',
        lineHeight: '1.6',
        color: colors.dark
      }}>{trainOnWheelsContent.description}</p>
      
      <p style={{ 
        marginBottom: '1.5rem',
        lineHeight: '1.6',
        color: colors.dark
      }}>{trainOnWheelsContent.initiative}</p>
      
      <p style={{ 
        lineHeight: '1.6',
        color: colors.dark
      }}>{trainOnWheelsContent.goal}</p>
    </section>
  );
}