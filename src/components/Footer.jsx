// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css"; // Make sure this path is correct

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div>
          <h3>Shriniwas Car Decor</h3>
          <p>Your trusted partner in car styling and accessories.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4>Follow Us</h4>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Shriniwas Car Decor. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
