import React from "react";
import CornerChip from "../../../assets/CornerChip.svg";

const NewBusinessStartupSection = () => {
  return (
    <div className="bg-white items-start px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">


        <h className="uppercase font-anton text-2xl 2xl:text-5xl 2xl:pt-10 block ">
          Empowering New Businesses with Products, Strategy & Security
        </h>
      </div>


      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 sm:gap-0 md:ml-20">
        {/* Great Clients */}
        <div className=" p-8 relative overflow-hidden ">
          <div className="absolute top-0 left-0">
            <img src={CornerChip} alt="Global" className="w-6 h-6" />
          </div>
          <h3 className=" text-lg uppercase font-anton ">Great clients</h3>
          <p className="text-sm text-lightblack mt-1 font-inter">
            We offer comprehensive startup support, from business identity to
            sourcing the right products from trusted international wholesalers.
          </p>
        </div>

        {/* Great Team */}
        <div className=" p-8 relative overflow-hidden ">
          <div className="absolute top-0 left-0">
            <img src={CornerChip} alt="Global" className="w-6 h-6" />
          </div>
          <h3 className=" text-lg uppercase font-anton ">Great Team</h3>
          <p className="text-sm text-lightblack mt-1 font-inter">
            We offer comprehensive startup support, from business identity to
            sourcing the right products from trusted international wholesalers.
          </p>
        </div>

        {/* Great Success */}

        <div className=" p-8 relative overflow-hidden ">
          <div className="absolute top-0 left-0">
            <img src={CornerChip} alt="Global" className="w-6 h-6" />
          </div>
          <h3 className=" text-lg uppercase font-anton ">
            Great Success
          </h3>
          <p className="text-sm text-lightblack mt-1 font-inter">
            Whether you're opening a physical store or launching online, we
            provide the tools, talent, and trusted global network you need to
            succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewBusinessStartupSection;
