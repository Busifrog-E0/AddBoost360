import React from "react";
import PortfolioCard from "./PortfolioCard";

const PortfoliList = ({ projects }) => {
  return (
    <div>
      <div>
        <div className="flex flex-col gap-14">
          {projects.map((project, index) => (
            <div key={project.id} className=" mt-8">
              <div className="hidden lg:block">
                <PortfolioCard reverse={index % 2 !== 0} project={project} />
              </div>
              <div className="block  lg:hidden">
                <PortfolioCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfoliList;
