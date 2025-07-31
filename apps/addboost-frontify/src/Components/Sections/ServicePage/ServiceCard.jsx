import React from "react";
import Button from "../../Button";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const ServiceCard = ({
  service,
  reverse = true,
  bgColor = "bg-PrimaryDarkBlue",
}) => {
  const navigate = useNavigate();

  // Animation container for staggered lines
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Individual line animation
  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

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
        className="font-anton text-white text-2xl 2xl:text-4xl 2xl:pt-10 uppercase"
      >
        {service.Title}
      </motion.h2>

      <motion.p
        variants={lineVariants}
        className="font-inter text-base 2xl:text-lg text-gray-200"
      >
        {service.Description2}
      </motion.p>

      <motion.h3
        variants={lineVariants}
        className="font-anton text-xl text-white"
      >
        {service.Description1}
      </motion.h3>

      <motion.div
        variants={containerVariants}
        className="p-2 font-inter text-sm leading-relaxed"
      >
        {service.ServiceList.map((item, index) => (
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
        }}
        className="grid md:flex lg:grid xl:flex flex-row gap-6"
      >
        <Button
          bgColor="bg-white"
          textColor="text-[#1C1C1C]"
          border="border border-black"
          text={service.ButtonMessage1}
          iconColor="black"
          hoverBgColor="bg-gray-300"
          hoverTextColor="text-black"
          onClick={() => navigate("/contact")}
        />
      </motion.div>
    </motion.div>
  );

  const ImageBlock = (
    <motion.div
      initial={{ opacity: 0, x: reverse ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
      className="relative mt-6 aspect-video"
    >
      <img
        src={service.ImageUrl}
        alt={service.Title}
        className="w-full h-full object-cover rounded-md"
      />
    </motion.div>
  );

  return (
    <div className={`${bgColor}`}>
      <div
        className="grid 
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
        lg:grid-cols-2 gap-10 lg:gap-20 items-start"
      >
        {reverse ? (
          <>
            {ImageBlock}
            {TextContent}
          </>
        ) : (
          <>
            {TextContent}
            {ImageBlock}
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
