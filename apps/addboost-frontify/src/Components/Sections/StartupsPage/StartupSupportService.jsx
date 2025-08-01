import React from "react";
import StartupSupportImage1 from "../../../assets/StartupSupportImage1.png";
import StartupSupportImage2 from "../../../assets/StartupSupportImage2.png";
import FillArrow from "../../../assets/FillArrow.png";
import Button from "../../Button";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

// Animation variants
const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const bounceRight = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      delay: 0.8,
    },
  },
};

const slideFadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const floatUp = {
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
      className="bg-BackgroundGradientleft grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start 
      px-6 md:px-10 2xl:px-24 3xl:px-32
4xl:px-60 5xl:px-80 6xl:px-180
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400

py-10 md:py-14 lg:py-20
4xl:py-24 5xl:py-28 6xl:py-32 7xl:py-36
8xl:py-40 9xl:py-44 10xl:py-48
11xl:py-52 12xl:py-56 13xl:py-60
14xl:py-64 15xl:py-72"
    >
      {/* Left Column */}
      <div>
        <p className="uppercase text-[#A8A8A8] font-arya text-sm mb-3">
          FUELING YOUR BUSINESS DREAMS
        </p>

        {/* Desktop Image Animation */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="relative w-[260px] h-[340px] mx-auto lg:mx-0 hidden lg:block"
        >
          <motion.img
            src={StartupSupportImage2}
            alt="Back"
            variants={slideFadeLeft}
            className="absolute top-0 left-0 w-[260px] h-[340px] object-cover rounded-md shadow-lg border-2 border-blue-200"
          />
          <motion.img
            src={StartupSupportImage1}
            alt="Front"
            variants={floatUp}
            className="absolute top-40 left-32 w-[240px] h-[240px] object-cover rounded-md shadow-xl border-2 border-white"
          />
        </motion.div>

        {/* Mobile stacked image */}
        <div className="lg:hidden flex justify-center items-center gap-4">
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
      </div>

      {/* Right Column */}
      <div>
        <h2 className="font-anton text-xl md:text-2xl uppercase mb-4 text-white ">
          existing business / startup support services
        </h2>

        <div className="flex flex-col p-5 sm:p-8 md:p-10 gap-6">
          {/* Heading & Paragraph */}
          <div>
            <h3 className="font-anton text-base md:text-lg text-white ">
              Turn Your Business Idea into a Global Brand
            </h3>
            <p className="font-inter text-sm text-gray-400 mt-3 leading-relaxed text-justify">
              We guide you from concept to launch with full-spectrum startup
              solutions, combining digital strategy, product sourcing, and
              growth services.
            </p>
          </div>

          {/* List */}
          <div>
            <h4 className="font-anton text-base md:text-lg mb-4 text-white ">
              Our Startup Support Includes
            </h4>
            <motion.div
              className="flex flex-col gap-4"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
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
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  <img src={FillArrow} alt="Arrow" className="w-4 mt-1" />
                  <p className="font-inter text-sm text-gray-400">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Button */}
          <motion.div
            className="w-fit"
            variants={bounceRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Button
              bgColor="bg-white"
              textColor="text-black"
              hoverBgColor="bg-gray-300"
              hoverTextColor="text-black"
              iconColor="black"
              onClick={() => navigate("/contact/Startup Launch & Product Sourcing")}
              text="LAUNCH MY NEW BUSINESS"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StartupSupportService;
