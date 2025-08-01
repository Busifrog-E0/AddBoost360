import React from "react";
import { motion } from "framer-motion";
import ContactSupportSection from "../Sections/ContactPage/ContactSupportSection";
import Formsection from "../Sections/ContactPage/Formsection";
import Button from "../Button";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const ContactPage = () => {
  return (
    <div>
      <div className="bg-PrimaryDarkBlue
        px-6 md:px-10 2xl:px-24 3xl:px-32
        4xl:px-60 5xl:px-80 6xl:px-180
        7xl:px-220 8xl:px-240 9xl:px-260
        10xl:px-280 11xl:px-300 12xl:px-320
        13xl:px-340 14xl:px-360 15xl:px-400
        py-10 pt-32 md:py-14 md:pt-40 lg:py-20 lg:pt-44"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Heading Section */}
          <motion.p
            className="text-white font-inter text-sm 2xl:text-lg"
            variants={fadeInUp}
          >
            Let's Unlock Your Brand's Full Potential — Together.
          </motion.p>

          <motion.h1
            className="font-anton text-white uppercase text-3xl md:text-4xl 2xl:text-5xl block mt-2"
            variants={fadeInUp}
          >
            Book a free consultation
          </motion.h1>

          <motion.p
            className="text-base font-inter text-[#C8C8C8] mt-2"
            variants={fadeInUp}
          >
            Launching a startup, scaling up, or upgrading online? Get a free
            30-minute consultation from ADD BOOST 360 LIMITED to explore tailored
            strategies.
          </motion.p>
        </motion.div>

        <Formsection />
        {/* Submit Button */}
      </div>
      <ContactSupportSection />
    </div>
  );
};

export default ContactPage;
