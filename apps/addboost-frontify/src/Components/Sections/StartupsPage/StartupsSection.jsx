import { useState } from "react";
import StartupsListView from "./Elements/StartupsListView";
import LoaderSection from "../Loader/LoeaderSection";
import useGetList from "../../../hooks/api/useGetList";

const StartupsSection = ({ showAllStartupsButton = true }) => {
  const {
    data: startups,
    isLoading,
    isLoadingMore,
    isPageDisabled,
    getList,
  } = useGetList({ endpoint: "organizations" });


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
   py-14 md:py-20 lg:py-36 
  4xl:py-48 5xl:py-56 6xl:py-64 7xl:py-72 
8xl:py-80 9xl:py-96 10xl:py-112 
11xl:py-128 12xl:py-144 13xl:py-160 
14xl:py-180 15xl:py-200  bg-BackgroundGradientleft "
    >
      <StartupsListView
        title="Our Startups"
        showAllStartupsButton={showAllStartupsButton}
        startups={startups}
      />
    </div>
  );
};

export default StartupsSection;
