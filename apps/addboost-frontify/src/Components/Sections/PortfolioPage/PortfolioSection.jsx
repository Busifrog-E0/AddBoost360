import PortfoliList from "./PortfoliList";
import React, { useState } from "react";

const PortfolioSection = () => {
  const [projects, setprojects] = useState([
    {
      id: 1,
      title: "E-commerce Launch - UK-Based Organic Skincare Brand",
      impactPoints: [
        "400% increase in organic traffic in 6 months",
        "Cross-border shipping integration",
        "One-month sales target met in 18 days",
      ],
      image: "https://images.pexels.com/photos/3762876/pexels-photo-3762876.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      buttonText: "View Website",
      type: "Website Design, Branding, Social Media Marketing, Product Sourcing from India",
      linkToProject: "https://google.com",
    },
    {
      id: 2,
      title: "AI Chatbot & Automation - Dubai Real Estate Agency",
      impactPoints: [
        "Reduced response time by 80%",
        "Converted 2x more leads with automated follow-ups",
        "24/7 virtual support improved client satisfaction",
      ],
      image: "https://images.pexels.com/photos/8031872/pexels-photo-8031872.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      buttonText: "View Project",
      type: "AI Integration, Lead Automation, WhatsApp Chatbot, CRM Setup",
      linkToProject: "https://google.com",
    },
    {
      id: 3,
      title: "Empowerment Training - Marketing Team in Philippines",
      impactPoints: [
        "Trained 15+ staff to manage their brand's marketing",
        "Social media ads optimized internally",
        "Saved over £1,500 in outsourced costs within 3 months",
      ],
      image: "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      buttonText: "Download Course Outline",
      type: "Live SEO, Meta Ads & Canva Masterclass for Local Startup",
      linkToProject: "https://google.com",
    },
    {
      id: 4,
      title: "Influencer Campaign - UAE Luxury Watch Brand",
      impactPoints: [
        "Partnered with 4 key regional influencers",
        "250% ROI on campaign",
        "1200+ new followers in 10 days",
      ],
      image: "https://images.pexels.com/photos/19387226/pexels-photo-19387226.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      buttonText: "See Campaign Results",
      type: "Influencer Marketing, Paid Ads, Content Creation",
      linkToProject: "https://google.com",
    },
  ]
  );
  return (
    <div>
      <div className="px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 md:py-20 lg:py-24 bg-pastelpink">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-garamond uppercase leading-snug font-bold">
          Featured Projects
        </h1>
        <PortfoliList howAllServicesButton={true} projects={projects} />
      </div>
    </div>
  );
};

export default PortfolioSection;
