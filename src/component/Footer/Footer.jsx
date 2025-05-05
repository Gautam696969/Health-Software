import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>HealthCare</h3>
          <p>Empowering healthcare through innovative technology solutions.</p>
          <div className="social-links">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Diagnostics</li>
            <li>Patient Care</li>
            <li>Lab Results</li>
            <li>Telemedicine</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>📍 123 Healthcare Ave</li>
            <li>📞 +1 234 567 890</li>
            <li>✉️ info@healthcare.com</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Healthcare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
