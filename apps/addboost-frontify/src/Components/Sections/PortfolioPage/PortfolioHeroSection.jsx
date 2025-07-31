import React from "react";
import { motion } from "framer-motion";
import ProtfolioHeroImage from "../../../assets/ProtfolioHeroImage.png";
import ProtfolioImage from "../../../assets/ProtfolioImage.png";

const line = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: i * 0.5, // delay each line
    },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 0.6,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.5, // comes after the last text line
    },
  },
};

const PortfolioHeroSection = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 bg-lightblack lg:bg-transparent items-center gap-10 lg:gap-20 h-[900px] lg:min-h-[650px] lg:h-auto 
        px-6 md:px-10 2xl:px-24 3xl:px-32
4xl:px-60 5xl:px-80 6xl:px-180
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400

py-10 md:py-14 lg:py-20
4xl:py-24 5xl:py-28 6xl:py-32 7xl:py-36
8xl:py-40 9xl:py-44 10xl:py-48
11xl:py-52 12xl:py-56 13xl:py-60
14xl:py-64 15xl:py-72
        relative"
      >
        {/* Background Image for Mobile */}
        <div
          className="absolute inset-0 lg:hidden bg-cover bg-center opacity-50 z-0"
          style={{ backgroundImage: `url(${ProtfolioImage})` }}
        ></div>

        {/* Text Section */}
        <div className="relative z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.p
            className="font-inter font-semibold text-sm mb-2 text-white lg:text-gray-400 italic"
            variants={line}
            initial="hidden"
            animate="show"
            custom={0}
          >
            Proven Projects. Global Impact. Digital Excellence.
          </motion.p>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-anton uppercase leading-snug text-white"
            variants={line}
            initial="hidden"
            animate="show"
            custom={1}
          >
            Our Portfolio
          </motion.h1>

          <motion.p
            className="font-inter text-base md:text-lg font-inter mt-6 max-w-xl text-white"
            variants={line}
            initial="hidden"
            animate="show"
            custom={2}
          >
            Bold ideas. Smart execution. Explore how we transform vision into
            impactful digital experiences.
          </motion.p>
        </div>

        {/* Image Section (Desktop Only) with Animation */}
        <motion.div
          className="hidden lg:block relative w-[300px] h-[350px]"
          variants={imageVariants}
          initial="hidden"
          animate="show"
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioHeroSection;
