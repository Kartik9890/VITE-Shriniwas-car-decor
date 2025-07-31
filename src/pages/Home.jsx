import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { galleryImages, topServices } from "./galleryData.jsx";

function Home() {
  const previewImages = galleryImages.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Shriniwas Car Decor</h1>
          <p>
            Enhance your drive with premium car accessories and interior
            makeovers.
          </p>
          <Link
            to="/VITE-Shriniwas-car-decor/#/services"
            className="cta-button"
          >
            Explore Our Services
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="https://images.pexels.com/photos/638479/pexels-photo-638479.jpeg"
            alt="Car Decor"
          />
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        <h2>Why Choose Us?</h2>
        <p>
          With years of experience in car accessories and customization, we
          bring style, comfort, and functionality to your vehicle. From seat
          covers to audio systems, we’ve got it all.
        </p>
      </section>

      {/* Services Highlights */}
      <section className="services-highlight">
        <h2>Our Top Services</h2>
        <div className="services-grid">
          {topServices.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.src} alt={service.alt} />
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="home-gallery-preview">
        <h2>Our Recent Work</h2>
        <p>
          Check out some of the custom car interiors and accessories we’ve
          installed.
        </p>

        <div className="gallery-preview-grid">
          {previewImages.map((img, index) => (
            <img key={index} src={img.src} alt={img.alt} />
          ))}
        </div>

        <Link to="/gallery" className="cta-button gallery-button">
          View Full Gallery
        </Link>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Drive in Style Today</h2>
        <p>Contact us for custom car interiors, accessories, and more.</p>
        <Link to="/contact" className="cta-button">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}

export default Home;
