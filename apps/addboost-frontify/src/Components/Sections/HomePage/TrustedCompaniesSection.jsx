import React from "react";
import googlelogo from "../../.././assets/CompanyLogo/googlelogo.webp";
import microsoftlogo from "../../.././assets/CompanyLogo/microsoftlogo.png";
import judopaylogo from "../../.././assets/CompanyLogo/judopaylogo.svg";
import paypallogo from "../../.././assets/CompanyLogo/paypallogo.png";
import stripelogo from "../../.././assets/CompanyLogo/stripelogo.png";
import worldpaylogo from "../../.././assets/CompanyLogo/worldpaylogo.png";
import useGetList from "../../../hooks/api/useGetList";
import LoaderSection from "../Loader/LoeaderSection";

const logos = [
  { src: judopaylogo, title: "Judopay" },
  { src: googlelogo, title: "Google" },
  { src: paypallogo, title: "PayPal" },
  { src: microsoftlogo, title: "Microsoft" },
  { src: stripelogo, title: "Stripe" },
  { src: worldpaylogo, title: "Worldpay" },
];

const TrustedCompaniesSection = () => {

  const {
    data: logos,
    isLoading,
    isLoadingMore,
    isPageDisabled,
    getList,
  } = useGetList({ endpoint: "companyLogos" });


  if (isLoading) {
    return <LoaderSection />
  }

  return (
    <div
      className="px-6 md:px-14 2xl:px-60 3xl:px-80 
  4xl:px-120 5xl:px-160 6xl:px-180
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400
   pt-14 md:pt-20 lg:pt-36 
  4xl:pt-48 5xl:pt-56 6xl:pt-64 7xl:pt-72 
8xl:pt-80 9xl:pt-96 10xl:pt-112 
11xl:pt-128 12xl:pt-144 13xl:pt-160 
14xl:pt-180 15xl:pt-200  bg-PrimaryDarkBlue"
    >
      <h2 className="uppercase text-3xl 2xl:text-5xl font-anton text-PrimaryWhite">
        supported BY TOP providers
      </h2>

      <div className="relative overflow-hidden mt-16">
        {/* Scrolling container */}
        <div className="flex animate-scroll gap-28 w-max">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={logo.DocId}
              src={logo.ImageUrl}
              alt={logo.Title}
              className={"h-9 object-contain filter invert brightness-0 "}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompaniesSection;
