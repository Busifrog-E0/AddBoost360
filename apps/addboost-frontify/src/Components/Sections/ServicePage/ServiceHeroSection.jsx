import React from "react";
import ServiceHeroImage from "../../../assets/ServiceHeroImage.png";

const ServiceHeroSection = () => {
  return (
    <div className="bg-lightblack grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Text Section */}
      <div className="relative">
        {/* Background image only on mobile */}
        <div
          className="absolute inset-0 lg:hidden bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${ServiceHeroImage})`,
            opacity: 0.7,
          }}
        ></div>

        {/* Text Content */}
        <div className="relative z-10 p-6 sm:p-10 md:p-20 lg:p-20 text-white flex flex-col items-center text-center justify-center min-h-screen lg:items-start lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-garamond font-bold uppercase leading-snug">
            Smart Solutions to Launch, Scale, and Empower Your Business
          </h1>
          <p className="text-sm sm:text-base font-inter mt-8">
            At ADD BOOST 360 LIMITED, we provide end-to-end digital
            solutions—from marketing and web development to product sourcing and
            startup support—to drive global growth and impact.
          </p>
        </div>
      </div>

      {/* Image Section - No padding applied */}
      <div className="hidden lg:block">
        <img
          src={ServiceHeroImage}
          alt="Hero"
          className="w-full h-full object-cover block"
        />
      </div>
    </div>
  );
};

export default ServiceHeroSection;
