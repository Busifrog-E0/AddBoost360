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
      className="px-6 md:px-10 2xl:px-24 3xl:px-32
4xl:px-44 5xl:px-56 6xl:px-72 7xl:px-84
8xl:px-96 9xl:px-112 10xl:px-120
11xl:px-140 12xl:px-160 13xl:px-180
14xl:px-200 15xl:px-220

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
