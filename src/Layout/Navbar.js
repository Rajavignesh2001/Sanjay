import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/logo.png";
import "../css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    if (window.innerWidth <= 480) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Close the menu when the route changes
    setIsOpen(false);
  }, [location]);

  return (
    <div className="Navbar">
      <div className="nav-top-flex">
        <div>
          <Link to="/home">
            <img src={logo} className="nav-logo" alt="logo" />
          </Link>
        </div>
      </div>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link 
          to="/home" 
          onClick={handleLinkClick}
          className={location.pathname === "/home" ? "active" : ""}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          onClick={handleLinkClick}
          className={location.pathname === "/about" ? "active" : ""}
        >
          About Us
        </Link>
        <Link 
          to="/services" 
          onClick={handleLinkClick}
          className={location.pathname === "/services" ? "active" : ""}
        >
          Services
        </Link>
        <Link 
          to="/contact" 
          onClick={handleLinkClick}
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact Us
        </Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
