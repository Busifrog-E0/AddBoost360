import React from "react";
import StartupSupportImage1 from "../../../assets/StartupSupportImage1.png";
import StartupSupportImage2 from "../../../assets/StartupSupportImage2.png";
import FillArrow from "../../../assets/FillArrow.png";
import Button from "../../Button";
import { useNavigate } from "react-router";

const StartupSupportService = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-BackgroundGradientleft grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start px-6 md:px-14 2xl:px-60 3xl:px-80 
  4xl:px-120 5xl:px-160 6xl:px-180
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400
   py-14 md:py-20 lg:py-36 
  4xl:py-48 5xl:py-56 6xl:py-64 7xl:py-72 
8xl:py-80 9xl:py-96 10xl:py-112 
11xl:py-128 12xl:py-144 13xl:py-160 
14xl:py-180 15xl:py-200 "
    >
      {/* Left Column */}
      <div>
        <p className="uppercase text-[#A8A8A8] font-arya text-sm mb-3">
          FUELING YOUR BUSINESS DREAMS
        </p>

        {/* Responsive image stacking */}
        <div className="relative w-[260px] h-[340px] mx-auto lg:mx-0 hidden lg:block">
          {/* Back Image */}
          <img
            src={StartupSupportImage2}
            alt="Back"
            className="absolute top-0 left-0 w-[260px] h-[340px] object-cover rounded-md shadow-lg border-2 border-blue-200"
          />
          {/* Front Image */}
          <img
            src={StartupSupportImage1}
            alt="Front"
            className="absolute top-40 left-32 w-[240px] h-[240px] object-cover rounded-md shadow-xl border-2 border-white"
          />
        </div>

        {/* Mobile stacked image */}
        <div className=" lg:hidden flex justify-center items-center gap-4">
          <img
            src={StartupSupportImage2}
            alt="Back"
            className="w-40 h-56 object-cover rounded-md shadow-lg border-2 border-blue-200"
          />
          <img
            src={StartupSupportImage1}
            alt="Front"
            className="w-40 h-40 object-cover rounded-md shadow-xl border-2 border-white"
          />
        </div>
      </div>

      {/* Right Column */}
      <div>
        <h2 className="font-anton text-xl md:text-2xl uppercase mb-4 text-white ">
          Startup Support Services
        </h2>

        <div className="flex flex-col p-5 sm:p-8 md:p-10 gap-6">
          {/* Heading & Paragraph */}
          <div>
            <h3 className="font-anton text-base md:text-lg text-white ">
              Turn Your Business Idea into a Global Brand
            </h3>
            <p className="font-inter text-sm text-gray-400 mt-3 leading-relaxed">
              We guide you from concept to launch with full-spectrum startup
              solutions, combining digital strategy, product sourcing, and
              growth services.
            </p>
          </div>

          {/* List */}
          <div>
            <h4 className="font-anton text-base md:text-lg mb-4 text-white ">
              Our Startup Support Includes
            </h4>

            <div className="flex flex-col gap-4 ">
              {[
                "Business Identity Creation (Logo, Branding, Website)",
                "Social Media Setup & First Campaign Management",
                "Digital Growth Strategy for First 3-6 Months",
                "One-Month Free Marketing (with Full Package)",
                "Website or E-Commerce Store Setup",
                "Ongoing Business Mentorship",
              ].map((item, index) => (
                <div className="flex items-start gap-2" key={index}>
                  <img src={FillArrow} alt="Arrow" className="w-4 mt-1" />
                  <p className="font-inter text-sm text-gray-400">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Button */}
          <div className="w-fit">
            <Button
              bgColor="bg-white"
              textColor="text-black"
              hoverBgColor="bg-gray-300"
              hoverTextColor="text-black"
              iconColor="black"
              onClick={() => navigate("/contact")}
              text="LAUNCH MY NEW BUSINESS"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupSupportService;
