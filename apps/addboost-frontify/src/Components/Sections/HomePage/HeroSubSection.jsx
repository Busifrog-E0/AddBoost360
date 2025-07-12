import Button from "../../Button";
import Global from "../../../assets/Global.png";

import { useNavigate } from "react-router";

const HeroSubSection = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-pastelpink grid lg:grid-cols-2 gap-10 lg:gap-20 items-start px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 md:py-20 lg:py-24  ">
      <div className="flex flex-col gap-6 ">
        <h className="font-anton text-3xl 2xl:text-5xl 2xl:pt-10 uppercase">
          Your Global Digital Transformation Partner
        </h>
        <p className="font-inter text-base 2xl:text-lg ">
          A London-based agency offering global solutions in branding, web
          development, AI integration, marketing automation, and business
          growth—plus secure product sourcing with verified international
          suppliers.
        </p>

        <div className="grid md:flex lg:grid xl:flex flex-row   gap-6">
          <Button
            bgColor="bg-black "
            text="LEARN MORE ABOUT US"
            onClick={() => {
              navigate("/startups-and-sourcing");
            }}
          />
          <Button
            bgColor="bg-white "
            textColor="text-black"
            border="border border-black"
            text="BOOK A FREE CONSULTATION"
            iconColor="black"
            hoverBgColor="bg-gray-300"
            hoverTextColor="text-black"
            onClick={() => {
              navigate("/contact");
            }}
          />
        </div>
      </div>

      <div className="relative z-1 mt-6 ">
        {/* Bottom image (Global with border) */}
        <div className="absolute top-2 left-2 lg:top-4 lg:left-4 w-full h-full bg-lightblack rounded-md z-0 "></div>
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
