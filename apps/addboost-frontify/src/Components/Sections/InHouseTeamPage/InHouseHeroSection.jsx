import React from "react";
import InHouseHeroImage from "../../../assets/InHouseHeroImage.png";
import noice from '../../../assets/Bg/noice1.jpg';

const InHouseHeroSection = () => {
  return (
    <div
      className="bg-PrimaryDarkBlue bg-cover bg-blend-overlay grid grid-cols-1 lg:grid-cols-2 items-center lg:min-h-0 min-h-[900px] lg:mt-0 gap-10 lg:gap-20 px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 pt-32 md:py-20 md:pt-40 lg:py-28 lg:pt-44 relative"
      style={{ backgroundImage: `url(${noice})` }}
    >
      {/* Background Image for Mobile */}
      <div
        className="absolute inset-0 lg:hidden bg-cover bg-center opacity-20 z-0"
        style={{ backgroundImage: `url(${InHouseHeroImage})` }}
      ></div>

      {/* Text Section */}
      <div className="text-white text-center lg:text-left flex flex-col items-center lg:items-start">
        <p className="font-inter font-semibold text-sm mb-2 text-gray-300 italic">
          Collaborate. Learn. Grow.
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-anton uppercase leading-snug ">
          In-house Team
        </h1>
        <p className="text-base md:text-lg font-inter mt-6 text-gray-300">
          Join Our Global Talent Network & Empower the Digital Future
        </p>
      </div>
      {/* Image Section (Desktop Only) */}
      <div className="hidden lg:block h-[560px]">
        <img
          src={InHouseHeroImage}
          alt="In-house team"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default InHouseHeroSection;
