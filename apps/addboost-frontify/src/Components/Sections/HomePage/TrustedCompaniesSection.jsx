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
    <div className="px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 md:py-20 lg:py-24 bg-PrimaryDarkBlue">
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
