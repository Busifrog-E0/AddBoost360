import React from "react";
import Workday from "../../.././assets/CompanyLogo/Workday.webp";
import googlelogo from "../../.././assets/CompanyLogo/googlelogo.webp";
import lookerlogo from "../../.././assets/CompanyLogo/lookerlogo.webp";
import microsoftlogo from "../../.././assets/CompanyLogo/microsoftlogo.webp";
import tsmclogo from "../../.././assets/CompanyLogo/tsmclogo.webp";
import boxlogo from "../../.././assets/CompanyLogo/boxlogo.webp";
import amazon from "../../.././assets/CompanyLogo/amazon.webp";

const logos = [
  { src: Workday, width: "w-28" },
  { src: googlelogo, width: "w-28" },
  { src: lookerlogo, width: "w-28" },
  { src: microsoftlogo, width: "w-28" },
  { src: tsmclogo, width: "w-24" },
  {
    src: boxlogo,
    width: "w-20",
    filter: "filter invert brightness-0 contrast-[500%] grayscale",
  },
  {
    src: amazon,
    width: "w-28",
    filter: "filter invert brightness-[99%] contrast-[500%] grayscale",
  },
];

const TrustedCompaniesSection = () => {
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
14xl:py-180 15xl:py-200 bg-PrimaryDarkBlue">
      <h2 className="uppercase text-3xl 2xl:text-5xl font-anton text-PrimaryWhite">
        TRUSTED BY TOP COMPANIES
      </h2>

      <div className="relative overflow-hidden mt-16">
        {/* Scrolling container */}
        <div className="flex animate-scroll gap-16 w-max">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt="Company Logo"
              className={`${logo.width} object-contain ${logo.filter || ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompaniesSection;
