import React from "react";
import useGetList from "../../../hooks/api/useGetList";
import LoaderSection from "../Loader/LoeaderSection";

const TrustedCompaniesSection = () => {
  const { data: logos, isLoading } = useGetList({ endpoint: "companyLogos" });

  if (isLoading) {
    return <LoaderSection />;
  }

  return (
    <div
      className="px-6 md:px-10 2xl:px-24 3xl:px-32
4xl:px-44 5xl:px-56 6xl:px-72 7xl:px-84
8xl:px-96 9xl:px-112 10xl:px-120
11xl:px-140 12xl:px-160 13xl:px-180
14xl:px-200 15xl:px-220

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

      <div className="relative overflow-hidden mt-16">
        <div className="flex animate-scroll gap-16 md:gap-24 lg:gap-32 w-max h-5 md:h-6 lg:h-8 aspect-video">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={`${logo.DocId}-${index}`} // 👈 ensures key is unique
              src={logo.ImageUrl}
              alt={logo.Title}
              className="h-full w-full object-contain filter invert brightness-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompaniesSection;
