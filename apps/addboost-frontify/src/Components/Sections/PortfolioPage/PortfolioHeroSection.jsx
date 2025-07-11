import React from "react";
import ProtfolioHeroImage from "../../../assets/ProtfolioHeroImage.png";
import ProtfolioImage from "../../../assets/ProtfolioImage.png";
import Pink from "../../../assets/Pink.webp"; // ✅ your background image

const PortfolioHeroSection = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Pink})` }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-lightblack lg:bg-transparent items-center gap-10 lg:gap-20 h-[900px] lg:min-h-[650px] lg:h-auto px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 md:py-20 lg:py-24 relative">
        {/* Background Image for Mobile */}
        <div
          className="absolute inset-0 lg:hidden bg-cover bg-center opacity-50 z-0"
          style={{ backgroundImage: `url(${ProtfolioImage})` }}
        ></div>

        {/* Text Section */}
        <div className="relative z-10  text-center lg:text-left flex flex-col items-center lg:items-start">
          <p className="font-inter font-semibold text-sm mb-2 text-white lg:text-black">
            Proven Projects. Global Impact. Digital Excellence.
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-libre uppercase leading-snug  text-white lg:text-black">
            Our Portfolio
          </h1>
          <p className="font-inter text-sm sm:text-base font-lato mt-6 max-w-xl  text-white lg:text-black">
            We power global success through bold branding, smart digital
            campaigns, and AI-driven websites—built with creativity, strategy,
            and innovation.
          </p>
        </div>

        {/* Image Section (Desktop Only) */}
        <div className="hidden lg:block relative w-[300px] h-[350px]">
          {/* Back Image */}
          <img
            src={ProtfolioImage}
            alt="Back"
            className="absolute top-0 left-0 w-[260px] h-[340px] object-cover rounded-md shadow-lg border-2 border-blue-200"
          />

          {/* Front Image */}
          <img
            src={ProtfolioHeroImage}
            alt="Front"
            className="absolute top-40 left-32 w-[240px] h-[240px] object-cover rounded-md shadow-xl border-2 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeroSection;
