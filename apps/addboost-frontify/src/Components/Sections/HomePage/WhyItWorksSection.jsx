import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import Button from "../../Button";

import WhyItWorks1 from "../../../assets/WhyItWorkSectionIcon/WhyItWorks1.png";
import WhyItWorks2 from "../../../assets/WhyItWorkSectionIcon/WhyItWorks2.png";
import WhyItWorks3 from "../../../assets/WhyItWorkSectionIcon/WhyItWorks3.png";
import WhyItWorks4 from "../../../assets/WhyItWorkSectionIcon/WhyItWorks4.png";
import WhyItWorksHome from "../../../assets/WhyItWorkSectionIcon/WhyItWorksHome.jpg";



const WhyItWorksSection = () => {
  const navigate = useNavigate();

  const processes = [
    {
      number: "01",
      title: "Faster & safer business deals",
      description:
        "Our platform connects you with pre vetted, legally contracted suppliers and uses an escrow system, so you can source goods quickly while minimising risk.",
    },
    {
      number: "02",
      title: "Legally protected contracts",
      description:
        "Every transaction is backed by a formal contract that defines quality, delivery and return terms, giving you clear legal protection and peace of mind.",
    },
    {
      number: "03",
      title: "Real-time product confirmation",
      description:
        "You can schedule live video sessions with suppliers to inspect products, ask questions and confirm quality before any payment is released.",
    },
  ];

  const steps = [
    {
      icon: WhyItWorks1,
      text: "Schedule a live session with a verified supplier.",
    },
    {
      icon: WhyItWorks2,
      text: "Review, confirm, and negotiate product details.",
    },
    {
      icon: WhyItWorks3,
      text: "Funds are transferred to ADD BOOST 360 (Escrow).",
    },
    {
      icon: WhyItWorks4,
      text: "Delivery & payment release",
    },
  ];

  return (
    <div
      className="bg-PrimaryDarkBlue
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
    "
    >
      {/* Heading */}
      <motion.div
        className="flex flex-col gap-4 md:text-center md:items-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-[#76B0FF] font-inter text-base 2xl:text-lg">
          Direct Deals with Trusted Global Suppliers
        </p>
        <h1 className="uppercase text-3xl 2xl:text-5xl font-anton text-PrimaryWhite">
          wholesale business hub
        </h1>

        {/* Subtext */}
        <motion.p
          className="text-sm sm:text-base md:text-sm font-inter  leading-relaxed text-white "
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We connect startups with legally contracted wholesale companies across
          continents through conferencing and escrow-backed platform.
        </motion.p>
      </motion.div>

      {/* Steps */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-10 text-center py-14 relative">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col justify-between items-center h-full py-6 px-4 md:px-10 rounded-lg bg-black/20 border border-black/20"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center gap-3">
              <img
                src={step.icon}
                alt={`Step ${index + 1}`}
                className="w-8 h-8"
              />
              <p className="font-arya uppercase text-lg lg:text-xl text-white leading-snug">
                {step.text}
              </p>
            </div>
            <div className="relative mt-6">
              <div className="w-9 h-9 rounded-full bg-white/10 shadow-md flex items-center justify-center text-white font-inter text-sm z-10">
                {index + 1}
              </div>
              {index !== 3 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-[calc(100%-36px)] h-[2px] bg-gray-300 translate-y-[-50%] z-0"></div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Why It Works Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-16 items-start ">
        {/* Text */}
        <div className="px-4 sm:px-6 md:px-8">
          <motion.h2
            className="uppercase font-anton text-xl sm:text-4xl text-PrimaryWhite"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why It Works
          </motion.h2>

          <motion.p
            className="font-inter text-sm sm:text-base mt-4 sm:mt-6 leading-relaxed text-white"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We know just how hard it can be to find the right video agency, so
            here's how we make this easy:
          </motion.p>

          <div className="flex flex-col gap-6 mt-6 sm:mt-8 p-2 md:p-4 lg:p-6">
            {processes.map((point, index) => (

              <motion.div
                key={index}
                className="flex flex-col"
                initial={{ rotateY: 90, opacity: 0 }}
                whileInView={{ rotateY: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >

                <span className="text-xl font-arya text-white">
                  {point.number}
                </span>
                <p className="capitalize font-anton text-lg sm:text-2xl mt-1 text-PrimaryWhite">
                  {point.title}
                </p>
                <p className="font-inter text-xs sm:text-sm mt-1 text-white md:pr-0 lg:pr-36 text-justify ">
                  {point.description}
                </p>
              </motion.div>
            ))}

            {/* Button */}
            <motion.div
              className="flex items-center mt-6 sm:mt-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={() => navigate("/contact")}
                text="Meet Global Suppliers"
                bgColor="bg-white"
                textColor="text-black"
                iconColor="black"
                hoverBgColor="bg-gray-300"
                hoverTextColor="text-black"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          className="flex justify-end mt-10 md:mt-0"
          initial={{ scale: 0.8, rotate: -2, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={WhyItWorksHome}
            alt="Live Session"
            className="w-full md:w-4/5  rounded-md"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WhyItWorksSection;
