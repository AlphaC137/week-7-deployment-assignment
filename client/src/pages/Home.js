import React, { useState, useEffect } from 'react';
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        .luxury-container {
          min-height: 100vh;
          position: relative;
          background: radial-gradient(circle at 30% 80%, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #000000 100%);
          overflow: hidden;
        }
        
        .floating-orbs {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(1px);
          animation: float 20s ease-in-out infinite;
        }
        
        .orb-1 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(255,215,0,0.08) 40%, transparent 70%);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(184,134,11,0.12) 0%, rgba(212,175,55,0.06) 40%, transparent 70%);
          top: 60%;
          right: 15%;
          animation-delay: -7s;
        }
        
        .orb-3 {
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(255,215,0,0.1) 0%, rgba(212,175,55,0.05) 40%, transparent 70%);
          bottom: 20%;
          left: 20%;
          animation-delay: -14s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(90deg); }
          50% { transform: translateY(0px) rotate(180deg); }
          75% { transform: translateY(-10px) rotate(270deg); }
        }
        
        .gold-particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
        }
        
        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #D4AF37;
          border-radius: 50%;
          animation: sparkle 4s ease-in-out infinite;
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        .main-content {
          position: relative;
          z-index: 10;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
        }
        
        .hero-section {
          max-width: 900px;
          width: 100%;
          position: relative;
          margin-bottom: 3rem;
        }
        
        .hero-card {
          background: linear-gradient(135deg, 
            rgba(24,24,24,0.95) 0%, 
            rgba(18,18,18,0.98) 50%, 
            rgba(12,12,12,0.95) 100%);
          border-radius: 32px;
          padding: 4rem 3rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(20px);
          border: 2px solid transparent;
          background-clip: padding-box;
          box-shadow: 
            0 20px 60px rgba(0,0,0,0.4),
            0 8px 32px rgba(212,175,55,0.15),
            inset 0 1px 0 rgba(255,255,255,0.1);
        }
        
        .hero-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #D4AF37, #FFD700, #B8860B, #D4AF37);
          border-radius: 34px;
          z-index: -1;
          animation: borderFlow 3s ease-in-out infinite;
        }
        
        @keyframes borderFlow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #FFD700 0%, #D4AF37 50%, #B8860B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 4px 20px rgba(212,175,55,0.3);
          letter-spacing: 1px;
          line-height: 1.2;
        }
        
        .hero-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.3rem;
          font-weight: 400;
          color: #e5c07b;
          margin-bottom: 2rem;
          line-height: 1.6;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .divider {
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #D4AF37, transparent);
          margin: 2rem auto;
          border-radius: 2px;
          position: relative;
        }
        
        .divider::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          background: #D4AF37;
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(212,175,55,0.6);
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin: 3rem 0;
          max-width: 1000px;
          width: 100%;
        }
        
        .feature-card {
          background: linear-gradient(135deg, 
            rgba(24,24,24,0.9) 0%, 
            rgba(18,18,18,0.95) 100%);
          border-radius: 20px;
          padding: 1.8rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(212,175,55,0.3);
          backdrop-filter: blur(10px);
        }
        
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.1), transparent);
          transition: left 0.5s;
        }
        
        .feature-card:hover::before {
          left: 100%;
        }
        
        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(212,175,55,0.2);
          border-color: #D4AF37;
        }
        
        .feature-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          font-weight: 500;
          color: #D4AF37;
          position: relative;
          z-index: 1;
        }
        
        .cta-button {
          background: linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #B8860B 100%);
          border: none;
          border-radius: 50px;
          padding: 1.2rem 3rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #000;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(212,175,55,0.3);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.5s;
        }
        
        .cta-button:hover::before {
          left: 100%;
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(212,175,55,0.4);
        }
        
        .cta-button:active {
          transform: translateY(0);
        }
        
        .mouse-follower {
          position: fixed;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%);
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.1s ease;
        }
        
        @media (max-width: 768px) {
          .hero-card {
            padding: 3rem 2rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .feature-card {
            padding: 1.5rem;
          }
        }
      `}</style>
      
      <div className="luxury-container">
        {/* Mouse Follower */}
        <div 
          className="mouse-follower"
          style={{
            left: mousePosition.x - 10,
            top: mousePosition.y - 10,
            transform: `scale(${isHovered ? 1.5 : 1})`
          }}
        />
        
        {/* Floating Orbs */}
        <div className="floating-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        
        {/* Gold Particles */}
        <div className="gold-particles">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Main Content */}
        <div className="main-content">
          <div className="hero-section">
            <div className="hero-card">
              <h1 className="hero-title">
                MERN Stack Deployment
                <br />
                & DevOps Excellence
              </h1>
              
              <div className="divider"></div>
              
              <p className="hero-subtitle">
                A sophisticated full-stack application crafted to showcase cutting-edge backend architecture, 
                seamless frontend integration, robust database management, and enterprise-grade CI/CD pipelines 
                using contemporary DevOps methodologies.
              </p>
              
              <div className="features-grid">
                {features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="feature-card"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="feature-text">{feature}</div>
                  </div>
                ))}
              </div>
              
              <div className="divider"></div>
              
              <button
                className="cta-button"
                onClick={() => navigate('/tasks')}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Experience Excellence
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;