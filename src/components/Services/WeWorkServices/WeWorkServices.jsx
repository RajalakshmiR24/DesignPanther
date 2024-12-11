import React, { useState } from "react";
import mobileUI from "../../../assets/images/mobile_ui_image.svg";
import websiteUI from "../../../assets/images/website_ui_image.svg";
import smatchWatchUI from "../../../assets/images/SmartWatch_UI.svg";
import uxAudit from "../../../assets/images/ux_audit_image.svg";
import socialMediaGFX from "../../../assets/images/socialMediaGFX.svg";
import motionGraphics from "../../../assets/images/motionGraphics.svg";
import publicationDesign from "../../../assets/images/publicationDesign.svg";
import branding_design_image from "../../../assets/images/branding_design_image.svg";
import presentationDesign from "../../../assets/images/presentationDesign.svg";
import DigitaMarketing from "../../../assets/images/DigitaMarketing.svg";
import EventMarketing from "../../../assets/images/EventMarketing.svg";
import SocialMediaVideos from "../../../assets/images/SocialMediaVideos.svg";
import Corporate_ads from "../../../assets/images/Corporate_ads.svg";
import "./WeWorkServices.css";

const WeWorkServices = () => {
  const [activeTab, setActiveTab] = useState("uiux");

  const tabData = {
    uiux: [
      {
        title: "Mobile UI Design",
        subtitle: "Mobile & Website Etc",
        image: mobileUI,
      },
      {
        title: "Website UI Design",
        subtitle: "Mobile & Website Etc",
        image: websiteUI,
      },
      {
        title: "Smart Watch UI",
        subtitle: "Mobile & Website Etc",
        image: smatchWatchUI,
      },
      {
        title: "UX Audit",
        subtitle: "Mobile & Website Etc",
        image: uxAudit,
      },
    ],
    graphic: [
      {
        title: "Social Media Gfx",
        subtitle: "Mobile & Website Etc",
        image: socialMediaGFX,
      },
      {
        title: "Motion Graphics",
        subtitle: "Mobile & Website Etc",
        image: motionGraphics,
      },
      {
        title: "Publication Design",
        subtitle: "Mobile & Website Etc",
        image: publicationDesign,
      },
    ],
    branding: [
      {
        title: "Brand Design",
        subtitle: "Mobile & Website Etc",
        image: branding_design_image,
      },
      {
        title: "Presentation Deign",
        subtitle: "Mobile & Website Etc",
        image: presentationDesign,
      },
    ],
    marketing: [
      {
        title: "Digital Marketing",
        subtitle: "Mobile & Website Etc",
        image: DigitaMarketing,
      },
      {
        title: "Event Marketing",
        subtitle: "Mobile & Website Etc",
        image: EventMarketing,
      },
    ],
    videoproduction: [
      {
        title: "Social Media Videos",
        subtitle: "Business Stories",
        image: SocialMediaVideos,
      },
      {
        title: "Corporate Videos",
        subtitle: "Showcase Features",
        image: Corporate_ads,
      },
    ],
  };

  const currentTabData = tabData[activeTab] || [];

  return (
    <div className="container d-flex flex-column">
      <div className="contact-section">
        <h1 className="contact-title">We Work Services</h1>
        <p className="contact-description">
          Design Panther is your go-to destination for innovative design
          solutions
        </p>
      </div>
      <div className="d-flex justify-content-center mb-4">
        <div
          className="d-flex"
          style={{
            backgroundColor: "#f5f5f5",
            padding: "8px",
            width: "70%",
            borderRadius: "0px",
          }}
        >
          {["UIUX", "Graphic", "Branding", "Marketing", "Video Production"].map(
            (tab, index) => (
              <button
                key={index}
                className={`flex-fill p-2 ${
                  activeTab === tab.toLowerCase().replace(/\s/g, "")
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                style={{
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  borderRadius: "0px",
                }}
                onClick={() =>
                  setActiveTab(tab.toLowerCase().replace(/\s/g, ""))
                }
              >
                {tab}
              </button>
            )
          )}
        </div>
      </div>

      <div className="row g-4">
        {currentTabData.map((service, index) => (
          <div key={index} className="col-md-3">
            <div style={{ borderRadius: "0px" }} className="card ">
              <img
                src={service.image}
                className="card-img-top"
                alt={service.title}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-black text-white px-4 py-2">
          Explore Design Prices
        </button>
      </div>
    </div>
  );
};

export default WeWorkServices;
