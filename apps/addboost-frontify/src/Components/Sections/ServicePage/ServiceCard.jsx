import React from "react";
import Button from "../../Button";
import Black from "../../../assets/black.png";

const ServiceCard = ({ service, reverse = false }) => {
  const TextContent = (
    <div className="flex flex-col gap-5">
      <h className="font-arya text-[#1C1C1C] text-3xl 2xl:text-5xl 2xl:pt-10 uppercase">
        {service.title}
      </h>
      <p className="font-inter text-base 2xl:text-lg">{service.description}</p>
      <h className="font-arya text-2xl">{service.subtitle}</h>
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
    <div className="relative z-1 mt-6">
      <img src={Black} alt="Global" className="rounded-md border-2 w-full" />
      <img
        src={service.image}
        alt="Black"
        className="absolute bottom-4 right-4 rounded-md w-full"
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
