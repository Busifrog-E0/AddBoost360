import React from "react";
import googlelogo from "../../.././assets/CompanyLogo/googlelogo.webp";
import microsoftlogo from "../../.././assets/CompanyLogo/microsoftlogo.png";
import judopaylogo from "../../.././assets/CompanyLogo/judopaylogo.svg";
import paypallogo from "../../.././assets/CompanyLogo/paypallogo.png";
import stripelogo from "../../.././assets/CompanyLogo/stripelogo.png";
import worldpaylogo from "../../.././assets/CompanyLogo/worldpaylogo.png";

const logos = [
  { src: judopaylogo, title: "Judopay" },
  { src: googlelogo, title: "Google" },
  { src: paypallogo, title: "PayPal" },
  { src: microsoftlogo, title: "Microsoft" },
  { src: stripelogo, title: "Stripe" },
  { src: worldpaylogo, title: "Worldpay" },
];

const TrustedCompaniesSection = () => {
  return (
    <div
      className="px-6 md:px-14 2xl:px-60 3xl:px-80 
  4xl:px-120 5xl:px-160 6xl:px-180
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400
   py-14 md:py-20 lg:py-36 
  4xl:py-48 5xl:py-56 6xl:py-64 7xl:py-72 
8xl:py-80 9xl:py-96 10xl:py-112 
11xl:py-128 12xl:py-144 13xl:py-160 
14xl:py-180 15xl:py-200  bg-PrimaryDarkBlue"
    >
      <h2 className="uppercase text-3xl 2xl:text-5xl font-anton text-PrimaryWhite">
        supported BY TOP providers
      </h2>

      <div className="relative overflow-hidden mt-16">
        {/* Scrolling container */}
        <div className="flex animate-scroll gap-28 w-max">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.title}
              className={"h-9 object-contain filter invert brightness-0 "}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompaniesSection;
