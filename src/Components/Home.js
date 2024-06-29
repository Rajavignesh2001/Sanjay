// import React from "react";
import "../css/Home.css";
import home from "../Assets/home.png";
import bannerBtm from "../Assets/banner-btm.png";
import knowledgeRight from "../Assets/knowledge-right.png";
import knowledgeLeft from "../Assets/knowledge-left.png";
import homeTwo from "../Assets/home-two.png";
import logo from "../Assets/logo.png";
import homeLeaf from "../Assets/about-btn.png";
import { Link } from "react-router-dom";

function Home() {
   window.scrollTo(0, 0);

  return (
    <div className="home">
      <div className="home-top">
        <img className="img-one" src={home} alt="Home" />
      </div>
      <img className="banner-btm-home" src={bannerBtm} alt="Banner Bottom" />
      <div className="knowledge-section">
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <h2 className="title-one">Knowledge of</h2>
          <h3 className="title-two">Life</h3>
        </div>
        <div className="knowledge-flex">
          <div className="knowledge-left">
            <h3 className="knowledge-title">Natural System</h3>
            <p>
              Ayurveda (knowledge of life ), a natural system of medicine
              originated in India more than 3000 years ago. Ayurveda encourages
              certain lifestyle interventions and natural therapies to regain
              balance between the body, mind, spirit, and the environment.
            </p>
          </div>
          <div className="knowledge-right">
            <img src={knowledgeRight} alt="Knowledge Right" />
          </div>
        </div>
        <div className="knowledge-flex">
          <div className="knowledge-right">
            <img src={knowledgeLeft} alt="Knowledge Left" />
          </div>
          <div className="knowledge-left-two">
            <h3 className="knowledge-title">Traditional Holistic Solutions</h3>
            <p>
              We provide a natural way of traditional holistic solutions
              (Siddha, Ayurveda, Yoga) which starts with finding the root cause
              and addresses issues in all bodily systems. The goals of treatment
              aid the person by eliminating impurities, reducing symptoms,
              increasing harmony in life.
            </p>
            <p>
              We focus on individuals based on overall well-being by providing
              a special diet, herbal remedies, lifestyle changes, massage therapy,
              yoga, meditation. We provide Dosha/Prakriti pulse reading
              assessment.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="read-more">
        <Link
          to="/services"
          style={{
            textDecoration: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              float: "right",
              cursor: "pointer",
            }}
          >
            <h2 className="title-one">Read</h2>
            <h3 className="title-two">More . . .</h3>
          </div>
        </Link>
      </div> */}

      <div className="read-more">
        <Link to="/services" className="read-more-link">
          <div className="read-more-content">
            <h2 className="title-one">Read</h2>
            <h3 className="title-two">More . . .</h3>
          </div>
        </Link>
      </div>

      
      <div className="our-remedies"></div>
      <div className="home-section-two">
        <img className="home-main-img" src={homeTwo} alt="Home Two" />
        <img className="home-main-logo" src={logo} alt="Logo" />
      </div>
      <div className="home-about-section">
        <div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <h2 className="title-one">About</h2>
            <h3 className="title-two">Us</h3>
          </div>
          <p>
            Dr. Deepika Ravisankar*, BSMS, PG Diploma in yoga, Diagnostic
            medical sonography (Canada). Varma and pancha karma specialist,
            Expert in panchakarma massage for headache, joint pain, back pain,
            neck pain, prenatal, postnatal mommy massage, and newborn massage.
          </p>
        </div>
      </div>
      <div className="home-read-more-btn">
        <Link to="/about">
          <img src={homeLeaf} alt="Home Leaf" />
        </Link>
        <Link to="/about">
          <p className="read">Read More</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
