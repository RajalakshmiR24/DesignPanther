import mobileUI from "../../../assets/images/mobile_ui_image.svg";
import websiteUI from "../../../assets/images/website_ui_image.svg";
import uxAudit from "../../../assets/images/ux_audit_image.svg";
import visualDesign from "../../../assets/images/visual_design_image.svg";
import brandingDesign from "../../../assets/images/branding_design_image.svg";

// Service Data
const services = [
  {
    id: 1,
    title: "Mobile UI/UX Design",
    imageSrc: mobileUI,
    altText: "Mobile UI/UX Design",
    shortDescription: "Mobile & Website Etc",
    description:
      "Expertly crafted mobile UI/UX designs to enhance usability and engagement for your apps.",
    image: mobileUI,

    research: [
      "Heuristic Analysis",
      "Design Audit",
      "Usability Testing",
      "UX Research",
    ],
    design: [
      "Digital Branding",
      "User Experience Design",
      "User Interface Design",
      "Interaction Design",
    ],
    build: ["Front-End Development", "Web Application", "Mobile Application"],
  },
  {
    id: 2,
    title: "Website UI/UX Design",
    imageSrc: websiteUI,
    altText: "Website UI/UX Design",
    shortDescription: "Mobile & Website Etc",
    description:
      "Transform your websites with seamless UI/UX designs that drive interaction and retention.",
    image: websiteUI,

    research: [
      "Heuristic Analysis",
      "Design Audit",
      "Usability Testing",
      "UX Research",
    ],
    design: [
      "Digital Branding",
      "User Experience Design",
      "User Interface Design",
      "Interaction Design",
    ],
    build: ["Front-End Development", "Web Application", "Mobile Application"],
  },
  {
    id: 3,
    imageSrc: uxAudit,
    altText: "UX Audit",
    title: "UX Audit",
    shortDescription: "Mobile & Website Etc",
    description:
      "Create a strong brand identity with our innovative branding strategies and visual elements.",
    image: uxAudit,

    research: [
      "Market Analysis",
      "Brand Positioning Research",
      "Competitor Analysis",
      "Audience Insights",
    ],
    design: [
      "Visual Identity Design",
      "Logo Creation",
      "Typography Selection",
      "Brand Guidelines",
    ],
    build: [
      "Marketing Collaterals",
      "Brand Strategy Implementation",
      "Online Branding Tools",
    ],
  },
  {
    id: 4,
    imageSrc: visualDesign,
    altText: "Visual Design",
    title: "Visual Design",
    shortDescription: "Mobile & Website Etc",
    description:
      "Bring your ideas to life with stunning visual designs that captivate and inspire audiences.",
    image: visualDesign,
    research: [
      "Visual Trend Analysis",
      "Color Psychology Studies",
      "Competitor Visual Reviews",
    ],
    design: [
      "Illustrations",
      "Custom Graphics",
      "Interactive Prototypes",
      "Presentation Designs",
    ],
    build: [
      "High-Resolution Assets",
      "Digital Product Graphics",
      "Print-Ready Designs",
    ],
  },
  {
    id: 5,
    imageSrc: brandingDesign,
    altText: "Branding Design",
    title: "Branding Design",
    shortDescription: "Mobile & Website Etc",
    description:
      "Professional video editing services to produce polished and engaging video content for your brand.",
    image: brandingDesign,
    research: ["Audience Analysis", "Storyboarding", "Video Content Research"],
    design: ["Motion Graphics", "Special Effects", "Transitions Design"],
    build: [
      "Export in Multiple Formats",
      "Platform Optimization",
      "Professional Audio Mixing",
    ],
  },
];

export default services;
