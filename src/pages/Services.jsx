// src/pages/Services.jsx
import React from "react";
import "./services.css"; // Ensure the path is correct

const services = [
  {
    title: "Custom Seat Covers",
    alt: "Seat Covers",
    src: "https://media.istockphoto.com/id/2203752981/photo/the-detailing-master-cleans-the-car-interior-with-a-hot-steam-cleaner-close-up-dry-cleaning.jpg?s=1024x1024&w=is&k=20&c=4_niFVaI8Uv7CEgwHas-0tz_6Jmsqe2LHPTbK46k9pw=",
  },
  {
    title: "Premium Sound Systems",
    alt: "Sound Systems",
    src: "https://media.istockphoto.com/id/157181237/photo/big-ones.jpg?s=1024x1024&w=is&k=20&c=pz6XobKX7dVjaCQkw-U4Lj9DVs3n_cmcUyW5bqkKmV8=",
  },
  {
    title: "Floor Lamination",
    alt: "Floor Lamination",
    src: "https://media.istockphoto.com/id/1196526947/photo/cleaning-car-mats.jpg?s=1024x1024&w=is&k=20&c=RAVH1jsgyIo4P91PAkvVJLctwI-3Lok31aPf8XbzWBs=",
  },
  {
    title: "Sunfilm & Tinting",
    alt: "Sunfilm & Tinting",
    src: "https://images.pexels.com/photos/10182912/pexels-photo-10182912.jpeg",
  },
  {
    title: "Ambient Lighting",
    alt: "Ambient Lighting",
    src: "https://images.pexels.com/photos/18481945/pexels-photo-18481945.jpeg",
  },
  {
    title: "Custom Body Kits",
    alt: "Body Kits",
    src: "https://images.pexels.com/photos/14863021/pexels-photo-14863021.jpeg",
  },
];

const Services = () => {
  return (
    <section className="services-page">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Explore the range of car decor services we provide.</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.src} alt={service.alt} />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
