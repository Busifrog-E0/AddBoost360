import React from "react";

import WhyItWorks1 from "../../../assets/WhyItWorkSectionIcon/WhyItWorks1.png";
import WhyItWorks2 from "../../../assets/WhyItWorkSectionIcon/WhyItWorks2.png";
import WhyItWorks3 from "../../../assets/WhyItWorkSectionIcon/WhyItWorks3.png";
import WhyItWorks4 from "../../../assets/WhyItWorkSectionIcon/WhyItWorks4.png";
import WhyItWorksHome from "../../../assets/WhyItWorkSectionIcon/WhyItWorksHome.jpg";
import Button from "../../Button";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";

const WhyItWorksSection = () => {
  const navigate = useNavigate();
  const [processes, setProcesses] = useState([
    {
      number: "01",
      title: "Faster & safer business deals",
      description:
        "Speeds up sourcing while reducing risks through verified connections.",
    },
    {
      number: "02",
      title: "Legally protected contracts",
      description: "All agreements are secure and enforceable.",
    },
    {
      number: "03",
      title: "Real-time product confirmation",
      description:
        "Instant validation of product quality through live interaction.",
    },
  ]);
  const [steps, setSteps] = useState([
    {
      icon: WhyItWorks1,
      text: "Schedule a live session with a verified supplier.",
    },
    {
      icon: WhyItWorks2,
      text: "Review, confirm, and negotiate product details.",
    },
    {
      icon: WhyItWorks3,
      text: "Funds are transferred to ADD BOOST 360 (Escrow).",
    },
    {
      icon: WhyItWorks4,
      text: "Delivery & payment release",
    },
  ]);
  return (
    <div className="bg-PrimaryDarkBlue px-6 md:px-14 2xl:px-60 3xl:px-80 
  4xl:px-160 5xl:px-180 6xl:px-200
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400
   py-14 md:py-20 lg:py-24 
  4xl:py-48 5xl:py-56 6xl:py-64 7xl:py-72 
8xl:py-80 9xl:py-96 10xl:py-112 
11xl:py-128 12xl:py-144 13xl:py-160 
14xl:py-180 15xl:py-200 ">
      <div className=" flex flex-col gap-4">
        <p className="text-[#76B0FF]  font-inter text-base 2xl:text-lg">
          Global Wholesale Hub
        </p>
        <h className="uppercase text-3xl 2xl:text-5xl font-anton text-PrimaryWhite  ">
          Direct Deals with Trusted Global Suppliers
        </h>
      </div>

      <p className="text-sm sm:text-base md:text-sm font-inter mt-6 sm:mt-8 leading-relaxed text-white">
        We connect startups with legally contracted wholesale companies across
        continents through conferencing and escrow-backed platform.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center py-14 relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-between items-center h-full "
          >
            <div className="flex flex-col items-center gap-3">
              <img
                src={step.icon}
                alt={`Step ${index + 1}`}
                className="w-8 h-8"
              />
              <p className="font-arya uppercase text-lg lg:text-xl text-white leading-snug">
                {step.text}
              </p>
            </div>
            <div className="relative mt-6">
              <div className="w-9 h-9 rounded-full bg-[#0000001A]/20 shadow-md flex items-center justify-center text-white font-inter text-sm z-10">
                {index + 1}
              </div>
              {index !== 3 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-[calc(100%-36px)] h-[2px] bg-gray-300 translate-y-[-50%] z-0"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-16 px-4 sm:px-6 md:px-12">
        {/* Left Section - Text */}
        <div>
          <h2 className="uppercase font-anton text-xl sm:text-2xl text-PrimaryWhite ">
            Why It Works
          </h2>

          <p className="font-inter text-sm sm:text-base mt-4 sm:mt-6 leading-relaxed text-white">
            We know just how hard it can be to find the right video agency, so
            here's how we make this easy:
          </p>

          <div className="flex flex-col gap-6 mt-6 sm:mt-8 p-6">
            {processes.map((point, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-sm font-arya text-white">
                  {point.number}
                </span>
                <p className="capitalize font-anton text-lg sm:text-xl mt-1 text-PrimaryWhite">
                  {point.title}
                </p>
                <p className="font-inter text-xs sm:text-sm mt-1 text-white ">
                  {point.description}
                </p>
              </div>
            ))}

            {/* Button */}
            <div className="flex items-center mt-6 sm:mt-8">
              <Button
                onClick={() => navigate("/contact")}
                text="Meet Global Suppliers"
                bgColor="bg-white"
                textColor="text-black"
                iconColor="black"
                hoverBgColor="bg-gray-300"
                hoverTextColor="text-black"
              />
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-end mt-10 md:mt-0">
          <img
            src={WhyItWorksHome}
            alt="Live Session"
            className="w-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyItWorksSection;
