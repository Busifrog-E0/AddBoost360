import React from "react";

const Button = ({
  bgColor = "bg-primary",
  text,
  textColor = "text-white",
  border = "border-none",
  iconColor = "white",
  hoverBgColor = "bg-primaryDark",
  isLoading = false,
  hoverTextColor = "text-white",
  onClick = () => { },
}) => {
  // Extract color from textColor class (e.g., text-white -> white)
  const loaderColor = textColor.replace("text-", "");

  return (
    <div
      onClick={!isLoading ? onClick : undefined}
      className={`relative group flex items-center justify-between gap-3 p-4 px-5 lg:p-6 overflow-hidden cursor-pointer select-none ${bgColor} ${border} ${isLoading ? "opacity-70 cursor-not-allowed" : ""
        }`}
    >
      <span
        className={`absolute inset-0 w-0 ${hoverBgColor} transition-all duration-500 ease-in-out group-hover:w-full`}
      ></span>

      {isLoading ? (
        <div className="relative z-10 flex items-center justify-center w-full">
          <div
            className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin"
            style={{
              borderColor: `${loaderColor}`,
              borderTopColor: "transparent",
            }}
          ></div>
        </div>
      ) : (
        <>
          {text && (
            <div className="relative z-10 font-arya text-xs lg:text-sm group">
              <div
                className={`relative transition-all duration-500 ease-in-out transform group-hover:translate-x-1 uppercase ${textColor}`}
              >
                {text}
              </div>
            </div>
          )}

          <div className="relative z-10 origin-center transform transition-transform duration-500 ease-in-out group-hover:rotate-45 group-hover:translate-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill={iconColor}
              className="transition-colors duration-500 hidden lg:block"
            >
              <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16px"
              viewBox="0 -960 960 960"
              width="16px"
              fill={iconColor}
              className="transition-colors duration-500 block lg:hidden"
            >
              <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
};

export default Button;
