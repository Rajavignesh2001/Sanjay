import React from "react";
import "../css/Services.css";
import service from "../Assets/service.jpg";
import bannerBtm from "../Assets/banner-btm.png";
import serviceLeft from "../Assets/service-left.png";
import tick from "../Assets/tick.png";
import leaf from "../Assets/leaf.png";
import prod1 from "../Assets/prod1.png";
import prod2 from "../Assets/prod2.png";
import prod3 from "../Assets/prod3.png";
import prod4 from "../Assets/prod4.png";
import prod5 from "../Assets/prod5.png";
import prod6 from "../Assets/prod6.png";
import prod7 from "../Assets/prod7.png";
import oil from "../Assets/hair-oil.jpg";

function Services() {
  window.scrollTo(0, 0);

  const products = [
    {
      imageSrc: prod1,
      title: "Postpartum Healing Kit",
      description:
        "This kit includes massage oil which aids in healing, essential oil for diffuser, ladoo for internal healing and lactation.",
    },
    {
      imageSrc: prod2,
      title: "Newborn Immunity And Wellness Kit",
      description:
        "This kit includes immune-booster supplement for mom which inturn benefits baby through breastfeeding , Baby Colic relieving supplement for mom.",
    },
    {
      imageSrc: prod3,
      title: "Postpartum And Newborn Care Consultantations",
      description:
        "Zoom or whatsapp consultation for any illness related to mom or baby, including postpartum depression.",
    },
    {
      imageSrc: prod4,
      title: "Renew And Restore Detox Kit",
      description:
        "Gut cleansing kit to remove AAMA (toxin) which is the cause for many ailments .",
    },
    {
      imageSrc: prod5,
      title: "Signature Body Massage Oil",
      description:
        "Made with 10+ herbs this massage oil protrudes in skin and remoisturize the dry joints and relieves pain.",
    },
    {
      imageSrc: prod6,
      title: "Herbal Powders",
      description:
        "We have many individuals herbal powders and herbal tooth powder, hair pack powder, face pack powder, external wash powder .",
    },
    {
      imageSrc: prod7,
      title: "Lactation Aiding Kit",
      description:
        "This kit includes ladoo/jam for lactation, sore breast massage oil.",
    },
  ];
  const backgroundColors = [
    "#F0F8FF",
    "#0c623a",
    "#F0F8FF",
    "#0c623a",
    "#F0F8FF",
    "#0c623a",
    "#0c623a",
  ];
  const textColors = ["#333", "#fff", "#333", "#fff", "#333", "#fff", "#fff"];

  const wellnessPoints = [
    {
      listValue: "Postpartum Lactation",
    },
    {
      listValue: "Newborn Wellness",
    },
    {
      listValue: "Thyriod Issues",
    },
    {
      listValue: "Diabetes",
    },
    {
      listValue: "Hypertensions",
    },
    {
      listValue: "Skin Disorders - Eczema, Psoriasis",
    },
    {
      listValue: "Arthritis",
    },
    {
      listValue: "Asthma",
    },
    {
      listValue: "Liver Disorders",
    },
    {
      listValue: "Leucoderma",
    },
    {
      listValue: "Gynec Problems",
    },
    {
      listValue: "Jaundice",
    },
    {
      listValue: "Piles & Fistula",
    },
    {
      listValue: "Upper Respiratory Tract Problem",
    },
    {
      listValue: "Acidity / Gerd",
    },
    {
      listValue: "Pcod",
    },
    {
      listValue: "Peptic Ulcer",
    },
    {
      listValue: "Gallstones / Kidney Stones",
    },
    {
      listValue: "Constpation",
    },
  ];

  return (
    <div className="services">
      <div className="service-top">
        <img className="img-one" alt="img" src={service}></img>
      </div>
      <img className="banner-btm" alt="img" src={bannerBtm}></img>
      <div className="services-section">
        <div className="service-left">
          <img src={serviceLeft} alt="img" className="service-left-img-one"></img>
          <img src={tick} alt="img" className="tick"></img>
        </div>
        <div className="serives-right">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                
              }}
            >
              <h3 className="title-two">Ayurvedic</h3>
              <h2 className="title-one">Wellness</h2>
            </div>
            <div>
              <img src={leaf} alt="img" className="leaf"></img>
            </div>
          </div>
          <p className="service-para">
            Our mission has been to provide holistic healing experiences for the
            body and mind as well as teach people how to take healing into their
            own hands through the Ayurvedic Wellness Course.
          </p>
        </div>
      </div>
      <div className="our-products">
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <h2 className="title-one">Our</h2>
          <h3 className="title-two">Products</h3>
        </div>
        <div className="products-flex">
          {products.map((product, index) => (
            <div
              className="product-card"
              key={index}
              style={{
                backgroundColor: backgroundColors[index],
                color: textColors[index],
              }}
            >
              <img src={product.imageSrc} alt="img"></img>
              <h4 className="product-title">{product.title}</h4>
              <p className="product-para">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="wellness-section">
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginBottom: "2rem",
           
          }}
        >
          <h2 className="title-onee">Wellness</h2>
          <h3 className="title-twoo">Consultations</h3>
        </div>
        <div className="wellness-flex">
          {wellnessPoints.map((points, index) => (
            <div className="wellness-card" key={index}>
              <ul>
                <li>{points.listValue}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="signature-section">
        <div className="sign-left">
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              marginBottom: "1.5rem",
            }}
          >
            <h2 className="title-one">Signature</h2>
            <h3 className="title-two">Hair Oil</h3>
          </div>
          <p className="sign-para">
            Amazing hair oil made with 27+ herbal powders, fresh fenugreek,
            curry leaves, small onion .etc .Helps in reducing the hairfall and
            aids in new hair growth , very soothing for scalp and improves good
            sleep and reduce stress .
          </p>
        </div>
        <div className="sign-right">
          <img src={oil} alt="img" className="oil"></img>
        </div>
      </div>
    </div>
  );
}
export default Services;
