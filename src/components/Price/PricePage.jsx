import React from "react";
import { AiOutlineCheck } from "react-icons/ai"; // Import the checkmark icon
import "./PricePage.css";

const PricePage = () => {
  return (
    <div className="price-page">
      <div className="container">
        <h1 className="text-center">Monthly Subscription</h1>
        <p className="text-center">
          Design Panther is your go-to destination for innovative design
          solutions.
        </p>
        <div className="pricing-cards">
          {/* Pricing Card 1 */}
          <div className="card">
            <h3>Basic</h3>
            <p> &#8377;500 / month</p>
            <ul>
              <li>
                <span className="icon">
                  <AiOutlineCheck />
                </span>
                5 Design Requests
              </li>
              <li>
                <span className="icon">
                  <AiOutlineCheck />
                </span>
                24/7 Support
              </li>
              <li>
                <span className="icon">
                  <AiOutlineCheck />
                </span>
                2 Revisions per Design
              </li>
            </ul>
            <button className="btn">Get Started</button>
          </div>

          {/* Pricing Card 2 */}
          <div className="card">
            <h3>Pro</h3>
            <p> &#8377;2000 / month</p>
            <ul>
              <li>
                <span className="icon">
                  <AiOutlineCheck />
                </span>
                Unlimited Design Requests
              </li>
              <li>
                <span className="icon">
                  <AiOutlineCheck />
                </span>
                Priority Support
              </li>
              <li>
                <span className="icon">
                  <AiOutlineCheck />
                </span>
                Unlimited Revisions
              </li>
            </ul>
            <button className="btn">Get Started</button>
          </div>

          {/* Pricing Card 3 */}
          <div className="card">
            <h3>Enterprise</h3>
            <p>Custom Pricing</p>
            <ul>
              <li>
                <span className="icon">
                  <AiOutlineCheck />
                </span>
                Custom Design Solutions
              </li>
              <li>
                <span className="icon">
                  <AiOutlineCheck />
                </span>
                Dedicated Design Team
              </li>
              <li>
                <span className="icon">
                  <AiOutlineCheck />
                </span>
                Custom Support Packages
              </li>
            </ul>
            <button className="btn">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricePage;
