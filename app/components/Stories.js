// components/Stories.js
import {  colors } from '../constants/colors';
import {stories} from '../constants/content';
export default function Stories() {
  return (
    <section style={{ 
      padding: '3rem 1rem',
      backgroundColor: colors.light
    }}>
      <h2 style={{ 
        color: colors.dark,
        textAlign: 'center',
        marginBottom: '2rem'
      }}>STORIES OF CHANGE</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {stories.map((story, index) => (
          <div key={index} style={{
            backgroundColor: '#fff',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ 
              color: colors.primary,
              marginBottom: '1rem'
            }}>{story.name}</h3>
            <p style={{ 
              color: colors.dark,
              marginBottom: '1.5rem',
              fontStyle: 'italic'
            }}>{story.excerpt}</p>
            <button style={{
              backgroundColor: colors.secondary,
              color: colors.light,
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>READ MORE</button>
          </div>
        ))}
      </div>
    </section>
  );
}