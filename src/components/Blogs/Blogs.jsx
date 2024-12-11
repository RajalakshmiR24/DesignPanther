import React, { useEffect } from "react";
import "./Blogs.css";
import AOS from "aos";

const Blogs = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      // once: true,
    });
  }, []);
  return (
    <div data-aos="fade-down">
      <div className="blogs-section">
        <h2 className="blogs-title">Blogs</h2>

        <p className="blogs-description">
          Stay updated with our latest articles and design trends.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
