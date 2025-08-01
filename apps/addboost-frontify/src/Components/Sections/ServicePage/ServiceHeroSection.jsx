import React from "react";
import ServiceHeroImage from "../../../assets/ServiceHeroImage.png";
import { motion } from "framer-motion";
import ScrollToBottom from "../../ScrollToBottom";
import StartupHeroImg from "../../../assets/StartupHeroImg.png";

const ServiceHeroSection = () => {
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

  return (
    <>
      <div>
        <div className="bg-PrimaryDarkBlue grid grid-cols-1 lg:grid-cols-2 h-[100svh] relative">
          {/* Top Gradient to show Header clearly */}
          <div className="absolute top-0 left-0 w-full h-60 z-10 bg-gradient-to-b from-black/80 via-black/10 to-transparent pointer-events-none" />
          {/* Text Section */}
          <div className="">
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
          pr-6 md:pr-10 2xl:pr-24 

             pl-6 md:pl-10 2xl:pl-24 3xl:pl-32
4xl:pl-60 5xl:pl-80 6xl:pl-180
  7xl:pl-220 8xl:pl-240 9xl:pl-260
  10xl:pl-280 11xl:pl-300 12xl:pl-320
  13xl:pl-340 14xl:pl-360 15xl:pl-400
          py-6 sm:py-10 lg:py-20 
          text-white flex flex-col items-center text-center justify-center min-h-screen lg:items-start lg:text-left"
            >
              {/* Title - Line by line animation */}
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-anton uppercase leading-snug space-y-2">
                <motion.p variants={line}>
                  Smart Solutions to Launch,Scale,and Empower Your Business
                </motion.p>
              </div>

              {/* Description - Line by line animation */}
              <div className="text-base md:text-lg font-inter mt-8 space-y-2 text-justify">
                <motion.p variants={line}>
                  At ADD BOOST 360 LIMITED, we provide end-to-end digital
                  solutions— from marketing and web development to product
                  sourcing and startup support—to drive global growth and
                  impact.
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Desktop Image */}
          {/* <motion.div
            variants={imageAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="hidden lg:block"
          >
            <img
              src={ServiceHeroImage}
              alt="Hero"
              className="w-full h-full object-cover block"
            />
          </motion.div> */}

          <motion.div
            variants={imageAnim}
            initial="hidden"
            animate="show"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="hidden lg:block w-full h-[100svh]"
          >
            <motion.img
              src={ServiceHeroImage}
              alt="Hero"
              className="w-full h-full object-cover block"
              variants={imageAnim}
            />
          </motion.div>

          {/* ScrollToBottom */}
          <ScrollToBottom backgroundClassName="" />
        </div>
      </div>

      {/* 


      <div className="bg-PrimaryDarkBlue grid grid-cols-1 lg:grid-cols-2 min-h-screen relative">
      

        <ScrollToBottom />
      </div> */}
    </>
  );
};

export default ServiceHeroSection;
