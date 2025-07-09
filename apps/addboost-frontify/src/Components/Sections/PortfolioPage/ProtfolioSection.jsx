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
      image: "https://images.pexels.com/photos/3762876/pexels-photo-3762876.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // Skincare / e-commerce
      buttonText: "View Website",
      type: "Website Design, Branding, Social Media Marketing, Product Sourcing from India",
      linkToProject: "https://google.com",
    },
    {
      id: 2,
      title: "Empowerment Training - Marketing Team in Philippines",
      impactPoints: [
        "Up-skilled 20+ team members",
        "Real-time Meta Ads & Canva workshops",
        "Result: 2X engagement across campaigns",
      ],
      image: "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // Corporate training
      buttonText: "View Website",
      type: "Digital Training, Workshop, Marketing Tools Empowerment",
      linkToProject: "https://google.com",
    },
    {
      id: 3,
      title: "Influencer Campaign - UAE Luxury Watch Brand",
      impactPoints: [
        "100K+ influencer reach in 3 weeks",
        "Video ad ROI: 8.4x",
        "Brand awareness up by 260%",
      ],
      image: "https://images.pexels.com/photos/3616764/pexels-photo-3616764.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // Luxury watch influencer
      buttonText: "View Website",
      type: "Influencer Marketing, Paid Ads, UAE Market Penetration",
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
