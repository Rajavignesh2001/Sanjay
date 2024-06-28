import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdAddLocationAlt } from "react-icons/md";
import logo from "../Assets/logo.png";
function Footer() {
  const location = useLocation();

  return (
    <div className="footer-main">
      <div className="footer-flex">
        <div className="footer-left">
          <img src={logo} className="footer-logo" alt="Logo"></img>
        </div>
        <div className="footer-middle">
          <Link to="/home" className={`footer-link ${location.pathname === "/home" ? "active-link" : ""}`}>
            Home
          </Link>
          <Link to="/about" className={`footer-link ${location.pathname === "/about" ? "active-link" : ""}`}>
            About Us
          </Link>
          <Link to="/services" className={`footer-link ${location.pathname === "/services" ? "active-link" : ""}`}>
            Services
          </Link>
          <Link to="/contact" className={`footer-link ${location.pathname === "/contact" ? "active-link" : ""}`}>
            Contact Us
          </Link>
        </div>

        <div className="footer-right">
          <a href="https://www.facebook.com/deepika.ravisankar?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="footer-icon" style={{ color: '#0c623' }} />
          </a>
          <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="footer-icon" style={{ color: '#0c623' }} />
          </a>
          <a href="https://www.instagram.com/deepi_ravisankar?igsh=MW92dmkxaWlxYWY4NA==" target="_blank" rel="noopener noreferrer">
            <RiInstagramFill className="footer-icon" style={{ color: '#0c623' }} />
          </a>
          <a href="https://youtube.com/@drdeepikaravisankar5939?si=yKZlRzJoRdXOhtwc" target="_blank" rel="noopener noreferrer">
            <MdAddLocationAlt className="footer-icon" style={{ color: '#0c623' }} />
          </a>  
        </div>
      </div>
    </div>
  );
}

export default Footer;
