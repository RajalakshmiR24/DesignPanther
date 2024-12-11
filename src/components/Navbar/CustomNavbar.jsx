import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import "./Navbar.css";

const CustomNavbar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle smooth scrolling or redirection
  const handleNavigation = useCallback(
    (sectionId) => {
      if (location.pathname === "/") {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.location.href = `/#${sectionId}`;
      }
    },
    [location.pathname]
  );

  // Update navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 90);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Change threshold if needed for sensitivity
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light sticky-top border-bottom ${
        isScrolled ? "navbar-bg" : ""
      }`}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="Design Panther" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">☰</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {["home", "services", "blogs", "about", "contact"].map(
              (section) => (
                <li className="nav-item" key={section}>
                  <a
                    className={`nav-link ${
                      activeSection === section ? "active" : ""
                    }`}
                    href={`#${section}`}
                    aria-current={activeSection === section ? "page" : undefined}
                    onClick={() => handleNavigation(section)}
                  >
                    {section.toUpperCase()}
                  </a>
                </li>
              )
            )}
            <li className="nav-item">
              <a
                className="btn btn-dark text-light px-4 py-2"
                style={{ letterSpacing: "3px" }}
                href="/price"
              >
                PRICE
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
