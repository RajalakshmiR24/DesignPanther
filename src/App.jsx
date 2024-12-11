import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import PricePage from "./components/Price/PricePage";
import "./index.css";
import Footer from "./components/Footer/Footer";
import { AnimatedCursor } from "./common/AnimatedCursor";

function Layout({ children }) {
  return (
    <>
      <CustomNavbar />
      <main>{children}</main>
    </>
  );
}

function App() {
  return (
    <>
      {/* <AnimatedCursor /> */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <section id="home">
                  <Home />
                </section>
                <section id="services">
                  <Services />
                </section>
                <section id="blogs">
                  <Blogs />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </Layout>
            }
          />

          {/* Price Page Route */}
          <Route
            path="/price"
            element={
              <Layout>
                <PricePage />
              </Layout>
            }
          />
        </Routes>
      </Router>
      {/* </AnimatedCursor> */}
    </>
  );
}

export default App;
