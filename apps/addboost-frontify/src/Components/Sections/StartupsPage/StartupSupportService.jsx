import React from "react";
import StartupSupportImage1 from "../../../assets/StartupSupportImage1.png";
import StartupSupportImage2 from "../../../assets/StartupSupportImage2.png";
import FillArrow from "../../../assets/FillArrow.png";
import Button from "../../Button";
import { useNavigate } from "react-router";

const StartupSupportService = () => {

  const navigate = useNavigate();
  return (
    <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 md:py-20 lg:py-24">
      {/* Left Column */}
      <div>
        <p className="uppercase text-[#A8A8A8] font-libre text-sm  mb-3">
          Supporting our vision
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
        <h2 className="font-libre text-xl md:text-2xl uppercase mb-4">
          Startup Support Services
        </h2>

        <div className="flex flex-col p-5 sm:p-8 md:p-10 gap-6">
          {/* Heading & Paragraph */}
          <div>
            <h3 className="font-libre text-base md:text-lg">
              Turn Your Business Idea into a Global Brand
            </h3>
            <p className="font-inter text-sm text-lightblack mt-3 leading-relaxed">
              We guide you from concept to launch with full-spectrum startup
              solutions, combining digital strategy, product sourcing, and
              growth services.
            </p>
          </div>

          {/* List */}
          <div>
            <h4 className="font-libre text-base md:text-lg mb-4">
              Our Startup Support Includes
            </h4>

            <div className="flex flex-col gap-4">
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
                  <p className="font-inter text-sm text-black">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Button */}
          <div className="w-fit">
            <Button onClick={() => navigate("/contact")} text="LAUNCH MY NEW BUSINESS" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupSupportService;
