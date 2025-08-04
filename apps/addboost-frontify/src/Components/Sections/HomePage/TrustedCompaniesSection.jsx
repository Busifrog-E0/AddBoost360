import React from "react";
import useGetList from "../../../hooks/api/useGetList";
import LoaderSection from "../Loader/LoeaderSection";

const TrustedCompaniesSection = () => {
  const { data: logos, isLoading } = useGetList({ endpoint: "companyLogos" });

  if (isLoading) {
    return <LoaderSection />;
  }
  if (logos.length > 0)

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
14xl:py-64 15xl:py-72
        bg-PrimaryDarkBlue"
      >
        <h2 className="uppercase text-3xl 2xl:text-5xl font-anton text-PrimaryWhite">
          supported BY TOP providers
        </h2>

        <div className="relative overflow-hidden w-full h-24 mt-16">
          <div className="absolute top-0 left-0 flex animate-marquee gap-16 md:gap-24 lg:gap-32 w-full">
            {[...logos].map((logo, index) => (
              <div
                className="h-12 lg:h-20 xl:h-24 aspect-video shrink-0"
                key={`${logo.DocId}-${index}`}
              >
                <img
                  src={logo.ImageUrl}
                  alt={logo.Title}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>



          {/* <div className="flex animate-scroll w-max ">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={`${logo.DocId}-${index}`} // 👈 ensures key is unique
                src={logo.ImageUrl}
                alt={logo.Title}
                className="h-full w-full object-contain"
              />
              //  filter invert brightness-0
            ))}
          </div> */}
        </div>
      </div>
    );

  return <></>
};

export default TrustedCompaniesSection;
