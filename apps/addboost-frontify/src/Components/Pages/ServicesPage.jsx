import React from "react";
import ServiceHeroSection from "../Sections/ServicePage/ServiceHeroSection";
import ServiceList from "../Sections/ServicePage/ServiceList";
import ServiceSection from "../Sections/ServicePage/ServiceSection";

const ServicesPage = () => {
  return (
    <div>
      <ServiceHeroSection />
      <ServiceSection />
    </div>
  );
};

export default ServicesPage;
