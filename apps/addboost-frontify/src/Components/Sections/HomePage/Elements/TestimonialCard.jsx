import React from "react";
import { motion } from "framer-motion";
import Quote from "../../../../assets/Quote.svg";
import Profile from "../../../../assets/profile.png";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const quoteVariants = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
  },
};

const TestimonialCard = ({ currentTestimonial }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative z-10 space-y-8"
    >
      <div className="flex justify-center">
        <div className="relative">
          <motion.div
            variants={imageVariants}
            className="w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-full overflow-hidden border-4 border-gray-100 shadow-lg"
          >
            <img
              src={
                currentTestimonial.ImageUrl
                  ? currentTestimonial.ImageUrl
                  : Profile
              }
              alt="Client"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={quoteVariants}
            className="absolute -bottom-2 -right-2 w-10 h-10 lg:w-16 lg:h-16 p-2 lg:p-4 bg-primary rounded-full flex items-center justify-center flex-col"
          >
            <img src={Quote} alt="Quote" className="w-full h-full" />
          </motion.div>
        </div>
      </div>

      <motion.div variants={cardVariants} className="text-center space-y-6">
        <p className="font-inter text-sm lg:text-base text-white">
          {currentTestimonial.Description1}
        </p>
        <div className="pt-4 border-t border-PrimaryDarkBlue">
          <p className="font-anton uppercase text-white text-base lg:text-lg">
            {currentTestimonial.Title + ", " + currentTestimonial.Designation}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCard;
