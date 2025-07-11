import React from "react";
import StartupHeroImg from "../../../assets/StartupHeroImg.png";

const StartupHeroSection = () => {
  return (
    <div>
      <div className="bg-lightblack grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Text Section */}
        <div className="relative">
          {/* Background image only on mobile */}
          <div
            className="absolute inset-0 lg:hidden bg-cover bg-center z-0 w-full h-[100vh] overflow-hidden"
            style={{
              backgroundImage: `url(${StartupHeroImg})`,

              opacity: 0.2,
            }}
          ></div>

          {/* Text Content */}
          <div className="relative z-10 p-6 sm:p-10 md:p-20 lg:p-20  text-white flex flex-col items-center text-center justify-center min-h-screen lg:items-start lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-libre uppercase leading-snug">
              Startups & Global Sourcing
            </h1>
            <p className="text-lg sm:text-lg font-inter mt-8">
              Empowering New Businesses with Products, Strategy & Security
            </p>
          </div>
        </div>

        {/* Image Section - No padding applied */}
        <div className="hidden lg:block">
          <img
            src={StartupHeroImg}
            alt="Hero"
            className="w-full h-full object-cover block"
          />
        </div>
      </div>
    </div>
  );
};

export default StartupHeroSection;
