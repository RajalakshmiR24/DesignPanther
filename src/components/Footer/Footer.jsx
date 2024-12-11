import React from "react";
import LogoWhite from "../../assets/images/LogoWhite.svg";
import LinkedIn from "../../assets/images/LinkedIn.svg";
import Insta from "../../assets/images/Insta.svg";
import Whatsapp from "../../assets/images/Whatsapp.svg";
import Phone from "../../assets/images/phone.svg";
import Whatsappftr from "../../assets/images/Whatsapp.svg";
import msg from "../../assets/images/message.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-white py-4 custom_footer">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 mb-3">
            <a className="navbar-brand" href="/">
              <img src={LogoWhite} alt="Design Panther" />
            </a>
            <p style={{ padding: "10px 0", fontSize: "17px" }}>
              Design Panther is your go-to destination for innovative design
              solutions.
            </p>
            <div
              className="d-flex gap-3"
              // data-aos="fade-up"
              // data-aos-easing="ease-in-back"
              // data-aos-delay="100"
            >
              <a href="#" className="text-white">
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
              <a href="#" className="text-white">
                <img src={Insta} alt="Insta" />
              </a>
              <a href="#" className="text-white">
                <img src={Whatsapp} alt="Whatsapp" />
              </a>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <span className="footer-title">Our Services</span>{" "}
            <ul className="list-unstyled custom_ul">
              <li>UI/UX Design</li>
              <li>Graphic Design</li>
              <li>Brand Design</li>
              <li>Market Design</li>
              <li>Video Editing</li>
            </ul>
          </div>

          <div className="col-md-4">
            <span className="footer-title">Get in touch</span>{" "}
            <ul className="list-unstyled custom_ul">
              <li className="list-unstyled custom_li">
                <img
                  style={{ marginRight: "5px" }}
                  // data-aos="fade-down"
                  src={Phone}
                  alt="Phone"
                />
                &nbsp;033-4556-722
              </li>
              <li className="list-unstyled custom_li">
                <img
                  style={{ marginRight: "5px" }}
                  // data-aos="fade-down"
                  src={Whatsappftr}
                  alt="Whatsapp"
                />
                &nbsp;033-4556-722
              </li>
              <li className="list-unstyled custom_li">
                <img
                  style={{ marginRight: "5px" }}
                  // data-aos="fade-down"
                  src={msg}
                  alt="Email"
                />
                &nbsp;Designpanther@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center ">
        <p style={{ color: "lightgray" }} className=" border-top py-2 m-0">
          Copyright © {new Date().getFullYear()} Pantherdesign powered by Design
          Panther
        </p>
      </div>
    </footer>
  );
};

export default Footer;
