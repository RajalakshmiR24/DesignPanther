import React from "react";
import "./Contact.css";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <div className="contact-section">
        <h2 className="contact-title fw-bold">Contact Us</h2>
        <p className="contact-description">
          The story of Design Panther began with two boys, driven by
          extraordinary dreams and a passion for design, who founded the company
          to build the brands of tomorrow.
        </p>
      </div>
      <div
        data-aos="fade-up"
        // data-aos-easing="ease-in-back"/
        // data-aos-delay="100"
      >
        <Footer />
      </div>
    </>
  );
};

export default Contact;
