import React from "react";
import WhyJoinSection from "../Sections/InHouseTeamPage/WhyJoinSection";
import CategoriesSection from "../Sections/InHouseTeamPage/CategoriesSection";
import InHouseHeroSection from "../Sections/InHouseTeamPage/InHouseHeroSection";
import EmployeesSection from "../Sections/InHouseTeamPage/EmployeesSection";
import DescriptionSection from "../Sections/InHouseTeamPage/DescriptionSection";

const Inhousepage = () => {
  return (
    <div className="">
      <InHouseHeroSection />
      <EmployeesSection />
      <CategoriesSection />
      <WhyJoinSection />
      <DescriptionSection />
    </div>
  );
};

export default Inhousepage;
