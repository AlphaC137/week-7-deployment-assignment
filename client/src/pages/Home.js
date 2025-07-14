import React from 'react';


const Home = () => {
  // Example empty state
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh' }}>
      <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', color: '#D4AF37', marginBottom: '2rem', letterSpacing: '2px' }}>Task List</h1>
      <div className="lux-card" style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '1.2rem', color: '#D4AF37', marginBottom: '1.5rem' }}>
          No tasks yet. Stay classy.
        </p>
        <button className="lux-btn">+ Add Task</button>
      </div>
    </div>
  );
};

export default Home;
