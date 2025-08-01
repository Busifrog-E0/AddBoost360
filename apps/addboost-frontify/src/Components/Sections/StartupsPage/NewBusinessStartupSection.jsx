import React from "react";
import { motion } from "framer-motion";
import CornerChipwhite from "../../../assets/Cornerchipwhite.svg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const chipAnim = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "backOut",
    },
  },
};

// ✅ Card data array
const cardData = [
  {
    title: "Business identity creation",
    description:
      "ADD BOOST 360 designs logos, branding and full websites to give startups a professional identity.",
  },
  {
    title: "Social media & first campaign management",
    description:
      "The company develops a tailored digital growth plan for the first three to six months, covering SEO, paid ads and content marketing.",
  },
  {
    title: "Digital growth strategy",
    description:
      "Whether you're opening a physical store or launching online, we provide the tools, talent, and trusted global network you need to succeed.",
  },
  {
    title: "One month free marketing",
    description:
      "Clients who take a full package get their first month of marketing free, giving early momentum to the new business.",
  },
  {
    title: "Website or e commerce store setup",
    description:
      "ADD BOOST 360 builds secure business websites or online stores, handling everything from design to payment integration.",
  },
  {
    title: "Ongoing business mentorship",
    description:
      "Beyond the launch, entrepreneurs receive continual guidance and mentorship to help them grow.",
  },
  {
    title: "Global product sourcing & escrow management",
    description:
      "Through the firm's international sourcing platform, entrepreneurs connect with verified suppliers in listed Countries. A step by step process ensures products are selected, suppliers are vetted via live video calls, payments are handled through a secure escrow model payment solution and funds are released only after quality and shipping are verified.",
  },
  {
    title: "Why the sourcing platform stands out",
    description:
      "Highlight features such as live supplier video verification, model payment solution protection, a global network of pre screened suppliers, multilingual communication and contract backed deals.",
  },
  {
    title: "Store branding & e commerce support",
    description:
      "For companies that already have a store or are planning one, ADD BOOST 360 offers store branding and promotion, builds e commerce sites on platforms like Shopify or WooCommerce, integrates payment gateways such as PayPal, Stripe or Razorpay, and provides a free first month of marketing(Terms and conditions applied).",
  },
];

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
        {/* ✅ Mapped Card List */}
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="p-8 relative overflow-hidden"
          >
            <motion.div variants={chipAnim} className="absolute top-0 left-0">
              <img
                src={CornerChipwhite}
                alt="Corner Chip"
                className="w-6 h-6"
              />
            </motion.div>
            <h3 className="text-lg uppercase font-anton text-white">
              {card.title}
            </h3>
            <p className="text-sm text-gray-400 mt-1 font-inter text-justify">
              {card.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default NewBusinessStartupSection;
