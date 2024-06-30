import React from "react";
import "../css/About.css";
import { Link } from "react-router-dom";
import about from "../Assets/about.jpg";
import bannerBtm from "../Assets/banner-btm.png";
import doctor from "../Assets/about-us-doctor.jpeg";
import logoMain from "../Assets/serene-logo-main.png";
import serviceRight from "../Assets/landing-two.jpg";
import choose from "../Assets/choose.jpg";
function About() {
  window.scrollTo(0, 0);

  return (
    <div className="about">
      <div className="about-top">
        <img className="img-one" alt="img" src={about}></img>
      </div>
      <img className="banner-btm-about" alt="img" src={bannerBtm}></img>
      <div className="about-doctor">
        <div className="doctor-left">
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <h2 style={{ color: "white" }} className="title-one">We Are</h2>
            <h3 style={{ color: "white" }} className="title-two">
              Serene Ayurvedic
            </h3>
          </div>
          <p>
            I am
            <span
              style={{ fontSize: "24px", color: "white" }}
              className="title-two"
            >
              Dr. Deepika Ravisankar , 
            </span>
             Siddha Doctor and Ayurvedic Panchakarma Massage Therapist .
          </p>
          <p>
            I am doing consultations and treatment
            through voice/vedio calls and do massages at my home .
          </p>
          <p>
            I give belly and whole body massages for predelivery and post
            delivery moms and newborn .
          </p>
          <p>
            If anyone needs medical consultations, ayurvedic herbal oil
            massage and panchakarma therapies. Please Reach Out !
          </p>
        </div>
        <div className="doctor-right">
          <img src={doctor} alt="img"></img>
        </div>
      </div>
      <div className="doctor-second-section">
        <div className="doctor-second-first">
          <p>
            <span style={{ fontSize: "24px" }} className="title-two">
              Dr. Deepika Ravisankar*
            </span>{" "}
            BSMS, PG Diploma in yoga, Diagnostic medical sonography (canada).
            Varma and pancha karma specialist, Expert in panchakarma massage for
            head ache, joint pain, back pain, neck pain, prenatal, postnatal
            mommy massage and newborn massage.
          </p>
        </div>
        <div className="doctor-second-middle">
          <img src={logoMain} alt="img"></img>
        </div>
        <div className="doctor-second-third">
          <p>
            Dr. Deepika is a Siddha doctor. She trained in Varma and pancha
            karma in kerala from Aasan. She has her License and worked in
            ultrasonography in canada. She has been practicing her Siddha
            medicine, Ayurvedic Panchakarma herbal oil massage for joint
            diseases, prenatal and newborn massage for more than 5 years.
          </p>
        </div>
      </div>
      <div className="our-services">
        <h3 className="our-service-title">Our Services</h3>
        <div className="services-flex">
          <div className="services-left">
            <p>
              For pregnant mommies we do herbal oil massage in belly, that way
              baby will get soothed and mommy's tummy and pelvic muscles get
              relaxed so as to facilitate her for labor .
            </p>
            <p>
              For post delivery mommies belly massage helps in bringing back the
              reproductive anatomy like uterus and ovaries to heal and to their
              normal position and relax them. I do whole body too for many moms
              as they ask for it to feel relaxed, along with belly, head and
              foot massage.
            </p>
            <p>
              For newborn babies it's the organic natural oil massage, that we usually do
              for the babies to nurture their skin and help in their growth
              apart from mommies and babies, i treat and massage for joint pain in adults
              and elders too.
            </p>
          </div>
          <div className="services-right">
            <img src={serviceRight} alt="img"></img>
          </div>
        </div>
      </div>
      <div className="choose-us">
        <div className="choose-left">
          <img src={choose} alt="img"></img>
        </div>
        <div className="choose-right">
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <h2 className="title-one">Why Choose</h2>
            <h3 className="title-two">Us</h3>
          </div>
          <ul className="choose-list">
            <li>We Are Best In Industry</li>
            <li>We Provide Best Treatments</li>
            <li>Industry Best Therapist</li>
            <li>Best Ayurvedic Medicines</li>
          </ul>
        </div>
      </div>
      <div className="contact-us-about">
        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
}
export default About;
