import React, { useState } from "react";
import ServiceList from "./ServiceList";

const ServiceSection = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "DIGITAL MARKETING & GROWTH CAMPAIGNS",
      subtitle: "Our Services Include:",
      description:
        "Turn Clicks into Clients. Globally. Effectively. We drive traffic, leads, and conversions through proven, ROI-focused strategies.",
      buttonText: "LET'S GROW YOUR AUDIENCE",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      services: [
        "Search Engine Optimization (SEO)",
        "Paid Media (PPC/Google Ads)",
        "Social Media Marketing (Facebook, Instagram, TikTok, LinkedIn)",
        "Influencer & Affiliate Campaigns",
        "Content Strategy & Blogging",
        "Marketing Automation",
      ],
    },
    {
      id: 2,
      title: "WEBSITE DEVELOPMENT & E-COMMERCE SOLUTIONS",
      subtitle: "We Offer:",
      description:
        "Websites That Work - Beautiful, Functional, and Fast. We design, develop, and maintain secure, scalable, and high-converting websites.",
      buttonText: "BUILD MY WEBSITE NOW",
      image: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      services: [
        "Business Websites & Landing Pages",
        "E-Commerce & WebCommerce Stores",
        "Catalog & Portfolio Sites",
        "Mobile-Optimized SEO-First-Design Development",
        "Payment Gateway Integration",
        "Hosting, Maintenance & Cybersecurity",
      ],
    },
    {
      id: 3,
      title: "AI & SMART TECH INTEGRATION",
      subtitle: "Our AI Services:",
      description:
        "Smarter Workflows. Instant Engagement. Powerful Insights. Automate, optimize, and scale your operations using advanced AI solutions.",
      buttonText: "GET AI WORKING FOR YOU",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      services: [
        "Chatbot Development",
        "AI-Powered Analytics",
        "Predictive Algorithms for Marketing & Sales",
        "Automation Pipelines",
        "AI Tools for Content & Campaign Creation",
        "CRM & Analytics Integration",
      ],
    },
    {
      id: 4,
      title: "BRANDING & CREATIVE IDENTITY",
      subtitle: "What We Deliver:",
      description:
        "Design That Inspires Trust and Loyalty. We help you stand out with a brand that reflects who you are and what you believe in.",
      buttonText: "CRAFT MY BRAND IDENTITY",
      image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      services: [
        "Logo Design",
        "Visual Identity (Color, Fonts, Icons, Templates)",
        "Social Media Branding",
        "Visual Strategy & Direction",
        "Packaging & Promotional Assets",
      ],
    },
    {
      id: 5,
      title: "STARTUP PRODUCT SOURCING & ESCROW SERVICES",
      subtitle: "Includes:",
      description:
        "Launch Your Store with Confidence. We handle the rest. We support startups with sourcing, supplier negotiation, and purchase management.",
      buttonText: "SOURCE PRODUCTS SAFELY",
      image: "https://images.pexels.com/photos/4483776/pexels-photo-4483776.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      services: [
        "Global Wholesale Product Sourcing (China, India, UAE, etc.)",
        "Verified Suppliers: Marketplace Verified Connections",
        "Secure Supplier Matching + Final Selection",
        "Logistics Coordination + Flexible dispatch or even delivery",
        "Custom Contracts with Suppliers on Quality & Protection",
        "Free One-Month Marketing Support (with Full Package)",
      ],
    },
    {
      id: 6,
      title: "DIGITAL MARKETING TRAINING & EMPOWERMENT",
      subtitle: "Available Trainings:",
      description:
        "Learn From Experts. Take Control of Your Digital Future. We provide hands-on training for corporations, teams, and freelancers.",
      buttonText: "BUILD MY WEBSITE NOW",
      image: "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      services: [
        "Masterclasses in SEO, social media, Email Marketing",
        "Live Projects Through Applications (Canva, Meta Ads, etc.)",
        "Customized Team Workshops",
        "Ongoing Support & Mentorship",
      ],
    },
    {
      id: 7,
      title: "FREELANCER NETWORK & OUTSOURCING PROGRAM",
      subtitle: "Two Categories:",
      description:
        "Top Talent. Global Reach. On Your Terms. We match businesses with high-performing freelancers or train their in-house team.",
      buttonText: "LET'S GROW YOUR AUDIENCE",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      services: [
        "Remote Freelancers: Developers, Designers, SEO Experts, Marketers",
        "Internship Talent: Young professionals with core tech & digital tools",
      ],
    },
  ]);

  return (
    <div className="px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 md:py-20 lg:py-24">
      <ServiceList howAllServicesButton={true} services={services} />
    </div>
  );
};

export default ServiceSection;
