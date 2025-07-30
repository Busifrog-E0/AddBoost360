import useGetList from "../../../hooks/api/useGetList";
import LoaderSection from "../Loader/LoeaderSection";
import PortfoliList from "./PortfoliList";
import React, { useState } from "react";

const PortfolioSection = () => {
  const {
    data: portfolios,
    isLoading,
    isLoadingMore,
    isPageDisabled,
    getList,
  } = useGetList({ endpoint: "portfolios" });

  if (isLoading) {
    return <LoaderSection />;
  }
  return (
    <div>
      <div className="overflow-hidden">
        <PortfoliList howAllServicesButton={true} projects={portfolios} />
      </div>
    </div>
  );
};

export default PortfolioSection;
