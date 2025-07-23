import React from "react";
import ArrowOutward from "../../../assets/arrowOutward.png";

const ContactSupportSection = () => {
  const supportItems = [
    {
      label: "General Questions",
      email: "info@addboost360.com",
    },
    {
      label: "New Business / Startup Services",
      email: "business@addboost360.com",
    },
    {
      label: "Freelance Opportunities",
      email: "careers@addboost360.com",
    },
    {
      label: "Partnerships / Sourcing",
      email: "sourcing@addboost360.com",
    },
    {
      label: "Escrow & Legal Contracts",
      email: "legal@addboost360.com",
    },
  ];

  return (
    <div className="px-6 md:px-14 2xl:px-60 3xl:px-80 
  4xl:px-120 5xl:px-160 6xl:px-180
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400
   py-14 md:py-20 lg:py-24 
  4xl:py-48 5xl:py-56 6xl:py-64 7xl:py-72 
8xl:py-80 9xl:py-96 10xl:py-112 
11xl:py-128 12xl:py-144 13xl:py-160 
14xl:py-180 15xl:py-200">
      <h2 className="text-3xl md:text-4xl text-black mb-8 font-anton ">
        Need Immediate Assistance?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
        {supportItems.map((item, index) => (
          <div
            key={index}
            className="w-full group transition-all duration-300"
          >
            <p className="text-sm text-grey mb-1 font-inter">{item.label}</p>

            <div className="flex items-center gap-1 transition-transform duration-300">
              <a
                href={`mailto:${item.email}`}
                className="text-black text-lg font-arya break-all transition-transform duration-300 group-hover:translate-x-1"
              >
                {item.email}
              </a>
              <img
                src={ArrowOutward}
                alt="arrow"
                className="w-3 h-3 mt-0.5 transition-all duration-300 transform group-hover:translate-x-1 group-hover:rotate-45"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSupportSection;
