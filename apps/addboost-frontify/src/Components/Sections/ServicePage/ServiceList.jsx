import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceList = ({ services }) => {
  return (
    <div className="flex flex-col">
      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        const bgColor = isEven
          ? "bg-BackgroundGradientleft"
          : "bg-BackgroundGradientright";

        return (
          <div key={service.DocId} className="overflow-hidden">
            <div className="hidden lg:block">
              <ServiceCard
                reverse={!isEven}
                service={service}
                bgColor={bgColor}
              />
            </div>
            <div className="block lg:hidden">
              <ServiceCard service={service} bgColor={bgColor} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceList;
