import React from "react";
import PortfolioCard from "./PortfolioCard";

const PortfoliList = ({ projects }) => {
  return (
    <div className="flex flex-col">
      {projects.map((project, index) => {
        const bgColor = index % 2 === 0 ? "bg-BackgroundGradientleft" : "bg-BackgroundGradientright";
        return (
          <div key={project.id} className="">
            {/* Desktop */}
            <div className="hidden lg:block">
              <PortfolioCard
                project={project}
                reverse={index % 2 !== 0}
                bgColor={bgColor}
              />
            </div>
            {/* Mobile */}
            <div className="block lg:hidden">
              <PortfolioCard project={project} bgColor={bgColor} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PortfoliList;
