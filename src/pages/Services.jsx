// src/pages/Services.jsx
import React from 'react';
import '../pages/services.css'; // Ensure the path is correct

const Services = () => {
  return (
    <section className="services-page">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Explore the range of car decor services we provide.</p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <img src="/assets/seats.jpg" alt="Seat Covers" />
          <h3>Custom Seat Covers</h3>
        </div>
        <div className="service-card">
          <img src="/assets/sound.jpg" alt="Sound Systems" />
          <h3>Premium Sound Systems</h3>
        </div>
        <div className="service-card">
          <img src="/assets/lamination.jpg" alt="Floor Lamination" />
          <h3>Floor Lamination</h3>
        </div>
        <div className="service-card">
          <img src="/assets/sunfilm.jpg" alt="Sunfilm & Tinting" />
          <h3>Sunfilm & Tinting</h3>
        </div>
        <div className="service-card">
          <img src="/assets/lighting.jpg" alt="Ambient Lighting" />
          <h3>Ambient Lighting</h3>
        </div>
        <div className="service-card">
          <img src="/assets/bodykit.jpg" alt="Body Kits" />
          <h3>Custom Body Kits</h3>
        </div>
      </div>
    </section>
  );
};

export default Services;
