import React from "react";

const MenuIcon = ({
  bgColor = "bg-gray-400",
  hoverBgColor = "bg-primary",
  onClick
}) => {
  const lineWidths = ["w-5", "w-4", "w-3"];
  const delays = ["delay-100", "delay-200", "delay-300"];

  return (
    <div className="group flex flex-col gap-0.5 cursor-pointer items-end justify-center px-5 py-4 lg:p-4" onClick={onClick}>
      {lineWidths.map((width, index) => (
        <span key={index} className={`relative ${width} h-1`}>
          {/* base line (always visible) */}
          <span className={`block w-full h-full ${bgColor} rounded-sm`}></span>

          {/* overlay line (slides in on hover) */}
          <span
            className={`
              absolute top-0 right-0 h-full w-0
              ${hoverBgColor} rounded-sm
              group-hover:w-full transition-all duration-300 ease-in-out
              ${delays[index]}
            `}
          ></span>
        </span>
      ))}
    </div>
  );
};

export default MenuIcon;
