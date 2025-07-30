import React from "react";
import ServiceHeroImage from "../../../assets/ServiceHeroImage.png";
import { motion } from "framer-motion";

const ServiceHeroSection = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const line = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // much slower
        ease: "easeInOut", // smooth in & out
      },
    },
  };

  return (
    <div className="bg-PrimaryDarkBlue grid grid-cols-1 lg:grid-cols-2 min-h-screen">
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
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 
        pr-6 md:pr-14 xl:pr-28
         pl-6 md:pl-14 2xl:pl-60 3xl:pl-80 
  4xl:pl-120 5xl:pl-160 6xl:pl-180
  7xl:pl-220 8xl:pl-240 9xl:pl-260
  10xl:pl-280 11xl:pl-300 12xl:pl-320
  13xl:pl-340 14xl:pl-360 15xl:pl-400
   py-6 sm:py-10 lg:py-20 
        text-white flex flex-col items-center text-center justify-center min-h-screen lg:items-start lg:text-left"
        >
          {/* Title */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-anton uppercase leading-snug">
            <motion.div variants={line}>
              Smart Solutions to Launch, Scale, and Empower Your Business
            </motion.div>
          </div>

          {/* Description */}
          <div className="text-base md:text-lg font-inter mt-8 space-y-1">
            <motion.p variants={line}>
              At ADD BOOST 360 LIMITED, we provide end-to-end digital
              solutions—from marketing and web development to product sourcing
              and startup support—to drive global growth and impact.
            </motion.p>
          </div>
        </motion.div>
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
