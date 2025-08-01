import React from "react";
import { motion } from "framer-motion";
import InHouseHeroImage from "../../../assets/InHouseHeroImage.png";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const line = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};
const textVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const InHouseHeroSection = () => {
  return (
    <div
      className="bg-PrimaryDarkBlue grid grid-cols-1 lg:grid-cols-2 items-center lg:min-h-0 min-h-[900px] lg:mt-0 gap-10 lg:gap-20 
   
    
    relative"
    >
      {/* Background Image for Mobile */}
      <div
        className="absolute inset-0 lg:hidden bg-cover bg-center opacity-20 z-0"
        style={{ backgroundImage: `url(${InHouseHeroImage})` }}
      ></div>

      {/* Text Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-white text-center lg:text-left flex flex-col items-center lg:items-start z-10     pr-6 md:pr-10 2xl:pr-24 

             pl-6 md:pl-10 2xl:pl-24 3xl:pl-32
4xl:pl-60 5xl:pl-80 6xl:pl-180
  7xl:pl-220 8xl:pl-240 9xl:pl-260
  10xl:pl-280 11xl:pl-300 12xl:pl-320
  13xl:pl-340 14xl:pl-360 15xl:pl-400
          py-6 sm:py-10 lg:py-20  "
      >
      

        <motion.h1
          variants={textVariant}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-anton uppercase leading-snug"
        >
          Talent Pool
        </motion.h1>

        <motion.p
          variants={line}
          className="text-base md:text-lg font-inter mt-4 "
        >
          At ADD BOOST 360 LIMITED, we believe talent knows no borders. Whether
          you're a designer in France, a marketer in the Philippines, or a coder
          in India, our Talent Pool Program offers a global platform to grow,
          create, and collaborate with a multicultural team that values
          creativity and innovation.
        </motion.p>
        <motion.p variants={line} className="font-inter mt-5">
          This isn't just remote work—it's a career launchpad. Through real
          projects, expert mentorship, and global exposure, freelancers gain
          purpose, visibility, and control over their growth. Join us and let
          your skills shape the future of business worldwide.
        </motion.p>
      </motion.div>

      {/* Image Section (Desktop Only) */}
      <motion.div
        variants={imageVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="hidden lg:block  z-10"
      >
        <img
          src={InHouseHeroImage}
          alt="Talent Pool"
          className=" w-full object-cover "
        />
      </motion.div>
    </div>
  );
};

export default InHouseHeroSection;
