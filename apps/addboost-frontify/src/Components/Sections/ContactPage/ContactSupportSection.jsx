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
    <div className="px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 md:py-20 lg:py-24">
      <h2 className="text-3xl md:text-4xl text-black mb-8 font-garamond">
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
                className="text-black text-lg font-garamond break-all transition-transform duration-300 group-hover:translate-x-1"
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
