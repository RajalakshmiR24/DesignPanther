import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition } from "react-transition-group";
import FactTab1 from "../Images/FactTab1.svg";
import FactTab2 from "../Images/FactTab2.svg";
import FactTab3 from "../Images/FactTab3.svg";
import "./Facts.css";

const Facts = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="container d-flex flex-column">
      <div className="facts-section">
        <h2 className="facts-title">Some facts, are that, facts.</h2>
        <p className="facts-description">
          Design Panther is your go-to destination for innovative design
          solutions
        </p>
      </div>

      <div className="d-flex justify-content-center">
        <div
          className="d-flex "
          style={{
            backgroundColor: "#f5f5f5",
            padding: "8px",
            width: "300px",
          }}
        >
          <button 
            className={`flex-fill p-3 factsButton ${
              activeTab === "tab1"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            style={{
              border: "none",
              cursor: "pointer",
              padding: "12px 20px",
              borderRadius: "0px",
              transition:
                "background-color 0.3s ease, color 0.3s ease, padding 0.3s ease",
            }}
            onClick={() => setActiveTab("tab1")}
          ></button>

          <button
            className={`flex-fill p-3 ${
              activeTab === "tab2"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            style={{
              border: "none",
              borderRadius: "0px",
              cursor: "pointer",
              padding: "12px 20px",

              transition:
                "background-color 0.3s ease, color 0.3s ease, padding 0.3s ease",
            }}
            onClick={() => setActiveTab("tab2")}
          ></button>

          <button
            className={`flex-fill p-3 ${
              activeTab === "tab3"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            style={{
              border: "none",
              cursor: "pointer",
              padding: "15px 20px",
              borderRadius: "0px",
              transition:
                "background-color 0.3s ease, color 0.3s ease, padding 0.3s ease",
            }}
            onClick={() => setActiveTab("tab3")}
          ></button>
        </div>
      </div>

      <div className="tab-content mt-4 text-center">
        <CSSTransition
          in={activeTab === "tab1"}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div>
            <img src={FactTab1} alt="Fact 1" />
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeTab === "tab2"}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div>
            <img src={FactTab2} alt="Fact 2" />
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeTab === "tab3"}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div>
            <img src={FactTab3} alt="Fact 3" />
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Facts;
