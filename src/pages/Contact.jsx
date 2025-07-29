// src/pages/Contact.jsx
import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../pages/contact.css'; // Make sure the path is correct

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-heading">
        <h2>Get in Touch</h2>
      </div>

      <div className="contact-description">
        <p>We'd love to hear from you! Reach out to us through any of the following ways.</p>
      </div>

      <div className="contact-methods">
        {/* Email */}
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>shriniwascardecor@email.com</p>
        </div>

        {/* Phone */}
        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Phone</h3>
          <p>+91 98765 43210</p>
        </div>

        {/* Address */}
        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Address</h3>
          <p>
            Shop No. 4, ABC Complex, <br />
            JM Road, Pune, Maharashtra – 411005
          </p>
        </div>
      </div>

      {/* Google Map */}
      <div className="contact-map">
        <iframe
          title="Shriniwas Car Decor Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.080748857795!2d73.8429!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c071d5a79a25%3A0x4f4eaa427e7d0e0d!2sJM%20Road%2C%20Pune!5e0!3m2!1sen!2sin!4v1623999999999"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
