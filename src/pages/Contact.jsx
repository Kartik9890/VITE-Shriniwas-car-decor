// src/pages/Contact.jsx
import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../pages/contact.css"; // Make sure the path is correct

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-heading">
        <h2>Get in Touch</h2>
      </div>

      <div className="contact-description">
        <p>
          We'd love to hear from you! Reach out to us through any of the
          following ways.
        </p>
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
          <p>+91 9725030667</p>
        </div>

        {/* Address */}
        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Address</h3>
          <p>
            Srinivas Car Decor Ring Road, Nanded Ring Road.... In Between Rajiv
            Gandhi Chwok to Naik Chowk, Rajiv Gandhi Chowk.
            <br />
            Latur, Maharashtra – 413512
          </p>
        </div>
      </div>

      {/* Google Map */}
      <div className="contact-map">
        <iframe
          title="Srinivas Car Decor Latur Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.601684421497!2d76.526556!3d18.382907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf83346d578887%3A0x93ecc7bd2c914972!2sSrinivas%20Car%20Decor%20Latur!5e0!3m2!1sen!2sin!4v1722429731605!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default Contact;
