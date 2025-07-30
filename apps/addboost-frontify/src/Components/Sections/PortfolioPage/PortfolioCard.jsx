import React from "react";
import Button from "../../Button";
import Play from "../../../assets/Play.svg";
import { motion } from "framer-motion";

// Container for staggered text lines
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animation for each line
const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const PortfolioCard = ({ project, reverse = false, bgColor = "bg-white" }) => {
  const TextContent = (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
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
          onClick={() => {
            window.open(project.LinkToProject, "_blank");
          }}
        />
      </motion.div>
    </motion.div>
  );

  const ImageBlock = (
    <motion.div
      initial={{ opacity: 0, x: reverse ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative rounded-md"
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
        className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start px-6 md:px-14 2xl:px-60 3xl:px-80 
      py-14 md:py-20 lg:py-24"
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
