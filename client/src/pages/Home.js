import React from 'react';
import { useNavigate } from 'react-router-dom';

const features = [
  'User authentication (Register/Login)',
  'Task management (Create, Read, Update, Delete)',
  'MongoDB Atlas integration',
  'Backend deployment on Render',
  'Frontend deployment on Vercel',
  'CI/CD pipeline with GitHub Actions',
  'Environment variables securely managed',
  'Monitoring with Winston, Morgan, Sentry',
  'Modern, responsive UI design',
];

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <main style={{
      backgroundColor: '#0e0e0e',
      color: '#f5f5f5',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 1rem',
      fontFamily: 'Inter, sans-serif',
    }}>
      <section style={{
        width: '100%',
        maxWidth: '960px',
        background: '#181818',
        padding: '3rem 2rem',
        borderRadius: '16px',
        border: '1px solid #2e2e2e',
        boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
      }}>
        <h1 style={{
          fontSize: '2.4rem',
          marginBottom: '1rem',
          fontWeight: 700,
          color: '#f5f5f5',
        }}>
          MERN Stack Deployment & DevOps Assignment
        </h1>

        <p style={{
          fontSize: '1.1rem',
          marginBottom: '2rem',
          color: '#cccccc',
          lineHeight: '1.6',
        }}>
          This project demonstrates a full-stack MERN application deployed with modern DevOps practices. It includes CI/CD pipelines, secure environment management, and monitoring integrations. The goal was to build, deploy, and document a professional-grade app across the full development lifecycle.
        </p>

        <h2 style={{
          fontSize: '1.3rem',
          marginBottom: '1rem',
          fontWeight: 600,
          color: '#D4AF37',
        }}>
          Completed Features
        </h2>

        <ul style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1rem',
          listStyle: 'none',
          padding: 0,
        }}>
          {features.map((item, index) => (
            <li key={index} style={{
              backgroundColor: '#1f1f1f',
              padding: '1rem',
              borderRadius: '12px',
              border: '1px solid #2c2c2c',
              color: '#eaeaea',
              fontSize: '0.95rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}>
              ✅ {item}
            </li>
          ))}
        </ul>

        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <button
            onClick={() => navigate('/tasks')}
            style={{
              backgroundColor: '#D4AF37',
              color: '#0e0e0e',
              border: 'none',
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '999px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => e.target.style.boxShadow = '0 4px 12px rgba(212,175,55,0.4)'}
            onMouseLeave={e => e.target.style.boxShadow = 'none'}
          >
            Explore the App
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
