import { useState } from "react";
import StartupCard from "../Sections/StartupsPage/Elements/StartupCard";
import Button from "../Button";
import ADDBOOSTlogo from "../../assets/ADDBOOSTlogo.png";
import useGetList from "../../hooks/api/useGetList";
import LoaderSection from "../Sections/Loader/LoeaderSection";

const SearchStartupsPage = () => {
  const {
    data: startups,
    isLoading,
    isLoadingMore,
    isPageDisabled,
    getList,
    filters,
    changeSingleFilter,
  } = useGetList({ endpoint: "organizations", changeOnFilter: true });

  // if (isLoading) {
  //   return <LoaderSection />
  // }

  return (
    <div
      className=" px-6 md:px-10 2xl:px-24 3xl:px-32
4xl:px-60 5xl:px-80 6xl:px-180
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400

py-10 md:py-14 lg:py-20
4xl:py-24 5xl:py-28 6xl:py-32 7xl:py-36
8xl:py-40 9xl:py-44 10xl:py-48
11xl:py-52 12xl:py-56 13xl:py-60
14xl:py-64 15xl:py-72  pt-32 md:pt-40 lg:pt-44 
 bg-BackgroundGradientleft "
    >
      <img src={ADDBOOSTlogo} alt="Logo" className="w-32 object-contain" />
      <h1 className="font-anton text-white uppercase text-3xl md:text-4xl 2xl:text-5xl block mt-2 ">
        OUR REGISTRARED Global Sourcing Partners
      </h1>
      <p className="text-sm font-inter text-gray-400 mt-2">
        At ADD BOOST 360 LIMITED, we provide end-to-end digital solutions—from
        marketing and web development to product sourcing and startup support—to
        drive global growth and impact.
      </p>

      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Search here"
          className="p-4 lg:px-5 bg-transparent border border-white/20 rounded-md text-white placeholder-white/40 outline-none focus:border-white/30 duration-300 transition-all mt-5"
          value={filters.Keyword}
          onChange={(e) => changeSingleFilter("Keyword", e.target.value)}
        />
      </div>

      <div className="mt-4 md:mt-6 lg:mt-10">
        {isLoading ? (
          <LoaderSection />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {startups.map((startup) => (
              <div key={startup.DocId} className="w-full">
                <StartupCard startup={startup} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* <div className="mt-4 md:mt-6 lg:mt-10 ">

        {isLoading ?
          <LoaderSection />
          :
          <>
            {startups.map((startup) => (
              <div key={startup.DocId} className="w-full">
                <StartupCard startup={startup} />
              </div>
            ))}
          </>
        }

      </div> */}

      {!isPageDisabled && (
        <div className="flex items-end justify-center mt-8">
          <Button
            bgColor="bg-white"
            textColor="text-black"
            hoverBgColor="bg-gray-300"
            hoverTextColor="text-black"
            iconColor="black"
            isLoading={isLoadingMore}
            onClick={() => getList(startups, false)}
            text="View More"
          />
        </div>
      )}
    </div>
  );
};

export default SearchStartupsPage;
