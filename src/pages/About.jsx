import React from 'react';
import './About.css'; // optional CSS

function About() {
  return (
    <div className="about-page">
      {/* Intro Section */}
      <section className="about-intro">
        <h1>About Shriniwas Car Decor</h1>
        <p>
          Shriniwas Car Decor is your trusted destination for high-quality car accessories,
          custom interior solutions, and expert installations. Based in [Your City], we’ve been
          serving car enthusiasts and daily drivers for over [X] years.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To deliver premium car enhancement solutions that combine comfort, style, and
          performance — ensuring every ride is a proud experience.
        </p>

        <h2>Our Vision</h2>
        <p>
          To become the go-to car decor destination known for trust, innovation, and
          customer satisfaction in the automobile accessory industry.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="about-features">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✅ Quality-assured products</li>
          <li>✅ Experienced technicians</li>
          <li>✅ Personalized recommendations</li>
          <li>✅ Affordable pricing</li>
          <li>✅ Customer-first approach</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
