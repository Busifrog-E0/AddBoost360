import React from "react";
import Button from "../../Button";
import Play from "../../../assets/Play.svg";

const PortfolioCard = ({ project, reverse = false, bgColor = "bg-white" }) => {
  const TextContent = (
    <div className="flex flex-col gap-5">
      <h2 className="font-anton text-white text-2xl 2xl:text-4xl mt-0">
        {project.Title}
      </h2>
      <p className="font-inter text-base 2xl:text-lg text-white">
        {project.Description1}
      </p>
      <h3 className="font-anton text-xl text-white">Impact:</h3>
      <div className="p-2 font-inter text-sm leading-relaxed">
        {project.ImpactPoints.map((item, index) => (
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
          text={project.ButtonMessage1}
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
    <div className="relative rounded-md">
      <img
        src={project.ImageUrl}
        alt="project"
        className="w-full h-full object-cover rounded-md relative z-10"
      />
      <div className="absolute -bottom-9 left-0 right-6 md:right-8 xl:right-16 z-30">
        <div className="w-10 h-10 sm:w-8 sm:h-8 lg:w-12 lg:h-12 p-3 lg:p-4 sm:p-2 bg-primary">
          <a
            href={project.LinkToProject}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Play}
              alt="play"
              className="w-full h-full object-cover cursor-pointer"
            />
          </a>
        </div>
        <div className="flex bg-white">
          <div className="p-2 md:p-3 lg:p-4 md:px-4 lg:px-6">
            <p className="text-sm sm:text-sm md:text-xl font-anton text-PrimaryDarkBlue mt-1">
              {project.Type}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`${bgColor}`}>
      <div
        className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start px-6 md:px-14 2xl:px-60 3xl:px-80 
      py-14 md:py-20 lg:py-24"
      >
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
  );
};

export default PortfolioCard;
