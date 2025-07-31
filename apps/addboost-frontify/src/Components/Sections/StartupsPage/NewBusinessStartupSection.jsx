import React from "react";
import { motion } from "framer-motion";
import CornerChipwhite from "../../../assets/CornerChipwhite.svg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const chipAnim = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "backOut",
    },
  },
};

const NewBusinessStartupSection = () => {
  return (
    <div
      className="bg-BackgroundGradientright items-start 
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
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className=" "
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
        className="mt-12 lg:mt-32 grid grid-cols-1 md:grid-cols-2 sm:gap-0 md:ml-20"
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
