import React from "react";
import { motion } from "framer-motion";
import StartupHeroImg from "../../../assets/StartupHeroImg.png";
import ScrollToBottom from "../../ScrollToBottom";

const StartupHeroSection = () => {
  const imageAnim = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: "easeOut",
      },
    },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
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

  return (
    <div>
      <div className="bg-PrimaryDarkBlue grid grid-cols-1 lg:grid-cols-2 min-h-screen relative">
        {/* Top Gradient to show Header clearly */}
        <div className="absolute top-0 left-0 w-full h-60 z-10 bg-gradient-to-b from-black/80 via-black/10 to-transparent pointer-events-none" />
        {/* Text Section */}
        <div className="relative">


          {/* Mobile Background Image */}
          <div
            className="absolute inset-0 lg:hidden bg-cover bg-center z-0 w-full h-[100svh] overflow-hidden"
            style={{
              backgroundImage: `url(${StartupHeroImg})`,
              opacity: 0.2,
            }}
          ></div>

          {/* Text Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative z-10 pr-6 md:pr-14 xl:pr-28
            pl-6 md:pl-14 2xl:pl-60 3xl:pl-80 4xl:pl-120 5xl:pl-160
            6xl:pl-180 7xl:pl-220 8xl:pl-240 9xl:pl-260 10xl:pl-280
            11xl:pl-300 12xl:pl-320 13xl:pl-340 14xl:pl-360 15xl:pl-400
            py-6 sm:py-10 lg:py-20 text-white flex flex-col items-center
            text-center justify-center min-h-screen lg:items-start lg:text-left"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-anton uppercase leading-snug">
              <motion.p variants={line}>Startups & Global Sourcing</motion.p>
            </div>

            <div className="text-base md:text-lg font-inter mt-8">
              <motion.p variants={line}>
                Empowering New Businesses with Products, Strategy & Security
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Desktop Image */}
        <motion.div
          variants={imageAnim}
          initial="hidden"
          animate="show"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="hidden lg:block"
        >
          <motion.img
            src={StartupHeroImg}
            alt="Hero"
            className="w-full h-full object-cover block"
            variants={imageAnim}
          />
        </motion.div>

        {/* ScrollToBottom */}
        <ScrollToBottom backgroundClassName="lg:bg-PrimaryDarkBlue/70" />
      </div>
    </div>
  );
};

export default StartupHeroSection;
