import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import logo from "../assets/Logo.jpeg"; // Update with your actual logo
import "../Style/Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 📌 Logo & About */}
        <div className="footer-section">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>Delivering the best quality products with trust & care.</p>
        </div>

        {/* 📌 Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* 📌 Contact Info & Socials */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@shop.com</p>
          <p>Phone: +123 456 789</p>
          <div className="footer-socials">
            <FaFacebookF className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaLinkedin className="social-icon" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Shop. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
