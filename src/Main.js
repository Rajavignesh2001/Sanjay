import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/Layout/Navbar";
import Footer from "../src/Layout/Footer";
import About from "./Components/About";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
function Main() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default Main;
