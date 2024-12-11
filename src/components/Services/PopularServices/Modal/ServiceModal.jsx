import React, { useEffect, useState } from "react";
import { FiCheckCircle, FiPackage, FiPenTool } from "react-icons/fi";
import { Modal } from "react-bootstrap";
import styles from "./ServiceModal.module.css";
import servicess from "../services_";

const ServiceModal = ({ selectedService, onClose }) => {
  const [activeServiceId, setActiveServiceId] = useState(selectedService?.id);

  useEffect(() => {
    if (selectedService) {
      setActiveServiceId(selectedService.id);
    }
  }, [selectedService]);

  if (!selectedService) return null;

  const activeService =
    servicess.find((service) => service.id === activeServiceId) ||
    selectedService;

  const { title, description, research, design, build } = activeService;

  return (
    <Modal
      show={selectedService !== null}
      onHide={onClose}
      size="xl"
      centered
      aria-labelledby="service-modal-title"
      style={{
        display: "none",
        overflowY: "hidden",
        zIndex: 99999,
        position: "fixed",
        top: "7%",
        left: 0,
        height: "91%",
      }}
    >
      <div className={styles["modal-dialog"]}>
        <Modal.Body>
          <div className={styles["button-modals"]}>
            <div className={styles["button-containers"]}>
              {servicess.map((service) => (
                <button
                  key={service.id}
                  className={`${styles.buttons} ${
                    service.id === activeServiceId
                      ? styles.active
                      : styles.inactive
                  }`}
                  onClick={() => setActiveServiceId(service.id)}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          <div className={styles["modal-content"]}>
            <div className={styles["images-container"]}>
              <div className={styles["image-wrapper"]}>
                <img
                  src={activeService.image}
                  alt={title}
                  className={styles.image}
                />
              </div>
            </div>

            <div className={styles["content-section"]}>
              <Modal.Header closeButton>
                <Modal.Title id="service-modal-title">{title}</Modal.Title>
              </Modal.Header>
              <p className={styles.description}>{description}</p>

              <div className={styles["grid-section"]}>
                <div>
                  <h6>Research</h6>
                  <ul>
                    {research.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h6>Design</h6>
                  <ul>
                    {design.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h6>Build</h6>
                  <ul>
                    {build.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles["features-section"]}>
                <div className={styles["feature-item"]}>
                  <FiPenTool size={25} />
                  <p>Customised Design</p>
                </div>
                <div className={styles["feature-item"]}>
                  <FiCheckCircle size={25} />
                  <p>3 Steps of Quality Check</p>
                </div>
                <div className={styles["feature-item"]}>
                  <FiPackage size={25} />
                  <p>Assured On Time Delivery</p>
                </div>
              </div>
              <Modal.Footer>
                <button
                  type="button"
                  className={styles["footer-button"]}
                  onClick={onClose}
                >
                  Close
                </button>
              </Modal.Footer>
            </div>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default ServiceModal;
