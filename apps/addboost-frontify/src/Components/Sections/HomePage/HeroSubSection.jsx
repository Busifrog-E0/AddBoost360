import React from "react";
import Button from "../../Button";
import Global from "../../../assets/Global.jpg";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

// Animation Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const popIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const blurFade = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: "easeOut",
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

const HeroSubSection = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-PrimaryDarkBlue grid lg:grid-cols-2 gap-10 lg:gap-20 items-start 
      "
    >
      {/* Left Content */}
      <div
        className="flex flex-col gap-6 overflow-hidden pl-6 md:pl-10 2xl:pl-24 3xl:pl-32 
4xl:pl-60 5xl:pl-80 6xl:pl-180
  7xl:pl-220 8xl:pl-240 9xl:pl-260
  10xl:pl-280 11xl:pl-300 12xl:pl-320
  13xl:pl-340 14xl:pl-360 15xl:pl-400

pr-0 xl:pr-10 2xl:pr-20 3xl:pr-52

py-10 md:py-14 lg:py-20
4xl:py-24 5xl:py-28 6xl:py-32 7xl:py-36
8xl:py-40 9xl:py-44 10xl:py-48
11xl:py-52 12xl:py-56 13xl:py-60
14xl:py-64 15xl:py-72 "
      >
        <motion.h2
          className="font-anton text-3xl 2xl:text-5xl 2xl:pt-10 uppercase text-PrimaryWhite"
          variants={popIn}
        >
          Your Global Digital Transformation Partner
        </motion.h2>

        <motion.p
          className="font-inter text-base 2xl:text-lg text-PrimaryWhite text-justify"
          variants={blurFade}
        >
          A London-based agency offering global solutions in branding, web
          development, AI integration, marketing automation, and business
          growth—plus secure product sourcing with verified international
          suppliers.
        </motion.p>

        <motion.div
          className="grid md:flex lg:grid xl:flex flex-row gap-6 "
          variants={bounceRight}
        >
          <Button
            bgColor="bg-white"
            textColor="text-black"
            iconColor="black"
            text="LEARN MORE ABOUT US"
            hoverBgColor="bg-gray-300"
            hoverTextColor="text-black"
            onClick={() => navigate("/startups-and-sourcing")}
          />
          <Button
            bgColor="bg-PrimaryDarkBlue"
            textColor="text-white"
            border="border border-white"
            iconColor="white"
            hoverBgColor="bg-gray-600"
            text="BOOK A FREE CONSULTATION"
            onClick={() => navigate("/contact")}
          />
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div className=" h-full w-full" variants={flipY}>
        <img loading="lazy" src={Global} alt="black" className="w-full h-full object-cover " />
      </motion.div>
    </motion.div>
  );
};

export default HeroSubSection;
