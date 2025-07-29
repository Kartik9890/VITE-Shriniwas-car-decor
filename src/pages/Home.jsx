import React from 'react';
import './Home.css'; // optional if you’re not using Tailwind

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Shriniwas Car Decor</h1>
          <p>Enhance your drive with premium car accessories and interior makeovers.</p>
          <a href="/services" className="cta-button">Explore Our Services</a>
        </div>
        <div className="hero-image">
          <img src="/assets/car-decor-hero.jpg" alt="Car Decor" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        <h2>Why Choose Us?</h2>
        <p>
          With years of experience in car accessories and customization, we bring style,
          comfort, and functionality to your vehicle. From seat covers to audio systems,
          we’ve got it all.
        </p>
      </section>

      {/* Services Highlights */}
      <section className="services-highlight">
        <h2>Our Top Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="/assets/seat-cover.jpg" alt="Seat Covers" />
            <h3>Seat Covers</h3>
          </div>
          <div className="service-card">
            <img src="/assets/music-system.jpg" alt="Music System" />
            <h3>Music System Installation</h3>
          </div>
          <div className="service-card">
            <img src="/assets/lighting.jpg" alt="LED Lighting" />
            <h3>Ambient Lighting</h3>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
<section className="home-gallery-preview">
  <h2>Our Recent Work</h2>
  <p>Check out some of the custom car interiors and accessories we’ve installed.</p>

  <div className="gallery-preview-grid">
    <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80" alt="Car Interior" />
    <img src="https://images.unsplash.com/photo-1605555709375-3ebdbb3c9edb?auto=format&fit=crop&w=800&q=80" alt="Ambient Lighting" />
    <img src="https://images.unsplash.com/photo-1629561775552-745430ed94d1?auto=format&fit=crop&w=800&q=80" alt="Seat Covers" />
  </div>

  <a href="/gallery" className="cta-button gallery-button">View Full Gallery</a>
</section>


      {/* Call to Action */}
      <section className="cta-section">
        <h2>Drive in Style Today</h2>
        <p>Contact us for custom car interiors, accessories, and more.</p>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </section>
    </div>
  );
}

export default Home;
