import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import WhyCard from "./WhyCard";
import Button from "../../../Button";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const WhySectionView = ({
  title,
  subtitle,
  items = [],
  showLearnMoreButton = false,
}) => {
  const navigate = useNavigate();
  const [whyItems, setWhyItems] = useState([]);

  useEffect(() => {
    setWhyItems(items);
  }, [items]);

  return (
    <>
      {/* Title Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariant}
        className="flex flex-col gap-2"
      >
        <motion.p
          className="text-[#77B0FF] font-inter text-base 2xl:text-lg"
          variants={fadeUp}
        >
          {subtitle}
        </motion.p>
        <motion.h2
          className="uppercase text-3xl 2xl:text-5xl font-anton text-PrimaryWhite"
          variants={fadeUp}
        >
          {title}
        </motion.h2>
      </motion.div>

      {/* Card List */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 "
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        {whyItems.map((item, index) => (
          <motion.div key={index} variants={cardVariant}>
            <WhyCard item={item} />
          </motion.div>
        ))}
      </motion.div>

      {/* Button */}
      {showLearnMoreButton && (
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
        </motion.div>
      )}
    </>
  );
};

export default WhySectionView;
