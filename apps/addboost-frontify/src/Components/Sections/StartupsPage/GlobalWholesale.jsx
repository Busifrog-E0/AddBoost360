import React from "react";
import { motion } from "framer-motion";
import FillArrow from "../../../assets/FillArrow.png";
import Button from "../../Button";
import StartupHeroImg from "../../../assets/StartupHeroImg.png";

const GlobalWholesale = () => {
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

  const flipY = {
    hidden: { opacity: 0, rotateY: -90 },
    show: {
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
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
  return (
    <div>
      <div
        className="bg-BackgroundGradientleft  grid grid-cols-1 lg:grid-cols-2 items-center 
     "
      >
        {/* Left Column */}
        <div className="">
          {/* Right Image */}
          <motion.div className=" h-full w-full" variants={flipY}>
            <img
              src={StartupHeroImg}
              alt="black"
              className="w-full h-full  object-cover "
            />
          </motion.div>
        </div>

        {/* Right Column */}
        <div
          className="  px-6 md:px-10 2xl:px-24 3xl:px-32
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
          <h2 className="font-anton text-xl md:text-4xl  md:mb-2 text-white ">
            Global Wholesale Sourcing Made Simple
          </h2>

          <div className="flex flex-col p-5 sm:p-8 md:p-2 gap-6">
            {/* Heading & Paragraph */}
            <div>
              <p className="font-inter text-lg md:text-xl text-gray-400  leading-relaxed">
                Easily connect with verified wholesale suppliers through our
                secure global sourcing platform.
              </p>
            </div>

            {/* List */}
            <div>
              <h4 className="font-anton text-base md:text-2xl mb-4 text-white ">
                How It Works:
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
                  "Select your product category",
                  "Meet suppliers via live video call",
                  "Pay safely using Escrow model platform",
                  "We confirm product quality before payment release",
                  " All deals backed by legal agreementsp",
                ].map((item, index) => (
                  <motion.div
                    className="flex items-start  gap-2"
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
                onClick={() => navigate("/contact")}
                text="LAUNCH MY NEW BUSINESS"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalWholesale;
