import React from "react";
import Button from "../../Button";
import Global from "../../../assets/Global.jpg";

import ServiceCard from "./ServiceCard";

const ServiceList = ({ services }) => {
  return (
    <div>
      <div className="flex flex-col gap-14 ">
        {services.map((service, index) => (
          <div key={service.id} className=" ">
            <div className="hidden lg:block">
              <ServiceCard reverse={index % 2 !== 0} service={service} />
            </div>
            <div className="block lg:hidden">
              <ServiceCard service={service} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
