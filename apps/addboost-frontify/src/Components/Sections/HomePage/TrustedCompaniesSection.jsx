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
      className="px-4 md:px-8 2xl:px-20 3xl:px-28
4xl:px-36 5xl:px-48 6xl:px-60 7xl:px-72
8xl:px-80 9xl:px-96 10xl:px-100
11xl:px-120 12xl:px-140 13xl:px-160
14xl:px-180 15xl:px-200

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
