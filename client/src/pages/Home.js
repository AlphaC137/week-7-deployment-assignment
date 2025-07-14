
import React from 'react';
import { useNavigate } from 'react-router-dom';

const features = [
  '✅ Full user auth system (Register/Login)',
  '✅ Task manager with CRUD operations',
  '✅ MongoDB Atlas integration',
  '✅ Render deployment for backend',
  '✅ Vercel deployment for frontend',
  '✅ GitHub Actions CI/CD',
  '✅ Secure environment variables',
  '✅ Monitoring & logging (Sentry, Winston, Morgan)',
  '✅ Luxury-inspired UI/UX',
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#121212',
      color: '#D4AF37',
      fontFamily: 'Playfair Display, serif',
      padding: '0 1rem',
    }}>
      <section style={{
        maxWidth: 700,
        width: '100%',
        background: 'rgba(24,24,24,0.98)',
        borderRadius: 24,
        boxShadow: '0 8px 32px rgba(212,175,55,0.18)',
        border: '2px solid #D4AF37',
        padding: '3rem 2rem',
        textAlign: 'center',
        marginBottom: '2rem',
      }}>
        <h1 style={{
          fontSize: '2.8rem',
          fontWeight: 700,
          marginBottom: '1.2rem',
          letterSpacing: '2px',
          color: '#D4AF37',
          textShadow: '0 2px 16px #bfa14a',
        }}>
          MERN Stack Deployment & DevOps Assignment
        </h1>
        <hr style={{ border: 'none', borderTop: '2px solid #D4AF37', margin: '1.5rem 0' }} />
        <h2 style={{
          fontSize: '1.4rem',
          fontWeight: 400,
          marginBottom: '2rem',
          color: '#e5c07b',
        }}>
          A full-stack application developed to demonstrate backend, frontend, database integration, CI/CD pipelines, and deployment practices using modern DevOps principles.
        </h2>
        <hr style={{ border: 'none', borderTop: '2px solid #D4AF37', margin: '1.5rem 0' }} />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.2rem',
          marginBottom: '2rem',
        }}>
          {features.map((feature, idx) => (
            <div key={idx} style={{
              background: '#181818',
              borderRadius: 12,
              border: '1px solid #D4AF37',
              color: '#D4AF37',
              fontSize: '1.05rem',
              padding: '1rem',
              boxShadow: '0 2px 8px rgba(212,175,55,0.10)',
              fontFamily: 'Playfair Display, serif',
            }}>
              {feature}
            </div>
          ))}
        </div>
        <hr style={{ border: 'none', borderTop: '2px solid #D4AF37', margin: '1.5rem 0' }} />
        <button
          className="lux-btn"
          style={{ marginTop: '2rem', fontSize: '1.2rem', padding: '1rem 2.5rem', borderRadius: '999px', fontWeight: 700 }}
          onClick={() => navigate('/tasks')}
        >
          Explore the App
        </button>
      </section>
    </main>
  );
};

export default Home;
