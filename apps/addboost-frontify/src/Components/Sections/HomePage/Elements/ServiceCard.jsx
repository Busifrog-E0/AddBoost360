import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import noice from "../../../../assets/noice.png";

const textZoomVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const childZoom = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const ServiceCard = ({ service, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [showNoise, setShowNoise] = useState(false);

  useEffect(() => {
    if (!service.ImageUrl || service.ImageUrl.length <= 1) return;

    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setIsFading(true);
        setShowNoise(true);

        setTimeout(() => {
          setCurrentImageIndex(
            (prevIndex) => (prevIndex + 1) % service.ImageUrl.length
          );
          setIsFading(false);
          setTimeout(() => setShowNoise(false), 300);
        }, 400);
      }, 3000);

      return () => clearInterval(interval);
    }, index * 800);

    return () => clearTimeout(startDelay);
  }, [service.ImageUrl, index]);

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="h-full flex flex-col">
        {/* Zoom-in Image */}
        <motion.div
          className="relative rounded-md lg:rounded-xl aspect-video overflow-hidden flex-shrink-0"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
        >
          {service.ImageUrl && (
            <img
              src={service.ImageUrl[currentImageIndex]}
              alt={service.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            />
          )}

          {showNoise && (
            <div
              className="absolute inset-0 pointer-events-none bg-repeat opacity-20 animate-pulse"
              style={{
                backgroundImage: `url(${noice})`,
                backgroundSize: "150px",
                mixBlendMode: "soft-light",
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </motion.div>

        {/* Zoom-in Title & Description */}
        <motion.div
          className="pt-4"
          variants={textZoomVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3
            className="font-anton text-xl lg:text-2xl text-PrimaryWhite mb-2 uppercase"
            variants={childZoom}
            transition={{ duration: 0.5 }}
          >
            {service.Title}
          </motion.h3>

          <motion.p
            className="font-inter text-sm lg:text-base text-white leading-relaxed m-0 text-justify"
            variants={childZoom}
            transition={{ duration: 0.5 }}
          >
            {service.Description2}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
