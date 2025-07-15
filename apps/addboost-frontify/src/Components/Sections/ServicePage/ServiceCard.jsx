import React from "react";
import Button from "../../Button";

import { Link, NavLink, useNavigate } from "react-router";

const ServiceCard = ({ service, reverse = true }) => {
  const navigate = useNavigate();
  const TextContent = (
    <div className="flex flex-col gap-5">
      <h className="font-anton text-[#1C1C1C] text-2xl 2xl:text-4xl 2xl:pt-10 uppercase">
        {service.title}
      </h>
      <p className="font-inter text-base 2xl:text-lg">{service.description}</p>
      <h className="font-anton text-xl">{service.subtitle}</h>
      <div className="p-2 font-inter text-sm leading-relaxed">
        {service.services.map((item, index) => (
          <p key={index}>▪ {item}</p>
        ))}
      </div>

      <div className="grid md:flex lg:grid xl:flex flex-row gap-6">
        <Button
          bgColor="bg-white"
          textColor="text-[#1C1C1C]"
          border="border border-black"
          text={service.buttonText}
          iconColor="black"
          hoverBgColor="bg-gray-300"
          hoverTextColor="text-black"
          onClick={() => {
            navigate("/contact");
          }}
        />
      </div>
    </div>
  );

  const ImageBlock = (
    <div className="relative mt-6 h-[350px] w-full">
      {/* Background shadow layer */}
      <div className="absolute top-2 left-2 lg:top-4 lg:left-4 w-full h-full bg-lightblack rounded-md z-0"></div>

      {/* Main image on top */}
      <img
        src={service.image}
        alt="Black"
        className="w-full h-full object-cover rounded-md relative z-10"
      />
    </div>
  );
  return (
    <div>
      <div className="bg-white grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        {reverse ? (
          <>
            {ImageBlock}
            {TextContent}
          </>
        ) : (
          <>
            {TextContent}
            {ImageBlock}
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
