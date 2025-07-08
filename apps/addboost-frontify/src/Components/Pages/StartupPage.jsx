import React from "react";
import StartupHeroSection from "../Sections/StartupsPage/StartupHeroSection";
import NewBusinessStartupSection from "../Sections/StartupsPage/NewBusinessStartupSection";
import StartupSupportService from "../Sections/StartupsPage/StartupSupportService";
import StartupsSection from "../Sections/StartupsPage/StartupsSection";

const StartupPage = () => {
  return (
    <div>
      <StartupHeroSection />
      <StartupsSection />
      <NewBusinessStartupSection />
      <StartupSupportService />
    </div>
  );
};

export default StartupPage;
