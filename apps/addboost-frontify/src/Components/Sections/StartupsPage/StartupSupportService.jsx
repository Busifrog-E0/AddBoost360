import React from "react";
import StartupSupportImage1 from "../../../assets/StartupSupportImage1.png";
import StartupSupportImage2 from "../../../assets/StartupSupportImage2.png";
import FillArrow from "../../../assets/FillArrow.png";
import Button from "../../Button";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

// Container with stagger
const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideImage = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const floatImage = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const StartupSupportService = () => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-BackgroundGradientleft grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start px-6 md:px-14 2xl:px-60 3xl:px-80 
      4xl:px-120 5xl:px-160 6xl:px-180
      7xl:px-220 8xl:px-240 9xl:px-260
      10xl:px-280 11xl:px-300 12xl:px-320
      13xl:px-340 14xl:px-360 15xl:px-400
      py-14 md:py-20 lg:py-36 
      4xl:py-48 5xl:py-56 6xl:py-64 7xl:py-72 
      8xl:py-80 9xl:py-96 10xl:py-112 
      11xl:py-128 12xl:py-144 13xl:py-160 
      14xl:py-180 15xl:py-200 "
    >
      {/* Left Column */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.p
          className="uppercase text-[#A8A8A8] font-arya text-sm mb-3"
          variants={fadeLeft}
        >
          FUELING YOUR BUSINESS DREAMS
        </motion.p>

        {/* Desktop image animation */}
        <div className="relative w-[260px] h-[340px] mx-auto lg:mx-0 hidden lg:block">
          <motion.img
            src={StartupSupportImage2}
            alt="Back"
            variants={slideImage}
            className="absolute top-0 left-0 w-[260px] h-[340px] object-cover rounded-md shadow-lg border-2 border-blue-200"
          />
          <motion.img
            src={StartupSupportImage1}
            alt="Front"
            variants={floatImage}
            className="absolute top-40 left-32 w-[240px] h-[240px] object-cover rounded-md shadow-xl border-2 border-white"
          />
        </div>

        {/* Mobile image animation */}
        <div className="lg:hidden flex justify-center items-center gap-4 mt-4">
          <motion.img
            src={StartupSupportImage2}
            alt="Back"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-40 h-56 object-cover rounded-md shadow-lg border-2 border-blue-200"
          />
          <motion.img
            src={StartupSupportImage1}
            alt="Front"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-40 h-40 object-cover rounded-md shadow-xl border-2 border-white"
          />
        </div>
      </motion.div>

      {/* Right Column */}
      <motion.div
        className="flex flex-col p-5 sm:p-8 md:p-10 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="font-anton text-xl md:text-2xl uppercase mb-4 text-white"
          variants={fadeLeft}
        >
          Startup Support Services
        </motion.h2>

        <motion.div variants={fadeUp}>
          <h3 className="font-anton text-base md:text-lg text-white ">
            Turn Your Business Idea into a Global Brand
          </h3>
          <p className="font-inter text-sm text-gray-400 mt-3 leading-relaxed">
            We guide you from concept to launch with full-spectrum startup
            solutions, combining digital strategy, product sourcing, and growth
            services.
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h4 className="font-anton text-base md:text-lg mb-4 text-white ">
            Our Startup Support Includes
          </h4>
          <div className="flex flex-col gap-4 ">
            {[
              "Business Identity Creation (Logo, Branding, Website)",
              "Social Media Setup & First Campaign Management",
              "Digital Growth Strategy for First 3-6 Months",
              "One-Month Free Marketing (with Full Package)",
              "Website or E-Commerce Store Setup",
              "Ongoing Business Mentorship",
            ].map((item, index) => (
              <motion.div
                className="flex items-start gap-2"
                key={index}
                variants={fadeUp}
              >
                <img src={FillArrow} alt="Arrow" className="w-4 mt-1" />
                <p className="font-inter text-sm text-gray-400">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="w-fit" variants={fadeUp}>
          <Button
            bgColor="bg-white"
            textColor="text-black"
            hoverBgColor="bg-gray-300"
            hoverTextColor="text-black"
            iconColor="black"
            onClick={() => navigate("/contact")}
            text="LAUNCH MY NEW BUSINESS"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StartupSupportService;
