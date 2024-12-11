import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import DesignPantherCover from "../../assets/images/DesignPanther_Cover.svg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-section container- d-flex align-items-center flex-column flex-lg-row">
      {/* Carousel Section */}
      <div className="carousel-container col-12 col-lg-6 mb-4 mb-lg-0">
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1580184480897-ad05a3443d44?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="d-block w-100"
                alt="Beautiful forest landscape"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://media.istockphoto.com/id/1305448692/photo/shot-of-a-cute-vintage-teapot-in-a-campsite-near-to-lake.webp?a=1&b=1&s=612x612&w=0&k=20&c=jSzI32xDWBjFqJOMRbPoXhYl7HEGz3RFoWYFDeCTNws="
                className="d-block w-100"
                alt="Vintage teapot near a lake"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1440942788614-7429a62bc8d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
                className="d-block w-100"
                alt="A serene mountain view"
              />
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Static Content Section */}
      <div className="static-content col-12 col-lg-6 text-center">
        <img
          src={DesignPantherCover}
          className="static-image"
          alt="Design Panther Cover"
        />
      </div>
    </div>
  );
};

export default Home;
