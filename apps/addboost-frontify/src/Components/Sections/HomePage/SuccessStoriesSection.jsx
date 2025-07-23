import React, { useEffect, useState } from "react";

import Arrowforward from "../../../assets/arrowforwardwhite.svg";
import Arrowbackward from "../../../assets/Arrowbackwardwhite.svg";
import Cornerchip from "../../../assets/Cornerchip.svg";
import SlideIndicators from "./Elements/SlideIndicators";
import Button from "../../Button";
import TestimonialCard from "./Elements/TestimonialCard";
import { useNavigate, useLocation } from "react-router";
import Loader from "../../Loader";

const SuccessStoriesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const testimonials = [
    {
      id: 1,
      quote:
        "ADD BOOST 360 helped us launch our brand with zero stress - from branding to sourcing inventory from India. We loved the escrow model for its safety!",
      designation: "STARTUP OWNER",
      location: "UAE",
      image: "",
    },
    {
      id: 2,
      quote:
        "Their AI automation solutions transformed our customer service completely. Response times improved by 80% and customer satisfaction reached an all-time high.",
      designation: "E-COMMERCE DIRECTOR",
      location: "UK",
      image:
        "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    },
    {
      id: 4,
      quote:
        "Working with ADD BOOST 360's freelancer network gave us access to world-class talent. The project was delivered on time and exceeded all quality expectations.",
      designation: "MARKETING MANAGER",
      location: "AUSTRALIA",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    },
  ];

  useEffect(() => {
    setLoading(false);
  }, []);

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

  if (loading) {
    return (
      <div className="flex flex-col justify-between h-full items-center px-6 md:px-14 2xl:px-60 3xl:px-80 
  4xl:px-160 5xl:px-180 6xl:px-200
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400
   py-14 md:py-20 lg:py-24 
  4xl:py-48 5xl:py-56 6xl:py-64 7xl:py-72 
8xl:py-80 9xl:py-96 10xl:py-112 
11xl:py-128 12xl:py-144 13xl:py-160 
14xl:py-180 15xl:py-200 bg-gray-100">
        <Loader />
      </div>
    );
  } else {
    if (testimonials.length > 0) {
      return (
        <div className="px-6 md:px-14 2xl:px-60 3xl:px-80 
  4xl:px-160 5xl:px-180 6xl:px-200
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400
   py-14 md:py-20 lg:py-24 
  4xl:py-48 5xl:py-56 6xl:py-64 7xl:py-72 
8xl:py-80 9xl:py-96 10xl:py-112 
11xl:py-128 12xl:py-144 13xl:py-160 
14xl:py-180 15xl:py-200 bg-BackgroundGradientright">
          <div className="grid lg:grid-cols-3 gap-4 lg:gap-12 2xl:gap-16 items-start">
            <div className="flex flex-col justify-between h-full order-1 lg:order-2">
              <div className="flex flex-row lg:flex-col justify-between items-center lg:justify-start lg:items-start gap-4">
                <h2 className="text-lg 2xl:text-2xl font-anton uppercase  text-white leading-tight">
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
                      className="p-2 rounded-full border border-gray-400 hover:border-primary hover:bg-gray-200 hover:text-white transition-all duration-300 transform hover:scale-110 flex-shrink-0"
                    >
                      <img
                        src={Arrowbackward}
                        alt="Global"
                        className="w-4 h-4"
                      />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 rounded-full border border-gray-400 hover:border-primary hover:bg-gray-200 hover:text-white transition-all duration-300 transform hover:scale-110 flex-shrink-0"
                    >
                      <img
                        src={Arrowforward}
                        alt="Global"
                        className="w-4 h-4"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <CTASection className="hidden lg:flex flex-col gap-4" />
            </div>
            {currentTestimonial && (
              <div className="lg:col-span-2 order-2 lg:order-1 flex flex-col gap-14">
                <div className="bg-PrimaryDarkBlue p-8 relative overflow-hidden  ">
                  <div className="absolute top-0 left-0">
                    <img src={Cornerchip} alt="Global" className="w-6 h-6" />
                  </div>
                  <TestimonialCard currentTestimonial={currentTestimonial} />
                </div>
                <CTASection isMobile className="flex lg:hidden" />
              </div>
            )}
          </div>
        </div>
      );
    } else {
      return <></>;
    }
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
            onClick={() => {
              navigate("/contact");
            }}
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
