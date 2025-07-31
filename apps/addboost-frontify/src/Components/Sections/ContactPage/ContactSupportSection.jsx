import React from "react";
import ArrowOutward from "../../../assets/arrowOutward.png";

const ContactSupportSection = () => {
  const supportItems = [
    {
      label: "Contact at",
      email: "info@addboost360.com",
    },
  ];

  return (
    <div
      className="px-4 md:px-8 2xl:px-20 3xl:px-28
4xl:px-36 5xl:px-48 6xl:px-60 7xl:px-72
8xl:px-80 9xl:px-96 10xl:px-100
11xl:px-120 12xl:px-140 13xl:px-160
14xl:px-180 15xl:px-200

py-10 md:py-14 lg:py-20
4xl:py-24 5xl:py-28 6xl:py-32 7xl:py-36
8xl:py-40 9xl:py-44 10xl:py-48
11xl:py-52 12xl:py-56 13xl:py-60
14xl:py-64 15xl:py-72 bg-BackgroundGradientleft"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-y-4">
        <h2 className="text-3xl md:text-4xl text-white font-anton">
          Need Immediate Assistance?
        </h2>

        {supportItems.map((item, index) => (
          <div key={index} className="group transition-all duration-300">
            <p className="text-sm text-gray-400 mb-1 font-inter">
              {item.label}
            </p>
            <div className="flex items-center gap-1 transition-transform duration-300">
              <a
                href={`mailto:${item.email}`}
                className="text-white text-lg font-arya break-all transition-transform duration-300 group-hover:translate-x-1"
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
        <div></div>
      </div>
    </div>
  );
};

export default ContactSupportSection;
