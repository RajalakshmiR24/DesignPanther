import React from "react";
import "aos/dist/aos.css";
import CustomDesign from "../../assets/images/CustomDesign.svg";
import QualityCheck from "../../assets/images/AssuredTime.svg";
import AssuredTime from "../../assets/images/QualityCheck.svg";
import "./Services.css";
import Facts from "../Services/Facts/Facts";
import PoluparServices from "../Services/PopularServices/PopulalrServices";
import WeWorkServices from "./WeWorkServices/WeWorkServices";
import FindYourService from "./FindYourService/FindYourService";

const Services = () => {
  const serviceData = [
    {
      title: "U I / U X",
      subtitle: "D E S I G N",
      uiDefinition: [
        "User Experience Design",
        "User Interface Design",
        "Interaction Design",
        "Digital Prototyping",
      ],
      uxDefinition: [
        "Heuristic Analysis",
        "Design Audit",
        "Usability Testing",
        "Ethnographic Research",
      ],
    },
    {
      title: "G R A P H I C",
      subtitle: "D E S I G N",
      definition: "Creating stunning visuals for branding and marketing.",
    },
    {
      title: "B R A N D",
      subtitle: "D E S I G N",
      definition: "Establishing unique identities for businesses.",
    },
    {
      title: "V I D E O",
      subtitle: "E D I T I N G",
      definition: "Producing engaging video content with professional edits.",
    },
    {
      title: "M A R K E  T I N G",
      subtitle: "D E S I G N",
      definition: "Designing impactful campaigns to grow your business.",
    },
  ];

  return (
    <>
      <FindYourService />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
        data-aos="fade-up"
      >
        <iframe
          width="1200"
          height="500"
          src="https://www.youtube.com/embed/C-KyHvm521c?si=_PcVgbY991r8jgyW"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="assurance-container">
        <h2 className="assurance-title">Assured by Design Panther's</h2>
        <p className="assurance-subtitle">
          Design Panther is your go-to destination for innovative design
          solutions
        </p>
        <div className="assurance-cards">
          <div className="assurance-card" data-aos="fade-up">
            <div className="icon-container">
              <img src={CustomDesign} alt="Customised Design" />
            </div>
            <div className="card-text">
              <h6>Customised Design</h6>
              <p>Tailored designs to meet your needs.</p>
            </div>
          </div>
          <div
            className="assurance-card"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="icon-container">
              <img src={QualityCheck} alt="Quality Check" />
            </div>
            <div className="card-text">
              <h6>3 Steps of Quality Check</h6>
              <p>Ensuring the highest standards.</p>
            </div>
          </div>
          <div
            className="assurance-card"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="icon-container">
              <img src={AssuredTime} alt="On Time Delivery" />
            </div>
            <div className="card-text">
              <h6>Assured On Time Delivery</h6>
              <p>Meeting deadlines every time.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="services-section">
        <h2 className="service-title">Service by Design Panther's</h2>
        <p className="service-subtitle">
          Design Panther is your go-to destination for innovative design
          solutions
        </p>

        <div className="services-grid">
          {serviceData.map((service, index) => (
            <div key={index} className="service-card" data-aos="fade-up">
              <div className="card-inner">
                <div className="card-front">
                  <h6>
                    {service.title} <br />
                    <span className="highlight-text">{service.subtitle}</span>
                  </h6>
                </div>
                <div className="card-back">
                  {service.title === "UI/UX" ? (
                    <div className="ui-ux-split">
                      <div className="ui-section">
                        <h6>UI</h6>
                        <ul className="definition-list">
                          {service.uiDefinition.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="ux-section">
                        <h6>UX</h6>
                        <ul className="definition-list">
                          {service.uxDefinition.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : Array.isArray(service.definition) ? (
                    <ul className="definition-list">
                      {service.definition.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{service.definition}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div data-aos="zoom-in">
        <PoluparServices />
      </div>
      <div data-aos="zoom-in">
        <WeWorkServices />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <Facts />
      </div>{" "}
    </>
  );
};

export default Services;
