import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="h-full">
      <div className=" h-full flex flex-col">
        {/* Service Image */}
        <div className=" relative rounded-xl h-28 md:h-36 lg:h-44 xl:h-64 overflow-hidden flex-shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover  "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 "></div>
        </div>

        {/* Service Content */}
        <div className="pt-4 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="font-garamond text-xl lg:text-2xl  text-gray-900 mb-2 uppercase font-bold">
              {service.title}
            </h3>
            <p className="font-inter text-sm lg:text-base text-gray-600 leading-relaxed m-0">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
