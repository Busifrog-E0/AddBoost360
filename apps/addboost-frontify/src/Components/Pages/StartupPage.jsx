import React from "react";
import StartupHeroSection from "../Sections/StartupsPage/StartupHeroSection";
import NewBusinessStartupSection from "../Sections/StartupsPage/NewBusinessStartupSection";
import StartupSupportService from "../Sections/StartupsPage/StartupSupportService";
import StartupsSection from "../Sections/StartupsPage/StartupsSection";
import GlobalWholesale from "../Sections/StartupsPage/GlobalWholesale";

const StartupPage = () => {
  return (
    <div>
      <StartupHeroSection />
      {/* <StartupsSection /> */}
      <GlobalWholesale />
      <NewBusinessStartupSection />
      <StartupSupportService />
    </div>
  );
};

export default StartupPage;
