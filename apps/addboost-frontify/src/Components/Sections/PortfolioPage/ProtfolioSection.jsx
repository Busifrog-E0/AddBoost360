import PortfoliList from "./PortfoliList";
import React, { useState } from "react";

const ProtfolioSection = () => {
  const [projects, setprojects] = useState([
    {
      id: 1,
      title: "E-commerce Launch - UK-Based Organic Skincare Brand",
      impactPoints: [
        "400% increase in organic traffic in 6 months",
        "Cross-border shipping integration",
        "One-month sales target met in 18 days",
      ],
      image:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      buttonText: "View Website",
      type: "Website Design, Branding, Social Media Marketing, Product Sourcing from India",
      linkToProject: "https://google.com",
    },
    {
      id: 2,
      title: "Empowerment Training - Marketing Team in Philippines",
      image:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      impactPoints: [
        "400% increase in organic traffic in 6 months",
        "Cross-border shipping integration",
        "One-month sales target met in 18 days",
      ],
      buttonText: "View Website",
      image:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      type: "Website Design, Branding, Social Media Marketing, Product Sourcing swapna from India",
      linkToProject: "https://google.com",
    },
    {
      id: 3,
      title: "Influencer Campaign - UAE Luxury Watch Brand",
      impactPoints: [
        "400% increase in organic traffic in 6 months",
        "Cross-border shipping integration",
        "One-month sales target met in 18 days",
      ],
      image:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      buttonText: "View Website",
      type: "Website Design, Branding, Social Media Marketing, Product rajath Sourcing from India",
      linkToProject: "https://www.savana.com/",
    },
  ]);
  return (
    <div>
      <div className="px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 md:py-20 lg:py-24 bg-pastelpink">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-arya uppercase  leading-snug">
          Featured Projects
        </h1>
        <PortfoliList howAllServicesButton={true} projects={projects} />
      </div>
    </div>
  );
};

export default ProtfolioSection;
