import React from "react";
import Button from "../../Button";

import Play from "../../../assets/Play.svg";

const PortfolioCard = ({ project, reverse = false }) => {
  const TextContent = (
    <div className="flex flex-col gap-5">
      <h className="font-arya text-[#1C1C1C] text-2xl 2xl:text-4xl   mt-0">
        {project.title}
      </h>
      <p className="font-inter text-base 2xl:text-lg">{project.description}</p>
      <h1 className="font-inter text-xl font-bold ">Impact:</h1>
      <div className="p-2 font-inter text-sm leading-relaxed">
        {project.impactPoints.map((item, index) => (
          <p key={index}>▪ {item}</p>
        ))}
      </div>

      <div className="grid md:flex lg:grid xl:flex flex-row gap-6">
        <Button
          bgColor="bg-white"
          textColor="text-[#1C1C1C]"
          border="border border-black"
          text={project.buttonText}
          iconColor="black"
          hoverBgColor="bg-gray-300"
          hoverTextColor="text-black"
          onClick={() => {
            window.open(project.linkToProject, "_blank");
          }}
        />
      </div>
    </div>
  );

  const ImageBlock = (
    <div className="relative bg-white">
      {/* Image */}
      <div className="absolute top-4 left-4 w-full h-full bg-lightblack rounded-md z-0 "></div>
      <img
        src={project.image}
        alt="black"
        className="aw-full h-full object-cover rounded-md relative z-10 "
      />

      {/* Overlapping Text Box */}
      <div className="absolute -bottom-9 left-0 right-6 md:right-8 xl:right-16 z-30 ">
        <div className="w-10 h-10 sm:w-8 sm:h-8 lg:w-12 lg:h-12 p-3 lg:p-4 sm:p-2 bg-primary  ">
          <a
            href={project.linkToProject}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Play}
              alt="skills"
              className="w-full h-full object-cover cursor-pointer"
            />
          </a>
        </div>

        <div className="flex bg-white  ">
          {/* Text content */}
          <div className="p-2 md:p-3 lg:p-4">
            <p className="text-sm sm:text-base md:text-lg font-arya font-bold text-gray-700 mt-1">
              {project.type}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <div>
        <div className=" grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {reverse ? (
            <>
              {TextContent}
              {ImageBlock}
            </>
          ) : (
            <>
              {ImageBlock}
              {TextContent}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
