import Button from "../../Button";
import Global from "../../../assets/Global.jpg";

import { useNavigate } from "react-router";

const HeroSubSection = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-PrimaryDarkBlue grid lg:grid-cols-2 gap-10 lg:gap-20 items-start 
  px-6 md:px-14 2xl:px-60 3xl:px-80 
  4xl:px-120 5xl:px-160 6xl:px-180
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400
   py-14 md:py-20 lg:py-24 
  4xl:py-48 5xl:py-56 6xl:py-64 7xl:py-72 
8xl:py-80 9xl:py-96 10xl:py-112 
11xl:py-128 12xl:py-144 13xl:py-160 
14xl:py-180 15xl:py-200 
  ">
      <div className="flex flex-col gap-6 ">
        <h className="font-anton text-3xl 2xl:text-5xl 2xl:pt-10 uppercase text-PrimaryWhite">
          Your Global Digital Transformation Partner
        </h>
        <p className="font-inter text-base 2xl:text-lg  text-PrimaryWhite">
          A London-based agency offering global solutions in branding, web
          development, AI integration, marketing automation, and business
          growth—plus secure product sourcing with verified international
          suppliers.
        </p>

        <div className="grid md:flex lg:grid xl:flex flex-row   gap-6">
          <Button
            bgColor="bg-white "
            textColor="text-black"
            iconColor="black"
            text="LEARN MORE ABOUT US"
            hoverBgColor="bg-gray-300"
            hoverTextColor="text-black"
            onClick={() => {
              navigate("/startups-and-sourcing");
            }}
          />
          <Button
            bgColor="bg-PrimaryDarkBlue "
            textColor="text-white"
            border="border border-white"
            text="BOOK A FREE CONSULTATION"
            iconColor="white"
            onClick={() => {
              navigate("/contact");
            }}
          />
        </div>
      </div>

      <div className="relative z-1 mt-6 ">
        {/* Bottom image (Global with border) */}
        <div className="absolute top-2 left-2 lg:top-4 lg:left-4 w-full h-full bg-PrimaryDarkBlue rounded-md z-0 "></div>
        {/* Top image (Black overlay card) */}
        <img
          src={Global}
          alt="black"
          className="w-full h-full object-cover rounded-md relative z-10 "
        />
      </div>
    </div>
  );
};

export default HeroSubSection;
