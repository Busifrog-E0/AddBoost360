import React from "react";
import ArrowOutward from "../../../assets/ArrowOutward.png";

const ContactSupportSection = () => {
  const supportItems = [
    {
      label: "Contact at",
      email: "info@addboost360.com",
    },
  ];

  return (
    <div
      className="px-6 md:px-10 2xl:px-24 3xl:px-32
4xl:px-60 5xl:px-80 6xl:px-180
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400

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
