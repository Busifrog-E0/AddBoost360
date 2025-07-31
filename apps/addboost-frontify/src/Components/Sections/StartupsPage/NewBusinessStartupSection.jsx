import React from "react";
import { motion } from "framer-motion";
import CornerChipwhite from "../../../assets/CornerChipwhite.svg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const chipAnim = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "backOut",
    },
  },
};

const NewBusinessStartupSection = () => {
  return (
    <div
      className="bg-BackgroundGradientright items-start px-6 md:px-14 2xl:px-60 3xl:px-80 
      4xl:px-120 5xl:px-160 6xl:px-180
      7xl:px-220 8xl:px-240 9xl:px-260
      10xl:px-280 11xl:px-300 12xl:px-320
      13xl:px-340 14xl:px-360 15xl:px-400
      py-14 md:py-20 lg:py-36 
      4xl:py-48 5xl:py-56 6xl:py-64 7xl:py-72 
      8xl:py-80 9xl:py-96 10xl:py-112 
      11xl:py-128 12xl:py-144 13xl:py-160 
      14xl:py-180 15xl:py-200"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <h1 className="uppercase text-white font-anton text-2xl 2xl:text-5xl 2xl:pt-10 block">
          Empowering New Businesses with Products, Strategy & Security
        </h1>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 lg:mt-36 grid grid-cols-1 md:grid-cols-2 sm:gap-0 md:ml-20"
      >
        {/* Card 1 */}
        <motion.div variants={fadeUp} className="p-8 relative overflow-hidden">
          <motion.div variants={chipAnim} className="absolute top-0 left-0">
            <img src={CornerChipwhite} alt="Global" className="w-6 h-6" />
          </motion.div>
          <h3 className="text-lg uppercase font-anton text-white">
            Great clients
          </h3>
          <p className="text-sm text-gray-400 mt-1 font-inter">
            We offer comprehensive startup support, from business identity to
            sourcing the right products from trusted international wholesalers.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div variants={fadeUp} className="p-8 relative overflow-hidden">
          <motion.div variants={chipAnim} className="absolute top-0 left-0">
            <img src={CornerChipwhite} alt="Global" className="w-6 h-6" />
          </motion.div>
          <h3 className="text-lg uppercase font-anton text-white">
            Great Team
          </h3>
          <p className="text-sm text-gray-400 mt-1 font-inter">
            We offer comprehensive startup support, from business identity to
            sourcing the right products from trusted international wholesalers.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div variants={fadeUp} className="p-8 relative overflow-hidden">
          <motion.div variants={chipAnim} className="absolute top-0 left-0">
            <img src={CornerChipwhite} alt="Global" className="w-6 h-6" />
          </motion.div>
          <h3 className="text-lg uppercase font-anton text-white">
            Great Success
          </h3>
          <p className="text-sm text-gray-400 mt-1 font-inter">
            Whether you're opening a physical store or launching online, we
            provide the tools, talent, and trusted global network you need to
            succeed.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NewBusinessStartupSection;
