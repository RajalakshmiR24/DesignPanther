import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import "./FindYourService.css";
import { useEffect, useRef, useState, useMemo } from "react";
import UIUXDesign from "./Images/UIUXDesign.svg";
import BrandingDesign from "./Images/BrandingDesign.svg";
import GraphicsDesign from "./Images/GraphicDesign.svg";
import MarketingDesign from "./Images/MarketingDesign.svg";
import PesentationDecks from "./Images/PresentationDecks.svg";
import VideoEditing from "./Images/VideoEditing.svg";

const servicesData = [
  {
    img: UIUXDesign,
    title: "UI/UX Design",
    description:
      "Design Panther is your go-to destination for innovative design solutions",
  },
  {
    img: BrandingDesign,
    title: "Branding Design",
    description:
      "Design Panther is your go-to destination for innovative design solutions",
  },
  {
    img: GraphicsDesign,
    title: "Graphics Design",
    description:
      "Design Panther is your go-to destination for innovative design solutions",
  },
  {
    img: MarketingDesign,
    title: "Marketing Design",
    description:
      "Design Panther is your go-to destination for innovative design solutions",
  },
  {
    img: PesentationDecks,
    title: "Presentation Decks",
    description:
      "Design Panther is your go-to destination for innovative design solutions",
  },
  {
    img: VideoEditing,
    title: "Video Editing",
    description:
      "Design Panther is your go-to destination for innovative design solutions",
  },
  {
    img: VideoEditing,
    title: "Video Editing",
    description:
      "Design Panther is your go-to destination for innovative design solutions",
  },
  {
    img: BrandingDesign,
    title: "Branding Design",
    description:
      "Design Panther is your go-to destination for innovative design solutions",
  },
  {
    img: GraphicsDesign,
    title: "Graphics Design",
    description:
      "Design Panther is your go-to destination for innovative design solutions",
  },
];

const ServiceCard = ({ img, title, description }) => (
  <div className="serviceCard">
    <img
      className="imgfindYourService"
      src={img}
      alt={title}
      draggable="false"
    />
    <h3>{title}</h3>
    <span style={{ textAlign: "center" }}>{description}</span>
    <button
      style={{
        backgroundColor: "#000",
        color: "white",
        padding: "10px",
        margin: "10px",
      }}
    >
      Lets Chat
    </button>
  </div>
);

const FindYourService = () => {
  const [percentage, setPercentage] = useState(["0%", "-131%"]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setPercentage(["0%", "-1333%"]);
      } else {
        setPercentage(["0%", "-331%"]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollref = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollref });
  const x = useTransform(scrollYProgress, [0.04, 1.5], percentage);

  const serviceCards = useMemo(
    () =>
      servicesData.map((service, index) => (
        <ServiceCard
          key={index}
          img={service.img}
          title={service.title}
          description={service.description}
        />
      )),
    []
  );

  return (
    <div ref={scrollref} className="scroll-container">
      <div className="scroll-main">
        <div className="findservice-container">
          <h2 className="findservice-title">Find Your Service</h2>
        </div>
        <motion.section style={{ x }} className="tech-service">
          {serviceCards}
        </motion.section>
      </div>
    </div>
  );
};

export default FindYourService;
