import React from "react";

const Button = ({
  bgColor = "bg-primary",
  text,
  textColor = "text-white",
  border = "border-none",
  iconColor = "white",
  hoverBgColor = "bg-primaryDark",
  hoverTextColor = "text-white",
  onClick = () => { },
}) => {
  return (
    <div onClick={onClick}
      className={`relative group flex items-center justify-between gap-3 p-6 overflow-hidden cursor-pointer ${bgColor} ${border}`}
    >
      <span
        className={`absolute inset-0 w-0 ${hoverBgColor} transition-all duration-500 ease-in-out group-hover:w-full`}
        style={{ zIndex: 1 }}
      ></span>

      {text && (
        // <div
        //   className={`relative z-10 font-arya text-sm transition-all duration-500 ease-in-out  ${textColor} group-hover:${hoverTextColor}`}
        // >
        //   {text}
        // </div>


        <div className="relative z-10 font-arya text-sm group">
          <div
            className={`relative transition-all duration-500 ease-in-out transform group-hover:translate-x-1 uppercase ${textColor}`}
          >
            {text}
          </div>
        </div>
      )}

      <div
        className="relative z-10 origin-center transform transition-transform duration-500 ease-in-out group-hover:rotate-45 group-hover:translate-x-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill={iconColor}
          className="transition-colors duration-500 "
        >
          <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
        </svg>
      </div>
    </div>
  );
};

export default Button;
