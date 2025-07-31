import React from "react";
import Button from "../../Button";
import Play from "../../../assets/Play.svg";
import { motion } from "framer-motion";

// Staggered animation for lines
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.6, // Appears after the lines
    },
  },
};

const PortfolioCard = ({ project, reverse = false, bgColor = "bg-white" }) => {
  const TextContent = (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-5"
    >
      <motion.h2
        variants={lineVariants}
        className="font-anton text-white text-2xl 2xl:text-4xl mt-0"
      >
        {project.Title}
      </motion.h2>

      <motion.p
        variants={lineVariants}
        className="font-inter text-base 2xl:text-lg text-white"
      >
        {project.Description1}
      </motion.p>

      <motion.h3
        variants={lineVariants}
        className="font-anton text-xl text-white"
      >
        Impact:
      </motion.h3>

      <motion.div
        variants={containerVariants}
        className="p-2 font-inter text-sm leading-relaxed"
      >
        {project.ImpactPoints.map((item, index) => (
          <motion.p variants={lineVariants} className="text-white" key={index}>
            ▪ {item}
          </motion.p>
        ))}
      </motion.div>

      {/* Button comes after all text with a delay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeIn",
          delay: 0.6, // ⬅️ ensure this comes after the text
        }}
        className="grid md:flex lg:grid xl:flex flex-row gap-6"
      >
        <Button
          bgColor="bg-white"
          textColor="text-[#1C1C1C]"
          border="border border-black"
          text={project.ButtonMessage1}
          iconColor="black"
          hoverBgColor="bg-gray-300"
          hoverTextColor="text-black"
          onClick={() => window.open(project.LinkToProject, "_blank")}
        />
      </motion.div>
    </motion.div>
  );

  const ImageBlock = (
    <motion.div
      initial={{ opacity: 0, x: reverse ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative rounded-md aspect-video"
    >
      <img
        src={project.ImageUrl}
        alt="project"
        className="w-full h-full object-cover rounded-md relative z-10"
      />
      <div className="absolute -bottom-9 left-0 right-6 md:right-8 xl:right-16 z-30">
        <div className="w-10 h-10 sm:w-8 sm:h-8 lg:w-12 lg:h-12 p-3 lg:p-4 sm:p-2 bg-primary">
          <a
            href={project.LinkToProject}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Play}
              alt="play"
              className="w-full h-full object-cover cursor-pointer"
            />
          </a>
        </div>
        <div className="flex bg-white">
          <div className="p-2 md:p-3 lg:p-4 md:px-4 lg:px-6">
            <p className="text-sm sm:text-sm md:text-xl font-anton text-PrimaryDarkBlue mt-1">
              {project.Type}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className={`${bgColor}`}>
      <div
        className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start px-6 md:px-10 2xl:px-24 3xl:px-32
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
        {reverse ? (
          <>
            {TextContent}
            {ImageBlock}
          </>
        ) : (
          <>
            {ImageBlock}
            {TextContent}
          </>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
