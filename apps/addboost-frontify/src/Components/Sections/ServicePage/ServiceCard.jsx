import React from "react";
import Button from "../../Button";
import { useNavigate } from "react-router";

const ServiceCard = ({
  service,
  reverse = true,
  bgColor = "bg-PrimaryDarkBlue",
}) => {
  const navigate = useNavigate();

  const TextContent = (
    <div className="flex flex-col gap-5">
      <h className="font-anton text-white text-2xl 2xl:text-4xl 2xl:pt-10 uppercase">
        {service.title}
      </h>
      <p className="font-inter text-base 2xl:text-lg text-gray-200">
        {service.description}
      </p>
      <h className="font-anton text-xl text-white">{service.subtitle}</h>
      <div className="p-2 font-inter text-sm leading-relaxed">
        {service.services.map((item, index) => (
          <p className="text-white" key={index}>
            ▪ {item}
          </p>
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
          onClick={() => navigate("/contact")}
        />
      </div>
    </div>
  );

  const ImageBlock = (
    <div className="relative mt-6 h-[350px] w-full">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );

  return (
    <div className={`${bgColor}`}>
      <div
        className="grid px-6 md:px-14 2xl:px-60 3xl:px-80 
        4xl:px-120 5xl:px-160 6xl:px-180 7xl:px-220 
        8xl:px-240 9xl:px-260 10xl:px-280 11xl:px-300 
        12xl:px-320 13xl:px-340 14xl:px-360 15xl:px-400
        py-14 md:py-20 lg:py-24 4xl:py-48 5xl:py-56 
        6xl:py-64 7xl:py-72 8xl:py-80 9xl:py-96 
        10xl:py-112 11xl:py-128 12xl:py-144 13xl:py-160 
        14xl:py-180 15xl:py-200 lg:grid-cols-2 gap-10 lg:gap-20 items-start"
      >
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
