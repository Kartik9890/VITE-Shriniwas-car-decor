// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">Shriniwas Car Decor</h3>
          <p className="text-gray-400 text-sm">
            Your trusted partner in car styling and accessories.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl text-gray-400">
          <a href="#" className="hover:text-white" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Shriniwas Car Decor. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
