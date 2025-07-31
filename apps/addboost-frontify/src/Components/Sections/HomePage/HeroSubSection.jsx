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
        px-6 md:px-10 2xl:px-24 3xl:px-32
4xl:px-44 5xl:px-56 6xl:px-72 7xl:px-84
8xl:px-96 9xl:px-112 10xl:px-120
11xl:px-140 12xl:px-160 13xl:px-180
14xl:px-200 15xl:px-220

py-10 md:py-14 lg:py-20
4xl:py-24 5xl:py-28 6xl:py-32 7xl:py-36
8xl:py-40 9xl:py-44 10xl:py-48
11xl:py-52 12xl:py-56 13xl:py-60
14xl:py-64 15xl:py-72"
    >
      {/* Left Content */}
      <div className="flex flex-col gap-6 overflow-hidden">
        <motion.h2
          className="font-anton text-3xl 2xl:text-5xl 2xl:pt-10 uppercase text-PrimaryWhite"
          variants={popIn}
        >
          Your Global Digital Transformation Partner
        </motion.h2>

        <motion.p
          className="font-inter text-base 2xl:text-lg text-PrimaryWhite"
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
            text="BOOK A FREE CONSULTATION"
            onClick={() => navigate("/contact")}
          />
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div className="mt-6 aspect-video" variants={flipY}>
        <img
          src={Global}
          alt="black"
          className="w-full h-full object-cover rounded-md"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSubSection;
