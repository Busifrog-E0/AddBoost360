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
      className="px-4 md:px-8 2xl:px-20 3xl:px-28
4xl:px-36 5xl:px-48 6xl:px-60 7xl:px-72
8xl:px-80 9xl:px-96 10xl:px-100
11xl:px-120 12xl:px-140 13xl:px-160
14xl:px-180 15xl:px-200

py-10 md:py-14 lg:py-20
4xl:py-24 5xl:py-28 6xl:py-32 7xl:py-36
8xl:py-40 9xl:py-44 10xl:py-48
11xl:py-52 12xl:py-56 13xl:py-60
14xl:py-64 15xl:py-72 bg-BackgroundGradientleft "
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
