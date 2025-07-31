import React, { useState, useEffect, useRef } from "react";
import ServiceCard from "./ServiceCard";

import Arrowforward from "../../../../assets/arrowforwardwhite.svg";
import Arrowbackward from "../../../../assets/Arrowbackwardwhite.svg";
import Button from "../../../Button";
import SlideIndicators from "./SlideIndicators";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
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
const ServicesListView = ({
  isSlideIndicatorsEnabled = false,
  title,
  services = [],
  showAllServicesButton = false,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const [userInteracted, setUserInteracted] = useState(false);
  const interactionTimeoutRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  const maxSlide = Math.max(0, services.length - itemsPerView);
  const navigate = useNavigate();

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
      setCurrentSlide(0);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [services]);

  useEffect(() => {
    if (!userInteracted) {
      autoScrollIntervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : 0));
      }, 3000);
    }

    return () => {
      clearInterval(autoScrollIntervalRef.current);
    };
  }, [userInteracted, maxSlide]);

  const handleUserInteraction = () => {
    setUserInteracted(true);
    clearTimeout(interactionTimeoutRef.current);
    clearInterval(autoScrollIntervalRef.current);

    // Restart auto scroll after 5 seconds of inactivity
    interactionTimeoutRef.current = setTimeout(() => {
      setUserInteracted(false);
    }, 5000); // 5s delay
  };
  const getTransformValue = () => {
    const itemWidth = 100 / itemsPerView;
    return -(currentSlide * itemWidth);
  };

  // SWIPE + DRAG support
  const handleSwipe = () => {
    if (startX === null || endX === null) return;

    const distance = startX - endX;
    const threshold = 50;

    if (distance > threshold && currentSlide < maxSlide) {
      handleNext();
    } else if (distance < -threshold && currentSlide > 0) {
      handlePrevious();
    }

    setStartX(null);
    setEndX(null);
    setIsDragging(false);
  };

  const handleNext = () => {
    handleUserInteraction();
    setCurrentSlide((prev) => Math.min(maxSlide, prev + 1));
  };

  const handlePrevious = () => {
    handleUserInteraction();
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleTouchStart = (e) => {
    handleUserInteraction();
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleUserInteraction();
    handleSwipe();
  };

  const handleMouseDown = (e) => {
    handleUserInteraction();
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setEndX(e.clientX);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      handleUserInteraction();
      handleSwipe();
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleUserInteraction();
      handleSwipe();
    }
  };


  const totalSlides = maxSlide + 1;

  return (
    <div className="select-none">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <h1 className="uppercase font-anton text-3xl 2xl:text-5xl text-PrimaryWhite ">
          {title}
        </h1>
        <div className="flex items-center gap-2 flex-shrink-0 mt-2 md:mt-0">
          <button
            onClick={handlePrevious}
            disabled={currentSlide === 0}
            className={`p-2 lg:p-3 rounded-full border-2 transition-all duration-300 ${currentSlide === 0
              ? "border-gray-300 text-gray-300 cursor-not-allowed opacity-50"
              : "border-gray-400 text-gray-900 hover:bg-white/10 hover:text-white transform hover:scale-110 flex-shrink-0"
              }`}
          >
            <img
              src={Arrowbackward}
              alt="Previous"
              className="w-3 h-3 lg:w-8 lg:h-8"
            />
          </button>

          <button
            onClick={handleNext}
            disabled={currentSlide === maxSlide}
            className={`p-2 lg:p-3 rounded-full border-2 transition-all duration-300 ${currentSlide === maxSlide
              ? "border-gray-300 text-gray-300 cursor-not-allowed opacity-50"
              : "border-gray-400 text-gray-900 hover:bg-white/10 hover:text-white transform hover:scale-110 flex-shrink-0"
              }`}
          >
            <img
              src={Arrowforward}
              alt="Next"
              className="w-3 h-3 lg:w-8 lg:h-8"
            />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="relative overflow-hidden rounded-xl mt-14"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex transition-transform duration-500 gap-4 ease-in-out"
          style={{
            transform: `translateX(${getTransformValue()}%)`,
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.DocId}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
              style={{ maxWidth: `calc(${100 / itemsPerView}% - 1rem)` }}
            >
              <ServiceCard index={index} service={service} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      {isSlideIndicatorsEnabled && totalSlides > 1 && (
        <div className="mt-12 gap-2">
          <SlideIndicators
            items={Array.from({ length: totalSlides })}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
          />
        </div>
      )}
      {showAllServicesButton && (
        <div className="flex  justify-center mt-10 ">
          <motion.div variants={bounceRight}>
            <Button
              bgColor="bg-white"
              textColor="text-black"
              iconColor="black"
              text="View all services"
              hoverBgColor="bg-gray-300"
              hoverTextColor="text-black"
              onClick={() => {
                navigate("/services");
              }}
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ServicesListView;
