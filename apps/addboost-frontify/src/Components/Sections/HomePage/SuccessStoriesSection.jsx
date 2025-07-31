import React, { useState } from "react";
import { motion } from "framer-motion";

import Arrowforward from "../../../assets/arrowforwardwhite.svg";
import Arrowbackward from "../../../assets/Arrowbackwardwhite.svg";
import Cornerchipwhite from "../../../assets/Cornerchipwhite.svg";
import SlideIndicators from "./Elements/SlideIndicators";
import Button from "../../Button";
import TestimonialCard from "./Elements/TestimonialCard";
import { useNavigate, useLocation } from "react-router";
import LoaderSection from "../Loader/LoeaderSection";
import useGetList from "../../../hooks/api/useGetList";

const SuccessStoriesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { data: testimonials, isLoading } = useGetList({
    endpoint: "testimonialss",
  });

  const handlePrevious = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[currentSlide];

  if (isLoading) {
    return <LoaderSection />;
  }

  if (testimonials.length > 0) {
    return (
      <div
        className="px-6 md:px-10 2xl:px-24 3xl:px-32
4xl:px-44 5xl:px-56 6xl:px-72 7xl:px-84
8xl:px-96 9xl:px-112 10xl:px-120
11xl:px-140 12xl:px-160 13xl:px-180
14xl:px-200 15xl:px-220

py-10 md:py-14 lg:py-20
4xl:py-24 5xl:py-28 6xl:py-32 7xl:py-36
8xl:py-40 9xl:py-44 10xl:py-48
11xl:py-52 12xl:py-56 13xl:py-60
14xl:py-64 15xl:py-72 bg-PrimaryDarkBlue"
      >
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-12 2xl:gap-16 items-start">
          {/* Sidebar Section */}
          <div className="flex flex-col justify-between h-full order-1 lg:order-2">
            <div className="flex flex-row lg:flex-col justify-between items-center lg:justify-start lg:items-start gap-4">
              <h2 className="text-lg 2xl:text-2xl font-anton uppercase text-white leading-tight">
                SUCCESS STORIES
              </h2>
              <div className="flex items-center gap-3">
                <SlideIndicators
                  items={testimonials}
                  currentSlide={currentSlide}
                  setCurrentSlide={setCurrentSlide}
                />
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevious}
                    className="p-2 rounded-full border border-gray-400 hover:bg-white/10 hover:text-white transition-all duration-300 transform hover:scale-110 flex-shrink-0"
                  >
                    <img src={Arrowbackward} alt="Back" className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-full border border-gray-400 hover:bg-white/10 hover:text-white transition-all duration-300 transform hover:scale-110 flex-shrink-0"
                  >
                    <img src={Arrowforward} alt="Next" className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <CTASection className="hidden lg:flex flex-col gap-4" />
          </div>

          {/* Testimonial Card Section */}
          {currentTestimonial && (
            <div className="lg:col-span-2 order-2 lg:order-1 flex flex-col gap-14">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-PrimaryLightBlue p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0">
                  <img src={Cornerchipwhite} alt="Corner" className="w-6 h-6" />
                </div>
                <TestimonialCard currentTestimonial={currentTestimonial} />
              </motion.div>

              <CTASection isMobile className="flex lg:hidden" />
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default SuccessStoriesSection;

const CTASection = ({ isMobile = false, className = "" }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const showCTA = location.pathname !== "/contact";

  if (!showCTA) return null;

  return (
    <div className={`${className}`}>
      <div
        className={`w-full flex flex-col gap-4 ${isMobile ? "items-center text-center" : ""
          }`}
      >
        <h2 className="text-sm font-inter text-white">
          Let's work together and make your project our next success story.
        </h2>
        <div className={`flex ${isMobile ? "justify-center text-center" : ""}`}>
          <Button
            onClick={() => navigate("/contact")}
            bgColor="bg-white"
            textColor="text-black"
            hoverBgColor="bg-gray-300"
            hoverTextColor="text-black"
            iconColor="black"
            text="BOOK A FREE CONSULTATION"
          />
        </div>
      </div>
    </div>
  );
};
