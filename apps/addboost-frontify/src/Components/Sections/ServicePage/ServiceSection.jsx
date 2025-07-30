import React, { useState } from "react";
import ServiceList from "./ServiceList";
import useGetList from "../../../hooks/api/useGetList";
import LoaderSection from "../Loader/LoeaderSection";

const ServiceSection = () => {
  const {
    data: services,
    isLoading,
    isLoadingMore,
    isPageDisabled,
    getList,
  } = useGetList({ endpoint: "services" });


  if (isLoading) {
    return <LoaderSection />
  }

  return (
    <div className=" ">
      <ServiceList howAllServicesButton={true} services={services} />
    </div>
  );
};

export default ServiceSection;
