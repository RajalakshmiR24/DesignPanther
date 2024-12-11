import React, { useState } from "react";
import "./PopularServices.css";
import ServiceModal from "./Modal/ServiceModal";
import services from './services_'

const PopularServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleCloseServiceModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <div className="container d-flex flex-column">
        <div className="popularserv-section">
          <h1 className="popularserv-title">Popular Services</h1>
          <p className="popularserv-description">
            Design Panther is your go-to destination for innovative design
            solutions.
          </p>
        </div>

        {/* Horizontal Scrollable Container */}
        <div
          className="services-scroll-container d-flex overflow-auto"
          style={{
            display: "flex",
            overflowX: "auto",
            paddingBottom: "20px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card p-3 border text-center h-100"
              onClick={() => handleServiceSelect(service)}
              style={{
                minWidth: "250px",
                flexShrink: 0,
                marginRight: "15px",
              }}
            >
              <img
                src={service.imageSrc}
                alt={service.altText}
                className="img-fluid mb-3"
                style={{ maxHeight: "150px", objectFit: "contain" }}
              />
              <h5 className="fw-bold">{service.title}</h5>
              <p className="text-muted">{service.shortDescription}</p>
            </div>
          ))}
        </div>
      </div>

      <ServiceModal
        selectedService={selectedService}
        onClose={handleCloseServiceModal}
        services={services}
      />

      {selectedService && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
          onClick={handleCloseServiceModal}
        />
      )}
    </>
  );
};

export default PopularServices;
