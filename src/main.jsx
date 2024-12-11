import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import AOS from "aos";

const AppWithAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      // once: true,
    });
  }, []);

  return (
    <React.StrictMode>
      <div data-aos="zoom-out">
        <App />
      </div>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppWithAOS />);