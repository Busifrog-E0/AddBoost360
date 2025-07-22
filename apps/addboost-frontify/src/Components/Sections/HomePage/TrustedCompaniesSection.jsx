import React from "react";
import Workday from "../../.././assets/CompanyLogo/Workday.webp";
import googlelogo from "../../.././assets/CompanyLogo/googlelogo.webp";
import lookerlogo from "../../.././assets/CompanyLogo/lookerlogo.webp";
import microsoftlogo from "../../.././assets/CompanyLogo/microsoftlogo.webp";
import tsmclogo from "../../.././assets/CompanyLogo/tsmclogo.webp";
import boxlogo from "../../.././assets/CompanyLogo/boxlogo.webp";
import amazon from "../../.././assets/CompanyLogo/amazon.webp";

const TrustedCompaniesSection = () => {
  return (
    <div className="px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 md:py-20 lg:py-24  bg-PrimaryDarkBlue">
      <h className="uppercase text-3xl 2xl:text-5xl font-anton  text-PrimaryWhite ">
        TRUSTED BY TOP COMPANIES
      </h>
      <div></div>
      <div className="overflow-hidden whitespace-nowrap mt-16">
        <div className="flex animate-scroll gap-16 w-max">
          {/* Logos repeated TWICE for infinite scroll effect */}
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <img src={Workday} alt="Logo" className="w-30 object-contain" />
              <img
                src={googlelogo}
                alt="Logo"
                className="w-30 object-contain"
              />
              <img
                src={lookerlogo}
                alt="Logo"
                className="w-30 object-contain"
              />
              <img
                src={microsoftlogo}
                alt="Logo"
                className="w-30 object-contain"
              />
              <img src={tsmclogo} alt="Logo" className="w-24 object-contain" />
              <img
                src={boxlogo}
                alt="Logo"
                className="w-20 object-contain filter invert brightness-[98%] contrast-[500%] grayscale"
              />
              <img
                src={amazon}
                alt="Amazon Logo"
                className="w-30 object-contain filter invert brightness-[99%] contrast-[500%] grayscale"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompaniesSection;
